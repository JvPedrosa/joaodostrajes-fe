import styled from "styled-components";

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 70vh;

  h1 {
    color: #171717;
    font-size: 48px;
    font-weight: 600;
  }

  hr {
    width: 200px;
    height: 8px;
    border-radius: 8px;
    background-color: #252525;
  }
`;

export const PopularItem = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 90%;
  padding: 0 32px;
`;
