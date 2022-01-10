import React ,{useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LinkComponentsContainer from '../containers/LinkComponentContainer';
import { MdClose } from 'react-icons/md';

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
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after{
    width: 100%; 
    left: 0; 
  }`;

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
  @media screen and (min-width: 768px){
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

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display : flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 60em) {
  height : 100vh;
  width: 100vw;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const ModalButton = styled.button`
  padding: 10px 24px;
  background: #141414;
  color: #fff;
  border: none;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
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


const AdminPage = () =>{

  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalContent>
                <form>
                  <InputBlock placeholder = "id"/>
                  <InputBlock placeholder = "title"/>
                  <InputBlock placeholder = "link"/>
                <ModalButton onClick>Post</ModalButton>
                </form>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
      ) : null}
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
            <MakingNewComponentButton onClick = {openModal}>
              Add new Link
            </MakingNewComponentButton>
            <LinkComponentsContainer/>
          </MakingSectionInnerBlock>
        </MakingSection>
      </Wrapper>
    </>
  );
};

export default AdminPage;