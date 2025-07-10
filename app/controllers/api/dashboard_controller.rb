class Api::DashboardController < ApplicationController
  def stats
    total_inboxes = WebhookInbox.count
    total_hooks = WebhookRequest.count
    hooks_today = WebhookRequest.where("created_at >= ?", Time.zone.now.beginning_of_day).count
    successful_hooks = WebhookRequest.where(status: :success).count
    failed_hooks = WebhookRequest.where(status: :failed).count

    render json: {
      total_inboxes: total_inboxes,
      total_hooks: total_hooks,
      hooks_today: hooks_today,
      successful_hooks: successful_hooks,
      failed_hooks: failed_hooks
    }
  end
end
