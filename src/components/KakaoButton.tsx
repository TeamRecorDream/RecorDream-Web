import styled from "styled-components";
import { IcKakao } from "../assets/svg";
import useKakaoLogin from "../hooks/useKakaoLogin";

const KakaoButton = () => {
  return (
    <KakaoButtonWrapper onClick={useKakaoLogin}>
      <KakaoIcon />
      <KakaoText>카카오 로그인</KakaoText>
    </KakaoButtonWrapper>
  );
};

export default KakaoButton;

const KakaoButtonWrapper = styled.div`
  width: 31rem;
  height: 5.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.kakao};
`;

const KakaoIcon = styled(IcKakao)`
  width: 1.8rem;
  height: 1.8rem;
`;

const KakaoText = styled.span`
  font-size: 1.4rem;
`;
