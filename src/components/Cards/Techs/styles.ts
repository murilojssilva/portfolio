import styled from "styled-components";

interface TechContentProps {
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasStyledComponents?: boolean;
  hasHeroku?: boolean;
  hasGraphQL?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasNetlify?: boolean;
  hasRubyOnRails?: boolean;
  hasBootstrap?: boolean;
  hasSCSS?: boolean;
  hasRedux?: boolean;
  hasExpress?: boolean;
  hasNextJS?: boolean;
  hasVercel?: boolean;
  hasJavascript?: boolean;
  hasFirebase?: boolean;
}

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechContent = styled.span<TechContentProps>`
  display: ${(props) =>
    props.hasJavascript === false ||
    props.hasFirebase === false ||
    props.hasReact === false ||
    props.hasHeroku === false ||
    props.hasVercel === false ||
    props.hasNextJS === false ||
    props.hasGraphQL === false ||
    props.hasSCSS === false ||
    props.hasTypescript === false ||
    props.hasNodeJS === false ||
    props.hasNetlify === false ||
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
  outline: 0;

  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundItens};
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
