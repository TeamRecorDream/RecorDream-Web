import styled from 'styled-components';
import { IcFeelingLBlank, IcPcBlank, IcPcRecordream } from '../assets/svg';
import Button from '../components/Button';
import { Outlet } from 'react-router-dom';
import { useDeleteUser } from '../hooks/queries/useDeleteUser';

interface DeleteLayoutInterface {
  iconOn: boolean;
  btnColor: string;
  btnMessage: string;
}

const DeleteLayout = ({ iconOn, btnColor, btnMessage }: DeleteLayoutInterface) => {
  const { deleteUser } = useDeleteUser();
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  console.log('ACCESSTOKEn', accessToken);
  if (!accessToken) {
    console.error('Access token is missing');
    return null;
  }

  const handleDeleteUser = () => {
    deleteUser(accessToken);
  };

  return (
    <RecordreamLayoutWrapper>
      <IcPcRecordream style={{ width: 134, height: 24, marginTop: 74, marginBottom: 18 }} />
      {iconOn ? (
        <IcFeelingLBlank style={{ width: 85, height: 85, marginTop: 74, marginBottom: 18 }} />
      ) : (
        <IcPcBlank style={{ width: 85, height: 85, marginTop: 74, marginBottom: 18 }} />
      )}
      <Outlet />
      <Button color={btnColor} message={btnMessage} onClick={handleDeleteUser} />
    </RecordreamLayoutWrapper>
  );
};

export default DeleteLayout;

const RecordreamLayoutWrapper = styled.div`
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
