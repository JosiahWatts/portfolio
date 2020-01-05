import styled from 'styled-components';

const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const NavLinkList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  margin-left: 1em;
`;

export { Heading, NavLinkList, NavLink};
