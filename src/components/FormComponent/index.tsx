import { useState } from "react";
import Form from "../ui/form";

const FormComponent = ({ fields, onSubmit, submitButtonLabel }: any) => {
  const [value, setValue] = useState(fields.reduce((acc, {name, initialValue}) => {
    acc[name] = initialValue;

    return acc;
  }, {}));

  console.log('After Reduce: ', value)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValue({...value, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  }

  const formFields = fields.map(({ label, name, type, placeholder}) => ({
    label,
    name,
    type,
    placeholder,
    value: value[name]
  }))

  console.log("Form Fields:", formFields)
  return (
    <Form
      fields={formFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
      submitButtonLabel={submitButtonLabel}
    />
  )
}

export default FormComponent;
