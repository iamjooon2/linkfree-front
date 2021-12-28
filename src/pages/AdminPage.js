import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #F5F6F8;
  @media only screen and (min-width: 768px){
    max-height : 100vh;
    margin-left : 64px;
    overflow : hidden;
  } 
`;

const AdminSection = styled.section`
  height: 100%;
  height: 100vh;
  position: fixed;
  width: 64px;
  top: 0; left: 0; bottom: 0;
  border-right: 1px solid #d7dce1;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display : none;
    height: 48px;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #d7dce1;
  }
`;

const NavBar = styled.nav``;

const NavBarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 64px;
  padding: 0px 24px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(218, 222, 224);
  transition: color 0.2s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
`;

const NavBarAnchor = styled.a`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0px 40px 0px 0px;
  &:after{
    bottom: -22px;
    content: "";
    display: block;
    height: 1.8px;
    left: 50%;
    position: absolute;
    background: #d7dce1;
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after{
    width: 100%; 
    left: 0; 
  }
`;

const ToolBarBlock = styled.div`
  background-color: #fff;
`;

const ToolBarInnerBlock = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid #d7dce1;
  @media screen and (min-width: 992px){
    padding : 0 24px;
    height: 64px;
  }
`;

const SpanBlock = styled.span`
  flex: 0;
  white-space: nowrap;
  font-weight: 700;
  margin-right: 20px;
`;

const ShareButton = styled.button`
  flex: 0;
  white-space: nowrap;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #d7dce1;
  margin-left: 32px;
  padding: 6px 12px;
  font-size: 14px;
  color: #686d73;
  text-decoration: none;
  cursor: pointer;
  transition: .25s;
  &:hover{
    background-color: #d7dce1;
  }
`;

const AnchorBlock = styled.a`
  text-decoration: underline;
`;

const MakingSection = styled.section`
  height:100%;
`;

const MakingSectionInnerBlock = styled.div``;

const MakingNewComponentButton = styled.button`
  border: none;
  font-family: inherit;
  align-items : center; 
  text-align: center;
  cursor: pointer;
  display: block;
  background: rgb(124, 65, 255);
  border-radius: 12px;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  vertical-align: middle;
  &:hover{
    background : #A071FF;
  }
`;

const ComponentBlock = styled.div`
  display: flex;
  flex-direction : column;
  position: relative;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgb(215 220 225) 0px 2px 0px 0px;
  width: 100%;
  padding-bottom : 16px;
`;

const ComponentInnerBlock = styled.div`
  padding: 16px;
  height: 100%;
  min-height: 448px
  position: relative;
  border : 1px solid #d7dce1;
`;

const ComponentFormInnerBlock = styled.form`
  display : flex;
`;

const ComponentFormBlock = styled.div`
  width: 100%;
  padding-right: 12px;
`;

const TitleBlock = styled.div`
  padding-top: 8px;
  width: 100%;
  height: 100%;
`;

const URLBlock = styled.div`
  padding-top: 8px;
  width: 100%;
  height: 100%;
`;

const DeleteMarkBlock = styled.div`
  padding-top: 8px;
  justify-content: right;
  width: 30px;
  height: 30px;
  &:hover{
    cursor: pointer;
  }
`;

const AdminPage = () =>{
  return (
    <>
      <Wrapper>
        <AdminSection>
        </AdminSection>
        <ToolBarBlock>
          <ToolBarInnerBlock>
            <SpanBlock>My Linktree: </SpanBlock>
            <AnchorBlock>https://junheeyeap.github.com</AnchorBlock>
            <ShareButton>Share</ShareButton>
          </ToolBarInnerBlock>
        </ToolBarBlock>
        <NavBar>
          <NavBarInner>
            <NavBarAnchor><Link to ="/admin/">Links</Link></NavBarAnchor>
            <NavBarAnchor><Link to ="/admin/apperance">Appearnce</Link></NavBarAnchor>
            <NavBarAnchor><Link to ="/admin/settings">Settings</Link></NavBarAnchor>
            <NavBarAnchor><Link to ="/admin/analytics">Analytics</Link></NavBarAnchor>
            <NavBarAnchor><Link to ="/admin/apperance">PRO</Link></NavBarAnchor>
          </NavBarInner>
        </NavBar>
        <MakingSection>
          <MakingSectionInnerBlock>
            <MakingNewComponentButton>
              Add new Link
            </MakingNewComponentButton>
            <ComponentBlock>
              <ComponentInnerBlock>
                <ComponentFormBlock>
                <ComponentFormInnerBlock>
                    <TitleBlock>
                      구글
                    </TitleBlock>
                    <DeleteMarkBlock>
                      X
                    </DeleteMarkBlock>
                  </ComponentFormInnerBlock>
                  <URLBlock>
                      http://google.com
                  </URLBlock>
                </ComponentFormBlock>              
              </ComponentInnerBlock>
            </ComponentBlock>
            <ComponentBlock>
              <ComponentInnerBlock>
                <ComponentFormBlock>
                <ComponentFormInnerBlock>
                    <TitleBlock>
                      네이버
                    </TitleBlock>
                    <DeleteMarkBlock>
                      X
                    </DeleteMarkBlock>
                  </ComponentFormInnerBlock>
                  <URLBlock>
                      http://www.naver.com/
                  </URLBlock>
                </ComponentFormBlock>              
              </ComponentInnerBlock>
            </ComponentBlock>
          </MakingSectionInnerBlock>
        </MakingSection>
      </Wrapper>
    </>
  );
};

export default AdminPage;