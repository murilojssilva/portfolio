import {
  FaGithubAlt,
  FaGitlab,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FooterContacts } from "./styled";

export function Footer() {
  return (
    <FooterContacts>
      <div>
        <a target="_blank" href="https://github.com/murilojssilva">
          <span>
            <FaGithubAlt size={26} data-tip="GitHub" />
          </span>
        </a>
      </div>
      <div>
        <a target="_blank" href="https://gitlab.com/murilojssilva">
          <span>
            <FaGitlab size={26} data-tip="GitLab" />
          </span>
        </a>
      </div>
      <div>
        <a target="_blank" href="https://linkedin.com/in/murilojssilva">
          <span>
            <FaLinkedinIn size={26} data-tip="LinkedIn" />
          </span>
        </a>
      </div>
      <div>
        <a target="_blank" href="https://wa.me/+5521992687311">
          <span>
            <FaWhatsapp size={26} data-tip="Telefone" />
          </span>
        </a>
      </div>
      <div>
        <a target="_blank" href="mailto:murilojssilva@outlook.com">
          <span>
            <FaEnvelope size={26} data-tip="E-mail" />
          </span>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=pt-BR&msa=0&ll=-22.514935999999985%2C-43.178157999999996&spn=0.112749%2C0.154324&z=13&mid=1W3FZt80hYEI3FuGMiAatJ_E0ezo"
        >
          <span>
            <FaMapMarkerAlt size={26} data-tip="Localização" />
          </span>
        </a>
      </div>
    </FooterContacts>
  );
}
