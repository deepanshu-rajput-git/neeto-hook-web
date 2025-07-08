class WebhookInbox < ApplicationRecord
  has_many :webhook_requests, dependent: :destroy
  before_create :set_uuid

  private

  def set_uuid
    self.uuid = SecureRandom.uuid
  end
end
