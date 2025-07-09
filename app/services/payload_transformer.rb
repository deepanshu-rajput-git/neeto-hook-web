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

    payload = begin
                JSON.parse(body)
              rescue JSON::ParserError
                body
              end
    payload = {} if payload.blank?

    begin
      context = MiniRacer::Context.new
      js_code = <<-JS
        var payload = #{payload.to_json};
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
