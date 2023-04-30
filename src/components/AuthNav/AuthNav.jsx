
import { AuthNavContainer, LinkAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <LinkAuth to="/register">Register</LinkAuth>
      <LinkAuth to="/login">Log In</LinkAuth>
    </AuthNavContainer>
  );
};
