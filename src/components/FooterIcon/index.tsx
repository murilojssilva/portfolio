import { FooterIconContainer } from './styles'
import { IFooterIconProps } from '@/interfaces/IFooterProps'

import {
  FaGithubAlt,
  FaGitlab,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa'

export function FooterIcon({ href, dataTip }: IFooterIconProps) {
  return (
    <FooterIconContainer>
      <a target='_blank' href={href}>
        <span>
          {dataTip === 'GitHub' ? (
            <FaGithubAlt size={26} data-tip={dataTip} />
          ) : dataTip === 'GitLab' ? (
            <FaGitlab size={26} data-tip={dataTip} />
          ) : dataTip === 'Linkedin' ? (
            <FaLinkedinIn size={26} data-tip={dataTip} />
          ) : dataTip === 'Telefone' ? (
            <FaWhatsapp size={26} data-tip={dataTip} />
          ) : dataTip === 'E-mail' ? (
            <FaEnvelope size={26} data-tip={dataTip} />
          ) : dataTip === 'Localização' ? (
            <FaMapMarkerAlt size={26} data-tip={dataTip} />
          ) : null}
        </span>
      </a>
    </FooterIconContainer>
  )
}
