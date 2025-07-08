class WebhookRequest < ApplicationRecord
  belongs_to :webhook_inbox

  validates :method, presence: true

  enum :status, { pending: 0, processing: 1, success: 2, failed: 3 }
end
