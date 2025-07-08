import React, { useState, useEffect } from "react";
import axios from "axios";
import HookTable from "../components/HookTable";
import Toast from "../components/Toast";
import cable from "../services/cable";

const Dashboard = ({ activeInbox, loading }) => {
  const [hooks, setHooks] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const webhookUrl = activeInbox
    ? `${window.location.origin}/api/hooks/${activeInbox.uuid}`
    : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(webhookUrl).then(() => {
      setToastMessage("Webhook URL copied to clipboard!");
      setShowToast(true);
    });
  };

  useEffect(() => {
    if (!activeInbox) return;

    const fetchHooks = async () => {
      try {
        const response = await axios.get(
          `/api/hooks/${activeInbox.uuid}/requests`
        );
        setHooks(response.data.webhook_requests);
      } catch (error) {
        console.error("Error fetching hooks:", error);
      }
    };

    fetchHooks();

    const channel = cable.subscriptions.create(
      { channel: "WebhookChannel", uuid: activeInbox.uuid },
      {
        received: (data) => {
          if (data.webhook_request) {
            setHooks((prevHooks) => [data.webhook_request, ...prevHooks]);
            setToastMessage(
              `New webhook received: #${data.webhook_request.id}`
            );
            setShowToast(true);
          }
        },
      }
    );

    return () => {
      channel.unsubscribe();
    };
  }, [activeInbox]);

  if (loading) {
    return (
      <div>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
          Dashboard
        </h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Initializing your webhook inbox...
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
          {activeInbox?.name || "Webhook Inbox"}
        </h1>
      </div>

      <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6'>
        <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
          Your unique webhook URL
        </label>
        <div className='flex items-center mt-1'>
          <input
            type='text'
            readOnly
            value={webhookUrl}
            className='flex-grow p-2 border border-gray-300 rounded-l-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:outline-none'
          />
          <button
            onClick={copyToClipboard}
            className='p-2 border border-l-0 border-green-500 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
          >
            Copy
          </button>
        </div>
      </div>

      <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        Received Webhooks
      </h2>
      <HookTable hooks={hooks} />
      <Toast
        message={toastMessage}
        show={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
};

export default Dashboard;
