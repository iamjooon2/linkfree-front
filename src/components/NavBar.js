import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  padding: 0 2rem ;
  display: flex;
  justify-content: space-between;
  align-items : center;
  flex-wrap: wrap;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 2px -0.5px rgba(0,0,0,0.2);
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
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #28BF7B;
    color: #010606;
  }
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const MenuLink = styled.nav`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  justify-content:center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //햄버거바로 써먹기위한 useState
  return (
    <Nav>
      <Link to ="/">LinkFree</Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink><Link to = '/templates'> templates </Link></MenuLink>
        <MenuLink><Link to = '/blog'> blog </Link></MenuLink>
        <MenuLink><Link to = '/prcing'> pricing </Link></MenuLink>
        <MenuLink><Link to = '/help'> help </Link></MenuLink>
      </Menu>
      <NavBtn> 
          <NavBtnLink><Link to = "/login">Log in</Link></NavBtnLink>
          <NavBtnLink><Link to = "/register">Sign in</Link></NavBtnLink> 
      </NavBtn>
    </Nav>
  );
};

export default Navbar;