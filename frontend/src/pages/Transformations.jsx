import React, { useState, useEffect, useCallback } from "react";
import { Button, Typography, Toastr } from "@bigbinary/neetoui";
import { Input, Textarea } from "@bigbinary/neetoui/formik";
import * as Yup from "yup";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import axios from "axios";
import EditRuleModal from "../components/EditRuleModal";
import CustomFormikForm from "../components/CustomFormikForm";

const Transformations = () => {
  const [rules, setRules] = useState([]);
  const [editingRule, setEditingRule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required("Rule name is required"),
    body: Yup.string().required("Transformation logic is required"),
  });

  const fetchRules = useCallback(async () => {
    try {
      // Get the active inbox from localStorage
      const inboxUUID = localStorage.getItem("webhook_inbox_uuid");
      if (!inboxUUID) {
        Toastr.error("No webhook inbox found. Please refresh the page.");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `/api/webhook_inboxes/${inboxUUID}/transformation_rules`
      );
      const fetchedRules = response.data.transformation_rules || [];
      setRules(fetchedRules);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transformation rules:", error);
      Toastr.error("Failed to load transformation rules");
      setRules([]); // fallback to empty array on error
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRules();
  }, [fetchRules]);

  const handleCreateRule = async (values, { resetForm }) => {
    try {
      const inboxUUID = localStorage.getItem("webhook_inbox_uuid");
      await axios.post(
        `/api/webhook_inboxes/${inboxUUID}/transformation_rules`,
        {
          transformation_rule: {
            ...values,
            rule_type: "JS",
            is_enabled: true,
          },
        }
      );
      fetchRules();
      resetForm();
      Toastr.success("Transformation rule created successfully!");
    } catch (error) {
      console.error("Error creating transformation rule:", error);
      Toastr.error("Failed to create transformation rule");
    }
  };

  const handleDeleteRule = async (id) => {
    try {
      await axios.delete(`/api/transformation_rules/${id}`);
      fetchRules();
      Toastr.success("Transformation rule deleted successfully!");
    } catch (error) {
      console.error("Error deleting transformation rule:", error);
      Toastr.error("Failed to delete transformation rule");
    }
  };

  const handleToggleRule = async (rule) => {
    try {
      const updatedRule = { ...rule, is_enabled: !rule.is_enabled };
      await axios.put(`/api/transformation_rules/${rule.id}`, {
        transformation_rule: updatedRule,
      });
      fetchRules();
      Toastr.success(
        `Rule ${updatedRule.is_enabled ? "enabled" : "disabled"} successfully!`
      );
    } catch (error) {
      console.error("Error toggling transformation rule:", error);
      Toastr.error("Failed to update rule status");
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
      Toastr.success("Transformation rule updated successfully!");
    } catch (error) {
      console.error("Error updating transformation rule:", error);
      Toastr.error("Failed to update transformation rule");
    }
  };

  if (loading) {
    return (
      <div>
        <Typography as='h1' className='mb-6'>
          Payload Transformations
        </Typography>
        <Typography as='p' className='text-gray-600 dark:text-gray-300'>
          Loading transformation rules...
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography as='h1' className='mb-6'>
        Payload Transformations
      </Typography>

      <div className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8'>
        <Typography as='h2' className='mb-4'>
          Create New Rule
        </Typography>
        <CustomFormikForm
          formikProps={{
            initialValues: {
              name: "",
              body: 'payload.new_field = "transformed";',
            },
            onSubmit: handleCreateRule,
            validationSchema,
          }}
          className='space-y-4'
        >
          {(props) => (
            <>
              <Input
                {...props}
                label='Rule Name'
                name='name'
                placeholder='e.g., "Format User Data"'
              />
              <div>
                <Typography
                  as='label'
                  className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
                >
                  Transformation Logic (JavaScript)
                </Typography>
                <Typography
                  as='p'
                  className='text-xs text-gray-600 dark:text-gray-300 mb-2'
                >
                  Modify the <code>payload</code> object. It will be
                  automatically stringified.
                </Typography>
                <div className='rounded-md overflow-hidden border border-gray-200 dark:border-gray-600'>
                  <CodeMirror
                    value={props.values.body}
                    height='150px'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => props.setFieldValue("body", value)}
                    theme={okaidia}
                  />
                </div>
                {props.errors.body && props.touched.body && (
                  <Typography as='p' className='text-red-500 text-sm mt-1'>
                    {props.errors.body}
                  </Typography>
                )}
              </div>
              <Button
                label='Create Rule'
                variant='primary'
                size='medium'
                type='submit'
                disabled={props.isSubmitting}
              />
            </>
          )}
        </CustomFormikForm>
      </div>

      <div>
        <Typography as='h2' className='mb-4'>
          Existing Rules
        </Typography>
        <div className='space-y-4'>
          {rules.length === 0 ? (
            <Typography as='p' className='text-gray-600 dark:text-gray-300'>
              No transformation rules found.
            </Typography>
          ) : (
            rules.map((rule) => (
              <div
                key={rule.id}
                className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center'
              >
                <div>
                  <Typography
                    as='p'
                    className='font-bold text-gray-900 dark:text-gray-100'
                  >
                    {rule.name}
                  </Typography>
                  <Typography
                    as='p'
                    className='text-gray-600 dark:text-gray-300'
                  >
                    Type: {rule.rule_type}
                  </Typography>
                </div>
                <div className='flex items-center space-x-4'>
                  <Button
                    label={rule.is_enabled ? "Enabled" : "Disabled"}
                    variant={rule.is_enabled ? "primary" : "secondary"}
                    size='small'
                    onClick={() => handleToggleRule(rule)}
                  />
                  <Button
                    label='Edit'
                    variant='text'
                    size='small'
                    onClick={() => handleEditRule(rule)}
                    className='text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
                  />
                  <Button
                    label='Delete'
                    variant='text'
                    size='small'
                    onClick={() => handleDeleteRule(rule.id)}
                    className='text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
                  />
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
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Transformations;
