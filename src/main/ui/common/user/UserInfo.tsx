import React, {useState} from 'react';
import styles from './UserInfo.module.css'
import UserDecks from "./decks/UserDecks";
import UserPicture from "./picture/UserPicture";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../../../features/cardsPacks/bll/cardPacksReducer";
import {get_Cards} from "../../../features/Cards/bll/cardsReducer";
import {getCurrentUserDecks} from "../../../bll/currentUserDecks/currentUserDecksReducer";
import {useLocalFetch} from "../../../helpers/localFetchingHook";


const UserInfo: React.FC = () => {

    const dispatch = useDispatch();
    const {currentUserDecks, isSuccess} = useSelector((state: AppStateType) => state.currentUserDecks);
    const user = useSelector((state: AppStateType) => state.profile.user);
    const {isAuth} = useSelector((state: AppStateType) => state.login);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);

    const [showDecks, setShowDecks] = useState<boolean>(false);
    const {setIsLocalFetching, isLocalFetching} = useLocalFetch(); // local fetching for Loader

    const showMyDecks = () => {
        setShowDecks(!showDecks);
        if (!isSuccess) {
            setIsLocalFetching(true);
            dispatch(getCurrentUserDecks(user._id));
        }
    };

    const onSelectDeck = (e: React.MouseEvent<HTMLDivElement>) => {
        const deckId = e.currentTarget.id;
        if (deckId && !isPreventFetching) {  // disabled onClick while request
            dispatch(get_Cards(e.currentTarget.id));
        }
    };

    return (
        <div className={styles.user__wrap}>
            <UserPicture avatar={user.avatar} nick={user.name}/>
            <UserDecks
                cardPacks={currentUserDecks}
                showMyDecks={showMyDecks}
                onSelectDeck={onSelectDeck}
                showDecks={showDecks}
                isAuth={isAuth}
                isPreventFetching={isPreventFetching}
                isLocalFetching={isLocalFetching}
            />
        </div>
    );
};

export default UserInfo


