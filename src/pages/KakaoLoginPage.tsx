// import { useEffect, useState } from "react";
import { useEffect } from 'react';
import usePostKakao from '../hooks/queries/usePostKakao';
import { useNavigate } from 'react-router-dom';
import useGetToken from '../hooks/queries/useGetToken';

const KakaoLoginPage = () => {
  const navigate = useNavigate();

  // let code = new URL(window.location.href).searchParams.get('code');
  // console.log('CODE', code);

  const { kakaoResponse, kakaoError, kakaoLoading, postKakao } = usePostKakao();

  const handlePostKakao = async (code: string) => {
    try {
      await postKakao(code);
      if (!kakaoError && !kakaoLoading && kakaoResponse) {
        console.log('이동 전 콘솔 확인', kakaoResponse);
        if (kakaoResponse.isAlreadyUser) {
          navigate('/delete');
        } else {
          navigate('/unregistered');
        }
      }
    } catch (error) {
      console.log('ERROR', error);
      navigate('/unregistered');
    }
  };

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const res = await useGetToken();
        if (res) {
          const token = res.data.access_token;
          // localStorage.setItem('ACCESS_TOKEN', JSON.stringify(token));
          await handlePostKakao(token);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchLogin();
  }, []);

  return <></>;
};

export default KakaoLoginPage;
