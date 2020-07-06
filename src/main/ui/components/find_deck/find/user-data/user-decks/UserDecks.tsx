import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCardPacks} from "../../../../../../features/cardsPacks/bll/cardPacksReducer";
import {AppStateType} from "../../../../../../bll/store/store";

type UserDecksTypeC = {
    id: string
}

const UserDecks: React.FC<UserDecksTypeC> = ({id}) => {

    const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardPacks(1, 10, id))
    }, [id])

    return (
        <div>
            {cardPacks.map(cardPack =>
                <div key={cardPack._id}>
                    {cardPack.name}
                </div>)
            }
        </div>
    );
};

export default UserDecks