class WebhookRequestSerializer < ActiveModel::Serializer
  attributes :id, :request_method, :headers, :body, :original_body, :status, :ip_address, :created_at

  def request_method
    object.method
  end
end
