import { Container, FirstColumn } from "./styles";

import { CheckBox } from '../Checkbox'
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface TableRowProps {
  type: 'all' | 'father' | 'child'
}

export function TableRow({ type }: TableRowProps) {
  const { colors } = useContext(ThemeContext);
  let backgroundColor

  switch(type) {
    case 'all': {
      backgroundColor = colors.gray300
      break
    }
    case 'father': {
      backgroundColor = colors.gray200
      break
    }
    case 'child': {
      backgroundColor = colors.white
      break
    }
    default: {
      // should never get to this point
      throw new Error('Unhandled type')
    }
  }
  
  return (
    <Container 
      backgroundColor={backgroundColor} 
 
    >
      <FirstColumn type={type}>
        Todos
      </FirstColumn>
      <td><CheckBox /></td>
      <td><CheckBox /></td>
      <td><CheckBox /></td>
      <td><CheckBox /></td>
      <td><CheckBox /></td>
    </Container>
  )
}