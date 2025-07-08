import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

const EditRuleModal = ({ rule, onSave, onCancel }) => {
  const [editedRule, setEditedRule] = useState(rule);

  useEffect(() => {
    setEditedRule(rule);
  }, [rule]);

  const handleSave = () => {
    onSave(editedRule);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white dark:bg-gray-800">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Edit Rule</h3>
        <div className="mt-2">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Rule Name</label>
            <input
              type="text"
              value={editedRule.name}
              onChange={(e) => setEditedRule({ ...editedRule, name: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Transformation Logic (JavaScript)</label>
            <div className="mt-1 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600">
              <CodeMirror
                value={editedRule.body}
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setEditedRule({ ...editedRule, body: value })}
                theme={okaidia}
              />
            </div>
          </div>
        </div>
        <div className="items-center px-4 py-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="mt-3 px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRuleModal;
