import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {cardPacksActions, createCardsPack, deleteCardsPacks, getCardPacks} from "../bll/cardPacksReducer";
import lodash from 'lodash'
import {CardPackType} from "../../../types/entities";
import CardPacks from "./CardPacks";


const CardPacksContainer: React.FC = () => {
    const {
        cardPacks,
        isFetching,
        totalCardPacksCount,
        pageSize,
        errorFromServer,
        cardsPackId,
        user_id
    } = useSelector((state: AppStateType) => state.cardPacks)

    const [isFirstRendering, setIsFirstRendering] = useState<boolean>(true)
    const [cardPacksOrdered, setCardPacksOrdered] = useState<Array<CardPackType>>([])
    const [currentPage, setCurrentPage] = useState<number>(1)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardPacks(currentPage, pageSize,user_id))
    }, [dispatch, currentPage, pageSize])


    useEffect(() => {
        setCardPacksOrdered(cardPacks)
    }, [cardPacks])

    const onPageChanged = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    const onSortClickUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        const Ordered = lodash.orderBy(cardPacks, e.currentTarget.name, 'asc')
        setCardPacksOrdered(Ordered)
    }
    const onSortClickDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        const Ordered = lodash.orderBy(cardPacks, e.currentTarget.name, 'desc')
        setCardPacksOrdered(Ordered)
    }
    const onAddDeck = (name:string) => {
        dispatch(createCardsPack({name}))
    }
    if (isFirstRendering) {
        if (errorFromServer) {
            dispatch(cardPacksActions.setError(''))
        }
        setIsFirstRendering(false)
    }

    if (errorFromServer && !isFirstRendering) {
        if (errorFromServer === 'bad token!') {
            return <div style={{'color': 'orange'}}>Please sign In</div>
        } else {
            return <div style={{'color': 'red'}}>server error</div>
        }
    }
    const deletePacksCards = (cardsPackId: string) => {
        dispatch(deleteCardsPacks(cardsPackId))
    };
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
            deletePacksCards={deletePacksCards}
            cardsPackId={cardsPackId}
            user_id={user_id}
                 />
    )
}

export default CardPacksContainer