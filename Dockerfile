# syntax=docker/dockerfile:1
# check=error=true

# This Dockerfile is designed for production, not development. Use with Kamal or build'n'run by hand:
# docker build -t neeto_hook_web .
# docker run -d -p 3000:3000 -e RAILS_MASTER_KEY=<value from config/master.key> --name neeto_hook_web neeto_hook_web

ARG RUBY_VERSION=3.3.5
FROM docker.io/library/ruby:$RUBY_VERSION-slim AS base

WORKDIR /rails

# Install base system packages + Node.js + npm
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    curl libjemalloc2 libvips postgresql-client nodejs npm && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Environment setup
ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development test"

# ────────────────────────────────────────────────
# Build stage: install deps, compile assets
# ────────────────────────────────────────────────
FROM base AS build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential git libpq-dev libyaml-dev pkg-config && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Install Ruby gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git && \
    bundle exec bootsnap precompile --gemfile

# Copy app source code
COPY . .

# Install frontend dependencies and build using Vite
RUN cd frontend && npm ci && npm run build

# Precompile bootsnap for app code
RUN bundle exec bootsnap precompile app/ lib/

# ────────────────────────────────────────────────
# Final stage: production image
# ────────────────────────────────────────────────
FROM base

# Copy gems and app from build stage
COPY --from=build "${BUNDLE_PATH}" "${BUNDLE_PATH}"
COPY --from=build /rails /rails

# Copy built frontend assets
COPY --from=build /rails/frontend/dist /rails/public

# Run as non-root user
RUN groupadd --system --gid 1000 rails && \
    useradd rails --uid 1000 --gid 1000 --create-home --shell /bin/bash && \
    chown -R rails:rails db log storage tmp
USER 1000:1000

# Entrypoint setup
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

# Expose app port
EXPOSE 3000

# Start the Puma server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
