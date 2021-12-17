import React from 'react';
import { Link } from 'react-router-dom';
import { AnnounceBlock, 
          InputBlock,
          AuthTemplate, 
          ButtonBlock, 
          RequestBlock } from '../components/AuthForm';


const LoginPage = () => {
  return (
    <AuthTemplate>
      <form>
      <AnnounceBlock>Create an account for free!</AnnounceBlock>
          <InputBlock placeholder = "@Username" />
          <InputBlock placeholder = "Email" type = "email" />
          <InputBlock placeholder = "Password" type = "password"/>
          <ButtonBlock>Sign up with Email</ButtonBlock>
      </form>
      <RequestBlock><Link to = "/register"> Forgot Account?</Link></RequestBlock>
      <RequestBlock><Link to = "/login">I already have an account</Link></RequestBlock>
    </AuthTemplate>    
  );
};

export default LoginPage;