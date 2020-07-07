import React, {useState} from 'react';
import styles from './UserInfo.module.css'
import UserDecks from "./decks/UserDecks";
import UserPicture from "./picture/UserPicture";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../../../features/cardsPacks/bll/cardPacksReducer";


const UserInfo: React.FC = () => {

    const dispatch = useDispatch();
    const cardPacks = useSelector((state: AppStateType) => state.cardPacks.cardPacks);
    const user = useSelector((state: AppStateType) => state.profile.user);
    const [showDecks, setShowDecks] = useState<boolean>(false);

    const showMyDecks = () => {
        setShowDecks(!showDecks)
        dispatch(getCardPacks(1, 100, user._id))
    }

    const onSelectDeck = () => {
        alert('onSelectDeck')
    }

    return (
        <div className={styles.user__wrap}>
            <UserPicture avatar={user.avatar} nick={user.name}/>
            <UserDecks cardPacks={cardPacks} showMyDecks={showMyDecks}
                       onSelectDeck={onSelectDeck} showDecks={showDecks}/>
        </div>
    );
};

export default UserInfo


