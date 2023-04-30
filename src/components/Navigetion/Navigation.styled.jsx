import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  font-size: 24px;
  font-weight: 700;
  align-items: center;
  
`;

export const LinkPages = styled(NavLink)`
  color: #76cde4;
  &.active {
    color: yellow;
  }
`;
