import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  white02: 'rgba(255, 255, 255, 0.50)',
  white03: 'rgba(255, 255, 255, 0.40)',
  white04: 'rgba(255, 255, 255, 0.20)',
  white05: 'rgba(255, 255, 255, 0.10)',
  white06: 'rgba(255, 255, 255, 0.05)',
  grey01: '#222222',
  grey02: '#373737',
  dark: '#02040F',
  purple: '#7F75EE',
  red: '#FF5F5F',
  black: '#000000',
  kakao: '#FEE500',
};

const fonts = {
  Title: css`
    font-family: 'pretendard';
    font-size: 2.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  heading_01: css`
    font-family: 'pretendard';
    font-size: 2.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: 125%;
    letter-spacing: -0.048rem;
  `,

  body_01: css`
    font-family: 'pretendard';
    font-size: 2.4rem;
    font-weight: 200;
    font-style: normal;
    line-height: 125%;
    letter-spacing: -0.048rem;
  `,

  button_01: css`
    font-family: 'pretendard';
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: -0.016rem;
    font-style: normal;
  `,
};

const theme = { colors, fonts, mixin };

export default theme;
