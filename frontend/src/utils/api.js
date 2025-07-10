import axios from "axios";

// Webhook Inboxes
export const fetchInbox = async (uuid) => {
  try {
    const response = await axios.get(`/api/hooks/${uuid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching inbox:", error);
    throw error;
  }
};

export const createInbox = async () => {
  try {
    const response = await axios.post("/api/hooks");
    return response.data;
  } catch (error) {
    console.error("Error creating inbox:", error);
    throw error;
  }
};

// Webhook Requests
export const fetchWebhooksForInbox = async (inboxId) => {
  try {
    const response = await axios.get(`/api/webhook_inboxes/${inboxId}/webhook_requests`);
    return response.data.webhook_requests;
  } catch (error) {
    console.error("Error fetching webhooks for inbox:", error);
    throw error;
  }
};

export const fetchWebhookRequest = async (inboxUUID, id) => {
  try {
    const response = await axios.get(`/api/webhook_inboxes/${inboxUUID}/webhook_requests/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching webhook request:", error);
    throw error;
  }
};

export const fetchAllWebhooks = async () => {
  try {
    const response = await axios.get("/api/webhooks/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching all webhooks:", error);
    throw error;
  }
};

// Transformation Rules
export const fetchTransformationRules = async (inboxUUID) => {
  try {
    const response = await axios.get(`/api/webhook_inboxes/${inboxUUID}/transformation_rules`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transformation rules:", error);
    throw error;
  }
};

export const createTransformationRule = async (inboxUUID, ruleData) => {
  try {
    const response = await axios.post(`/api/webhook_inboxes/${inboxUUID}/transformation_rules`, ruleData);
    return response.data;
  } catch (error) {
    console.error("Error creating transformation rule:", error);
    throw error;
  }
};

export const updateTransformationRule = async (id, ruleData) => {
  try {
    const response = await axios.put(`/api/transformation_rules/${id}`, ruleData);
    return response.data;
  } catch (error) {
    console.error("Error updating transformation rule:", error);
    throw error;
  }
};

export const deleteTransformationRule = async (id) => {
  try {
    await axios.delete(`/api/transformation_rules/${id}`);
  } catch (error) {
    console.error("Error deleting transformation rule:", error);
    throw error;
  }
};

export const toggleTransformationRule = async (rule) => {
  try {
    const response = await axios.put(`/api/transformation_rules/${rule.id}`, {
      is_enabled: !rule.is_enabled,
    });
    return response.data;
  } catch (error) {
    console.error("Error toggling transformation rule:", error);
    throw error;
  }
};

// Dashboard Stats
export const fetchDashboardStats = async () => {
  try {
    const response = await axios.get("/api/dashboard/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};
