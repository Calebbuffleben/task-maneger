import React from 'react'
import '@/styles/globals.css'
import UserInfoProvider from '../contexts/user/userContext';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserInfoProvider>
      <Component {...pageProps} />
    </UserInfoProvider>
  );
}
