import { useNavigate } from 'react-router-dom';
import user from '../../apis/user';

export const useDeleteUser = () => {
  const deleteUser = async (accessToken: string) => {
    console.log('clicked?');
    const navigate = useNavigate();
    try {
      await user.deleteUser(accessToken);
      navigate('/complete');
    } catch (err) {
      console.error(err);
      navigate('/error');
    }
  };

  return { deleteUser };
};
