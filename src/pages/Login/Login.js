import { LoginForm } from 'components/LoginForm/LoginForm';

import { Title, Container } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <LoginForm/>
    </Container>
  );
}
