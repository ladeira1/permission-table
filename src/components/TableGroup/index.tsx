import { useState } from 'react'

import { TableRow } from '../TableRow'

import { Group } from '../../interfaces/Group'

interface TableGroupProps {
  group: Group
}

export function TableGroup({ group }: TableGroupProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  function handleExpandOrCollapseChildren() {
    setIsExpanded(oldState => !oldState)
  }

  return (
    <>
      <TableRow
        option={group} 
        type='father' 
        isExpanded={isExpanded} 
        handleExpandOrCollapseChildren={handleExpandOrCollapseChildren} 
      />
        {isExpanded && group.children.map(item => 
          <TableRow 
            key={item.id} 
            type='child' 
            option={item} 
          />
        )}
    </>
  )
}