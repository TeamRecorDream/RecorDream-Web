import styled from 'styled-components';
import { useDeleteUser } from '../hooks/queries/useDeleteUser';
import { useNavigate } from 'react-router-dom';

interface DeleteButtonInterface {
  message: string;
}

const DeleteButton = ({ message }: DeleteButtonInterface) => {
  const { deleteUser } = useDeleteUser();
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  const navigate = useNavigate();

  if (!accessToken) {
    console.error('Access token is missing');
    return null;
  }

  const handleDeleteUser = async () => {
    const result = await deleteUser(accessToken);
    if (result.success) {
      navigate('/complete');
    } else {
      navigate('/error');
    }
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
  margin-top: 7.4rem;

  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.red};

  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.red};
`;
