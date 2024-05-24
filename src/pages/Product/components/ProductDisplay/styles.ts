import styled from "styled-components";

export const ProductDisplayContainer = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 64px;
`;

export const ProductDisplayLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const ProductDisplayImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const ProductDisplayImage = styled.div`
  img {
    width: 100%;
    min-width: 448px;
    max-width: 800px;
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
`;

export const ProductDisplayStars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 4px;
  color: #1c1c1c;
  font-size: 16px;
`;

export const ProductDisplayPrices = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  font-size: 16px;
  font-weight: 700;
`;

export const ProductDisplayPriceOld = styled.div`
  color: #818181;
  text-decoration: line-through;
`;

export const ProductDisplayPriceNew = styled.div`
  color: #ff4141;
  font-size: 32px;
`;

export const ProductDisplaySize = styled.div`
  h1 {
    color: #656565;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ProductDisplaySizeList = styled.div`
  display: flex;
  margin: 8px 0 24px;
  gap: 16px;
  font-size: 12px;

  div {
    padding: 8px 16px;
    background-color: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ProductDisplayDescription = styled.div``;

export const ProductDisplayCategory = styled.div`
  margin-top: 10px;

  span {
    font-weight: 600;
  }
`;
