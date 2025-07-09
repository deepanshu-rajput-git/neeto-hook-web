import React from 'react';
import FormattedJsonViewer from './FormattedJsonViewer';

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

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Headers</h3>
        <pre className="overflow-auto max-h-[600px] bg-gray-100 rounded p-4 text-sm font-mono whitespace-pre-wrap break-words">
          {JSON.stringify(parsedHeaders, null, 2)}
        </pre>
      </div>

      {parsedOriginalBody && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Original Body</h3>
          <FormattedJsonViewer data={parsedOriginalBody} />
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {parsedOriginalBody ? 'Transformed Body' : 'Body'}
        </h3>
        <FormattedJsonViewer data={parsedBody} />
      </div>
    </div>
  );
};

export default HookDetailsViewer;
