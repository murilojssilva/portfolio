import styled, { css } from "styled-components";

interface ISkillContainerProps {
  color: string;
}

export const SkillContainer = styled.div<ISkillContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  border-radius: 8px;
  ${({ theme }) => css`
    border-top: 5px solid ${theme.colors.primary};
    box-shadow: 0 0 1em ${theme.colors.backgroundItens};
  `};

  &:hover {
    filter: ${({ theme }) =>
      theme.title === "dark" ? "brightness(1.1)" : "brightness(0.9)"};
    transition: filter 0.2s;
  }

  span {
    padding: 3rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.secundary};

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
  p {
    margin: 10px auto;
    line-height: 1.6;
    height: 3rem;
    text-align: center;
  }

  strong {
    height: 5rem;
    line-height: 1.6;
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  h1 {
    font-size: 1.25rem;
    text-align: center;
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
    text-align: center;
    color: var(--purple-500);
  }

  ul {
    padding: 1rem;
    li {
      line-height: 1.6;
    }
  }
`;
