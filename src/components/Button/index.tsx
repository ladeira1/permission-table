import { usePermission } from '../../hooks/usePermission'
import { Container } from './styles'

export function Button() {
  const { registerPermissions } = usePermission()

  function handleRegisterClick() {
    registerPermissions()
  }

  return (
    <Container>
      <button 
        type="button" 
        onClick={handleRegisterClick}
      >
        CADASTRAR 
      </button>
    </Container>
  )
}