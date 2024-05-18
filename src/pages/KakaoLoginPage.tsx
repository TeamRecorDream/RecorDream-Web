// import { useEffect, useState } from "react";
import { useEffect } from "react";
import usePostKakao from "../hooks/queries/usePostKakao";
import { useNavigate } from "react-router-dom";

const KakaoLoginPage = () => {
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");
  console.log("CODE", code);
  if (!code) code = "";
  const { kakaoResponse, kakaoError, kakaoLoading, postKakao } = usePostKakao();

  const handlePostKakao = async (code: string) => {
    try {
      await postKakao(code);
      if (!kakaoError && !kakaoLoading && kakaoResponse) {
        navigate("/delete");
      }
    } catch (error) {
      navigate("/unregistered");
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    if (code) {
      handlePostKakao(code);
    }
  }, [code]);

  return <></>;
};

export default KakaoLoginPage;
