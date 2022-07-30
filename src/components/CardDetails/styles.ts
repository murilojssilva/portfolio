import styled from "styled-components";

interface CardDetailsContainerProps {
  colorType: "challenge" | "personal" | "academic";
  colorTop: "projects" | "experiences";
}

interface TechLogoProps {
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasStyledComponents?: boolean;
  hasGraphQL?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasRubyOnRails?: boolean;
  hasBootstrap?: boolean;
  hasRedux?: boolean;
  hasExpress?: boolean;
  hasNextJS?: boolean;
  hasVercel?: boolean;
}

export const CardDetailsContainer = styled.div<CardDetailsContainerProps>`
  border-top: 5px solid
    ${(props) =>
      props.colorTop === "experiences"
        ? "var(--blue-700)"
        : props.colorTop === "projects"
        ? "var(--green-500)"
        : "var(--red-500)"};
  margin: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
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
    color: ${(props) => props.theme.colors.text};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
  }
  span {
    font-size: 0.875rem;
    color: ${(props) =>
      props.colorType === "challenge"
        ? "var(--blue-500)"
        : props.colorType === "personal"
        ? "var(--green-500)"
        : props.colorType === "academic"
        ? "var(--yellow-500)"
        : "var(--red-500)"};
    font-weight: bold;
  }
`;

export const CardDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardDetailsTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardDetailsType = styled.div``;

export const UsedTechs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechLogo = styled.span<TechLogoProps>`
  display: ${(props) =>
    props.hasReact === false ||
    props.hasVercel === false ||
    props.hasNextJS === false ||
    props.hasGraphQL === false ||
    props.hasTypescript === false ||
    props.hasNodeJS === false ||
    props.hasStyledComponents === false ||
    props.hasReactNative === false ||
    props.hasRedux === false ||
    props.hasJest === false ||
    props.hasBootstrap === false ||
    props.hasRubyOnRails === false ||
    props.hasExpress === false
      ? "none"
      : "flex"};
  padding: 1rem;
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: var(--gray-900);
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
