require "test_helper"

class Api::WebhookRequestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @webhook_inbox = webhook_inboxes(:one)
    @webhook_request = webhook_requests(:one)
  end

  test "should get index" do
    get api_webhook_inbox_webhook_requests_url(webhook_inbox_uuid: @webhook_inbox.uuid), as: :json
    assert_response :success
  end

  test "should show webhook_request" do
    get api_webhook_inbox_webhook_request_url(webhook_inbox_uuid: @webhook_inbox.uuid, id: @webhook_request.id), as: :json
    assert_response :success
  end
end
