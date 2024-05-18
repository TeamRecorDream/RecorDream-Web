import { kakaoURL } from '../utils/login';

const useKakaoLogin = () => {
  window.location.replace(kakaoURL);

  return <></>;
};

export default useKakaoLogin;
