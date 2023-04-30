import styled from '@emotion/styled';

export const Form = styled.form`
  display: block;
  width: 400px;
  height: auto;
  padding: 20px;
  outline: 3px solid #1c2f50;
  border-radius: 5px;
  background: #1c2f50;
`;

export const Input = styled.input`
  width: 380px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  outline: none;
  border: none;
  background: rgba(129, 225, 247, 1);
  color: #1c2f50;
  padding: 10px;
  font-size: 18px;
`;

export const Label = styled.label`
  text-align: initial;
  display: block;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  margin-top: 80px;
  width: 250px;
  color: #1c2f50;
  background: rgba(129, 225, 247, 1);
  padding: 15px;
  border-radius: 20px;
  font-size: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    color: yellow;
  }
`;
export const Span = styled.span`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 24px;
  display: block;
  margin-bottom: 5px;
  color: rgba(129, 225, 247, 1);
`;
