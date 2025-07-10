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
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center'>
      <div className='relative mx-auto p-5 border w-full max-w-2xl shadow-sm rounded-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'>
        <h3 className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-100'>
          Edit Rule
        </h3>
        <div className='mt-2'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-600 dark:text-gray-300'>
              Rule Name
            </label>
            <input
              type='text'
              value={editedRule.name}
              onChange={(e) =>
                setEditedRule({ ...editedRule, name: e.target.value })
              }
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-600 dark:text-gray-300'>
              Transformation Logic (JavaScript)
            </label>
            <div className='mt-1 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600'>
              <CodeMirror
                value={editedRule.body}
                height='200px'
                extensions={[javascript({ jsx: true })]}
                onChange={(value) =>
                  setEditedRule({ ...editedRule, body: value })
                }
                theme={okaidia}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end space-x-3 mt-4'>
          <button
            onClick={onCancel}
            className='px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200'
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className='px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRuleModal;
