module Api
  class WebhookRequestsController < ApplicationController
    before_action :set_webhook_request, only: [:show]

    def index
      @webhook_requests = WebhookRequest.order(created_at: :desc)

      requests_data = @webhook_requests.map do |request|
        WebhookRequestSerializer.new(request).as_json
      end

      render json: {
        webhook_requests: requests_data
      }
    end

    def show
      render json: @webhook_request
    end

    def create
      original_body = request.raw_post
      rules = TransformationRule.where(is_enabled: true)
      transformed_body = PayloadTransformer.transform(original_body, rules)

      @webhook_request = WebhookRequest.new(
        method: request.method,
        headers: filtered_headers,
        original_body: original_body,
        body: transformed_body,
        ip_address: request.remote_ip
      )

      if @webhook_request.save
        render json: @webhook_request, status: :created, location: api_hook_url(@webhook_request)
      else
        render json: @webhook_request.errors, status: :unprocessable_entity
      end
    end

    private

    def set_webhook_request
      @webhook_request = WebhookRequest.find(params[:id])
    end

    def filtered_headers
      request.headers.env.select { |k, _| k.starts_with?("HTTP_") || ["CONTENT_TYPE", "CONTENT_LENGTH"].include?(k) }
                        .transform_keys { |k| k.sub(/^HTTP_/, "").split("_").map(&:capitalize).join("-") }
    end

    def api_hook_url(webhook_request)
      "/api/hooks/#{webhook_request.id}"
    end
  end
end
