import styled from 'styled-components';
import Title from '../components/Title';
import useNavigateHome from '../hooks/useNavigateHome';
import Button from '../components/Button';

const UnregisteredPage = () => {
  return (
    <UnregisteredPageWrapper>
      <Title>가입된 회원이 아닙니다.</Title>
      <Button message="확인" onClick={useNavigateHome} />
    </UnregisteredPageWrapper>
  );
};

export default UnregisteredPage;

const UnregisteredPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 7.4rem;
`;
