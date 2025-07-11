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

// Icon components
const CopyIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
    <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
  </svg>
);

const EditIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
    <path d='m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
  </svg>
);

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

  const handleUpdateRule = async (formValues) => {
    try {
      // Combine the form values with the original rule data
      const updatedRule = {
        ...editingRule,
        ...formValues,
      };

      await axios.put(`/api/transformation_rules/${editingRule.id}`, {
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

  const handleCopyCode = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        Toastr.success("Code copied to clipboard!");
      })
      .catch(() => {
        Toastr.error("Failed to copy code");
      });
  };

  if (loading) {
    return (
      <div className='space-y-4'>
        <Typography style='h1' className='mb-6'>
          Payload Transformations
        </Typography>
        <Typography style='body2' className='text-gray-600'>
          Loading transformation rules...
        </Typography>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      <div className='mb-12'>
        <Typography style='h1'>Payload Transformations</Typography>
      </div>

      <div className='bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
        <div className='mb-6'>
          <Typography style='h2'>Create New Rule</Typography>
        </div>
        <div className='space-y-6'>
          <CustomFormikForm
            formikProps={{
              initialValues: {
                name: "",
                body: 'payload.new_field = "transformed";',
              },
              onSubmit: handleCreateRule,
              validationSchema,
            }}
          >
            {(props) => (
              <div className='space-y-6'>
                <Input
                  {...props}
                  label='Rule Name'
                  name='name'
                  placeholder='e.g., "Format User Data"'
                />
                <div className='space-y-3'>
                  <Typography
                    style='body2'
                    className='block text-sm font-medium text-gray-600'
                  >
                    Transformation Logic (JavaScript)
                  </Typography>
                  <Typography
                    style='body3'
                    className='text-xs text-gray-600'
                  >
                    Modify the <code>payload</code> object. It will be
                    automatically stringified.
                  </Typography>
                  <div className='rounded-md overflow-hidden border border-gray-200 relative'>
                    <button
                      onClick={() => handleCopyCode(props.values.body)}
                      className='absolute top-2 right-2 z-10 bg-white text-gray-700 p-2 rounded hover:bg-green-600 hover:text-white transition-colors border border-gray-200'
                      title='Copy code'
                    >
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='9'
                          y='9'
                          width='13'
                          height='13'
                          rx='2'
                          ry='2'
                        ></rect>
                        <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                      </svg>
                    </button>
                    <CodeMirror
                      value={props.values.body}
                      height='150px'
                      extensions={[javascript({ jsx: true })]}
                      onChange={(value) => props.setFieldValue("body", value)}
                      theme={okaidia}
                    />
                  </div>
                  {props.errors.body && props.touched.body && (
                    <Typography style='body3' className='text-red-500 text-sm'>
                      {props.errors.body}
                    </Typography>
                  )}
                </div>
                <Button
                  label='Create Rule'
                  style='primary'
                  size='medium'
                  type='submit'
                  disabled={props.isSubmitting}
                />
              </div>
            )}
          </CustomFormikForm>
        </div>
      </div>

      <div className='space-y-6'>
        <div className='mb-4'>
          <Typography style='h2'>Existing Rules</Typography>
        </div>
        <div className='space-y-4'>
          {rules.length === 0 ? (
            <Typography
              style='body2'
              className='text-gray-600'
            >
              No transformation rules found.
            </Typography>
          ) : (
            rules.map((rule) => (
              <div
                key={rule.id}
                className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'
              >
                <div className='flex flex-col items-start gap-6 md:flex-row md:items-center'>
                  <div className='space-y-1 min-w-0 flex-grow'>
                    <Typography
                      style='h4'
                      weight='semibold'
                      className='truncate'
                    >
                      {rule.name}
                    </Typography>
                    <Typography
                      style='body2'
                      className='text-gray-600'
                    >
                      Type: {rule.rule_type}
                    </Typography>
                  </div>
                  <div className='flex items-center space-x-2 flex-shrink-0'>
                    <Button
                      icon={EditIcon}
                      style='text'
                      size='small'
                      tooltipProps={{
                        content: "Edit rule",
                        position: "top",
                      }}
                      onClick={() => handleEditRule(rule)}
                    />
                    <Button
                      label={rule.is_enabled ? "Enabled" : "Disabled"}
                      style={rule.is_enabled ? "primary" : "secondary"}
                      size='small'
                      onClick={() => handleToggleRule(rule)}
                    />
                    <Button
                      label='Delete'
                      style='danger'
                      size='small'
                      onClick={() => handleDeleteRule(rule.id)}
                    />
                  </div>
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
