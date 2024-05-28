import styled from 'styled-components';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Button from '../components/Button';
import useNavigateHome from '../hooks/useNavigateHome';

const CompletePage = () => {
  return (
    <CompletePageWrapper>
      <Title>서비스를 탈퇴 완료</Title>
      <Subtitle>
        그동안 레코드림을 이용해주셔서 <br /> 감사합니다.
      </Subtitle>
      <Button message="확인" onClick={useNavigateHome} />
    </CompletePageWrapper>
  );
};

export default CompletePage;

const CompletePageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 7.4rem;
`;
