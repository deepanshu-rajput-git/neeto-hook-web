class PayloadTransformer
  def self.transform(body, rules)
    transformed_body = body
    rules.each do |rule|
      transformed_body = apply_rule(transformed_body, rule)
    end
    transformed_body
  end

  private

  def self.apply_rule(body, rule)
    # For now, we only support JS transformations
    return body unless rule.rule_type == 'JS' && rule.is_enabled

    begin
      # WARNING: Using eval is a security risk.
      # In a real application, use a sandboxed environment like MiniRacer.
      context = "
        var payload = #{body};
        #{rule.body};
        JSON.stringify(payload);
      "
      eval(context)
    rescue => e
      # If transformation fails, return original body
      Rails.logger.error "Transformation failed for rule #{rule.id}: #{e.message}"
      body
    end
  end
end
