import styled from "styled-components";

export const NewsLetterContainer = styled.div`
  width: 65%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 144px;
  margin: 48px auto 152px;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  gap: 32px;
  border-radius: 48px;

  h1 {
    color: #454545;
    font-size: 56px;
    font-weight: 600;
  }

  p {
    color: #454545;
    font-size: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 720px;
    height: 72px;
    border-radius: 80px;
    border: 1px solid #e3e3e3;

    input {
      width: 504px;
      margin-left: 32px;
      border: none;
      outline: none;
      color: #616161;
      font-family: Poppins;
      font-style: 16px;
    }

    button {
      width: 208px;
      height: 72px;
      border-radius: 80px;
      background: black;
      color: white;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      border: 1px solid #7a7a7a;
      font-weight: 500;
      display: flex;
      justify-content: center;
    }
  }
`;
