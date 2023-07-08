import React from 'react';
import { render, screen } from '@testing-library/react';
import FormComponent from '../../components/FormComponent';
import '@testing-library/jest-dom/extend-expect';

describe('should be render a form component', () => {
  test('renders the component', () => {
    const formComponentProps = {
      fields: [
        {
          label: 'Email',
          name: 'email',
          type: 'text',
          placeholder: 'Email',
          initialValue: '',
        },
        {
          label: 'Password',
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          initialValue: '',
        },
      ],
      submitForm: jest.fn(),
      onSubmit: jest.fn(),
      submitButtonLabel: 'Login',
    };
    render(<FormComponent  {...formComponentProps} />);

    const layoutComponent = screen.getByRole('textbox');

    expect(layoutComponent).toBeInTheDocument();
  })
})
