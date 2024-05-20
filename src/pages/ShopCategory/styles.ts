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
`;

export const ShopCategoryProducts = styled.div`
  margin: 20px 168px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  row-gap: 80px;
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
`;
