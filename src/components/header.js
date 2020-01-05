import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import { Heading, NavLink, NavLinkList} from './styles/header.styles';

const Nav = () => {
  const navLinks = [
    { href:'/about', label: 'About'},
    { href:'/portfolio', label: 'Portfolio'},
    { href:'/contact', label: 'Contact'},
  ];

  return (
    <nav>
      <NavLinkList>
        {
          navLinks.map(link => (
            <NavLink>
              <Link to={link.href}>{link.label}</Link>
            </NavLink>
          ))
        }
      </NavLinkList>
    </nav>
  );

};

const Header = ({ siteTitle }) => (
  <Heading>
    <div>
      <Link to="/">
        <h1>{ siteTitle }</h1>
      </Link>
    </div>
    <Nav />
  </Heading>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
