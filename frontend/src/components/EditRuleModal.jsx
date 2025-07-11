import React, { useState, useEffect } from "react";
import { Typography, Button } from "@bigbinary/neetoui";
import { Input } from "@bigbinary/neetoui/formik";
import * as Yup from "yup";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CustomFormikForm from "./CustomFormikForm";
import { Toastr } from "@bigbinary/neetoui";

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

const CloseIcon = () => (
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
    <line x1='18' y1='6' x2='6' y2='18'></line>
    <line x1='6' y1='6' x2='18' y2='18'></line>
  </svg>
);

const EditRuleModal = ({ rule, onSave, onCancel, isOpen }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Rule name is required"),
    body: Yup.string().required("Transformation logic is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSave(values);
    setSubmitting(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
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

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50'
      onClick={handleBackdropClick}
    >
      <div className='bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto'>
        {/* Modal Header - following neeto-cal-web pattern */}
        <div className='p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center'>
          <Typography style='h2' weight='bold'>
            Edit Rule
          </Typography>
          <Button
            icon={CloseIcon}
            style='text'
            size='small'
            tooltipProps={{
              content: "Close",
              position: "top",
            }}
            onClick={onCancel}
          />
        </div>

        {/* Modal Body - following neeto-cal-web pattern */}
        <div className='p-6'>
          <CustomFormikForm
            formikProps={{
              initialValues: {
                name: rule?.name || "",
                body: rule?.body || "",
              },
              onSubmit: handleSubmit,
              validationSchema,
              enableReinitialize: true,
            }}
          >
            {(props) => (
              <div className='space-y-6'>
                <Input {...props} label='Rule Name' name='name' />
                <div className='space-y-3'>
                  <Typography
                    style='body2'
                    className='block text-sm font-medium text-gray-600 dark:text-gray-300'
                  >
                    Transformation Logic (JavaScript)
                  </Typography>
                  <div className='rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 relative'>
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
                      height='200px'
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
              </div>
            )}
          </CustomFormikForm>
        </div>

        {/* Modal Footer - following neeto-cal-web pattern */}
        <div className='p-6 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex justify-end space-x-2'>
            <Button style='tertiary' onClick={onCancel}>
              Cancel
            </Button>
            <CustomFormikForm
              formikProps={{
                initialValues: {
                  name: rule?.name || "",
                  body: rule?.body || "",
                },
                onSubmit: handleSubmit,
                validationSchema,
                enableReinitialize: true,
              }}
            >
              {(props) => (
                <Button
                  label='Save'
                  style='primary'
                  type='submit'
                  disabled={props.isSubmitting}
                />
              )}
            </CustomFormikForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRuleModal;
