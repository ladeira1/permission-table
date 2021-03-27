import { createContext, ReactNode, useEffect, useState } from 'react'

import data from '../data.json'

import { Column } from '../interfaces/Column'
import { Group } from '../interfaces/Group'
import { Option } from '../interfaces/Option'
import { Type } from '../interfaces/Type'

interface PermissionProviderProps {
  children: ReactNode
}

export interface PermissionContextData {
  permissions: Group[]
  allPermissions: Option
  updateCheckBox: (type: Type, value: boolean, option: Option, column: Column) => void
  registerPermissions: () => void
}

export const PermissionContext = createContext<PermissionContextData>({} as PermissionContextData)

export function PermissionProvider({ children }: PermissionProviderProps): JSX.Element {
  const [permissions, setPermissions] = useState<Group[]>(() => {
    const storagedPermissions = localStorage.getItem('@permissions/permission')
    if(storagedPermissions) {
      return JSON.parse(storagedPermissions)
    }

    return data.groups.map(group => {
      return {
        id: group.id,
        name: group.name,
        list: false,
        details: false,
        create: false,
        edit: false,
        delete: false,
        children: group.children.map(item => {
          return {
            id: item.id,
            name: item.name,
            list: false,
            details: false,
            create: false,
            edit: false,
            delete: false,
          }
        })
      }
    })
  })
  const [allPermissions, setAllPermissions] = useState<Option>({
    id: 0,
    name: 'Todos',
    list: false,
    details: false,
    create: false,
    edit: false,
    delete: false,
  })

  function updateCheckBox(type: Type, value: boolean, option: Option, column: Column) {
    switch(type) {
      case 'all': {
        updateAllCheckBoxes(value, column)
        break
      }
      case 'father': {
        updateAllGroupCheckBoxes(option.id, value, column)
        break
      }
      case 'child': {
        updateOneCheckbox(option, value, column)
        break
      }
      default: {
        // should never reach here
        throw new Error('Unhandled type')
      }
    }
  }

  function updateAllCheckBoxes(value: boolean, column: Column) {
    const updatedPermissions = permissions.map(permission => {
      return { 
        ...permission,
        [column]: value,
        children: permission.children.map(option => ({ ...option, [column]: value }))
      }
    })

    setPermissions(updatedPermissions)
    storeCurrentPermissions(updatedPermissions)
  }

  function updateAllGroupCheckBoxes(groupId: number, value: boolean, column: Column) {
    const updatedPermissions = permissions.map(permission => {
      if(permission.id === groupId) {
        return { 
          ...permission, 
          [column]: value, 
          children: permission.children.map(option => {
            return { ...option, [column]: value }
          })
        }
      }

      return permission
    })

    setPermissions(updatedPermissions)
    storeCurrentPermissions(updatedPermissions)
  }

  function updateOneCheckbox(option: Option, value: boolean, column: Column) {
    const updatedGroup = permissions.find(permission => permission.children.find(o => o === option))
    if(!updatedGroup) {
      return
    }

    let updatedPermissions = permissions.map(permission => {
      if(permission === updatedGroup) {
        const updatedOptions = permission.children.map(o => {
          if(option === o) {
            return { ...option, [column]: value }
          }

          return o
        })

        const positiveUpdatedOptions = updatedOptions.filter(o => o[column] === true)
        let updatedPermissions

        if(positiveUpdatedOptions.length === updatedOptions.length) {
          updatedPermissions = { ...permission, [column]: true }
        } else {
          updatedPermissions = { ...permission, [column]: false }
        }

        return { 
          ...updatedPermissions, 
          children: updatedOptions
        }
      }

      return permission
    })

    setPermissions(updatedPermissions)
    storeCurrentPermissions(updatedPermissions)
  }

  function storeCurrentPermissions(data: Group[]) {
    localStorage.setItem('@permissions/permission', JSON.stringify(data))
  }

  function registerPermissions() {
    let result: string[] = []
    const columnsMap = {
      'list': 'Ver listagem',
      'details': 'Ver detalhes',
      'create': 'Criar',
      'edit': 'Editar',
      'delete': 'Deletar'
    }

    const columns: Column[] = ['list', 'details', 'create', 'edit', 'delete']

    columns.forEach(column => {
      permissions.forEach(permission => {
        permission.children.forEach(option => {
          if(option[column]) {
            result.push(`${columnsMap[column]} - ${option.name}\n`)
          }
        })
      })
    })

    console.log(`Resultado:\n ${result}`)
  }

  useEffect(() => {
    const columns: Column[] = ['list', 'details', 'create', 'edit', 'delete']
    columns.forEach(column => {
      const selectedPermissions = permissions.filter(permission => permission[column] === true)
        if(selectedPermissions.length === permissions.length) {
          setAllPermissions(oldState => ({ ...oldState, [column]: true }))
        } else {
          setAllPermissions(oldState => ({ ...oldState, [column]: false }))
        }
      })
    }, [permissions])

  return (
    <PermissionContext.Provider
      value={{ 
        permissions,
        allPermissions,
        updateCheckBox,
        registerPermissions,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
}