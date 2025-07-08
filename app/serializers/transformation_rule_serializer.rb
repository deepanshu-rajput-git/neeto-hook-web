class TransformationRuleSerializer < ActiveModel::Serializer
  attributes :id, :name, :rule_type, :body, :is_enabled
end