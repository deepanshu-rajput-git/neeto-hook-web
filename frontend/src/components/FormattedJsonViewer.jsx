import React from "react";
import JsonView from "@microlink/react-json-view";
import { useToastr } from "../contexts/ToastrContext";

const FormattedJsonViewer = ({ data, initiallyExpandedLevel = 2 }) => {
  const { showSuccess } = useToastr();

  if (!data) {
    return (
      <div className='p-4 text-sm font-mono text-red-500'>
        Invalid JSON format
      </div>
    );
  }

  const handleCopy = (copy) => {
    showSuccess("JSON copied to clipboard!");
  };

  return (
    <div className='overflow-auto max-h-[600px] bg-gray-100 dark:bg-gray-800 rounded p-4 text-sm font-mono'>
      <JsonView
        src={data}
        theme='okaidia'
        collapsed={initiallyExpandedLevel}
        displayDataTypes={false}
        enableClipboard
        onCopy={handleCopy}
      />
    </div>
  );
};

export default FormattedJsonViewer;
