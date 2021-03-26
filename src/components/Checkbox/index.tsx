import { useState } from 'react'
import { Container } from './styles'

import checkIcon from '../../assets/icons/check.svg'

export function CheckBox() {
  const [isSelected, setIsSelected] = useState(true)

  function handleButtonClick() {
    setIsSelected(oldState => !oldState)
  }

  return (
    <Container
      onClick={handleButtonClick} 
      isSelected={isSelected}
     >
       {isSelected && <img src={checkIcon} alt="Check"/>}
       <input type="checkbox" />
    </Container>
  )
}