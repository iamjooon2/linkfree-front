import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const BackGround = styled.div`
  padding: 64px 0px;
`;

const WhiteBox = styled.div`
  height: 400px;
  background: white;
  max-width: 640px;
  margin: 0px auto;
  border-radius: 16px;
  border: 1px solid rgb(218, 222, 224);
  padding: 48px 80px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Home = () => {
  return (
    <BackGround>
      <Header />
      <WhiteBox>
        <div className = "signin">
          <Link to = "/login">Sign in</Link>
        </div>
        <div className = "signup">
          <Link to = "/login">Sign up</Link>
        </div>
      </WhiteBox>
    </BackGround>
  )
};

export default Home;