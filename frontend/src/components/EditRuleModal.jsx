import React, { useState, useEffect } from "react";
import { Modal, Typography, Button } from "@bigbinary/neetoui";
import { Input } from "@bigbinary/neetoui/formik";
import * as Yup from "yup";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CustomFormikForm from "./CustomFormikForm";

const EditRuleModal = ({ rule, onSave, onCancel, isOpen }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Rule name is required"),
    body: Yup.string().required("Transformation logic is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSave(values);
    setSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel} size='lg'>
      <Modal.Header>
        <Typography as='h3'>Edit Rule</Typography>
      </Modal.Header>
      <Modal.Body>
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
          className='space-y-4'
        >
          {(props) => (
            <>
              <Input {...props} label='Rule Name' name='name' />
              <div>
                <Typography
                  as='label'
                  className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
                >
                  Transformation Logic (JavaScript)
                </Typography>
                <div className='rounded-md overflow-hidden border border-gray-200 dark:border-gray-600'>
                  <CodeMirror
                    value={props.values.body}
                    height='200px'
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
            </>
          )}
        </CustomFormikForm>
      </Modal.Body>
      <Modal.Footer>
        <Button label='Cancel' variant='text' size='large' onClick={onCancel} />
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
              variant='primary'
              size='large'
              type='submit'
              disabled={props.isSubmitting}
            />
          )}
        </CustomFormikForm>
      </Modal.Footer>
    </Modal>
  );
};

export default EditRuleModal;
