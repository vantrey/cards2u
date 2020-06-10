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
  return (
    <div className={styles.cardPacks}>
      <table>
        <tr>
          <CardPacksHeader
            name='Name'
            onSortClickUp={props.onSortClickUp}
            onSortClickDown={props.onSortClickDown}
          />
          <CardPacksHeader
            name='Grade'
            onSortClickUp={props.onSortClickUp}
            onSortClickDown={props.onSortClickDown}
          />
        </tr>
        {props.cardPacksOrdered.map(p => <CardPack name={p.name} grade={p.grade}/>)}
      </table>
      <button onClick={props.onAddDeck} className={styles.addDeck}> Add Deck</button>
    </div>
  )
}

export default CardPacks