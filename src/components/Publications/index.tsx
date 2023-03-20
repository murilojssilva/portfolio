import { PublicationsContainer } from "./styles";
import { TitleContainer } from "../Title/styles";

import { Cards } from "../Cards";

export function Publications() {
  return (
    <PublicationsContainer>
      <TitleContainer type="publications" title="Publicações" />
      <Cards
        colorTop="publications"
        stack="mobile"
        title="Sistema de Informação Colaborativo para Acessibilidade de Pessoas com Deficiência"
        subtitle="Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS) 2023"
        hasLink
        type="academic"
        iconButton={"Paper"}
        href={
          "https://jems.sbc.org.br/jems2/index.php?r=paper/download&p=229553&f=0"
        }
      />
      <Cards
        colorTop="publications"
        stack="fullstack"
        title="Requirements Engineering Out of the Classroom: Anticipating Challenges Experienced in Practice"
        subtitle="2020 IEEE 32nd Conference on Software Engineering Education and Training (CSEE&T)"
        hasLink
        type="academic"
        iconButton={"Paper"}
        href={"https://ieeexplore.ieee.org/document/9206220"}
      />
      <TitleContainer type="publications" title="/Publicações" />
    </PublicationsContainer>
  );
}
