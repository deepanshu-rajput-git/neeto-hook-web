class AddWebhookInboxToWebhookRequests < ActiveRecord::Migration[8.0]
  def change
    add_reference :webhook_requests, :webhook_inbox, foreign_key: true
    add_column :webhook_requests, :query_params, :jsonb

    up_only do
      if WebhookRequest.any?
        default_inbox = WebhookInbox.create!(uuid: SecureRandom.uuid)
        WebhookRequest.update_all(webhook_inbox_id: default_inbox.id)
      end
    end

    change_column_null :webhook_requests, :webhook_inbox_id, false
  end
end
