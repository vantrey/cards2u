import React from 'react'
import styles from './CardPacks.module.css'
import CardPack from "./cardPack";
import {CardPackType} from "../../../types/entities";
import CardPacksHeader from "./CardPacksHeader";
import Pagination from "./Pagination/Pagination";

type CardPacksPropsType = {
  onSortClickUp: (e: React.MouseEvent<HTMLButtonElement>) => void
  onSortClickDown: (e: React.MouseEvent<HTMLButtonElement>) => void
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
    {name: 'name', title: 'Name', withSorted: true},
    {name: 'grade', title: 'Grade', withSorted: false},
  ]
  return (
    <div>
      <div className={styles.cardPacks}>
        <table cellPadding='3'>
          <tbody>
          <tr>
            {CardPacksHeaderEls.map(h =>
              <CardPacksHeader
                withSorted={h.withSorted}
                title={h.title}
                key={h.name}
                name={h.name}
                onSortClickUp={props.onSortClickUp}
                onSortClickDown={props.onSortClickDown}
              />)}
          </tr>
          {props.cardPacksOrdered.map(p =>
            <tr key={p._id}>
              <CardPack
                id={p._id}
                name={p.name}
                grade={p.grade}
              />
            </tr>
          )}
          </tbody>
        </table>
        <button onClick={props.onAddDeck} className={styles.addDeck}> Add Deck</button>
      </div>
      {(props.isFetching && <div>...loading</div>) ||
      <Pagination
        onPageChanged={props.onPageChanged}
        totalCount={props.totalCardPacksCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
      />}
    </div>
  )
}

export default CardPacks