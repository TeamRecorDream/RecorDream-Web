import styled from "styled-components";
import { IcPcLogo } from "../assets/svg";
import KakaoButton from "../components/KakaoButton";
import IcPcBackgrStars from "../../public/svg/ic_pc_backgr_stars.svg";
const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LogoSection>
        <IcPcLogo />
      </LogoSection>
      <KakaoButton />
      <LoginMessage>로그인 후 이용이 가능합니다.</LoginMessage>
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;

  background-image: url(${IcPcBackgrStars});
  object-fit: cover;
  background-repeat: no-repeat;
`;

const LogoSection = styled.section`
  position: relative;
  left: -11.2rem;

  width: 43.4rem;
  height: 41.5rem;
  margin-top: 2.4rem;
  margin-bottom: 7.1rem;
`;

const LoginMessage = styled.span`
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.grey02};
  font-size: 1.2rem;
`;
