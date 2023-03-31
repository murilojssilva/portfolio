import { TitleContainer } from './styles'
import { ITitleProps } from '@/interfaces/ITitleProps'

export function Title({ title, type }: ITitleProps) {
  return <TitleContainer type={type}>{`<${title}>`}</TitleContainer>
}
