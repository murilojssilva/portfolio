import styled from "styled-components";

interface TechContentProps {
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasStyledComponents?: boolean;
  hasHeroku?: boolean;
  hasMongoDB?: boolean;
  hasJWT?: boolean;
  hasGraphQL?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasNetlify?: boolean;
  hasRubyOnRails?: boolean;
  hasVite?: boolean;
  hasRadix?: boolean;
  hasExpo?: boolean;
  hasFaunaDB?: boolean;
  hasAxios?: boolean;
  hasYup?: boolean;
  hasVictoryNative?: boolean;
  hasZod?: boolean;
  hasPhosphor?: boolean;
  hasBootstrap?: boolean;
  hasSCSS?: boolean;
  hasSASS?: boolean;
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
  flex-wrap: wrap;
`;

export const TechContent = styled.span<TechContentProps>`
  display: ${(props) =>
    props.hasJavascript === false ||
    props.hasFirebase === false ||
    props.hasReact === false ||
    props.hasHeroku === false ||
    props.hasJWT === false ||
    props.hasMongoDB === false ||
    props.hasVercel === false ||
    props.hasNextJS === false ||
    props.hasVite === false ||
    props.hasRadix === false ||
    props.hasZod === false ||
    props.hasPhosphor === false ||
    props.hasGraphQL === false ||
    props.hasVictoryNative === false ||
    props.hasExpo === false ||
    props.hasAxios === false ||
    props.hasFaunaDB === false ||
    props.hasYup === false ||
    props.hasSCSS === false ||
    props.hasSASS === false ||
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

  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundItens};
  }

  svg,
  img {
    outline: 0;
    border: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
