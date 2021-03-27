import { Option } from './Option'

export interface Group extends Option {
  children: Option[]
}