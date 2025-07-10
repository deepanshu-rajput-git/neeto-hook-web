# Create or find a workspace (if there's a validation on that)
workspace = Workspace.first_or_create!(name: "Seed Workspace")

# Create a test inbox
test_inbox = WebhookInbox.find_or_create_by!(uuid: '123e4567-e89b-12d3-a456-426614174000') do |inbox|
  inbox.workspace = workspace
end

# Add a transformation rule
TransformationRule.find_or_create_by!(name: "Extract Email", webhook_inbox: test_inbox) do |rule|
  rule.rule_type = "JS"
  rule.body = <<-JS
const emailMatch = payload.user_name.match(/\\(([^)]+)\\)/);
if (emailMatch) {
  payload.email = emailMatch[1];
}
  JS
  rule.is_enabled = true
end

# Create sample webhook requests
2.times do |i|
  test_inbox.webhook_requests.find_or_create_by!(
    method: 'POST',
    ip_address: "127.0.0.#{i + 1}"
  ) do |req|
    req.headers = {
      'Content-Type' => 'application/json',
      'X-Custom-Header' => "value-#{i + 1}"
    }
    req.body = {
      "event" => "test.event",
      "payload" => {
        "id" => i + 1,
        "message" => "This is a test webhook"
      }
    }.to_json
  end
end
