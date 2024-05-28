import styled from 'styled-components';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import DeleteButton from '../components/DeleteButton';

const DeletePage = () => {
  return (
    <DeletePageWrapper>
      <Title>서비스를 탈퇴하시나요?</Title>
      <Subtitle>
        서비스 탈퇴 시 저장된 기록은 <br /> 복구되지 않습니다.
      </Subtitle>
      <DeleteButton message="탈퇴하기" />
    </DeletePageWrapper>
  );
};

export default DeletePage;

const DeletePageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 7.4rem;
`;
