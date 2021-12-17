import React from 'react';
import {Link} from 'react-router-dom'; 
import { AnnounceBlock, 
        InputBlock, 
        AuthTemplate,
        ButtonBlock, 
        RequestBlock } from '../components/AuthForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <form>
      <AnnounceBlock>Sign in Your LinkFree Account!</AnnounceBlock>
          <InputBlock placeholder = "@Username" />
          <InputBlock placeholder = "Password" type = "password"/>
          <ButtonBlock>Log in</ButtonBlock>
      </form>
      <RequestBlock><Link to = "/register">Forgot Account?</Link></RequestBlock>
    </AuthTemplate>
  )
};

export default LoginPage;