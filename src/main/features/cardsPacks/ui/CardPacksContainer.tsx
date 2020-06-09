import React, {useEffect} from 'react'
import styles from './CardPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../bll/cardPacksReducer";
import {repository} from "../../../helpers/repos_localStorrage/Token";

const CardPacksContainer = () => {
  const {cardPacks} = useSelector((state: AppStateType)=>state.cardPacks)
  const dispatch = useDispatch()
  const token = repository.getToken()
  useEffect(() => {
    dispatch(getCardPacks(token))
  }, [])
  return (
    <div className={styles.cardPacks}>
      <div className={styles.row}>
        <h3>Name</h3>
        {cardPacks.map(p => {
          return (
            <div key={p._id}>{p.name}</div>
          )
        })}
      </div>
      <div className={styles.row}>
        <h3>Grade</h3>
        {cardPacks.map(p => {
          return (
            <div key={p._id}>{p.grade}</div>
          )
        })}
      </div>
    </div>
  )

}

export default CardPacksContainer