import React, {Dispatch, useEffect, useState} from 'react';
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {add_Card, cardsActions, delete_Card, get_Cards, update_Card} from "../bll/cardsReducer";
import {useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
import styles from './Cards.module.css'
import {CARD_PACKS_PATH, LEARN_PATH} from "../../../ui/components/routes/Routes";
import Link from "../../../ui/common/Link/Link";
/*type sortCardsType={
    sortCards:string
    setSortCards:(sortCards:string)=>void
}*/

const CardsContainer: React.FC = () => {
    const {pack_id, user_id} = useParams();
    const {cards, /*isFetching,*/ pageCount, cardsTotalCount} = useSelector((state: AppStateType) => state.cards);
    const dispatch = useDispatch();


    const pageChangedHandler = (page: { selected: number }) => {
        dispatch(cardsActions.setFirstPage(page.selected + 1))
    }


    useEffect(() => {
        /*dispatch(get_Cards(pack_id))*/
    }, [dispatch, pack_id])

    const sortUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(get_Cards(pack_id, e.currentTarget.name, '1'))
    }

    const sortDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(get_Cards(pack_id, e.currentTarget.name, '0'))
    }


    const onAddNewCard = (valueQuestion: string, valueAnswer: string) => {
        dispatch(add_Card({cardsPack_id: pack_id, question: valueQuestion, answer: valueAnswer}))
    }
    const onDeleteCard = (card_id: string) => {
        dispatch(delete_Card(card_id, /*pack_id*/))
    }
    const onUpdateCard = (_id: string, question: string, answer: string) => {
        dispatch(update_Card({_id, question, answer}, /*pack_id*/))
    }

    const pageCountSize = Math.ceil(cardsTotalCount / pageCount)
    return (
        <div className={styles.Cards_container}>
            {/*{(isFetching && <div>...Loading please wait</div>) ||*/}

            <div className={styles.Cards_container}>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCountSize}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pageChangedHandler}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    nextClassName='page-item'
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
                <Cards
                    userId={user_id}
                    cards={cards}
                    onAddNewCard={onAddNewCard}
                    onDeleteCard={onDeleteCard}
                    onUpdateCard={onUpdateCard}
                    sortDown={sortDown}
                    sortUp={sortUp}
                />
                {cards.length === 0 &&
                <Link title={'beck to card packs'} path={`${CARD_PACKS_PATH}`}/> ||
                <Link title={'learn'} path={`${LEARN_PATH}/${pack_id}`}/>}
            </div>}
        </div>
    );
};

export default CardsContainer;