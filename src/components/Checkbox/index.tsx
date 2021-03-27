import { ChangeEvent } from 'react'
import checkIcon from '../../assets/icons/check.svg'

import { Container } from './styles'

import { Column } from '../../interfaces/Column'

interface CheckBoxProps {
  isSelected: boolean
  column: Column
  onToggle: (value: boolean, column: Column) => void
}

export function CheckBox({ isSelected, column, onToggle }: CheckBoxProps) {
  function handleCheckboxClick(event: ChangeEvent<HTMLInputElement>) {
    onToggle(event.target.checked, column)
  }

  return (
    <Container isSelected={isSelected} >
       {isSelected  && <img src={checkIcon} alt="Check" />}
       <input 
          id="checkbox" 
          type="checkbox" 
          checked={isSelected} 
          onChange={handleCheckboxClick} 
       />
    </Container>
  )
}