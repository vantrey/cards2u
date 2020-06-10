import React, {useEffect, useState} from 'react'
import styles from './CardPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks, createCardPack} from "../bll/cardPacksReducer";
import lodash from 'lodash'
import {CardPackType} from "../../../types/entities";
import CardPack from "./cardPack";


const CardPacksContainer = () => {
  const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks)
  const [cardPacksOrdered, setCardPacksOrdered] = useState<Array<CardPackType>>([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardPacks())
  }, [])
  useEffect(() => {
    setCardPacksOrdered(cardPacks)
  }, [cardPacks])

  const onSortClickUp = () => {
    const Ordered = lodash.orderBy(cardPacks, 'name', 'asc')
    setCardPacksOrdered(Ordered)
  }
  const onSortClickDown = () => {
    const Ordered = lodash.orderBy(cardPacks, 'name', 'desc')
    setCardPacksOrdered(Ordered)
  }
  const onAddDeck = () => {
    dispatch(createCardPack({name: 'Ideck'}))
  }
  return (
    <div className={styles.cardPacks}>
      <table>
        <tr>
          <th>
            Name
            <button onClick={onSortClickUp}>&#8593;</button>
            <button onClick={onSortClickDown}>&#8595;</button>
          </th>
          <th>
            Grade
          </th>
        </tr>
          {cardPacksOrdered.map(p => <CardPack name={p.name} grade={p.grade}/>)}
      </table>
      <button onClick={onAddDeck} className={styles.addDeck}> Add Deck</button>

    </div>
  )
}

export default CardPacksContainer