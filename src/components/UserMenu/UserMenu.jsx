import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Container, Text } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button"
        onClick={onLogOut}
      >
        Logout
      </Button>
    </Container>
  );
};
