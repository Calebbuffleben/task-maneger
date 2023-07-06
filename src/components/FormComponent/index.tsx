import { ChangeEvent, useState } from "react";
import Form from "../ui/form";

type TValue =  string | { [x: string]: string; }
interface IFields {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  initialValue?: string;
  [key: string]: string | undefined;
}

interface IFormComponent {
  fields: Array<IFields> | string;
  submitForm: () => void;
  onSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  submitButtonLabel: string;
}

const FormComponent = ({
  fields,
  submitForm,
  onSubmit,
  submitButtonLabel
}: IFormComponent) => {

  const [value, setValue] = useState<TValue[] | IFields | string>(() => {
    if (typeof fields !== "string") {
      return fields.reduce((acc: { [x: string]: string }, {name, initialValue}: IFields) => {
        acc[String(name)] = String(initialValue);

        return acc;
      },
      {}
    ) as IFields;
  } else {
    return fields as string;
  }
});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (Array.isArray(value)) {
      setValue([...value, { [name]: value }]);
    } else {
      setValue(value);
    }

    if(event.target.name){
      onSubmit(event)
    }
  }

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    submitForm();
  }

  const formFields = Array.isArray(fields)
  ? fields.map(({ label, name, type, placeholder}: IFields) => ({
    label,
    name,
    type,
    placeholder,
    value: (value as IFields)[name],
  })) : []

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
