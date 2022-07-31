import { AboutContainer } from "./styles";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HeaderAbout,
  AboutContacts,
  AboutContent,
  AboutProfileContainer,
  SocialMediaIcons,
} from "./styles";

export function About() {
  return (
    <AboutContainer>
      <h1>{"<Sobre />"}</h1>
      <AboutContent>
        <AboutProfileContainer>
          <img src="https://github.com/murilojssilva.png" />
          <SocialMediaIcons>
            <a
              data-tip="LinkedIn"
              target="_blank"
              href="https://linkedin.com/in/murilojssilva"
            >
              <FaLinkedin />
            </a>
            <a
              data-tip="GitHub"
              target="_blank"
              href="https://github.com/murilojssilva"
            >
              <FaGithub />
            </a>
            <a
              data-tip="GitLab"
              target="_blank"
              href="https://gitlab.com/murilojssilva"
            >
              <FaGitlab />
            </a>
          </SocialMediaIcons>
        </AboutProfileContainer>
        <HeaderAbout>
          <article>
            <p>Olá 👋. Este é o portfólio do Murilo Silva.</p>
            <p>
              Desenvolvedor Front End ReactJS. Concluindo o curso de Ciência da
              Computação na Universidade do Estado do Rio de Janeiro.
              Atualmente, desenvolvendo o sistema ACESSO em React Native.
            </p>
          </article>
        </HeaderAbout>
        <AboutContacts>
          <div>
            <FaWhatsapp size={26} />
            <div>
              <h3>Telefone</h3>
              <a target="_blank" href="https://wa.me/+5521992687311">
                (21) 99268-7311
              </a>
            </div>
          </div>
          <div>
            <FaMailBulk size={26} />
            <div>
              <h3>E-mail</h3>
              <a target="_blank" href="mailto:murilojssilva@outlook.com">
                murilojssilva@outlook.com
              </a>
            </div>
          </div>
          <div>
            <FaMapMarkerAlt size={26} />
            <div>
              <h3>Localização</h3>
              <a
                target="_blank"
                href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=pt-BR&msa=0&ll=-22.514935999999985%2C-43.178157999999996&spn=0.112749%2C0.154324&z=13&mid=1W3FZt80hYEI3FuGMiAatJ_E0ezo"
              >
                Petrópolis (RJ)
              </a>
            </div>
          </div>
        </AboutContacts>
      </AboutContent>
    </AboutContainer>
  );
}
