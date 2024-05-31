import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 96px;
  box-shadow: 0 1px 3px -2px black;

  .nav-dropdown {
    display: none;
    color: #171717;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    padding: 12px 48px;
  }

  @media (max-width: 1024px) {
    padding: 12px 32px;
  }

  @media (max-width: 800px) {
    padding: 10px;

    .nav-dropdown {
      display: block;
      width: 32px;
      height: 32px;
      transition: 0.5s;
      border-radius: 50%;
      padding: 4px;
      transition: 0.5s;

      &:hover {
        background-color: #f3f3f3;
      }
    }

    .nav-menu-visible {
      display: flex;
    }
  }

  @media (max-width: 500px) {
    padding: 8px;
    gap: 0;
  }
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
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: 1280px) {
    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 24px;
    }
  }

  @media (max-width: 500px) {
    transform: scale(0.8);
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
  margin: 0 10px;
  padding: 0;

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

  @media (max-width: 1280px) {
    gap: 30px;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    gap: 24px;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    display: none;
    height: 80px;
    width: 100%;
    position: absolute;
    background-color: white;
    justify-content: center;
    top: 52px;
    left: 0;
    margin: 0;
  }

  @media (max-width: 500px) {
    height: 70px;
    top: 50px;
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

  button:active {
    background-color: #f3f3f3;
  }

  @media (max-width: 1280px) {
    gap: 30px;

    button {
      width: 120px;
      height: 45px;
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    button {
      width: 80px;
      height: 35px;
      font-size: 14px;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 500px) {
    transform: scale(0.8);
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

  @media (max-width: 1280px) {
    margin-left: -48px;
  }

  @media (max-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;
