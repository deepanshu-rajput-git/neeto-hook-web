class Api::HooksController < ApplicationController
  before_action :find_inbox, only: [:create, :index, :show]
  rescue_from ActiveRecord::RecordNotFound, with: :inbox_not_found

  def create
    @inbox.webhook_requests.create!(
      method: request.method,
      headers: request.headers.to_h,
      body: request.raw_post,
      query_params: request.query_parameters,
      ip_address: request.remote_ip
    )
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
    render json: { error: 'Inbox not found' }, status: :not_found
  end
end
