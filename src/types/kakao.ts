export interface KakaoLoginResponseType extends Response {
  status: number;
  success: boolean;
  message: string;
  data: KakaoLoginInfoType;
}

export interface KakaoLoginInfoType {
  userId: string;
  isAlreadyUser: boolean;
  accessToken: string;
  refreshToken: string;
  nickname: string;
}

export interface KakaoLoginRequestType {
  kakaoToken: string;
  fcmToken: string;
}
