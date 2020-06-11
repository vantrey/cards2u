import React, {useEffect} from 'react';
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {add_Card, set_Cards} from "../bll/cardsReducer";
import {useParams} from "react-router-dom";


const CardsContainer: React.FC = () => {
    const {pack_id} = useParams();
    const {cards, isFetching} = useSelector((state: AppStateType) => state.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set_Cards(pack_id))
    }, [])

const onAddNewCard=()=>{
        dispatch(add_Card({cardsPack_id:pack_id}))
}


    return (
        <div>
            <Cards
                isFetching={isFetching}
                   cards={cards}
                onAddNewCard={onAddNewCard}
            />
        </div>
    );
};

export default CardsContainer;