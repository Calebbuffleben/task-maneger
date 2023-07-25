import { IFields } from "@/interfaces/IFields";
import React, { ChangeEventHandler } from "react";
import { FormEventHandler } from "react";

interface IForm {
  fields: Array<IFields> | string[];
  onChange: ChangeEventHandler<HTMLInputElement>
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitButtonLabel: string;
}

interface IFormFields {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
}

const Form = ({  fields, onChange, onSubmit, submitButtonLabel }: IForm) => (
  <form onSubmit={onSubmit} className="space-y-6">
      {
        fields.map(({label, name, type, placeholder, value}: IFields | string | IFormFields) => {
          return (
            <div key={name}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <div className="mt-1">
                <input
                  key={name}
                  type={type}
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          )
        })
      }

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring indigo-500"
        >
          {submitButtonLabel}
        </button>
      </div>
  </form>
);

export default Form;
