import { useContext } from 'react'
import { PermissionContext } from '../contexts/PermissionsContext'

export const usePermission = () =>  useContext(PermissionContext)