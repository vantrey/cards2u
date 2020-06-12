import React from 'react';
import {CardsType} from "../../../types/entities";
import Card from "./Card";
import Button from "../../../ui/common/Button/Button";

type OwnProps = {
    isFetching: boolean,
    cards: Array<CardsType>
    onAddNewCard: () => void
}

const Cards: React.FC<OwnProps> = ({isFetching, cards,onAddNewCard}) => {

    return (
        <div>
            {isFetching && <div>...Loading please wait</div> ||
            cards.map(c =>
                <div key={c._id}>
                    <Card
                          answer={c.answer}
                          question={c.question}
                          grade={c.grade}
                    />
                </div>
            )
            }
            <button onClick={onAddNewCard}>Add Card</button>
        </div>
    );
};

export default Cards;