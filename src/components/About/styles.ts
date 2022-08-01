import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.main`
  p {
    color: ${(props) => props.theme.colors.text};
    font-style: unset;
  }
`;

export const AboutContent = styled.header`
  color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  overflow: hidden;
`;

export const AboutProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    width: 60%;
    p {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.5rem;
      text-align: center;
    }
  }

  img {
    width: calc(5rem + 12px);
    height: calc(5rem + 12px);
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme.colors.backgroundItens};
    outline: 2px solid ${(props) => props.theme.colors.text};
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
