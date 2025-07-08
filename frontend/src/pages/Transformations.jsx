import React, { useState, useEffect, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import axios from "axios";
import EditRuleModal from "../components/EditRuleModal";

const Transformations = ({ activeInbox, loading }) => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState({
    name: "",
    rule_type: "JS",
    body: `payload.email = payload.user_name.match(/([^)]+)/)[1];
payload.username = payload.user_name.split(" ")[0];`,
    is_enabled: true,
  });
  const [editingRule, setEditingRule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRules = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/webhook_inboxes/${activeInbox.uuid}/transformation_rules`
      );
      const fetchedRules = response.data.transformation_rules || [];
      setRules(fetchedRules);
    } catch (error) {
      console.error("Error fetching transformation rules:", error);
      setRules([]); // fallback to empty array on error
    }
  }, [activeInbox]);

  useEffect(() => {
    if (activeInbox) {
      fetchRules();
    }
  }, [activeInbox, fetchRules]);

  const handleCreateRule = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `/api/webhook_inboxes/${activeInbox.uuid}/transformation_rules`,
        {
          transformation_rule: newRule,
        }
      );
      fetchRules();
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
      fetchRules();
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

  const handleEditRule = (rule) => {
    setEditingRule(rule);
    setIsModalOpen(true);
  };

  const handleUpdateRule = async (updatedRule) => {
    try {
      await axios.put(`/api/transformation_rules/${updatedRule.id}`, {
        transformation_rule: updatedRule,
      });
      fetchRules();
      setIsModalOpen(false);
      setEditingRule(null);
    } catch (error) {
      console.error("Error updating transformation rule:", error);
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
          Payload Transformations
        </h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Loading transformation rules...
        </p>
      </div>
    );
  }

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
              className='mt-1 block w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent sm:text-sm p-2'
              placeholder='e.g., "Format User Data"'
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
                    onClick={() => handleEditRule(rule)}
                    className='text-blue-500 hover:underline'
                  >
                    Edit
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
      {isModalOpen && (
        <EditRuleModal
          rule={editingRule}
          onSave={handleUpdateRule}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Transformations;
