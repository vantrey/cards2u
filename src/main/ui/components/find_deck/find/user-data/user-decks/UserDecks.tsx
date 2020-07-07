import React from 'react';
import  {useSelector} from "react-redux";
import {AppStateType} from "../../../../../../bll/store/store";

type UserDecksTypeC = {
    id: string
}

const UserDecks: React.FC<UserDecksTypeC> = ({id}) => {

    const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks)

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