import Button from '../components/Button';
import useNavigateHome from '../hooks/useNavigateHome';

const ErrorPage = () => {
  const navigateHome = useNavigateHome();
  return (
    <div>
      <span>에러가 발생했습니다!</span>
      <Button message="홈으로 이동" onClick={navigateHome} />
    </div>
  );
};

export default ErrorPage;
