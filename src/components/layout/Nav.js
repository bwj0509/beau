import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  position: absolute;
  width: 90%;
  height: 60px;
  background-color: #64646414;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 2;
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
        <LogoBox>Beau</LogoBox>
        <NavMenu>Man</NavMenu>
        <NavMenu>Woman</NavMenu>
        <NavMenu>Jewel</NavMenu>
        <NavMenu>Enterprise</NavMenu>
      </NavBox>
      <NavBox width={100}>
        <div>LOGIN</div>
      </NavBox>
    </Navbar>
  );
}

export default Nav;