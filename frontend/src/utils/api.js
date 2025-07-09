import axios from "axios";

export const fetchWebhooksForInbox = async (inboxId) => {
  try {
    const response = await axios.get(`/api/webhook_inboxes/${inboxId}/webhook_requests`);
    return response.data.webhook_requests;
  } catch (error) {
    console.error("Error fetching webhooks for inbox:", error);
    throw error;
  }
};
