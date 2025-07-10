import React from "react";
import FormattedJsonViewer from "./FormattedJsonViewer";

const HookDetailsViewer = ({ hook, setToastMessage, setShowToast }) => {
  if (!hook) {
    return (
      <div className='text-center p-8 text-gray-600 dark:text-gray-300'>
        Loading...
      </div>
    );
  }

  const safeParse = (data) => {
    try {
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch {
      return data;
    }
  };

  const parseHeaders = (headers) => {
    if (typeof headers === "object" && headers !== null) {
      return headers;
    }
    if (typeof headers === "string") {
      try {
        // Handle Ruby hash-like strings: "{\"key\"=>\"value\"}"
        const jsonString = headers.replace(/=>/g, ":");
        return JSON.parse(jsonString);
      } catch (e) {
        // Fallback for regular JSON strings or other formats
        try {
          return JSON.parse(headers);
        } catch (e2) {
          return { error: "Could not parse headers", raw: headers };
        }
      }
    }
    return headers;
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${type} copied to clipboard!`);
    setShowToast(true);
  };

  const parsedHeaders = parseHeaders(hook.headers);
  const parsedBody = safeParse(hook.body);
  const parsedOriginalBody = hook.original_body
    ? safeParse(hook.original_body)
    : null;

  return (
    <div className='bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-5xl mx-auto overflow-hidden'>
      <div className='flex justify-between items-center bg-gray-800 dark:bg-gray-800 -mx-6 -mt-6 mb-6 p-4 rounded-t-lg'>
        <h2 className='text-2xl font-bold text-white'>Webhook details</h2>
        <button
          onClick={() => {
            const data = JSON.stringify(hook, null, 2);
            const blob = new Blob([data], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `webhook-${hook.id}.json`;
            link.click();
          }}
          className='bg-green-600 text-white px-3 py-1.5 rounded-md font-semibold hover:bg-green-700 transition-all duration-300 flex items-center group'
        >
          Download
        </button>
      </div>

      <div className='mb-6 border-b border-gray-200 dark:border-gray-700 pb-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
          Request Info
        </h3>
        <dl className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm'>
          <dt className='text-gray-600 dark:text-gray-300'>ID:</dt>
          <dd className='text-gray-900 dark:text-gray-100 font-mono'>
            {hook.id}
          </dd>
          <dt className='text-gray-600 dark:text-gray-300'>Method:</dt>
          <dd className='text-gray-900 dark:text-gray-100'>
            {hook.request_method}
          </dd>
          <dt className='text-gray-600 dark:text-gray-300'>Status:</dt>
          <dd className='text-gray-900 dark:text-gray-100'>{hook.status}</dd>
          <dt className='text-gray-600 dark:text-gray-300'>IP Address:</dt>
          <dd className='text-gray-900 dark:text-gray-100 font-mono'>
            {hook.ip_address}
          </dd>
          <dt className='text-gray-600 dark:text-gray-300'>Received At:</dt>
          <dd className='text-gray-900 dark:text-gray-100'>
            {new Date(hook.created_at).toLocaleString()}
          </dd>
          <dt className='text-gray-600 dark:text-gray-300'>Latency:</dt>
          <dd className='text-gray-900 dark:text-gray-100'>
            {hook.latency} ms
          </dd>
        </dl>
      </div>

      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
            Headers
          </h3>
          <button
            onClick={() =>
              copyToClipboard(JSON.stringify(parsedHeaders, null, 2), "Headers")
            }
            className='text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200'
          >
            Copy
          </button>
        </div>
        <pre className='overflow-auto max-h-[200px] bg-gray-100 dark:bg-gray-800 rounded p-4 text-sm font-mono whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100'>
          {JSON.stringify(parsedHeaders, null, 2)}
        </pre>
      </div>

      {parsedOriginalBody && (
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
              Original Body
            </h3>
            <button
              onClick={() =>
                copyToClipboard(
                  JSON.stringify(parsedOriginalBody, null, 2),
                  "Original Body"
                )
              }
              className='text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200'
            >
              Copy
            </button>
          </div>
          <FormattedJsonViewer
            data={parsedOriginalBody}
            setToastMessage={setToastMessage}
            setShowToast={setShowToast}
          />
        </div>
      )}

      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
            {parsedOriginalBody ? "Transformed Body" : "Body"}
          </h3>
          <button
            onClick={() =>
              copyToClipboard(JSON.stringify(parsedBody, null, 2), "Body")
            }
            className='text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200'
          >
            Copy
          </button>
        </div>
        <FormattedJsonViewer
          data={parsedBody}
          setToastMessage={setToastMessage}
          setShowToast={setShowToast}
        />
      </div>
    </div>
  );
};

export default HookDetailsViewer;
