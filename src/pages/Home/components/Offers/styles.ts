import styled from "styled-components";

export const OffersContainer = styled.div`
  display: flex;
  width: 65%;
  height: 60vh;
  padding: 0 144px;
  margin: 152px auto;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  border-radius: 48px;

  @media (max-width: 1280px) {
    padding: 0 80px;
    margin: 120px auto;
  }

  @media (max-width: 1024px) {
    padding: 0 60px;
    margin: 80px auto;
    height: 40vh;
  }

  @media (max-width: 800px) {
    margin: 60px auto;
  }

  @media (max-width: 500px) {
    height: 25vh;
    margin: 50px auto;
    width: 100%;
    border-radius: 0;
    padding: 0;
    justify-content: space-around;

    > div {
      flex: 0;
    }
  }
`;

export const OffersLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #171717;
    font-size: 80px;
    font-weight: 600;
  }

  p {
    color: #171717;
    font-size: 24px;
    font-weight: 600;
  }

  button {
    display: flex;
    justify-content: center;
    width: 280px;
    height: 72px;
    border-radius: 36px;
    background: #ff4141;
    border: none;
    color: white;
    font-size: 24px;
    font-weight: 500;
    margin-top: 32px;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }

    button {
      width: 220px;
      height: 50px;
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }

    button {
      width: 160px;
      height: 40px;
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 13px;
    }

    button {
      width: 140px;
      height: 30px;
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 16px;
    }

    p {
      font-size: 10px;
    }

    button {
      width: 120px;
      height: 25px;
      font-size: 10px;
      margin-top: 10px;
    }
  }
`;

export const OffersRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 48px;

  img {
    height: 100%;
  }

  @media (max-width: 1280px) {
    padding-top: 30px;
  }

  @media (max-width: 1024px) {
    padding-top: 10px;
  }
`;
