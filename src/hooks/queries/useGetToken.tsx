import axios from 'axios';
import { REDIRECT_URI, REST_API_KEY } from '../../utils/login';

const useGetToken = async () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const res = axios.post(
    'https://kauth.kakao.com/oauth/token',
    {
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    },
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }
  );
  return res;
};
export default useGetToken;
