import React from "react";
import JsonView from "@microlink/react-json-view";

const FormattedJsonViewer = ({ data, initiallyExpandedLevel = 2 }) => {
  if (!data) {
    return (
      <div className="p-4 text-sm font-mono text-red-500">
        Invalid JSON format
      </div>
    );
  }

  return (
    <div className="overflow-auto max-h-[600px] bg-gray-100 rounded p-4 text-sm font-mono">
      <JsonView
        src={data}
        theme="okaidia"
        collapsed={initiallyExpandedLevel}
        displayDataTypes={false}
        enableClipboard
      />
    </div>
  );
};

export default FormattedJsonViewer;
