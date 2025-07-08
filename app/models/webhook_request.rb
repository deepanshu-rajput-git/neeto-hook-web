class WebhookRequest < ApplicationRecord
  belongs_to :webhook_inbox

  validates :method, presence: true

  after_create_commit { WebhookBroadcastJob.perform_later(self) }
end
