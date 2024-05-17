import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  box-shadow: 0 1px 3px -2px black;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 48px;
    height: 48px;
  }

  p {
    color: #171717;
    font-size: 32px;
    font-weight: 600;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 48px;
  color: #626262;
  font-size: 16px;
  font-weight: 500;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
  }

  hr {
    border: none;
    width: 80%;
    height: 4px;
    border-radius: 8px;
    background-color: #ff4141;
  }
`;

export const NavLoginCart = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  svg {
    width: 36px;
    height: 36px;
  }

  button {
    width: 160px;
    height: 56px;
    outline: none;
    border: 1px solid #7a7a7a;
    border-radius: 80px;
    color: #515151;
    font-size: 16px;
    font-weight: 500;
    background-color: white;
    cursor: pointer;
  }

  button:active {
    background-color: #f3f3f3;
  }
`;

export const NavCartCount = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -28px;
  margin-left: -64px;
  border-radius: 12px;
  font-size: 14px;
  background: red;
  color: white;
`;
