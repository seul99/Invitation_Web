// /mnt/data/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    height: 100%;
  }

    body::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit */
  }

  @font-face {
    font-family: 'KoPubWorld';
    src: url('/font/KoPubWorld-Batang-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  body {
    background-color: #f0f0f0;
    height: 100%;
    font-family: 'KoPubWorld','Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Pyeojin Gothic','Cafe24Ohsquare', 'SeoulAlrim',sans-serif;
    font-weight: 400;
  }

  #root {
    height: 100%;
  }

`;

export default GlobalStyle;
