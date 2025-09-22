import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  width: 339px;
  height: auto;

  background-image: url(${process.env.PUBLIC_URL}/images/paper2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

export const Title = styled.div`
  padding-top: 50px;
`;

export const Content = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 200;
  line-height: 25px; /* 166.667% */
  margin: 30px 10px;

  span {
    font-weight: 500;
  }

  &:last-child {
    margin-bottom: 10px;
  }
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
      <Title>
        <img src={`${process.env.PUBLIC_URL}/images/INVITATION.svg`} />
      </Title>
      <Content>
        제1대 <span>WHATDOOR MAN, 이한</span>의 파트너 요원으로 선발되셨습니다.{" "}
        <br />
        <br />
        지금부터 당신의 임무는 단 하나,
        <br /> 왓도어에이전시의 시크릿 요원이 되는 것. <br />
        준비되셨습니까? <br />
        <br />
        날짜: 10월 17일 - 20일 <br />
        장소: 펠리칸 카페
        <br />
        서울특별시 마포구 독막로14길 27
      </Content>
      <ImageBox>
        <TempImg src={`${process.env.PUBLIC_URL}/images/01_post.png`} />
        <TempImg src={`${process.env.PUBLIC_URL}/images/02_post.jpg`} />
        <TempImg src="https://placehold.co/300x200" />
        <TempImg src="https://placehold.co/300x200" />
      </ImageBox>
      <Content>
        <span>날짜 선택하러 가기</span> <br />
        구글 설문지 링크 : <a>링크 첨부 예정</a> <br />
        예약 접수 기간 : 10월 1일 21시 ~ 10월 16일
      </Content>
    </Container>
  );
};

export default PaperContent;
