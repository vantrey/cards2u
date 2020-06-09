import React, {useEffect} from 'react'
import styles from './CardPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../bll/cardPacksReducer";

const CardPacksContainer = () => {
  const {cardPacks} = useSelector((state: AppStateType)=>state.cardPacks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardPacks(''))
  }, [])
  return (
    <div className={styles.cardPacks}>
      {}
    </div>
  )

}

export default CardPacksContainer