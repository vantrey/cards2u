import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {createCardPack, getCardPacks} from "../bll/cardPacksReducer";
import lodash from 'lodash'
import {CardPackType} from "../../../types/entities";
import CardPacks from "./CardPacks";


const CardPacksContainer = () => {
  const {
    cardPacks,
    isFetching,
    totalCardPacksCount,
    currentPage,
    pageSize
  } = useSelector((state: AppStateType) => state.cardPacks)

  const [cardPacksOrdered, setCardPacksOrdered] = useState<Array<CardPackType>>([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardPacks(currentPage, pageSize))
  }, [])
  useEffect(() => {
    setCardPacksOrdered(cardPacks)
  }, [cardPacks])

  const onPageChanged = (pageNumber: number) => {
    dispatch(getCardPacks(pageNumber, pageSize))
  }

  const onSortClickUp = (e: any) => {
    const Ordered = lodash.orderBy(cardPacks, e.currentTarget.name, 'asc')
    setCardPacksOrdered(Ordered)
  }
  const onSortClickDown = (e: any) => {
    const Ordered = lodash.orderBy(cardPacks, e.currentTarget.name, 'desc')
    setCardPacksOrdered(Ordered)
  }
  const onAddDeck = () => {
    dispatch(createCardPack({name: 'Jeca'}))
  }
  return (
    <CardPacks
      onPageChanged={onPageChanged}
      onSortClickUp={onSortClickUp}
      onSortClickDown={onSortClickDown}
      cardPacksOrdered={cardPacksOrdered}
      onAddDeck={onAddDeck}
      pageSize={pageSize}
      totalCardPacksCount={totalCardPacksCount}
      currentPage={currentPage}
      isFetching={isFetching}
    />
  )
}

export default CardPacksContainer