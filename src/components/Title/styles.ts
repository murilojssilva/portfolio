import styled from "styled-components";
import { ITitleContainerProps } from "@/interfaces/ITitleProps";

export const TitleContainer = styled.h1<ITitleContainerProps>`
  background: ${({ type }) =>
    type === "publications"
      ? `linear-gradient(
    to right,
    var(--purple-200) 0%,
    var(--purple-500) 50%,
    var(--purple-700) 100%
  )`
      : type === "experiences"
      ? `linear-gradient(to right,  var(--blue-200) 0%,
  var(--blue-900) 100%)`
      : `linear-gradient(to right,  var(--green-200) 0%,
      var(--green-500) 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
