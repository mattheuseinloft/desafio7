import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  selected: 'list' | 'import';
}
/* eslint-disable */
const Header: React.FC<HeaderProps> = ({ size = 'large', selected }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <Nav selected={selected}>
        <Link to="/">Listagem</Link>
        <Link to="/import">Importar</Link>
      </Nav>
    </header>
  </Container>
);
/* eslint-enable */

export default Header;
