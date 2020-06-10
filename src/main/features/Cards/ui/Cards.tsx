import React from 'react';
import {CardsType} from "../../../types/entities";

type OwnProps = {
    isFetching: boolean,
    cards: Array<CardsType>
}

const Cards: React.FC<OwnProps> = ({isFetching, ...props}) => {
    return (
        <div>
            {isFetching && <div>...Loading please wait</div>}
            <>
                {...props}
            </>
        </div>
    );
};

export default Cards;