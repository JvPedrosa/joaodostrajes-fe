import styled from "styled-components";

export const OffersContainer = styled.div`
  display: flex;
  width: 65%;
  height: 60vh;
  margin: auto;
  padding: 0 144px;
  margin-bottom: 152px;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  border-radius: 48px;
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
`;
