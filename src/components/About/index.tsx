import { AboutContainer, AboutContent } from "./styles";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <img src="https://github.com/murilojssilva.png" />
        <article>
          <p>Olá 👋. Este é o portfólio do Murilo Silva.</p>
          <p>
            Desenvolvedor Front End ReactJS. Concluindo o curso de Ciência da
            Computação na Universidade do Estado do Rio de Janeiro. Atualmente,
            desenvolvendo o sistema ACESSO em React Native.
          </p>
        </article>
      </AboutContent>
    </AboutContainer>
  );
}
