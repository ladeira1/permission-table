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
        data-cy="register-button"
      >
        CADASTRAR 
      </button>
    </Container>
  )
}