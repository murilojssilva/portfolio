import styled, { css } from "styled-components";

interface CardsContainerProps {
  type:
    | "challenge"
    | "personal"
    | "academic"
    | "bootcamp"
    | "professional"
    | "none";
  colorTop: "projects" | "experiences" | "publications";
}

interface InDevelopmentProps {
  inDevelopment?: boolean;
}

interface LinksProps {
  hasDeploy?: boolean;
  hasLink?: boolean;
}

export const CardsContainer = styled.div<CardsContainerProps>`
  ${({ colorTop, theme }) => css`
    border-top: 5px solid
      ${colorTop === "experiences"
        ? "var(--blue-700)"
        : colorTop === "projects"
        ? "var(--green-500)"
        : colorTop === "publications"
        ? "var(--purple-700)"
        : "var(--red-500)"};
    box-shadow: 0 0 1em ${theme.colors.backgroundItens};
  `};

  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  border-radius: 8px;

  &:hover {
    filter: ${({ theme }) =>
      theme.title === "dark" ? "brightness(1.1)" : "brightness(0.9)"};
    transition: filter 0.2s;
  }

  h2 {
    font-size: 1.5rem;
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--blue-700) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ type }) =>
      type === "challenge"
        ? "var(--blue-500)"
        : type === "personal"
        ? "var(--green-500)"
        : type === "bootcamp"
        ? "var(--orange-500)"
        : type === "professional"
        ? "var(--red-500)"
        : type === "academic"
        ? "var(--purple-200)"
        : "var(--yellow-500)"};
    font-weight: bold;
  }
`;

export const CardsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardsTitle = styled.div<InDevelopmentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  span {
    display: flex;
    border-radius: 8px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      transition: background 0.2s;
    }
  }

  h2 {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
  }

  strong {
    font-size: 0.5rem;
    border-radius: 100px;
    padding: 0.25rem;

    display: ${({ inDevelopment }) =>
      inDevelopment === false ? "none" : "flex"};
    text-align: center;
    align-items: center;
    ${({ theme }) => css`
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.text};
    `};

    &:hover {
      ${({ theme }) => css`
        color: ${theme.colors.background};
        background-color: ${theme.colors.text};
      `};

      transition: background 0.2s, color 0.2s;
    }
  }
`;

export const CardsType = styled.div`
  display: flex;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 0;
    outline: 0;
    gap: 0.25rem;
    font-size: 0.75rem;

    background: transparent;

    font-weight: bold;
  }
`;

export const CardsFooter = styled.footer`
  width: 100%;
  align-self: flex-end;
`;

export const ButtonContainerPosition = styled.footer<LinksProps>`
  display: flex;
  flex-direction: ${({ hasDeploy, hasLink }) =>
    hasDeploy && hasLink ? "column" : hasDeploy || hasLink ? "row" : "none"};
  gap: 0.5rem;
`;
