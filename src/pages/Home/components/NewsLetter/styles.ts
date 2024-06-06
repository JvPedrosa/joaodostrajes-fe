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
  background: linear-gradient(0deg, #fde1ff 0%, #e1ffea22 60%);
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

  @media (max-width: 1280px) {
    padding: 0 80px;
    margin: 120px auto;
    gap: 20px;

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }

    div {
      width: 600px;
      height: 60px;

      input {
        width: 400px;
      }

      button {
        width: 160px;
        height: 60px;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: 60px auto;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }

    div {
      width: 500px;
      height: 50px;

      input {
        width: 300px;
        font-size: 14px;
      }

      button {
        width: 120px;
        height: 50px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 800px) {
    margin: 40px auto;
    height: 35vh;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }

    div {
      width: 400px;
      height: 40px;

      input {
        width: 200px;
        font-size: 13px;
      }

      button {
        width: 100px;
        height: 40px;
        font-size: 13px;
      }
    }
  }

  @media (max-width: 500px) {
    height: 25vh;
    width: 100%;
    border-radius: 0;
    padding: 0;
    gap: 15px;

    h1 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
      max-width: 200px;
      text-align: center;
    }

    div {
      width: 290px;

      input {
        width: 130px;
      }
    }
  }
`;
