import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

 const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  color : black;
  z-index: -1;
  box-shadow: 0 2px 2px -0.5px rgba(0,0,0,.2);
`;

const NavLink = styled.a`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  border-bottom : 1rem;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled.a`
  border-radius: 4px;
  background: #fff;
  color: #010606;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #28BF7B;
    color: #010606;
  }
`;

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <Link to ="/">
          LinkFree
        </Link>
        </NavLink>

        <NavBtn> 
          <NavBtnLink> <Link to = "/login">Log in</Link></NavBtnLink>
          <NavBtnLink><Link to = "/register">Sign in</Link></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;