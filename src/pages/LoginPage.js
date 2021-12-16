import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

const Container = styled.div`
  display : flex;
  justify-content : center;
  align-items :center;
  flex-direction : column;
  width : 800px;
  max-width : 97%;
  background-color : white;
  box-shadow: 0 0 10px rgba(0,0,0,0.025);
  margin-left : 30px;
  margin-right : 30px;
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
  &:hover {
    background-color : #6344C6;
    color : #DADEE0;
    cursor : pointer;
  }
`;

const AnnounceBlock = styled.div`
  padding-bottom : 20px;
`;

const RequestBlock = styled.a`
  margin-top : 10px;
  &:hover{
  text-decoration : underline; 
  cursor : pointer;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <form>
      <AnnounceBlock>Sign in Your LinkFree Account!</AnnounceBlock>
          <InputBlock placeholder = "@Username" />
          <InputBlock placeholder = "Password" type = "password"/>
          <ButtonBlock>Log in</ButtonBlock>
      </form>
      <RequestBlock><Link to = "/register">Forgot Account?</Link></RequestBlock>
    </Container>
  )
};

export default LoginPage;