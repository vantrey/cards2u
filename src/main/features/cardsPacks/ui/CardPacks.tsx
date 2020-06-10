import React from 'react'
import styles from './CardPacks.module.css'
import CardPack from "./cardPack";
import {CardPackType} from "../../../types/entities";
import CardPacksHeader from "./CardPacksHeader";

type CardPacksPropsType = {
  onSortClickUp: () => void
  onSortClickDown: () => void
  cardPacksOrdered: Array<CardPackType>
  onAddDeck: () => void
}

const CardPacks: React.FC<CardPacksPropsType> = (props) => {
  const CardPacksHeaderEls = [
    {name: 'Name', id: 1},
    {name: 'Grade', id: 2},
  ]
  return (
    <div className={styles.cardPacks}>
      <table>
        <tr>
          {CardPacksHeaderEls.map(h =>
            <CardPacksHeader
              key={h.id}
              name={h.name}
              onSortClickUp={props.onSortClickUp}
              onSortClickDown={props.onSortClickDown}
            />)}
        </tr>
        {props.cardPacksOrdered.map(p =>
          <tr key={p._id}>
            <CardPack
              name={p.name}
              grade={p.grade}
            />
          </tr>
        )}
      </table>
      <button onClick={props.onAddDeck} className={styles.addDeck}> Add Deck</button>
    </div>
  )
}

export default CardPacks