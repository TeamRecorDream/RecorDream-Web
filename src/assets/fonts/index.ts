import { css } from 'styled-components';
import pretendard_extralight from '../../assets/fonts/pretendard_extralight.otf';
import pretendard_bold from '../../assats/fonts/pretendard_bold.otf';
import pretendard_light from '../../assets/fonts/pretendard_light.otf';
import pretendard_medium from '../../assets/fonts/pretendard_medium.otf';
import pretendard_regular from '../../assets/fonts/pretendard_regular.otf';
import pretendard_semibold from '../../assets/fonts/pretendard_semibold.otf';

export default css`
  @font-face {
    font-family: pretendard;
    font-weight: 200;
    src: local('pretendard') url(${pretendard_extralight}) format('opentype');
  }

  @font-face {
    font-family: pretendard;
    font-weight: 700;
    src: local('pretendard') url(${pretendard_bold}) format('opentype');
  }

  @font-face {
    font-family: pretendard;
    font-weight: 300;
    src: local('pretendard') url(${pretendard_extralight}) format('opentype');
  }

  @font-face {
    font-family: pretendard;
    font-weight: 400;
    src: local('pretendard') url(${pretendard_light}) format('opentype');
  }

  @font-face {
    font-family: pretendard;
    font-weight: 500;
    src: local('pretendard') url(${pretendard_medium}) format('opentype');
  }

  @font-face {
    font-family: pretendard;
    font-weight: 400;
    src: local('pretendard') url(${pretendard_regular}) format('opentype');
  }

  @font-face {
    font-family: pretendard;
    font-weight: 600;
    src: local('pretendard') url(${pretendard_semibold}) format('opentype');
  }
`;
