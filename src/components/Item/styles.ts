import styled from "styled-components";

export const ItemContainer = styled.div`
  font-size: 18px;

  .title {
    margin: 4px 0 2px 0;
  }

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 1px 3px -2px black;
    transition: transform 0.2s;
    cursor: pointer;
  }

  :hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }

  @media (max-width: 550px) {
    font-size: 11px;
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

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const ItemPriceOld = styled.div`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
  text-decoration: line-through;

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
