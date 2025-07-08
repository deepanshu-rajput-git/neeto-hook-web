import React from "react";
import { Link } from "react-router-dom";

const HookTable = ({ hooks }) => {
  const getStatusClass = (status) => {
    if (status >= 200 && status < 300) return "bg-green-100 text-green-500";
    if (status >= 400 && status < 500) return "bg-yellow-100 text-yellow-800";
    if (status >= 500) return "bg-red-100 text-red-500";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className='overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow'>
      <table className='min-w-full'>
        <thead className='bg-gray-50 dark:bg-gray-700'>
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
          {hooks.map((hook) => (
            <tr
              key={hook.id}
              className='hover:bg-gray-50 dark:hover:bg-gray-700'
            >
              <td className='py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'>
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
                  className='text-green-600 hover:underline'
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HookTable;
