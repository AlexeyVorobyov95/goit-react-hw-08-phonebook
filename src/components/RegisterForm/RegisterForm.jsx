import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Button, Form, Input, Label, Span } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
    name: form.elements.name.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Label>
        <Span>Username</Span>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
