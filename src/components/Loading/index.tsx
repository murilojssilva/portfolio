import { FiLoader } from 'react-icons/fi'
import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <FiLoader size={20} />
    </LoadingContainer>
  )
}
