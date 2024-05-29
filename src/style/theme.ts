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
  heading_02: css`
    font-family: 'pretendard';
    font-size: 2.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,
  heading_03: css`
    font-family: 'pretendard';
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  heading_04: css`
    font-family: 'pretendard';
    font-size: 2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,

  body_01: css`
    font-family: 'pretendard';
    font-size: 2.4rem;
    font-weight: 200;
    font-style: normal;
    line-height: 125%;
    letter-spacing: -0.048rem;
  `,
  body_02: css`
    font-family: 'pretendard';
    font-size: 1.8rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,
  body_03: css`
    font-family: 'pretendard';
    font-size: 1.7rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  body_04: css`
    font-family: 'pretendard';
    font-size: 1.7rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,
  body_05: css`
    font-family: 'pretendard';
    font-size: 1.6rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  body_06: css`
    font-family: 'pretendard';
    font-size: 1.6rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,
  body_07: css`
    font-family: 'pretendard';
    font-size: 1.5rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  body_08: css`
    font-family: 'pretendard';
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,
  body_09: css`
    font-family: 'pretendard';
    font-size: 1.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  body_10: css`
    font-family: 'pretendard';
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,

  caption_01: css`
    font-family: 'pretendard';
    font-size: 1.2rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  caption_02: css`
    font-family: 'pretendard';
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
  `,
  caption_03: css`
    font-family: 'pretendard';
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
    line-height: 150%;
  `,
  caption_04: css`
    font-family: 'pretendard';
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
    line-height: 125%;
    letter-spacing: -0.016rem;
    text-transform: capitalize;
  `,
  button_01: css`
    font-family: 'pretendard';
    font-size: 2.8rem;
    font-weight: 600;
    font-style: normal;
  `,
  suit: css`
    font-family: SUIT;
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
    line-height: 150%;
  `,
};

const theme = { colors, fonts, mixin };

export default theme;
