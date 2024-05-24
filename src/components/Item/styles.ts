import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 100%;

  p {
    margin: 8px 0;
  }

  img {
    width: 256px;
    height: 256px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 1px 3px -2px black;
    transition: transform 0.2s;
    cursor: pointer;
  }

  :hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

export const ItemPrices = styled.div`
  display: flex;
  gap: 20px;
`;

export const ItemPriceNew = styled.div`
  color: #374151;
  font-size: 16px;
  font-weight: 600;
`;

export const ItemPriceOld = styled.div`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
  text-decoration: line-through;
`;
