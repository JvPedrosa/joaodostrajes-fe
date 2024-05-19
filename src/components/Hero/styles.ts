import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  padding: 64px 0;
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding-left: 176px;
  line-height: 1.1;

  h2 {
    color: #090909;
    font-size: 24px;
    font-weight: 600;
  }

  p {
    color: #171717;
    font-size: 80px;
    font-weight: 700;
  }
`;

export const HandIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 88px;
    height: 88px;
  }
`;

export const HeroLatestBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 312px;
  height: 72px;
  border-radius: 72px;
  margin-top: 32px;
  background: #ff4141;
  color: white;
  font-size: 24px;
  font-weight: 500;
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  img {
    height: 1024px;
  }
`;
