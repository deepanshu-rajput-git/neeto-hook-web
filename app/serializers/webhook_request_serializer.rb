class WebhookRequestSerializer < ActiveModel::Serializer
  attributes :id, :request_method, :headers, :body, :original_body, :status, :ip_address, :created_at, :latency

  def request_method
    object.method
  end

  def latency
    ((object.updated_at - object.created_at) * 1000).round
  end
end
