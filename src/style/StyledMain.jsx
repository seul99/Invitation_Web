import styled, { css, keyframes } from "styled-components";
const floatAni = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
`;

export const Container = styled.div`
  // background-image: url(${process.env.PUBLIC_URL}/images/bg.svg);
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  background: #221912ff;

  position: relative;
  margin: 0 auto;
  // min-height: 100vh;
  height: 100vh;
  // height: -webkit-fill-available; /* iOS Safari 대응 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 393px;
  flex-shrink: 0;
  padding-bottom: 20px;
  overflow-x: hidden;
`;

export const LetterImg = styled.img`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* ios 위치 수정 */
  animation: ${floatAni} 1.5s infinite ease-in-out;
  filter: drop-shadow(0 0 20px rgba(250, 241, 214, 0.16));
  cursor: pointer;
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.fadeIn {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }
  &.fadeOut {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
    pointer-events: none;
  }
`;
export const Paper = styled.div`
  // width: 100%;
  // height: 100%;
  width: calc(100% - 40px); /* 좌우 20px씩 여백 */
  height: calc(100% - 20px);
  display: flex;
  margin-top: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease, transform 2s ease;

  &.fadeIn {
    opacity: 1;
    transform: translateY(0);
  }
  &.fadeOut {
    opacity: 0;
    transform: translateY(20px);
  }
`;
