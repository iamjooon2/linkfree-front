import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display : flex;
  justify-content : center;
  align-items :center;
  flex-direction : column;
  width : 800px;
  max-width : 97%;
  padding : 1rem;
  background-color : white;
  box-shadow: 0 0 10px rgba(0,0,0,0.025);
`;

const InputBlock = styled.input`
  padding : 10px;
  justify-content: center;
  align-items : center;
  border-radius : 7px;
  width : 98%;
  border : none;
  box-shadow : 0px 0px 3px gray;
  margin-bottom : 10px;
`;

const ButtonBlock = styled.button`
  margin-top : 5px;
  padding : 4px;
  border : 0px;
  border-radius : 4px;
  width : 98%;
  height : 28px;
  box-shadow : 0px 0px 3px gray;
  &:hover {
    background-color : #6344C6;
    color : #DADEE0;
    cursor : pointer;
  }
`;

const AnnounceBlock = styled.div`
  padding-bottom : 20px;
`;

const RequestBlock = styled.div`
  margin-top : 10px;
  &:hover{
  text-decoration:underline; 
  cursor : pointer;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <form>
      <AnnounceBlock>Create an account for free!</AnnounceBlock>
          <InputBlock placeholder = "@Username" />
          <InputBlock placeholder = "Email" type = "email" />
          <InputBlock placeholder = "Password" type = "password"/>
          <ButtonBlock>Sign up with Email</ButtonBlock>
      </form>
      <RequestBlock><Link to = "/register"> Forgot Account?</Link></RequestBlock>
      <RequestBlock><Link to = "/login">I already have an account</Link></RequestBlock>
    </Container>
  );
};

export default LoginPage;