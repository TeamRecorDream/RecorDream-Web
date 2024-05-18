import { KakaoLoginRequestType } from '../types/kakao';
import { api } from './api';

const BASE_PATH = '/auth/login';

const kakao = {
  postKakaoLogin: ({ kakaoToken, fcmToken }: KakaoLoginRequestType) =>
    api.post(`${BASE_PATH}`, { kakaoToken: kakaoToken, fcmToken: fcmToken }),
};

export default kakao;
