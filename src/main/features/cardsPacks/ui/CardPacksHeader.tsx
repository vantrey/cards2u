import React from 'react'

type CardPacksHeaderPropsType = {
  name: string
  onSortClickUp: (e: React.MouseEvent<HTMLButtonElement>) => void
  onSortClickDown: (e: React.MouseEvent<HTMLButtonElement>) => void
  title: string
  withSorted: boolean
}

const CardPacksHeader: React.FC<CardPacksHeaderPropsType> = (props) => {
  return (
    <th>
      {props.title}
      {props.withSorted &&
      <>
        <button name={props.name} onClick={props.onSortClickUp}>&#8593;</button>
        <button name={props.name} onClick={props.onSortClickDown}>&#8595;</button>
      </>}

    </th>
  )
}

export default CardPacksHeader