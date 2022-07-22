import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SidebarContacts,
  SidebarContainer,
  SidebarFooter,
  SidebarProfile,
  SocialMediaIcons,
} from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarProfile>
        <img src="https://github.com/murilojssilva.png" />
        <SocialMediaIcons>
          <a target="_blank" href="https://linkedin.com/in/murilojssilva">
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://github.com/murilojssilva">
            <FaGithub />
          </a>
          <a target="_blank" href="https://instagram.com/murilojssilva">
            <FaInstagram />
          </a>
        </SocialMediaIcons>
        <strong>Murilo Silva</strong>
        <span>Front End Developer</span>
      </SidebarProfile>
      <SidebarContacts>
        <div>
          <FaWhatsapp size={26} />
          <div>
            <h3>Telefone</h3>
            <a target="_blank" href="https://wa.me/+5521992687311">
              (21)99268-7311
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
      </SidebarContacts>

      <SidebarFooter>
        <a>
          <FaDownload size={20} />
          Baixar currículo
        </a>
      </SidebarFooter>
    </SidebarContainer>
  );
}
