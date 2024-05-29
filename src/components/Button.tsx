import styled from 'styled-components';

interface ButtonInterface {
  message: string;
  onClick: VoidFunction;
  className?: string;
}

const Button = ({ message, onClick, className }: ButtonInterface) => {
  return (
    <ButtonWrapper onClick={onClick} className={className}>
      {message}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26rem;
  height: 5.2rem;
  margin-top: 7.4rem;

  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.white};

  .unregistered {
    margin-top: 9rem;
  }
`;
