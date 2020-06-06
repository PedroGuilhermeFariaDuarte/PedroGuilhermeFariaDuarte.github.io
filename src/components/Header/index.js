import React from 'react';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';

// Style
import { Container, ContainerDarkMod } from './style';

function Header({ callback }) {
  return (
    <Container className="Header_darkMode">
      <h1>Where in the world?</h1>

      <ContainerDarkMod onClick={() => callback()}>
        <IosMoonOutline fontSize={30} />
        <p>Dark Mode</p>
      </ContainerDarkMod>
    </Container>
  );
}

export default Header;
