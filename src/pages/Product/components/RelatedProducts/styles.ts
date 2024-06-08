import styled from "styled-components";

export const RelatedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 64px;
  //   height: 90vh;

  h1 {
    color: #171717;
    font-size: 24px;
    font-weight: 600;
  }

  hr {
    width: 200px;
    height: 2px;
    border-radius: 8px;
    background-color: #252525;
  }
`;

export const RelatedProductsItem = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 24px;

  img {
    width: 196px;
  }

  @media (max-width: 1024px) {
    width: 90%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
