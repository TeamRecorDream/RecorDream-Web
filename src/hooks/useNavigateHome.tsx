import { useNavigate } from 'react-router-dom';

const useNavigateHome = () => {
  const navigate = useNavigate();
  navigate('/');
  return <></>;
};

export default useNavigateHome;
