import React, { useState } from 'react';
import Toast from './Toast';

const CopyButton = ({ content }) => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content).then(() => {
      setShowToast(true);
    });
  };

  return (
    <>
      <button
        onClick={copyToClipboard}
        className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 ml-auto"
      >
        Copy
      </button>
      <Toast message="Copied to clipboard!" show={showToast} onHide={() => setShowToast(false)} />
    </>
  );
};

const ScrollableBlock = ({ title, content }) => {
  const formatted =
    typeof content === 'string'
      ? content
      : JSON.stringify(content, null, 2);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <CopyButton content={formatted} />
      </div>
      <pre className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-4 rounded-md text-sm whitespace-pre-wrap break-words overflow-auto max-h-72 max-w-full border border-gray-200 dark:border-gray-600">
        {formatted}
      </pre>
    </div>
  );
};

const HookDetailsViewer = ({ hook }) => {
  if (!hook) {
    return <div className="text-center p-8 text-gray-600">Loading...</div>;
  }

  const safeParse = (data) => {
    try {
      return typeof data === 'string' ? JSON.parse(data) : data;
    } catch {
      return data;
    }
  };

  const parsedHeaders = safeParse(hook.headers);
  const parsedBody = safeParse(hook.body);
  const parsedOriginalBody = hook.original_body ? safeParse(hook.original_body) : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-5xl mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold text-white bg-gray-800 -mx-6 -mt-6 mb-6 p-4 rounded-t-lg">
        Webhook Details
      </h2>

      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Request Info</h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <dt className="text-gray-600">ID:</dt>
          <dd className="text-gray-900 dark:text-gray-200 font-mono">{hook.id}</dd>
          <dt className="text-gray-600">Method:</dt>
          <dd className="text-gray-900 dark:text-gray-200">{hook.request_method}</dd>
          <dt className="text-gray-600">Status:</dt>
          <dd className="text-gray-900 dark:text-gray-200">{hook.status}</dd>
          <dt className="text-gray-600">IP Address:</dt>
          <dd className="text-gray-900 dark:text-gray-200 font-mono">{hook.ip_address}</dd>
          <dt className="text-gray-600">Received At:</dt>
          <dd className="text-gray-900 dark:text-gray-200">
            {new Date(hook.created_at).toLocaleString()}
          </dd>
        </dl>
      </div>

      <ScrollableBlock title="Headers" content={parsedHeaders} />

      {parsedOriginalBody && (
        <ScrollableBlock title="Original Body" content={parsedOriginalBody} />
      )}

      <ScrollableBlock
        title={parsedOriginalBody ? 'Transformed Body' : 'Body'}
        content={parsedBody}
      />
    </div>
  );
};

export default HookDetailsViewer;
