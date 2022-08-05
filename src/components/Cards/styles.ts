import styled from "styled-components";

interface CardsContainerProps {
  type: "challenge" | "personal" | "academic" | "none";
  colorTop: "projects" | "experiences" | "publications";
}

interface InDevelopmentProps {
  inDevelopment?: boolean;
}

export const CardsContainer = styled.div<CardsContainerProps>`
  border-top: 5px solid
    ${(props) =>
      props.colorTop === "experiences"
        ? "var(--blue-700)"
        : props.colorTop === "projects"
        ? "var(--green-500)"
        : props.colorTop === "publications"
        ? "var(--purple-700)"
        : "var(--red-500)"};
  margin: 2rem;
  padding: 1rem;

  background-color: ${(props) => props.theme.colors.backgroundItens};
  transition: filter 0.1s;
  &:hover {
    filter: ${(props) =>
      props.theme.title === "dark" ? "brightness(1.1)" : "brightness(0.9)"};
  }
  border-radius: 8px;
  h2 {
    font-size: 1.5rem;
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
    color: ${(props) => props.theme.colors.text};
  }
  p {
    min-height: 100px;
    color: ${(props) => props.theme.colors.text};
    word-wrap: break-word;
  }
  span {
    color: ${(props) =>
      props.type === "challenge"
        ? "var(--blue-500)"
        : props.type === "personal"
        ? "var(--green-500)"
        : props.type === "academic"
        ? "var(--purple-200)"
        : "var(--red-500)"};
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
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    strong {
      font-size: 0.5rem;
      border-radius: 100px;
      padding: 0.25rem;
      margin: 5px;
      color: ${(props) => props.theme.colors.text};
      border: 1px solid ${(props) => props.theme.colors.text};
      display: ${(props) => (props.inDevelopment === false ? "none" : "flex")};
      text-align: center;
      align-items: center;
    }
  }
`;

export const CardsType = styled.div<CardsContainerProps>`
  span {
    color: ${(props) =>
      props.type === "challenge"
        ? "var(--blue-500)"
        : props.type === "personal"
        ? "var(--green-500)"
        : props.type === "academic"
        ? "var(--purple-500)"
        : "var(--red-500)"};
    font-weight: bold;
  }
`;
