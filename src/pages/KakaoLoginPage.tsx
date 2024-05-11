import { useState } from "react";

const KakaoLoginPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("CODE", code);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  console.log("ACCESS_TOKEN", accessToken);
  if (accessToken) return;
  return <></>;
};

export default KakaoLoginPage;
