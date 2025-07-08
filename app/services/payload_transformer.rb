require "mini_racer"

class PayloadTransformer
  def self.transform(body, rules)
    transformed_body = body
    transformed = false

    rules.each do |rule|
      next unless rule.is_enabled
      result = apply_rule(transformed_body, rule)
      if result != transformed_body
        transformed_body = result
        transformed = true
      end
    end

    TransformedPayload.new(transformed_body, transformed: transformed)
  end

  private

  def self.apply_rule(body, rule)
    # For now, we only support JS transformations
    return body unless rule.rule_type == "JS"

    payload_for_js = body
    begin
      JSON.parse(body)
    rescue JSON::ParserError
      payload_for_js = body.to_json
    end
    payload_for_js = "{}" if body.blank?

    begin
      context = MiniRacer::Context.new
      js_code = <<-JS
        var payload = #{payload_for_js};
        #{rule.body};
        JSON.stringify(payload);
      JS
      context.eval(js_code)
    rescue => e
      # If transformation fails, return original body
      Rails.logger.error "Transformation failed for rule #{rule.id}: #{e.message}"
      body
    end
  end
end
