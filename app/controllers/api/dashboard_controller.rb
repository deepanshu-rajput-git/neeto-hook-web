class Api::DashboardController < ApplicationController
  def stats
    inbox = WebhookInbox.find_by(uuid: params[:uuid])
    unless inbox
      render json: { error: "Inbox not found" }, status: :not_found
      return
    end

    total_hooks = inbox.webhook_requests.count
    hooks_today = inbox.webhook_requests.where("created_at >= ?", Time.zone.now.beginning_of_day).count
    successful_hooks = inbox.webhook_requests.where(status: :success).count
    failed_hooks = inbox.webhook_requests.where(status: :failed).count

    render json: {
      total_hooks: total_hooks,
      hooks_today: hooks_today,
      successful_hooks: successful_hooks,
      failed_hooks: failed_hooks
    }
  end
end
