import React from "react";
import { Typography, Button, Input, Toastr } from "@bigbinary/neetoui";
import HookTable from "../components/HookTable";
import DownloadWebhooksButton from "../components/DownloadWebhooksButton";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const StatCard = ({ title, value }) => (
  <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-200'>
    <Typography style='body2' className='text-gray-600'>
      {title}
    </Typography>
    <Typography style='h1' className='mt-1 text-gray-900'>
      {value}
    </Typography>
  </div>
);

const Dashboard = ({ activeInbox, loading, hooks, stats }) => {
  const webhookUrl = activeInbox
    ? `${window.location.origin}/api/hooks/${activeInbox.uuid}`
    : "";

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(webhookUrl);
      Toastr.success("Webhook URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = webhookUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        Toastr.success("Webhook URL copied to clipboard!");
      } catch (fallbackError) {
        console.error("Fallback copy failed:", fallbackError);
        Toastr.error("Failed to copy to clipboard");
      }
      document.body.removeChild(textArea);
    }
  };

  if (loading) {
    return (
      <div>
        <Typography style='h1' className='mb-6'>
          Dashboard
        </Typography>
        <Typography style='body2' className='text-gray-600'>
          Initializing your webhook inbox...
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <Typography style='h1'>
          {activeInbox?.name || "Webhook Inbox"}
        </Typography>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-4 mb-6'>
        <StatCard title='Total Hooks' value={stats?.total_hooks ?? 0} />
        <StatCard title='Today' value={stats?.hooks_today ?? 0} />
        <StatCard title='Successful' value={stats?.successful_hooks ?? 0} />
        <StatCard title='Failed' value={stats?.failed_hooks ?? 0} />
      </div>

      <div className='bg-gray-100 p-4 rounded-lg mb-6'>
        <Typography style='body2' className='text-gray-700 mb-1'>
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
            style='primary'
            size='medium'
            onClick={handleCopyUrl}
            className='rounded-l-none border-l-0'
          />
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <Typography style='h2'>Recent Webhooks</Typography>
        {Array.isArray(hooks) && hooks.length > 0 && (
          <DownloadWebhooksButton inboxId={activeInbox.uuid} />
        )}
      </div>
      <HookTable hooks={hooks} />
    </div>
  );
};

export default Dashboard;
