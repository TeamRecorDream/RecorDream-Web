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
        navigate('/delete');
      }
    } catch (error) {
      navigate('/unregistered');
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    useGetToken()
      .then((res) => {
        if (res) {
          const token = res.data.access_token;
          localStorage.setItem('token', JSON.stringify(token));
          handlePostKakao(token);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <></>;
};

export default KakaoLoginPage;
