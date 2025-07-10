class StaticPagesController < ApplicationController
  def index
    index_path = Rails.root.join("public", "index.html")

    if Rails.env.development? && !index_path.exist?
      # In development, redirect to Vite dev server if index.html doesn't exist
      redirect_to "http://localhost:5173", allow_other_host: true
    else
      render file: index_path, layout: false, content_type: "text/html"
    end
  end
end
