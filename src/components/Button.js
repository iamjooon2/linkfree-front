import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border : none;
  border-radius : 4px;
  font-size : 1rem;
  font-weight : bold;
  padding : 0.25rem;
  color: white;
  outline: none;
  cursor : pointer;
  background: lightgray;
  &:hover {
    background: #DCDCDC;
    
  }
`;

const Button = props => < StyledButton {...props} />;

export default Button;