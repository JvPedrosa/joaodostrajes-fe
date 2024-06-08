import styled from "styled-components";

export const ProductDisplayContainer = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 64px;

  @media (max-width: 1280px) {
    margin-bottom: 60px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductDisplayLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 1280px) {
    gap: 10px;
  }

  @media (max-width: 800px) {
    gap: 0;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const ProductDisplayImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 1280px) {
    gap: 10px;
  }

  @media (max-width: 800px) {
    flex-direction: row;
    gap: 6px;

    img {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 550px) {
    gap: 10px;
  }
`;

export const ProductDisplayImage = styled.div`
  img {
    width: 100%;
    min-width: 448px;
    max-width: 800px;
  }

  @media (max-width: 1280px) {
    img {
      min-width: 400px;
      max-width: 700px;
    }
  }

  @media (max-width: 1024px) {
    img {
      min-width: 350px;
      max-width: 550px;
    }
  }

  @media (max-width: 800px) {
    img {
      min-width: 300px;
      max-width: 500px;
    }
  }

  @media (max-width: 550px) {
    img {
      min-width: 250px;
      max-width: 450px;
    }
  }
`;

export const ProductDisplayRight = styled.div`
  margin-left: 64px;
  width: 40%;

  h1 {
    color: #3d3d3d;
    font-size: 32px;
    font-weight: 700;
  }

  button {
    padding: 20px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: #ff4141;
    margin-bottom: 40px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    margin-left: 30px;

    h1 {
      font-size: 28px;
    }

    button {
      font-size: 14px;
      padding: 16px 32px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 16px;

    h1 {
      font-size: 24px;
    }

    button {
      font-size: 12px;
      padding: 12px 24px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export const ProductDisplayStars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 4px;
  color: #1c1c1c;
  font-size: 16px;

  @media (max-width: 1280px) {
    gap: 3px;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ProductDisplayPrices = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  font-weight: 700;

  @media (max-width: 1280px) {
    margin: 10px 0;
  }
`;

export const ProductDisplayPriceOld = styled.div`
  color: #818181;
  text-decoration: line-through;
  font-size: 16px;

  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;

export const ProductDisplayPriceNew = styled.div`
  color: #ff4141;
  font-size: 32px;

  @media (max-width: 1280px) {
    font-size: 28px;
  }
`;

export const ProductDisplaySize = styled.div`
  h1 {
    color: #656565;
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: 1280px) {
    h1 {
      margin-top: 20px;
      font-size: 14px;
    }
  }
`;

export const ProductDisplaySizeList = styled.div`
  display: flex;
  margin: 8px 0 24px;
  gap: 16px;
  font-size: 14px;

  div {
    padding: 8px 16px;
    background-color: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ProductDisplayDescription = styled.div`
  @media (max-width: 1280px) {
    font-size: 13px;
  }
`;

export const ProductDisplayCategory = styled.div`
  margin-top: 10px;

  span {
    font-weight: 600;
  }

  @media (max-width: 1280px) {
    font-size: 13px;
  }
`;
