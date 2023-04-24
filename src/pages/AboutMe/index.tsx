import { useContext } from 'react'
import { AboutMeContainer } from './styles'
import { Title } from '@/components/Title'
import { ProfileContext } from '@/contexts/ProfileContext'


export function AboutMe() {
    const { data } = useContext(ProfileContext)
  return (
    <AboutMeContainer>
      <Title title='Sobre mim' type='experiences'/>
      <article>
              <p>
                💻 Trabalhei na empresa Upnid Pagamentos como Front End
                Developer, responsável pela manutenção do website,
                desenvolvimento de novas telas, alertas aos clientes, view de
                envio de documentos, migração do código legado para Typescript e
                utilização do Storybook para manutenção do Design System.
              </p>
              <p>
                📓 Fiz parte do projeto de um Extensão na Universidade do Estado
                do Rio de Janeiro voltado à desenvolvimento do protótipo do
                website do Instituto de Matemática e Estatística da Instituição,
                onde fiz desde a obtenção dos requisitos funcionais, não
                funcionais e regras de negócio, elaboração do documento de
                requisitos e o desenvolvimento do protótipo.
              </p>
              <p>
                🏛️ Desenvolvi o website da empresa ResolveLogo, tanto o frontend
                desenvolvendo a landing page da empresa, como no backend,
                desenvolvendo um micro-serviço de envio de e-mails.
              </p>
              <p>
                📱 Desenvolvi o Sistema ACESSO, responsável por listar quais
                tipos de acessibilidade são atendidas nos estabelecimentos
                cadastrados próximo à localização do usuário.
              </p>
              <p>
                📱 Atualmente, faço parte de uma ONG que está desenvolvendo o
                sistema corre, responsável por listar produtos, serviços, vagas
                e iniciativas culturai e sociais disponíveis para a comunidade.
              </p>
            </article>
            <Title title='Sobre mim/' type='experiences'/>
    </AboutMeContainer>
  )
}
