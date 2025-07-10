import React from "react";
import HookTable from "../components/HookTable";
import DownloadWebhooksButton from "../components/DownloadWebhooksButton";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useToastr } from "../contexts/ToastrContext";

const StatCard = ({ title, value }) => (
  <div className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
    <h3 className='text-sm font-medium text-gray-600 dark:text-gray-300'>
      {title}
    </h3>
    <p className='mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100'>
      {value}
    </p>
  </div>
);

const Dashboard = ({ activeInbox, loading, hooks, stats }) => {
  const { showSuccess } = useToastr();

  const webhookUrl = activeInbox
    ? `${window.location.origin}/api/hooks/${activeInbox.uuid}`
    : "";

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(webhookUrl).then(() => {
      showSuccess("Webhook URL copied to clipboard!");
    });
  };

  if (loading) {
    return (
      <div>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
          Dashboard
        </h1>
        <p className='text-gray-600 dark:text-gray-300'>
          Initializing your webhook inbox...
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
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
          Webhook URL
        </label>
        <div className='flex items-center mt-1'>
          <input
            type='text'
            readOnly
            value={webhookUrl}
            className='flex-grow p-2 border border-gray-300 rounded-l-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:outline-none'
          />
          <button
            onClick={handleCopyUrl}
            className='p-2 border border-l-0 border-green-600 bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200'
          >
            <ClipboardDocumentIcon className='h-5 w-5' />
          </button>
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
          Recent Webhooks
        </h2>
        {Array.isArray(hooks) && hooks.length > 0 && (
          <DownloadWebhooksButton inboxId={activeInbox.uuid} />
        )}
      </div>
      <HookTable hooks={hooks} />
    </div>
  );
};

export default Dashboard;
