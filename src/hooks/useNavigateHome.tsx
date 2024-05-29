import { useNavigate } from 'react-router-dom';

const useNavigateHome = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  return navigateHome;
};

export default useNavigateHome;
