import styled from "styled-components";
import { IcPcLogo } from "../assets/svg";

const LoginPage = () => {
  const onClickLoginBtn = () => {};
  // console.log("LOGINPAGE!");
  return (
    <LoginPageWrapper>
      <LogoSection>
        <IcPcLogo />
      </LogoSection>
      {/* <PcDreamAlarm/> */}
      <LoginBtn onClick={onClickLoginBtn}>카카오로 시작하기</LoginBtn>
      <LoginMessage>로그인 후 이용이 가능합니다.</LoginMessage>
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  margin: 0 auto;
`;

const LogoSection = styled.section`
  width: 62.3rem;
  height: 62.2rem;
  margin-top: 10.3rem;
  margin-right: 2.8rem;
`;

const LoginBtn = styled.button`
  width: 46rem;
  height: 3.6rem;
  border-radius: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.2rem;
  border-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
`;

const LoginMessage = styled.span`
  color: ${({ theme }) => theme.colors.grey02};
  font-size: 1.8rem;
`;
