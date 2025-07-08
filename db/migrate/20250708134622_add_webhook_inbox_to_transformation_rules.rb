class AddWebhookInboxToTransformationRules < ActiveRecord::Migration[8.0]
  def change
    add_reference :transformation_rules, :webhook_inbox, null: true, foreign_key: true
  end
end
