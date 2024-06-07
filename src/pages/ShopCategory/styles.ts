import styled from "styled-components";

export const ShopCategoryContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ShopCategoryIndexSort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 168px;

  p span {
    font-weight: 600;
  }

  @media (max-width: 1280px) {
    width: 90%;
    margin: auto;

    button {
      padding: 5px 10px;
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const ShopCategoryProducts = styled.div`
  margin: 20px 168px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  row-gap: 80px;

  @media (max-width: 1280px) {
    width: 90%;
    margin: 16px auto;
    row-gap: 40px;

    > div {
      margin: auto;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ShopCategoryLoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 152px auto;
  padding: 16px 32px;
  border-radius: 72px;
  background: #ededed;
  color: #787878;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1280px) {
    width: 200px;
    margin: 100px auto;
    height: 60px;
    font-size: 16px;
  }

  @media (max-width: 800px) {
    width: 150px;
    margin: 60px auto;
    height: 40px;
    font-size: 13px;
  }
`;
