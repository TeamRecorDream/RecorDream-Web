import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Title = ({ children }: PropsWithChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;

const TitleWrapper = styled.p`
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ theme }) => theme.colors.white};
`;
