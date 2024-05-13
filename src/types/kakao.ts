export interface KakaoLoginResponseType extends Response {
  data: {
    data: {
      userId: string;
      isAlreadyUser: boolean;
      accessToken: string;
      refreshToken: string;
      nickname: string;
    };
  };
}

export interface KakaoLoginRequestType {
  kakaoToken: string;
  fcmToken: string;
}
