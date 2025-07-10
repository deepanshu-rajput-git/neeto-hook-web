class Api::WebhookInboxesController < ApplicationController
  def index
    @webhook_inboxes = WebhookInbox.all.order(created_at: :desc)
    render json: @webhook_inboxes, each_serializer: WebhookInboxSerializer
  end

  def show
    @webhook_inbox = WebhookInbox.find_by!(uuid: params[:uuid])
    render json: @webhook_inbox, serializer: WebhookInboxSerializer
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Inbox not found" }, status: :not_found
  end

  def create
    workspace = Workspace.first_or_create!(name: "Default Workspace")

    @webhook_inbox = WebhookInbox.new(workspace: workspace)

    if @webhook_inbox.save
      render json: @webhook_inbox, serializer: WebhookInboxSerializer, status: :created
    else
      render json: { error: "Failed to create inbox", errors: @webhook_inbox.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
