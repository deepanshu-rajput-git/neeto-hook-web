class AddOriginalBodyToWebhookRequests < ActiveRecord::Migration[8.0]
  def change
    add_column :webhook_requests, :original_body, :text
  end
end
