class CreateWebhookRequests < ActiveRecord::Migration[8.0]
  def change
    create_table :webhook_requests do |t|
      t.string :method
      t.text :headers
      t.text :body
      t.integer :status, default: 200
      t.string :ip_address

      t.timestamps
    end
  end
end
