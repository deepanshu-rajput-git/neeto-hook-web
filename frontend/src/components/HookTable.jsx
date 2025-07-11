import React from "react";
import { Link } from "react-router-dom";
import { Table, Typography, Button } from "@bigbinary/neetoui";

const HookTable = ({ hooks }) => {
  const getStatusClass = (status) => {
    if (status === "success")
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    if (status === "failed")
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  };

  const columnData = [
    {
      title: "Method",
      dataIndex: "request_method",
      key: "request_method",
      width: "15%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "15%",
      render: (status) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
            status
          )}`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Path",
      dataIndex: "id",
      key: "path",
      width: "25%",
      render: (id) => `/hooks/${id}`,
    },
    {
      title: "Received At",
      dataIndex: "created_at",
      key: "created_at",
      width: "25%",
      render: (created_at) => new Date(created_at).toLocaleString(),
    },
    {
      title: "Actions",
      key: "actions",
      width: "20%",
      render: (_, record) => (
        <Button
          label='View'
          style='primary'
          size='small'
          to={`/hooks/${record.id}`}
          className='hover:scale-105 hover:shadow-md transition-all duration-200'
        />
      ),
    },
  ];

  const rowData = Array.isArray(hooks) && hooks.length > 0 ? hooks : [];

  return (
    <div className='bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
      {rowData.length === 0 ? (
        <div className='py-8 px-6 text-center'>
          <Typography
            style='body2'
            className='text-gray-500 dark:text-gray-400'
          >
            No webhooks received yet.
          </Typography>
        </div>
      ) : (
        <Table columnData={columnData} rowData={rowData} />
      )}
    </div>
  );
};

export default HookTable;
