import { Container } from './styles'

export function Button() {
  function handleRegisterClick() {
    console.log('todo')
  }

  return (
    <Container>
      <button type="button" onClick={handleRegisterClick}>
        CADASTRAR 
      </button>
    </Container>
  )
}