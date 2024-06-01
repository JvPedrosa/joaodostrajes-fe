import styled from "styled-components";

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h1 {
    color: #171717;
    font-size: 48px;
    font-weight: 600;
  }

  hr {
    width: 200px;
    height: 4px;
    border-radius: 8px;
    background-color: #252525;
  }

  @media (max-width: 1280px) {
    height: 50vh;

    h1 {
      font-size: 40px;
    }

    hr {
      width: 160px;
      height: 3px;
    }
  }

  @media (max-width: 1024px) {
    height: 40vh;

    h1 {
      font-size: 30px;
    }

    hr {
      width: 120px;
      height: 2px;
    }
  }

  @media (max-width: 800px) {
    height: 30vh;
    gap: 6px;

    h1 {
      font-size: 20px;
    }

    hr {
      width: 100px;
    }
  }

  @media (max-width: 550px) {
    height: 55vh;
  }
`;

export const PopularItem = styled.div`
  margin: 48px 0;
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 0 32px;

  @media (max-width: 1280px) {
    gap: 20px;
    margin-top: 32px;
  }

  @media (max-width: 1024px) {
    gap: 16px;
    margin-top: 20px;
  }

  @media (max-width: 800px) {
    gap: 5px;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;
