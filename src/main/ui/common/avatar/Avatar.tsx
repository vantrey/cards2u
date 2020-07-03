/*
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import styles from './Avatar.module.css'
import {getCardPacks} from "../../../features/cardsPacks/bll/cardPacksReducer";

type AvatarTypeProps = {
    isFetching: boolean
}

const Avatar: React.FC<AvatarTypeProps> = ({isFetching}) => {
    const user = useSelector((state: AppStateType) => state.profile.user)
    const {cardPacks, isSuccess} = useSelector((state: AppStateType) => state.cardPacks.cardPacks)
    const dispatch = useDispatch();
    const [showMyDecks, setShowMyDecs] = useState<boolean>(false)

    /!* useEffect(() => {
         dispatch(getCardPacks(null,null, user._id))
     }, [])*!/

    const onShowMyDecks = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!isSuccess) {
            dispatch(getCardPacks(1, 100, user._id))
        }

        setShowMyDecs(!showMyDecks)
    }
    return (
        <div className={styles.avatar__wrap}>
            <div> avatar:<img src={user.avatar}/></div>
            <small>nick{user.name}</small>

            <button onClick={onShowMyDecks} id={user._id}>Show</button>
            {showMyDecks ?
                <div>
                    <div>You have{cardPacks}decks</div>
                    <div>
                        {cardPacks.map(cardPack =>
                            <div key={cardPack._id}>
                                {cardPack.name}
                            </div>)
                        }
                    </div>

                </div> :
                <div>You don't have a deck.</div>}
        </div>
    );
};

export default Avatar;*/
export default 1
