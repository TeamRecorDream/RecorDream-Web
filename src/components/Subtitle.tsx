import { PropsWithChildren } from "react";
import styled from "styled-components";

const Subtitle = ({ children }: PropsWithChildren) => {
  return <SubtitleWrapper>{children}</SubtitleWrapper>;
};

export default Subtitle;

const SubtitleWrapper = styled.p`
  margin-top: 1.8rem;

  font-size: 2.4rem;
  font-style: normal;
  font-weight: 200;
  line-height: 125%;
  letter-spacing: -0.48px;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;
