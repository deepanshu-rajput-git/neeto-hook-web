class Workspace < ApplicationRecord
  has_many :webhook_inboxes, dependent: :destroy

  validates :name, presence: true
end
