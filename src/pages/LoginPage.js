import React from 'react';
import {Link} from 'react-router-dom'; 
import { Wrapper,
        AnnounceBlock, 
        InputBlock,
        ButtonBlock, 
        RequestBlock } from '../components/AuthForm';

const LoginPage = () => {
  return (
    <Wrapper>
      <form>
      <AnnounceBlock>Sign in Your LinkFree Account!</AnnounceBlock>
          <InputBlock placeholder = "@Username" />
          <InputBlock placeholder = "Password" type = "password"/>
          <ButtonBlock>Log in</ButtonBlock>
      </form>
      <RequestBlock><Link to = "/register">Forgot Account?</Link></RequestBlock>
    </Wrapper>
  )
};

export default LoginPage;