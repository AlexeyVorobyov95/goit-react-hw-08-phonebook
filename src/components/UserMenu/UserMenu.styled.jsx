import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 7px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 700;
  width: 100px;
  color: #76cde4;
  background: #1c2f50;
  padding: 15px;
  border-radius: 20px;
  text-align: center;
  &:hover,
  :focus {
    color: yellow;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  width: auto;
  color: #76cde4;
  background: #1c2f50;
  padding: 15px;
  border-radius: 20px;
  text-align: center;
`;
