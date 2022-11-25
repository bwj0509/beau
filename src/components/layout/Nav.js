import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Navbar = styled.div`
  position: absolute;
  width: 90%;
  height: 60px;
  background-color: #64646414;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 2;
  &:hover{
    background-color: #000000e3;
  }
  transition: all 100ms ease-in;
`
const NavBox = styled.div`
  width: ${props => props.width ? `${props.width}px` : '200px'};
  display: flex;
  height: 60px;
  align-items:center;
`
const LogoBox = styled.div`
  width: 130px;
  font-size: 2.7rem;
  font-family: var(--font-Lobster);
  color:white;
`
const NavMenu = styled.div`
  width: 100px;
  margin: 0 10px;
  font-family:var(--font-Roboto-Regular);
  font-size: 1.3rem;
  text-align: center;
  color: white;
`
function Nav() {
  return (
    <Navbar>
      <NavBox width={800}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <LogoBox>Beau</LogoBox>
        </Link>
        <Link to='/man' style={{ textDecoration: 'none' }}>
          <NavMenu>Man</NavMenu>
        </Link>
        <Link to='/woman' style={{ textDecoration: 'none' }}>
          <NavMenu>Woman</NavMenu>
        </Link>
        <Link to='/jewel' style={{ textDecoration: 'none' }}>
          <NavMenu>jewel</NavMenu>
        </Link>
        <Link to='/enterprisen' style={{ textDecoration: 'none' }}>
          <NavMenu>enterprise</NavMenu>
        </Link>
      </NavBox>
      <NavBox width={100}>
        <div>LOGIN</div>
      </NavBox>
    </Navbar>
  );
}

export default Nav;