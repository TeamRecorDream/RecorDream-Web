import styled from "styled-components";
import { IcFeelingLBlank, IcPcBlank, IcPcRecordream } from "../assets/svg";
import Button from "../components/Button";

interface RecordreamLayoutInterface {
  iconOn: boolean;
  btnColor: string;
  btnMessage: string;
  children: React.ReactNode;
}

const RecordreamLayout = ({
  iconOn,
  btnColor,
  btnMessage,
  children,
}: RecordreamLayoutInterface) => {
  return (
    <RecordreamLayoutWrapper>
      <IcPcRecordream />
      {iconOn ? <IcFeelingLBlank /> : <IcPcBlank />}
      {children}
      <Button color={btnColor} message={btnMessage} />
    </RecordreamLayoutWrapper>
  );
};

export default RecordreamLayout;

const RecordreamLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
