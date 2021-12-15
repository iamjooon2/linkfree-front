import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  padding-left : 1rem;
  padding-right : 1rem;
  position : fixed;
  width : 100%;
  height : 30px;
  border-bottom : gray;
  background : white;
  margin : 0 auto;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        앙 헤더띠
      </HeaderBlock>
    </>
  )
}

export default Header;