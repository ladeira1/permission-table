import { Container } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Table />
        <Button />
      </Container>
    </>
  )
}