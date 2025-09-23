import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  background: #000;

  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);

  padding: 20px;
  /* safari 깨짐현상 해결*/
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  /* 스크롤바 제거 */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* Chrome, Safari */
    display: none;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  padding-top: 50px;
`;

export const Content = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  margin: 30px 5px;

  &:last-child {
    margin-bottom: 10px;
  }
`;

export const BoldContent = styled.span`
  font-weight: 700;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TempImg = styled.img`
  width: 100%;
  height: auto;
`;

const PaperContent = () => {
  return (
    <Container>
      <ContentWrap>
        <Title>
          <img src={`${process.env.PUBLIC_URL}/images/INVITATION.svg`} />
        </Title>
        <Content>
          제1대 <BoldContent>WHATDOOR MAN, 이한</BoldContent>의 파트너 요원
          <br />
          으로 선발되었습니다. <br />
          <br />
          오늘부터 당신은 <br />
          왓도어 에이전시 소속의 요원 으로서 <br />
          <BoldContent>작전명 &lt;Honey-Trap&gt;</BoldContent>에 투입됩니다.
          <br />
          <br /> 이에 동의한다면 아래 신청서를 작성하십시오.
          <br />
          <br />
          날짜: 10월 17일 - 20일 <br />
          장소: 펠리칸 카페
          <br />
          서울특별시 마포구 독막로14길 27 <a></a>
        </Content>
        <ImageBox>
          <TempImg src={`${process.env.PUBLIC_URL}/images/01_post.png`} />
          <TempImg src={`${process.env.PUBLIC_URL}/images/02_post.jpg`} />
          <TempImg src="https://placehold.co/300x200" />
          <TempImg src="https://placehold.co/300x200" />
        </ImageBox>
        <Content>
          <BoldContent>날짜 선택하러 가기</BoldContent> <br />
          구글 설문지 링크 : <a>링크 첨부 예정</a> <br />
          예약 접수 기간 : 10월 1일 21시 ~ 10월 16일 <br />
        </Content>
      </ContentWrap>
    </Container>
  );
};

export default PaperContent;
