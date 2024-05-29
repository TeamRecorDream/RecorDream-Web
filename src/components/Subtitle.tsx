import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Subtitle = ({ children }: PropsWithChildren) => {
  return <SubtitleWrapper>{children}</SubtitleWrapper>;
};

export default Subtitle;

const SubtitleWrapper = styled.p`
  margin-top: 1.8rem;

  ${({ theme }) => theme.fonts.body_01};
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;
