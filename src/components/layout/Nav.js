import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  width: 90%;
  height: 60px;
  background-color: yellow;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
`

const NavBox = styled.div`
  width: ${props => props.width ? `${props.width}px` : '200px'};
  display: flex;
  height: 60px;
  background-color: red;
  align-items:center;
`
const LogoBox = styled.div`
  width: 130px;
  background-color: green;
  font-size: 2.7rem;
  font-family: var(--font-Lobster);
  color:white;
`
const NavMenu = styled.div`
  width: 100px;
  background-color: yellowgreen;
  margin: 0 10px;
  font-family:var(--font-Roboto-Medium);
  font-size: 1.3rem;
`
function Nav() {
  return (
    <Navbar>
      <NavBox width={800}>
        <LogoBox>BEAU</LogoBox>
        <NavMenu>Homme</NavMenu>
        <NavMenu>Femme</NavMenu>
        <NavMenu>Joaillier</NavMenu>
        <NavMenu>Enterprise</NavMenu>

      </NavBox>
      <NavBox width={100}>
        <div>LOGIN</div>
      </NavBox>
    </Navbar>
  );
}

export default Nav;