class WebhookInbox < ApplicationRecord
  has_many :webhook_requests, dependent: :destroy
  has_many :transformation_rules, dependent: :destroy
  before_create :set_uuid
  after_create :create_default_transformation_rule

  private

  def set_uuid
    self.uuid = SecureRandom.uuid
  end

  def create_default_transformation_rule
    transformation_rules.create!(
      name: "Default Transformation Rule",
      rule_type: "JS",
      body: "payload.new_key = 'new_value';",
      is_enabled: true
    )
  end
end
