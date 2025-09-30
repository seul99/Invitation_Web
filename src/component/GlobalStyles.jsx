// /mnt/data/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit */
  }


@font-face {
  font-family: 'KoPubBatang';
  src:  url(${process.env.PUBLIC_URL}/font/KoPubWorld-Batang-Light.ttf) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}


  body {
    background-color: #f0f0f0;
    height: 100%;
    font-family: 'KoPubBatang','Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Pyeojin Gothic','Cafe24Ohsquare', 'SeoulAlrim',sans-serif;

    /* ios safe area */
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);

  }

  #root {
    height: 100%;
  }

`;

export default GlobalStyle;
