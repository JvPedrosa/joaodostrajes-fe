import styled from "styled-components";

export const DescriptionBoxContainer = styled.div`
  width: 90%;
`;

export const DescriptionBoxNavigation = styled.div`
  display: flex;

  .fade {
    background-color: #fbfbfb;
    color: #555;
  }
`;

export const DescriptionBoxNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #d0d0d0;
  border-bottom: none;
  padding: 16px 32px;

  &:first-child {
    border-radius: 8px 0 0 0;
  }

  &:last-child {
    border-radius: 0 8px 0 0;
    border-left: none;
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

export const DescriptionBoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid #d0d0d0;
  padding: 32px 24px;
  border-radius: 0 8px 8px 8px;

  @media (max-width: 800px) {
    font-size: 13px;
  }
`;
