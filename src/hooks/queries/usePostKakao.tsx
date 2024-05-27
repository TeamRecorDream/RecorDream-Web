import { useCallback, useState } from 'react';
import kakao from '../../apis/kakao';
import { AxiosError } from 'axios';
import { KakaoLoginInfoType, KakaoLoginResponseType } from '../../types/kakao';

const usePostKakao = () => {
  const [kakaoResponse, setKakaoResponse] = useState<KakaoLoginInfoType | null>(null);
  const [kakaoError, setKakaoError] = useState<AxiosError | null>(null);
  const [kakaoLoading, setKakaoLoading] = useState(false);

  const postKakao = useCallback(async (accessToken: string) => {
    if (!accessToken) return;
    setKakaoLoading(true);
    setKakaoError(null);
    try {
      console.log('TYPE', typeof accessToken);
      console.log('TOKEN', accessToken);
      const res = await kakao.postKakaoLogin({ kakaoToken: accessToken, fcmToken: '0' });
      const data: KakaoLoginResponseType = res.data;
      console.log('data', data);
      setKakaoResponse({
        userId: data.data.userId,
        accessToken: data.data.accessToken,
        isAlreadyUser: data.data.isAlreadyUser,
        refreshToken: data.data.refreshToken,
        nickname: data.data.nickname,
      });
      console.log('응답이 왔나요?', kakaoResponse);
      localStorage.setItem('ACCESS_TOKEN', data.data.accessToken);
      localStorage.setItem('REFRESH_TOKEN', data.data.refreshToken);
    } catch (err) {
      setKakaoError(err as AxiosError);
      console.log('에러 발생', err);
    } finally {
      setKakaoLoading(false);
    }
  }, []);

  return { kakaoResponse, kakaoError, kakaoLoading, postKakao };
};

export default usePostKakao;