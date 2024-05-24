import styled from "styled-components";

export const LoginSignupPage = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fce3fe;
  padding-top: 100px;
`;

export const LoginSignupContainer = styled.div`
  width: 580px;
  height: 600px;
  background-color: #ffffff;
  margin: auto;
  padding: 40px 60px;
  border-radius: 8px;

  h1 {
    margin: 20px 0;
  }

  button {
    width: 100%;
    height: 72px;
    color: white;
    background-color: #ff4141;
    margin-top: 30px;
    border: none;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
  }
`;

export const LoginSignupFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;

  input {
    height: 72px;
    padding-left: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 8px;
    outline: none;
    color: #5c5c5c;
    font-size: 18px;
  }
`;

export const LoginSignupLogin = styled.div`
  display: flex;
  margin-top: 16px;
  color: #5c5c5c;
  font-size: 18px;
  font-weight: 500;
  gap: 4px;

  span {
    color: #ff4141;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }
`;

export const LoginSignupAgree = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 4px;
  color: #5c5c5c;
  font-size: 18px;
  font-weight: 500;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #ff4141;
    cursor: pointer;
  }
`;
