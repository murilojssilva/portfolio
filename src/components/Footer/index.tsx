import { FooterContacts } from "./styles";
import { FooterIcon } from "../FooterIcon";

export function Footer() {
  return (
    <FooterContacts>
      <FooterIcon href="https://github.com/murilojssilva" dataTip="GitHub" />
      <FooterIcon href="https://gitlab.com/murilojssilva" dataTip="GitLab" />
      <FooterIcon
        href="https://linkedin.com/murilojssilva"
        dataTip="Linkedin"
      />
      <FooterIcon href="https://wa.me/+5521992687311" dataTip="Telefone" />
      <FooterIcon href="mailto:murilojssilva@outlook.com" dataTip="E-mail" />
      <FooterIcon
        href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=pt-BR&msa=0&ll=-22.514935999999985%2C-43.178157999999996&spn=0.112749%2C0.154324&z=13&mid=1W3FZt80hYEI3FuGMiAatJ_E0ezo"
        dataTip="Localização"
      />
    </FooterContacts>
  );
}
