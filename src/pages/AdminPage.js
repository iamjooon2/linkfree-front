import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  @media only screen and (min-width: 768px){
    max-height : 100vh;
    margin-left : 64px;
    overflow : hidden;
  }
`;

const LeftSideSection = styled.section`
  height: 100%;
  height: 100vh;
  position: fixed;
  width: 64px;
  top: 0; left: 0; bottom: 0;
  background-color: white;
  border-right: 1px solid #d7dce1;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display : none;
    background-color: #ffffff;
    height: 48px;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #d7dce1;
  }
`;

const MainSection = styled.section `
  padding-bottom : 0!important;
  position : relative;
  @media screen and (min-width: 768px){
    height:100vh;
    display:flex;
    flex-direction: column;
  }
`;

const RightSideSection = styled.section`
  @media screen and (min-width: 768px){
  position: relative; 
  height: 100%;
  top : 0; right: 0; bottom:0;
  min-height : 100vh;
  width: 300px;
  border-left: 1px solid #d7dce1;
  }
`;

const ToolBarBlock = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
`;

const ToolBarInnerBlock = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
  padding: 0 16px;
  border-bottom: 1px solid #d7dce1;
`;


const SpanBlock = styled.span`
  flex: 0;
  white-space: nowrap;
  font-weight: 700;
  margin-right: 4px;
`;

const ShareButton = styled.button`
  flex: 0;
  white-space: nowrap;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #d7dce1;
  padding: 6px 12px;
  font-size: 14px;
  color: #686d73;
  text-decoration: none;
  cursor: pointer;
`;

const AnchorBlock = styled.a`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;
`;

const PreviewWrapper = styled.div`
  width: 352px;
  height: 724px;
  padding: 16px;
  display: block;
  border-radius : 4px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: top left;
`;

const PhoneBlock = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 24px 12px;
  height: 100%;
  width: 100%;
`;

const MadeComponentBlock = styled.div`
  margin: 0px auto;
  height: 100%;
  width: 100%;
  max-width: 680px;
  padding-bottom: 80px;
`;

const NavBar = styled.nav`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden !important;
`;

const NavBarInner = styled.div`
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  justify-content: flex-start;
  height: 64px;
  padding: 0px 24px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(218, 222, 224);
  transition: color 0.2s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
  @media screen and (max-width: 992px){
    height: 48px;
  }
  @media screen and (max-width: 767px){
    padding: 0px 16px;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

const NavBarAnchor = styled.a`
  font-size: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0px 40px 0px 0px;
`;

const AnalysticHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0px 24px;
  height: 64px;
  border-bottom: 1px solid rgb(215, 220, 225);
  font-size: 14px;
  font-weight: bold;
`;

const LinkEditingSection = styled.section`
  width: 100%;
`;

const LinkEditingBlock = styled.div`
  padding: 24px 0px;
  min-height: 448px;
  @media only screen and (min-width: 767px){
  padding: 0 24px;
  height: 64px;
}
  @media only screen and (min-width: 576px){
  padding: 24px 0px;
}
`;

const AdminPage = () => {
  return (
  <>
  <Wrapper>
    <LeftSideSection>왼쪽헤더</LeftSideSection>
    <RightSideSection>
      <ToolBarBlock>
        <ToolBarInnerBlock>
          <SpanBlock>My Linktree</SpanBlock>
          <AnchorBlock>https://junheeyeap.github.com</AnchorBlock>
          <ShareButton>Share</ShareButton>
        </ToolBarInnerBlock>
      </ToolBarBlock>
      <PreviewWrapper>
        <PhoneBlock>
          <MadeComponentBlock>
            폰 내용
          </MadeComponentBlock>
        </PhoneBlock>
      </PreviewWrapper>
    </RightSideSection>
    <NavBar>
      <NavBarInner>
        <NavBarAnchor><Link to ="/admin/">Links</Link></NavBarAnchor>
        <NavBarAnchor><Link to ="/admin/apperance">Appearnce</Link></NavBarAnchor>
        <NavBarAnchor><Link to ="/admin/settings">Settings</Link></NavBarAnchor>
        <NavBarAnchor><Link to ="/admin/analytics">Analytics</Link></NavBarAnchor>
        <NavBarAnchor><Link to ="/admin/apperance">PRO</Link></NavBarAnchor>
      </NavBarInner>
    </NavBar>
    <MainSection>
      <AnalysticHeader>
        평가 헤더 내용
      </AnalysticHeader>
      <LinkEditingSection>
        <LinkEditingBlock>

        </LinkEditingBlock>
      </LinkEditingSection>
    </MainSection>
  </Wrapper>
  </>
  );
}

export default AdminPage;