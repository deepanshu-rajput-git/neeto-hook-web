class WebhookRequestsController < ApplicationController
  before_action :set_webhook_request, only: %i[ show ]

  # GET /hooks
  def index
    @webhook_requests = WebhookRequest.order(created_at: :desc).page(params[:page]).per(10)

    render json: @webhook_requests, each_serializer: WebhookRequestSerializer, meta: {
      total_pages: @webhook_requests.total_pages,
      current_page: @webhook_requests.current_page
    }
  end

  # GET /hooks/1
  def show
    render json: @webhook_request
  end

  # POST /hooks
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
      render json: @webhook_request, status: :created, location: hook_url(@webhook_request)
    else
      render json: @webhook_request.errors, status: :unprocessable_entity
    end
  end

  private
    def set_webhook_request
      @webhook_request = WebhookRequest.find(params[:id])
    end

    def filtered_headers
      request.headers.env.select do |key, _|
        key.starts_with?("HTTP_") ||
        [ "CONTENT_TYPE", "CONTENT_LENGTH" ].include?(key)
      end.transform_keys do |key|
        key.sub(/^HTTP_/, "").split("_").map(&:capitalize).join("-")
      end
    end

    def hook_url(webhook_request)
      "/hooks/#{webhook_request.id}"
    end
end
