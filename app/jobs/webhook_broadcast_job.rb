class WebhookBroadcastJob < ApplicationJob
  queue_as :default

  def perform(webhook_request)
    uuid = webhook_request.webhook_inbox.uuid
    serialized_request = WebhookRequestSerializer.new(webhook_request).as_json
    ActionCable.server.broadcast "webhook_channel_#{uuid}", { webhook_request: serialized_request }
  end
end