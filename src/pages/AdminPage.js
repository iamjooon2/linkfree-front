import React from 'react';
import styled from 'styled-components';

const FirstSection = styled.section`
  height: 100%;
  max-height: 100vh;
  position: fixed;
  width: 64px;
  top: 0; left: 0; bottom: 0;
  background-color : white;
  border-right: 1px solid #d7dce1;
  z-index:1;
  @media screen and (max-width: 768px) {
    display : none;
  }
`;

const SecondSection = styled.section`
  display : flex;
  flex-direction : column;
  align-items: center;
  height: 48px;
  font-size: 14px;
`;

const ThirdSection = styled.section`
  height: 100%;
  max-height: 100vh;
  top: 0; right: 0; bottom: 0;
  position : fixed;
  width: 64px;
  border-left: 1px solid #d7dce1;
  z-index : 1;
  @media screen and (max-width: 768px) {
    display : none;
  }
`;

const InnerDivBlock = styled.div`
  flex-direction:column;
  align-items : center;
  height: 48px;
  border-bottom: 1px solid #d7dce1;
`;

const NavBlock = styled.nav`
  display : flex;
  justify-content : column;
  left : 0;
`;

const LinkShareButton = styled.button`
  border-radius: 4px;
  background-color: white;
  border: 1px solid #d7dce1;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color : #F5F6F8;
  }
`;

const LinkShareBlock = styled.div`
  
`;

const LinkSpanBlock = styled.span`
  
`;

const SharedAnchorBlock = styled.a`

`;


const AdminPage = () => {
  return (
  <>
    <FirstSection>1</FirstSection>
    <InnerDivBlock>
      <SecondSection>
        <NavBlock>
         앙 NAV블럭
        </NavBlock>
        <InnerDivBlock>
          앙DIV 
        </InnerDivBlock>
        <InnerDivBlock>
          앙DIV2 
        </InnerDivBlock>
      </SecondSection>
    </InnerDivBlock>
    <LinkShareBlock>
    <SharedAnchorBlock link = "https://github.com/junheeyeap">
    </SharedAnchorBlock>
    <LinkShareButton>Share</LinkShareButton>
        </LinkShareBlock>
    <ThirdSection>
         top
    </ThirdSection>
  </>
  );
}

export default AdminPage;