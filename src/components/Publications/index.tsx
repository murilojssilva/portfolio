import { CardDetails } from "../CardDetails";
import { PublicationsContainer } from "./styles";

export function Publicatins() {
  return (
    <PublicationsContainer>
      <h1>{"<Publicações />"}</h1>
      <CardDetails
        colorTop="publications"
        title="Requirements Engineering Out of the Classroom: Anticipating Challenges Experienced in Practice"
        subtitle="2020 IEEE 32nd Conference on Software Engineering Education and Training (CSEE&T)"
        content={`P. Marques, M. Silva, C. Gusmão, D. Castro and M. Schots, "Requirements Engineering Out of the Classroom: Anticipating Challenges Experienced in Practice," 2020 IEEE 32nd Conference on Software Engineering Education and Training (CSEE&T), Munich, Germany, 2020, pp. 1-9, doi: 10.1109/CSEET49119.2020.9206220.`}
        hasLink
        href={"https://ieeexplore.ieee.org/document/9206220"}
      />
    </PublicationsContainer>
  );
}
