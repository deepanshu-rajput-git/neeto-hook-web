import React, { useCallback, memo } from "react";
import JsonView from "@microlink/react-json-view";
import { useToastr } from "../contexts/ToastrContext";

const FormattedJsonViewer = memo(({ data, initiallyExpandedLevel = 2 }) => {
  const { showSuccess } = useToastr();

  if (!data) {
    return (
      <div className='p-4 text-sm font-mono text-red-500'>
        Invalid JSON format
      </div>
    );
  }

  const handleCopy = useCallback(
    (copy) => {
      showSuccess("JSON copied to clipboard!");
    },
    [showSuccess]
  );

  return (
    <div className='overflow-auto max-h-[600px] bg-gray-100 dark:bg-gray-800 rounded p-4 text-sm font-mono'>
      <JsonView
        src={data}
        theme='okaidia'
        collapsed={initiallyExpandedLevel}
        displayDataTypes={false}
        enableClipboard
        onCopy={handleCopy}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
});

FormattedJsonViewer.displayName = "FormattedJsonViewer";

export default FormattedJsonViewer;
