import { Container } from './styles'

import { PermissionProvider } from '../../contexts/PermissionsContext'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'

export function Home() {
  return (
    <PermissionProvider>
      <Header />
      <Container>
        <Table />
        <Button />
      </Container>
    </PermissionProvider>
  )
}