import styled from "styled-components";

interface SkillContainerProps {
  color: string;
}

export const SkillContainer = styled.div<SkillContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  &:not(last-child) {
    border-right: 1px solid black;
  }

  span {
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    border-radius: 100px;
    background-color: ${(props) => props.color};
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
  p {
    margin: 10px auto;
    line-height: 1.6;
    height: 3rem;
  }
  h1 {
    font-size: 1.125rem;
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

  @media (max-width: 960px) {
    &:not(last-child) {
      border-bottom: 1px solid var(--gray-950);
    }
  }
`;
