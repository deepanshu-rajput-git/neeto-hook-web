import React from "react";
import { Typography, Button, Input } from "@bigbinary/neetoui";
import { toast } from "react-toastify";
import HookTable from "../components/HookTable";
import DownloadWebhooksButton from "../components/DownloadWebhooksButton";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const StatCard = ({ title, value }) => (
  <div className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
    <Typography as='p' className='text-gray-600 dark:text-gray-300'>
      {title}
    </Typography>
    <Typography as='h1' className='mt-1 text-gray-900 dark:text-gray-100'>
      {value}
    </Typography>
  </div>
);

const Dashboard = ({ activeInbox, loading, hooks, stats }) => {
  const webhookUrl = activeInbox
    ? `${window.location.origin}/api/hooks/${activeInbox.uuid}`
    : "";

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(webhookUrl).then(() => {
      toast.success("Webhook URL copied to clipboard!");
    });
  };

  if (loading) {
    return (
      <div>
        <Typography as='h1' className='mb-6'>
          Dashboard
        </Typography>
        <Typography as='p' className='text-gray-600 dark:text-gray-300'>
          Initializing your webhook inbox...
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <Typography as='h1'>{activeInbox?.name || "Webhook Inbox"}</Typography>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-4 mb-6'>
        <StatCard title='Total Hooks' value={stats?.total_hooks ?? 0} />
        <StatCard title='Today' value={stats?.hooks_today ?? 0} />
        <StatCard title='Successful' value={stats?.successful_hooks ?? 0} />
        <StatCard title='Failed' value={stats?.failed_hooks ?? 0} />
      </div>

      <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6'>
        <Typography as='p' className='text-gray-700 dark:text-gray-300 mb-1'>
          Webhook URL
        </Typography>
        <div className='flex items-center'>
          <Input
            value={webhookUrl}
            readOnly
            className='flex-grow rounded-r-none'
          />
          <Button
            icon={ClipboardDocumentIcon}
            variant='primary'
            size='medium'
            onClick={handleCopyUrl}
            className='rounded-l-none border-l-0'
          />
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <Typography as='h2'>Recent Webhooks</Typography>
        {Array.isArray(hooks) && hooks.length > 0 && (
          <DownloadWebhooksButton inboxId={activeInbox.uuid} />
        )}
      </div>
      <HookTable hooks={hooks} />
    </div>
  );
};

export default Dashboard;
