import "./styles/Form.css";
import React from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import classnames from "classnames";

const Form = withFormik({
  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      //.min(2, "C'mon, your name is longer than that")
      .required("First name is required."),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required!"),
    phone: yup
      .string()
      .min(10, "Invalid phone")
      .required("Phone is required!")
  }),
  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    //alert(payload.email);
    //setSubmitting(false);
  },
  displayName: "MyForm"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

const TextArea = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <textarea
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="firstName"
        type="text"
        placeholder="Your Name"
        className="font-weight: bold;"
        error={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="your@email.com"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <TextArea
        id="comment"
        type="phone"
        label="Phone"
        error={touched.comment && errors.phone}
        value={values.comment}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const ContactForm = Form(MyForm);

export default ContactForm;
