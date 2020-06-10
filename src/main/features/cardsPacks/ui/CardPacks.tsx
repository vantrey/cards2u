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
  onPageChanged: (pageNumber: number)=> void
  totalCardPacksCount: number
  pageSize: number
  currentPage: number
}

const CardPacks: React.FC<CardPacksPropsType> = (props) => {
  const pagesNumbersEls = Array.from({
    length: Math.ceil(props.totalCardPacksCount / props.pageSize)
  }).map((el, i) => {
    let pageNumber = i + 1
    return <span
      onClick={() => {
        props.onPageChanged(pageNumber)
      }}
      key={i}
      className={`${styles.pagesNumbers} ${(props.currentPage === pageNumber && styles.selected)
      || ''}`}>
     {pageNumber} -
    </span>
  })
  const CardPacksHeaderEls = [
    {name: 'Name'},
    {name: 'Grade'},
  ]
  return (
    <div>
      <div className={styles.cardPacks}>
        <table>
          <tr>
            {CardPacksHeaderEls.map(h =>
              <CardPacksHeader
                key={h.name}
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
      {pagesNumbersEls}
    </div>
  )
}

export default CardPacks