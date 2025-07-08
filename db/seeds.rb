# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command.

TransformationRule.find_or_create_by!(name: "Extract Email") do |rule|
  rule.rule_type = "JS"
  rule.body = <<-JS
// Extracts email from user_name and sets it as a new email field
const emailMatch = payload.user_name.match(/\(([^)]+)\)/);
if (emailMatch) {
  payload.email = emailMatch[1];
}
  JS
  rule.is_enabled = true
end

# Create a test inbox
test_inbox = WebhookInbox.find_or_create_by!(uuid: '123e4567-e89b-12d3-a456-426614174000')

# Create a few sample webhook requests
2.times do |i|
  test_inbox.webhook_requests.create(
    method: 'POST',
    headers: {
      'Content-Type' => 'application/json',
      'X-Custom-Header' => "value-#{i + 1}"
    },
    body: {
      "event" => "test.event",
      "payload" => {
        "id" => i + 1,
        "message" => "This is a test webhook"
      }
    }.to_json,
    ip_address: "127.0.0.#{i + 1}"
  )
end
