import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import axios from "axios";

const Transformations = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState({
    name: "",
    rule_type: "JS",
    body: 'payload.new_field = "transformed";',
  });

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      const response = await axios.get("/api/transformation_rules");
      const fetchedRules = response.data?.transformation_rules || [];
      setRules(fetchedRules);
    } catch (error) {
      console.error("Error fetching transformation rules:", error);
      setRules([]); // fallback to empty array on error
    }
  };

  const handleCreateRule = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/transformation_rules", {
        transformation_rule: newRule,
      });
      setRules([...rules, response.data.transformation_rule]);
      setNewRule({
        name: "",
        rule_type: "JS",
        body: 'payload.new_field = "transformed";',
      });
    } catch (error) {
      console.error("Error creating transformation rule:", error);
    }
  };

  const handleDeleteRule = async (id) => {
    try {
      await axios.delete(`/api/transformation_rules/${id}`);
      setRules(rules.filter((rule) => rule.id !== id));
    } catch (error) {
      console.error("Error deleting transformation rule:", error);
    }
  };

  const handleToggleRule = async (rule) => {
    try {
      const updatedRule = { ...rule, is_enabled: !rule.is_enabled };
      await axios.put(`/api/transformation_rules/${rule.id}`, {
        transformation_rule: updatedRule,
      });
      fetchRules();
    } catch (error) {
      console.error("Error toggling transformation rule:", error);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
        Payload Transformations
      </h1>

      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
          Create New Rule
        </h2>
        <form onSubmit={handleCreateRule}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-600 dark:text-gray-300'>
              Rule Name
            </label>
            <input
              type='text'
              value={newRule.name}
              onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
              className='mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-600 dark:text-gray-300'>
              Transformation Logic (JavaScript)
            </label>
            <p className='text-xs text-gray-500 mb-2'>
              Modify the <code>payload</code> object. It will be automatically
              stringified.
            </p>
            <div className='rounded-md overflow-hidden border border-gray-200 dark:border-gray-600'>
              <CodeMirror
                value={newRule.body}
                height='150px'
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setNewRule({ ...newRule, body: value })}
                theme={okaidia}
              />
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'
          >
            Create Rule
          </button>
        </form>
      </div>

      <div>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
          Existing Rules
        </h2>
        <div className='space-y-4'>
          {rules.length === 0 ? (
            <p className='text-gray-500'>No transformation rules found.</p>
          ) : (
            rules.map((rule) => (
              <div
                key={rule.id}
                className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center'
              >
                <div>
                  <p className='font-bold text-gray-900 dark:text-white'>
                    {rule.name}
                  </p>
                  <p className='text-sm text-gray-600'>
                    Type: {rule.rule_type}
                  </p>
                </div>
                <div className='flex items-center space-x-4'>
                  <button
                    onClick={() => handleToggleRule(rule)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      rule.is_enabled
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 dark:bg-gray-600 text-gray-600"
                    }`}
                  >
                    {rule.is_enabled ? "Enabled" : "Disabled"}
                  </button>
                  <button
                    onClick={() => handleDeleteRule(rule.id)}
                    className='text-red-500 hover:underline'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Transformations;
