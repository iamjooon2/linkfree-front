import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom'; 
import { Wrapper,
        AnnounceBlock, 
        InputBlock,
        ButtonBlock, 
        RequestBlock } from '../components/UI/AuthForm';
import {useDispatch} from 'react-redux';

const LoginPage = ({id, password}) => {

  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() =>{
    dispatch(login());
  }, [id, password]);

  return (
    <Wrapper onSubmit = {onSubmitForm}>
      <form>
      <AnnounceBlock>Sign in Your LinkFree Account!</AnnounceBlock>
          <InputBlock placeholder = "@Username" value = {id} onChange = {onChangeId}/>
          <InputBlock placeholder = "Password" type = "password"/>
          <ButtonBlock>Log in</ButtonBlock>
      </form>
      <RequestBlock><Link to = "/register">Forgot Account?</Link></RequestBlock>
    </Wrapper>
  )
};

export default LoginPage;