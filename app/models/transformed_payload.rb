class TransformedPayload
  attr_reader :body, :transformed

  def initialize(body, transformed: false)
    @body = body
    @transformed = transformed
  end

  def transformed?
    @transformed
  end
end
