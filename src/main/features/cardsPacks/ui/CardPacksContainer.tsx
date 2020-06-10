import React, {useEffect, useState} from 'react'
import styles from './CardPacks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks, createCardPack} from "../bll/cardPacksReducer";
import lodash from 'lodash'
import {CardPackType} from "../../../types/entities";
import CardPack from "./cardPack";
import CardPacks from "./CardPacks";


const CardPacksContainer = () => {
  const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks)
  const [cardPacksOrdered, setCardPacksOrdered] = useState<Array<CardPackType>>([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardPacks(1, 3))
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
    <CardPacks
      onSortClickUp={onSortClickUp}
      onSortClickDown={onSortClickDown}
      cardPacksOrdered={cardPacksOrdered}
      onAddDeck={onAddDeck}
      />
  )
}

export default CardPacksContainer