import React from "react";
import { Link } from "react-router-dom";

const HookTable = ({ hooks }) => {
  const getStatusClass = (status) => {
    if (status === "success")
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    if (status === "failed")
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  };

  return (
    <div className='overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
      <table className='min-w-full'>
        <thead className='bg-gray-50 dark:bg-gray-800'>
          <tr>
            <th className='py-3 px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider'>
              Method
            </th>
            <th className='py-3 px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider'>
              Status
            </th>
            <th className='py-3 px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider'>
              Path
            </th>
            <th className='py-3 px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider'>
              Received At
            </th>
            <th className='py-3 px-6 text-right text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
          {Array.isArray(hooks) && hooks.length > 0 ? (
            hooks.map((hook) => (
              <tr
                key={hook.id}
                className='hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200'
              >
                <td className='py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100'>
                  {hook.request_method}
                </td>
                <td className='py-4 px-6 whitespace-nowrap text-sm'>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                      hook.status
                    )}`}
                  >
                    {hook.status}
                  </span>
                </td>
                <td className='py-4 px-6 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300'>
                  /hooks/{hook.id}
                </td>
                <td className='py-4 px-6 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300'>
                  {new Date(hook.created_at).toLocaleString()}
                </td>
                <td className='py-4 px-6 whitespace-nowrap text-right text-sm font-medium'>
                  <Link
                    to={`/hooks/${hook.id}`}
                    className='text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:underline transition-colors duration-200'
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan='5'
                className='py-8 px-6 text-center text-gray-500 dark:text-gray-400'
              >
                No webhooks received yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HookTable;
