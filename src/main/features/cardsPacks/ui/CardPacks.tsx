import React from 'react'
import styles from './CardPacks.module.css'
import CardPack from "./cardPack";
import {CardPackType} from "../../../types/entities";
import CardPacksHeader from "./CardPacksHeader";
import Pagination from "./Pagination/Pagination";

type CardPacksPropsType = {
  onSortClickUp: (e: any) => void
  onSortClickDown: (e: any) => void
  cardPacksOrdered: Array<CardPackType>
  onAddDeck: () => void
  onPageChanged: (pageNumber: number) => void
  totalCardPacksCount: number
  pageSize: number
  currentPage: number
  isFetching: boolean
}

const CardPacks: React.FC<CardPacksPropsType> = (props) => {

  const CardPacksHeaderEls = [
    {name: 'name'},
    {name: 'grade'},
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
          {props.isFetching && <div>...loading</div> ||
          props.cardPacksOrdered.map(p =>
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
      <Pagination
        onPageChanged={props.onPageChanged}
        totalCount={props.totalCardPacksCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
      />
    </div>
  )
}

export default CardPacks