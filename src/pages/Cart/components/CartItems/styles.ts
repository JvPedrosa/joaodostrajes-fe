import styled from "styled-components";

export const CartItemsContainer = styled.div`
  margin: 80px 10%;

  hr {
    height: 3px;
    background-color: #e2e2e2;
    border: none;
  }
`;

export const CartItemsFormatMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 75px;
  padding: 20px 0;
  color: #454545;
  font-size: 18px;
  font-weight: 600;
`;

export const CartItemsFormat = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 75px;
  padding: 20px 0;
  color: #454545;
  font-size: 17px;
  font-weight: 500;

  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }

  button {
    width: 64px;
    height: 50px;
    border: 2px solid #ebebeb;

  }

  .remove-icon {
    width: 24px;
    margin: 0 40px
    cursor: pointer;
    color: #ff4141;
  }
`;

export const CartItemsDown = styled.div`
  display: flex;
  margin: 100px 0;
  gap: 10%;
`;

export const CartItemsTotal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;

  button {
    height: 56px;
    border: none;
    background-color: #ff5a5a;
    color: white;
    font-weight: 600;
  }
`;

export const CartItemsTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

export const CartItemsPromoCode = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;

  p {
    color: #555;
  }
`;

export const CartItemsPromoBox = styled.div`
  margin-top: 15px;
  padding-left: 20px;
  height: 58px;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-radius: 8px;

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    height: 50px;
  }

  button {
    width: 170px;
    height: 58px;
    font-size: 16px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 600;
    border: none;
  }
`;
