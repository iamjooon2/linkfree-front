import React from 'react';
import styled from 'styled-components';

const AuthFormBlock = styled.div`
  h3 {
  margin : 0;
  margin-bottom : 0;
  }
`;

const StyledInput = styled.input`
  font-size : 1rem;
  border : none;
  border-bottom : 1px solid lightgray;
  padding-bottom : 0.5rem;
  outline: none;
  width : 100%;
  &:focus {
    border-bottom : 1px solid lightgray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <form>
        <StyledInput placeholder = "Username" />
        <StyledInput placeholder = "Password" type = "password" />
      </form>
    </AuthFormBlock>
  )
}

export default AuthForm;