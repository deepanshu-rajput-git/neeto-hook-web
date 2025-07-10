class AddWorkspaceToWebhookInboxes < ActiveRecord::Migration[8.0]
  def change
    add_reference :webhook_inboxes, :workspace, null: false, foreign_key: true
  end
end
