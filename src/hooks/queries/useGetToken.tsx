import axios from 'axios';
import { REDIRECT_URI, REST_API_KEY, CLIENT_SECRET } from '../../utils/login';

const useGetToken = async () => {
  const code = new URL(window.location.href).searchParams.get('code');

  if (!code) {
    throw new Error('Authorization code not found');
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('client_id', REST_API_KEY);
  params.append('redirect_uri', REDIRECT_URI);
  params.append('code', code);
  if (CLIENT_SECRET) {
    params.append('client_secret', CLIENT_SECRET);
  }

  const res = axios.post('https://kauth.kakao.com/oauth/token', params, {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  return res;
};
export default useGetToken;
