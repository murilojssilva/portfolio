import { PublicationsContainer, PublicationsContent } from './styles'

import { Cards } from '../Cards'
import { Title } from '../Title'

export function Publications() {
  return (
    <PublicationsContainer>
      <Title type='publications' title='Publicações' />
      <PublicationsContent>
        <Cards
          colorTop='publications'
          stack='mobile'
          title='Sistema de Informação Colaborativo para Acessibilidade de Pessoas com Deficiência'
          subtitle='Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS) 2023'
          type='academic'
          iconButton='Paper'
          last_commit='03/2023'
          href={
            'https://jems.sbc.org.br/jems2/index.php?r=paper/download&p=229553&f=0'
          }
        />
        <Cards
          colorTop='publications'
          stack='fullstack'
          title='Requirements Engineering Out of the Classroom: Anticipating Challenges Experienced in Practice'
          subtitle='2020 IEEE 32nd Conference on Software Engineering Education and Training (CSEE&T)'
          type='academic'
          iconButton='Paper'
          last_commit='10/2020'
          href={'https://ieeexplore.ieee.org/document/9206220'}
        />
        <Title type='publications' title='/Publicações' />
      </PublicationsContent>
    </PublicationsContainer>
  )
}
