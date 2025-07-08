class CreateWebhookInboxes < ActiveRecord::Migration[8.0]
  def change
    create_table :webhook_inboxes do |t|
      t.string :uuid

      t.timestamps
    end
    add_index :webhook_inboxes, :uuid, unique: true
  end
end
