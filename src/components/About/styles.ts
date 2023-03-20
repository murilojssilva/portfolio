import styled, { css } from "styled-components";
import { LayoutContainer } from "@pages/_layouts/default/styles";

export const AboutContainer = styled(LayoutContainer)``;

export const AboutContent = styled.header`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    width: 90%;
    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
    }
  }

  img {
    width: calc(5rem + 12px);
    height: calc(5rem + 12px);
    border-radius: 8px;
    ${({ theme }) => css`
      border: 4px solid ${theme.colors.backgroundItens};
      outline: 2px solid ${theme.colors.text};
    `};

    margin: 1rem 0;
  }
`;

export const AboutProfileAnimation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DevelopmentIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
