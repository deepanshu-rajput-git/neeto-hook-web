class WebhookChannel < ApplicationCable::Channel
  def subscribed
    stream_from "webhook_channel_#{params[:uuid]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
