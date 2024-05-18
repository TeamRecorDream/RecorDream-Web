import styled from 'styled-components';

interface ButtonInterface {
  color: string;
  borderColor?: string;
  message: string;
  onClick: VoidFunction;
}

const Button = ({ color, borderColor, message, onClick }: ButtonInterface) => {
  return (
    <ButtonWrapper $color={color} $borderColor={borderColor} onClick={onClick}>
      {message}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div<{ $color: string; $borderColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26rem;
  height: 5.2rem;

  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme, $color }) => theme.colors[$color]};

  border-radius: 1.8rem;
  border: 1px solid
    ${({ theme, $borderColor }) => ($borderColor ? theme.colors[$borderColor] : 'white')};
`;
