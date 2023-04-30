import { LinkPages, Nav } from './Navigation.styled';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkPages to="/">Home</LinkPages>
      {isLoggedIn && <LinkPages to="/contacts">Contacts</LinkPages>}
    </Nav>
  );
};
