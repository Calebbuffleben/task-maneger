import React from 'react'
import '@/styles/globals.css'
import UserInfoProvider from '../contexts/user/userContext';
import AuthProvider from '../contexts/authentication/authContext';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserInfoProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </UserInfoProvider>
  );
}
