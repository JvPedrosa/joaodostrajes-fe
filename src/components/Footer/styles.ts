import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  color: #1a1a1a;
  font-size: 20px;

  hr {
    width: 60%;
    border: none;
    border-radius: 8px;
    height: 3px;
    background-color: #c7c7c7;
  }

  a:hover {
    color: #ff4141;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
`;
