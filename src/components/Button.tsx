import styled from "styled-components";

interface ButtonInterface {
  color: string;
  message: string;
}

const Button = ({ color, message }: ButtonInterface) => {
  return <ButtonWrapper $color={color}>{message}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.div<{ $color: string }>`
  width: 38rem;
  height: 7.8rem;
  font-size: 2.2rem;
  border-radius: 1.8rem;
  border-color: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme, $color }) => theme.colors[$color]};
`;
