import React from 'react'

type CardPacksHeaderPropsType = {
  name: string
  onSortClickUp: (e: any) => void
  onSortClickDown: (e: any) => void
}

const CardPacksHeader: React.FC<CardPacksHeaderPropsType> = (props) => {
  return (
      <th>
        {props.name}
        <button name={props.name} onClick={props.onSortClickUp}>&#8593;</button>
        <button name={props.name} onClick={props.onSortClickDown}>&#8595;</button>
      </th>
  )
}

export default CardPacksHeader