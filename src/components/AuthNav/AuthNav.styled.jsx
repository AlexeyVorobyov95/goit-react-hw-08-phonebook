import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  gap: 20px;
  align-items: center;
`;

export const LinkAuth = styled(NavLink)`
  width: 100px;
  color: #76cde4;
  background: #1c2f50;
  padding: 15px;
  border-radius: 20px;
  text-align: center;
  &.active {
  color: yellow;
  }
`;