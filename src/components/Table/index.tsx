import { Container } from './styles'

import { TableRow } from '../TableRow'

export function Table() {
  return (
    <Container>
      <thead>
        <tr>
          <th></th>
          <th>Ver listagem</th>
          <th>Ver detalhes</th>
          <th>Criar</th>
          <th>Editar</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        <TableRow type='all' />
        <TableRow type='father' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='child' />
        <TableRow type='father' />
      </tbody>
    </Container>
  )
}