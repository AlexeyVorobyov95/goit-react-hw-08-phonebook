import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: auto;
  text-align: center;
  height: auto;
  
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(254, 246, 76, 1) 53%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const FooterLink = styled(Link)`
  font-size: 31px;
  color: rgba(129, 225, 247, 1);
  font-weight: 700;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(129, 225, 247, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;
