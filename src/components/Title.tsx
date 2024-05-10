import { PropsWithChildren } from "react";
import styled from "styled-components";

const Title = ({ children }: PropsWithChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;

const TitleWrapper = styled.p`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 30px */
  letter-spacing: -0.48px;
  color: ${({ theme }) => theme.colors.white};
`;
