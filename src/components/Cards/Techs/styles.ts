import styled from "styled-components";

interface TechContentProps {
  hasReact?: boolean;
  hasTypescript?: boolean;
  hasReactNative?: boolean;
  hasElixir?: boolean;
  hasStyledComponents?: boolean;
  hasHeroku?: boolean;
  hasMongoDB?: boolean;
  hasJWT?: boolean;
  hasGraphQL?: boolean;
  hasStripe?: boolean;
  hasJest?: boolean;
  hasNodeJS?: boolean;
  hasNetlify?: boolean;
  hasRubyOnRails?: boolean;
  hasVite?: boolean;
  hasRadix?: boolean;
  hasExpo?: boolean;
  hasChakra?: boolean;
  hasVue?: boolean;
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
  hasAsyncStorage?: boolean;
}

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TechContent = styled.span<TechContentProps>`
  display: ${({
    hasReact,
    hasTypescript,
    hasReactNative,
    hasElixir,
    hasStyledComponents,
    hasHeroku,
    hasMongoDB,
    hasJWT,
    hasGraphQL,
    hasStripe,
    hasJest,
    hasNodeJS,
    hasNetlify,
    hasRubyOnRails,
    hasVite,
    hasRadix,
    hasExpo,
    hasChakra,
    hasVue,
    hasFaunaDB,
    hasAxios,
    hasYup,
    hasVictoryNative,
    hasZod,
    hasPhosphor,
    hasBootstrap,
    hasSCSS,
    hasSASS,
    hasRedux,
    hasExpress,
    hasNextJS,
    hasVercel,
    hasJavascript,
    hasFirebase,
    hasAsyncStorage,
  }) =>
    hasJavascript === false ||
    hasFirebase === false ||
    hasAsyncStorage === false ||
    hasReact === false ||
    hasHeroku === false ||
    hasJWT === false ||
    hasMongoDB === false ||
    hasVercel === false ||
    hasNextJS === false ||
    hasVite === false ||
    hasRadix === false ||
    hasZod === false ||
    hasPhosphor === false ||
    hasGraphQL === false ||
    hasStripe === false ||
    hasVictoryNative === false ||
    hasExpo === false ||
    hasChakra === false ||
    hasVue === false ||
    hasAxios === false ||
    hasFaunaDB === false ||
    hasYup === false ||
    hasSCSS === false ||
    hasSASS === false ||
    hasTypescript === false ||
    hasNodeJS === false ||
    hasNetlify === false ||
    hasStyledComponents === false ||
    hasReactNative === false ||
    hasElixir === false ||
    hasRedux === false ||
    hasJest === false ||
    hasBootstrap === false ||
    hasRubyOnRails === false ||
    hasExpress === false
      ? "none"
      : "flex"};
  padding: 1rem;

  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    transition: background 0.2s;
  }

  svg,
  img {
    outline: 0;
    border: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
