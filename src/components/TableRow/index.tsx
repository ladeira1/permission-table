import { useContext } from "react";

import { Container, FirstColumn } from "./styles";

import chevronRightIcon from '../../assets/icons/chevron-right.svg'
import chevronDownIcon from '../../assets/icons/chevron-down.svg'

import { CheckBox } from '../Checkbox'
import { ThemeContext } from "styled-components";

import { Option } from "../../interfaces/Option";
import { Group } from "../../interfaces/Group";
import { Type } from "../../interfaces/Type";
import { usePermission } from "../../hooks/usePermission";
import { Column } from "../../interfaces/Column";

interface TableRowProps {
  option: Group | Option
  type: Type
  isExpanded?: boolean
  handleExpandOrCollapseChildren?: () => void
}

export function TableRow({ 
  option,
  type, 
  isExpanded = false,
  handleExpandOrCollapseChildren,
}: TableRowProps) {
  const { updateCheckBox } = usePermission()
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

  function handleExpandOrCollapseChildrenIfPossible() {
    if(handleExpandOrCollapseChildren && type === 'father') {
      handleExpandOrCollapseChildren()
    }
  }

  function handleCheckBoxClick(value: boolean, column : Column) {
    updateCheckBox(type, value, option, column)
  }

  return (
    <Container 
      backgroundColor={backgroundColor} 
    >
      <FirstColumn type={type}>
        {type === 'father' ? (
          <button type="button" onClick={handleExpandOrCollapseChildrenIfPossible}>
            {option.name}
            {isExpanded ? 
              <img src={chevronDownIcon} alt="Expanded" /> 
              : <img src={chevronRightIcon} alt="Collapsed" />
            }
          </button>
        ) : (
          <>{option.name}</>
        )}
      </FirstColumn>
      <td><CheckBox isSelected={option.list} column='list' onToggle={handleCheckBoxClick} /></td>
      <td><CheckBox isSelected={option.details} column='details' onToggle={handleCheckBoxClick} /></td>
      <td><CheckBox isSelected={option.create} column='create' onToggle={handleCheckBoxClick} /></td>
      <td><CheckBox isSelected={option.edit} column='edit' onToggle={handleCheckBoxClick} /></td>
      <td><CheckBox isSelected={option.delete} column='delete' onToggle={handleCheckBoxClick} /></td>
    </Container>
  )
}