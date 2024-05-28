import styled from 'styled-components';
import { useDeleteUser } from '../hooks/queries/useDeleteUser';

interface DeleteButtonInterface {
  message: string;
}

const DeleteButton = ({ message }: DeleteButtonInterface) => {
  const { deleteUser } = useDeleteUser();
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if (!accessToken) {
    console.error('Access token is missing');
    return null;
  }

  const handleDeleteUser = () => {
    deleteUser(accessToken);
  };

  return <ButtonWrapper onClick={handleDeleteUser}>{message}</ButtonWrapper>;
};

export default DeleteButton;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26rem;
  height: 5.2rem;

  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.red};

  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.red};
`;
