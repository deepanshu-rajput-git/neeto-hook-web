class Api::HooksController < ApplicationController
  before_action :find_inbox, only: [ :create, :index, :show ]
  rescue_from ActiveRecord::RecordNotFound, with: :inbox_not_found

  def create
    start_time = Time.now
    Rails.logger.info "--- Received a new webhook for inbox: #{@inbox.uuid} ---"

    http_headers = request.headers.env.select do |key, _|
      key.start_with?("HTTP_") || [ "CONTENT_TYPE", "CONTENT_LENGTH" ].include?(key)
    end

    rules = @inbox.transformation_rules
    transformed_payload = PayloadTransformer.transform(request.raw_post, rules)

    attributes = {
      method: request.method,
      headers: http_headers,
      body: transformed_payload.body,
      query_params: request.query_parameters,
      ip_address: request.remote_ip
    }

    if transformed_payload.transformed?
      attributes[:original_body] = request.raw_post
    end

    webhook_request = @inbox.webhook_requests.create!(attributes)
    webhook_request.success!
    WebhookBroadcastJob.perform_later(webhook_request)

    processing_time = (Time.now - start_time) * 1000
    Rails.logger.info "--- Webhook processed in #{processing_time.round(2)}ms ---"

    head :ok
  end


  def index
    render json: @inbox.webhook_requests.order(created_at: :desc)
  end

  def show
    render json: @inbox.webhook_requests.find(params[:id])
  end

  private

  def find_inbox
    @inbox = WebhookInbox.find_by!(uuid: params[:uuid])
  end

  def inbox_not_found
    render json: { error: "Inbox not found" }, status: :not_found
  end
end
