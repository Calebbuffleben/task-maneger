import React from 'react';
import { render, screen } from '@testing-library/react';
import FormComponent from '../../components/FormComponent';

describe('should be render a form component', () => {
  test('renders the component', async () => {
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

    const layoutComponent = await screen.findByRole('input');

    expect(layoutComponent).toBe({});
  })
})
