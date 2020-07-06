import React, {useState} from 'react';
import styles from './UserInfo.module.css'
import UserDecks from "./decks/UserDecks";
import UserPicture from "./picture/UserPicture";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../../../features/cardsPacks/bll/cardPacksReducer";


const UserInfo: React.FC = () => {

    const dispatch = useDispatch();
    const {cardPacks, isSuccess} = useSelector((state: AppStateType) => state.cardPacks);
    const {isPreventFetching} = useSelector((state: AppStateType)=> state.preventRequest)
    const user = useSelector((state: AppStateType) => state.profile.user);
    const [showDecks, setShowDecks] = useState<boolean>(false);

    const showMyDecks = () => {
        if (!isSuccess) {
            dispatch(getCardPacks(1, 100, user._id));
        }
        setShowDecks(!showDecks);
    };

    return (
        <div className={styles.user__wrap}>
            <UserPicture avatar={user.avatar} nick={user.name}/>
            <UserDecks
                isFetching={isPreventFetching}
                cardPacks={cardPacks}
                showMyDecks={showMyDecks}
                showDecks={showDecks}
            />
        </div>
    );
};

export default UserInfo


