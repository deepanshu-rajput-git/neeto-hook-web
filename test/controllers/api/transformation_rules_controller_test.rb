require "test_helper"

class Api::TransformationRulesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @webhook_inbox = webhook_inboxes(:one)
    @transformation_rule = transformation_rules(:one)
  end

  test "should get index" do
    get api_webhook_inbox_transformation_rules_url(webhook_inbox_uuid: @webhook_inbox.uuid), as: :json
    assert_response :success
  end

  test "should create transformation_rule" do
    assert_difference("TransformationRule.count") do
      post api_webhook_inbox_transformation_rules_url(webhook_inbox_uuid: @webhook_inbox.uuid), params: { transformation_rule: { name: "New Rule", rule_type: "JS", body: "payload.new_key = 'new_value';" } }, as: :json
    end

    assert_response :created
  end

  test "should show transformation_rule" do
    get api_transformation_rule_url(@transformation_rule), as: :json
    assert_response :success
  end

  test "should update transformation_rule" do
    patch api_transformation_rule_url(@transformation_rule), params: { transformation_rule: { name: "Updated Rule" } }, as: :json
    assert_response :success
  end

  test "should destroy transformation_rule" do
    assert_difference("TransformationRule.count", -1) do
      delete api_transformation_rule_url(@transformation_rule), as: :json
    end

    assert_response :no_content
  end
end
