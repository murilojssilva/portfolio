import styled, { keyframes } from "styled-components";

interface SkillContainerProps {
  color: string;
}

export const SkillContainer = styled.div<SkillContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;

  transition: filter 0.1s;
  &:hover {
    filter: ${(props) =>
      props.theme.title === "dark" ? "brightness(1.1)" : "brightness(0.9)"};
  }

  border: 1px solid transparent;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.primary};
  }

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  span {
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.secundary};

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
    margin: 10px;
    height: 5rem;
    line-height: 1.6;

    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
  h1 {
    font-size: 1.125rem;
    text-align: center;
    background: linear-gradient(
      to right,
      var(--blue-200) 0%,
      var(--blue-700) 100%
    );
    background-clip: text;
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
  @media (max-width: 1080px) {
    border: 5px solid transparent;
    border-top: 5px solid ${(props) => props.theme.colors.primary};
    &:nth-child(odd) {
      border-right: 1px solid ${(props) => props.theme.colors.primary};
    }
    &:nth-child(2n) {
      border-right: 1px solid transparent;
    }
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
  }
  @media (max-width: 768px) {
    border-top: 5px solid ${(props) => props.theme.colors.primary};

    &:not(:last-child) {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }
`;
