import styled from 'styled-components';

const fontStyled = ['padding: 10px', 'font-weight: 400', 'font-size: 16px'];

export const Input = styled.input`
  ${fontStyled.map(value => value).join('; ')};
  width: 400px;
`;

export const Button = styled.button`
  ${fontStyled.map(value => value).join('; ')}
`;
