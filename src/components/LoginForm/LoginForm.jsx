import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Button, Form, Input, Label, Span } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
