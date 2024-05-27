// import { useEffect, useState } from "react";
import { useEffect } from 'react';
import usePostKakao from '../hooks/queries/usePostKakao';
import { useNavigate } from 'react-router-dom';
import useGetToken from '../hooks/queries/useGetToken';

const KakaoLoginPage = () => {
  const navigate = useNavigate();

  // let code = new URL(window.location.href).searchParams.get('code');
  // console.log('CODE', code);

  const { kakaoResponse, kakaoLoading, postKakao } = usePostKakao();

  const fetchLogin = async () => {
    try {
      const res = await useGetToken();
      if (res) {
        const token = res.data.access_token;

        // localStorage.setItem('ACCESS_TOKEN', JSON.stringify(token));
        // await handlePostKakao(token);
        await postKakao(token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLogin();
  }, [fetchLogin]);

  useEffect(() => {
    if (!kakaoLoading && kakaoResponse) {
      if (kakaoResponse.isAlreadyUser) {
        navigate('/delete');
      } else {
        navigate('/unregistered');
      }
    }
  }, [kakaoLoading, kakaoResponse, navigate]);

  return <></>;
};

export default KakaoLoginPage;
