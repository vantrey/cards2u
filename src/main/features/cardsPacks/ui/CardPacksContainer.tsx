import React, {useEffect, useState} from 'react'
import styles from './CardPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../bll/cardPacksReducer";
import {repository} from "../../../helpers/repos_localStorrage/Token";
import lodash from 'lodash'
import {CardPackType} from "../../../types/entities";

const CardPacksContainer = () => {
  const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks)
  const [cardPacksOrdered, setCardPacksOrdered] = useState<Array<CardPackType>>([])
  const dispatch = useDispatch()
  const token = repository.getToken()
  useEffect(() => {
    dispatch(getCardPacks(token))
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
  return (
    <div className={styles.cardPacks}>
      <div className={styles.row}>
        <h3>Name <button onClick={onSortClickUp}>&#8593;</button><button onClick={onSortClickDown}>&#8595;</button></h3>
        {cardPacksOrdered.map(p => {
          return (
            <div key={p._id}>{p.name}</div>
          )
        })}
      </div>
      <div className={styles.row}>
        <h3>Grade</h3>
        {cardPacksOrdered.map(p => {
          return (
            <div key={p._id}>{p.grade}</div>
          )
        })}
      </div>
    </div>
  )

}

export default CardPacksContainer