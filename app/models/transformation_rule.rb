class TransformationRule < ApplicationRecord
  belongs_to :webhook_inbox

  validates :name, presence: true
  validates :rule_type, presence: true, inclusion: { in: %w[JS] }
  validates :body, presence: true
end
