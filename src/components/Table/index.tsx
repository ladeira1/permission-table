import { Container } from './styles'

import { TableRow } from '../TableRow'
import { TableGroup } from '../TableGroup'

import { usePermission } from '../../hooks/usePermission'

export function Table() {
  const { permissions, allPermissions } = usePermission()

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
        <TableRow type='all' option={allPermissions} />
      </tbody>

      {permissions.map(group => (
        <tbody key={group.id}>
          <TableGroup group={group} />
        </tbody>
      ))}
      
    </Container>
  )
}