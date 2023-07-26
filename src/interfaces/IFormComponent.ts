import { ChangeEvent } from "react";
import { IFields } from "./IFields";

export interface IFormComponent {
  fields: Array<IFields> | string;
  submitForm: () => void;
  onSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  submitButtonLabel: string;
}
