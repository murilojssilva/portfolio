import { Cards } from "../Cards";
import { PublicationsContainer } from "./styles";

export function Publicatins() {
  return (
    <PublicationsContainer>
      <h1>{"<Publicações>"}</h1>
      <Cards
        colorTop="publications"
        title="Requirements Engineering Out of the Classroom: Anticipating Challenges Experienced in Practice"
        subtitle="2020 IEEE 32nd Conference on Software Engineering Education and Training (CSEE&T)"
        hasLink
        iconButton={"Paper"}
        href={"https://ieeexplore.ieee.org/document/9206220"}
      />
      <h1>{"</Publicações>"}</h1>
    </PublicationsContainer>
  );
}
