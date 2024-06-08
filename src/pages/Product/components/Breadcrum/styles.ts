import styled from "styled-components";

export const BreadcrumContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  width: 90%;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1280px) {
    margin: 24px 0;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    margin: 20px 0;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    margin: 16px 0;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    margin: 12px 0;
    font-size: 11px;
  }
`;
