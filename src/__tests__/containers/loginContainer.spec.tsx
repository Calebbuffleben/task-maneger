import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginContainer from '@/containers/loginContainer';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/router';
import api from '@/services/api';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('should be show and submit the login form', () => {
  test('should be show login form', () => {
    render(<LoginContainer />)

    const labelEmail = screen.getByText('Email');
    const labelPassword = screen.getByText('Password');
    const loginButton = screen.getByText('Login');

    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  })

  test('should call api when click in login form', async () => {
    const mockApiCall = jest.spyOn(api, 'post')

    render(<LoginContainer />)

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    expect(mockApiCall).toHaveBeenCalled();

    mockApiCall.mockRestore();
  })
})
