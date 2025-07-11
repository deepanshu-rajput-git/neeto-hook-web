import React from "react";
import { Form } from "@bigbinary/neetoui/formik";

// Filter out Formik props that shouldn't be passed to DOM elements
const filterFormikProps = (props) => {
  const {
    isSubmitting,
    isValidating,
    submitCount,
    initialValues,
    initialErrors,
    initialTouched,
    initialStatus,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormikState,
    setFieldTouched,
    setFieldError,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm,
    validateField,
    isValid,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnBlur,
    validateOnChange,
    validateOnMount,
    ...filteredProps
  } = props;

  return filteredProps;
};

const CustomFormikForm = ({ formikProps, children, ...rest }) => {
  return (
    <Form formikProps={formikProps} {...rest}>
      {(props) => {
        const filteredProps = filterFormikProps(props);
        return children(filteredProps);
      }}
    </Form>
  );
};

export default CustomFormikForm;
