// IMPORTS
import React, { useContext } from "react";
import CardComponent from "@/components/ui/cardComponent";
import FormComponent from "@/components/FormComponent";
import PageContainerComponent from "@/components/ui/pageContainerComponent";
import TitleComponent from "@/components/ui/title-component/TitleComponent";
import { authService } from "@/services/auth";
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from "react";
import { AuthContext } from "@/contexts/authentication/authContext";
import MediaLoginComponent from "@/components/ui/mediaLoginComponent";

//COMPONENT
const LoginContainer = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fields = [
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
  ];

  const handleSubmit = async (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'email'){
      setEmail(event.target.value)
    }
    if(event.target.name === 'password'){
      setPassword(event.target.value)
    }
  }

  const submitForm = async () => {
    try{
      const response = await authService.login({ email, password })

      if(response === 200){
        login();
        router.push('/dashboard')
      }

    } catch(err) {
      //onFailure(err.message);
    }
  }

  return (
  <PageContainerComponent>
    <TitleComponent title='Sign in to your account'/>

    <CardComponent>
      <FormComponent fields={fields} submitForm={submitForm} onSubmit={handleSubmit} submitButtonLabel='Login' />
      <MediaLoginComponent />
    </CardComponent>
  </PageContainerComponent>
  )
}

export default LoginContainer;
