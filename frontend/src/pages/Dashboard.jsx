import React from "react";
import HookTable from "../components/HookTable";
import Toast from "../components/Toast";
import DownloadWebhooksButton from "../components/DownloadWebhooksButton";

const StatCard = ({ title, value }) => (
  <div className='bg-white dark:bg-gray-700 p-4 rounded-lg shadow'>
    <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
      {title}
    </h3>
    <p className='mt-1 text-3xl font-semibold text-gray-900 dark:text-white'>
      {value}
    </p>
  </div>
);

const Dashboard = ({
  activeInbox,
  loading,
  hooks,
  stats,
  toastMessage,
  showToast,
  setToastMessage,
  setShowToast,
}) => {
  const webhookUrl = activeInbox
    ? `${window.location.origin}/api/hooks/${activeInbox.uuid}`
    : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(webhookUrl).then(() => {
      setToastMessage("Webhook URL copied to clipboard!");
      setShowToast(true);
    });
  };

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

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-4 mb-6'>
        <StatCard title='Total Hooks' value={stats?.total_hooks ?? 0} />
        <StatCard title='Today' value={stats?.hooks_today ?? 0} />
        <StatCard title='Successful' value={stats?.successful_hooks ?? 0} />
        <StatCard title='Failed' value={stats?.failed_hooks ?? 0} />
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
            className='p-2 border border-l-0 border-green-700 bg-green-700 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
          >
            Copy
          </button>
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
          Received Webhooks
        </h2>
        {Array.isArray(hooks) && hooks.length > 0 && (
          <DownloadWebhooksButton inboxId={activeInbox.uuid} />
        )}
      </div>
      {Array.isArray(hooks) && hooks.length === 0 && (
        <div className='text-gray-500 dark:text-gray-400 mb-4'>
          No webhooks received yet.
        </div>
      )}
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
