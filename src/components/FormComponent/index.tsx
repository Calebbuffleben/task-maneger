import { useEffect, useState } from "react";
import Form from "../ui/form";

const FormComponent = ({ fields, onSubmit, submitButtonLabel }: any) => {

  const [value, setValue] = useState(fields.reduce((acc, {name, initialValue}) => {
    acc[name] = initialValue;

    return acc;
  }, {}))

  useEffect(() => {
    console.log('Value changee ee eeeeee  ee', value)
  }, [value])

  const handleChange = (event) => {
    const { name, value } = event.target;

    //Value não está construindo um array, por esse motivo está enviando apenas password, que é o último valor
    //setValue([...value, {[value]: name}]);

    setValue([...value, { [name]: value}])
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
