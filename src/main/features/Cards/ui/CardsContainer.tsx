import React, {useEffect, useState} from 'react';
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {set_Cards} from "../bll/cardsReducer";


const CardsContainer: React.FC = () => {
    const {cardsPack_id} = useState();
    const {cards, isFetching} = useSelector((state: AppStateType) => state.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set_Cards(cardsPack_id))
    }, [])

    return (
        <div>
            <Cards
                isFetching={isFetching}
                   cards={cards}
            />
        </div>
    );
};

export default CardsContainer;