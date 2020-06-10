import React from 'react'

type CardPacksHeaderPropsType = {
  name: string
  onSortClickUp: () => void
  onSortClickDown: () => void
}

const CardPacksHeader: React.FC<CardPacksHeaderPropsType> = (props) => {
  return (
      <th>
        {props.name}
        <button onClick={props.onSortClickUp}>&#8593;</button>
        <button onClick={props.onSortClickDown}>&#8595;</button>
      </th>
  )
}

export default CardPacksHeader