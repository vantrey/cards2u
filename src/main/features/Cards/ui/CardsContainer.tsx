import React, {useEffect} from 'react';
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {add_Card, delete_Card, get_Cards, update_Card} from "../bll/cardsReducer";
import {useParams} from "react-router-dom";
import {actions} from "../../../getUser/bll/getUserReducer";
import ReactPaginate from "react-paginate";
import styles from './Cards.module.css'


const CardsContainer: React.FC = () => {
    const {pack_id} = useParams();
    const {cards, isFetching,page,pageCount,cardsTotalCount} = useSelector((state: AppStateType) => state.cards);
    const dispatch = useDispatch();


    const pageChangedHandler = (page: { selected: number }) => {
        dispatch(actions.setPage(page.selected + 1))
    }



    useEffect(() => {
        dispatch(get_Cards(pack_id))
    }, [])

    const onAddNewCard = () => {
        dispatch(add_Card({cardsPack_id: pack_id}))
    }
    const onDeleteCard = (card_id:string) => {
        dispatch(delete_Card( card_id,pack_id))
    }
    const onUpdateCard = (_id:string) => {
        dispatch(update_Card({_id,answer:'wtf?' },pack_id))
    }

    const pageCountSize = Math.ceil(cardsTotalCount / pageCount)
    return (
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
                isFetching={isFetching}
                cards={cards}
                onAddNewCard={onAddNewCard}
                onDeleteCard={onDeleteCard}
                onUpdateCard={onUpdateCard}
            />
        </div>
    );
};

export default CardsContainer;