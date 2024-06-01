import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  padding: 64px 0;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
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

  @media (max-width: 1280px) {
    padding-left: 32px;

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 60px;
    }
  }

  @media (max-width: 1024px) {
    padding-left: 24px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 50px;
    }
  }

  @media (max-width: 800px) {
    padding-left: 16px;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 40px;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 50px;
    }
  }
`;

export const HandIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 88px;
    height: 88px;

    @media (max-width: 1280px) {
      width: 64px;
      height: 64px;
    }

    @media (max-width: 1024px) {
      width: 48px;
      height: 48px;
    }

    @media (max-width: 800px) {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 550px) {
      width: 48px;
      height: 48px;
    }
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

  @media (max-width: 1280px) {
    gap: 10px;
    width: 250px;
    height: 60px;
    margin-top: 20px;
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    width: 220px;
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 800px) {
    width: 175px;
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: 550px) {
    width: 200px;
    height: 45px;
    font-size: 14px;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    height: 100%;

    @media (max-width: 1280px) {
      height: 90%;
    }

    @media (max-width: 1024px) {
      height: 80%;
    }

    @media (max-width: 800px) {
      height: 70%;
    }
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
