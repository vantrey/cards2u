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
import {useLocation} from "react-router-dom";
import {getCurrentUserCards} from "../../../bll/currentUserCardsReducer/currentUserCardsReducer";


type UserInfoType = {
    setSelectUser: (selectUser: boolean) => void
    setDecksQuestions: (decksQuestions: boolean) => void
}

const UserInfo: React.FC<UserInfoType> = ({setSelectUser, setDecksQuestions}) => {

    const dispatch = useDispatch();
    const {currentUserDecks, isSuccess} = useSelector((state: AppStateType) => state.currentUserDecks);
    const user = useSelector((state: AppStateType) => state.profile.user);
    const {isAuth} = useSelector((state: AppStateType) => state.login);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);
    const currentPath = useLocation<string>().pathname;
    const [showDecks, setShowDecks] = useState<boolean>(false);
    const {setIsLocalFetching, isLocalFetching} = useLocalFetch(); // local fetching for Loader

    const showMyDecks = () => {
        setSelectUser(false);
        setDecksQuestions(false);
        setShowDecks(!showDecks);
        if (!isSuccess) {
            setIsLocalFetching(true);
            dispatch(getCurrentUserDecks(user._id));
        }
    };

    const onSelectDeck = (e: React.MouseEvent<HTMLDivElement>) => {
        setSelectUser(true);
        setDecksQuestions(true);
        const deckId = e.currentTarget.id;
        const cardPackName = e.currentTarget.getAttribute('data-cardpackname');
        if (deckId && !isPreventFetching) {  // disabled onClick while request

            if (currentPath === '/decks') {
                dispatch(get_Cards(e.currentTarget.id, cardPackName));
            }
            if (currentPath === '/cards') {
                dispatch(getCurrentUserCards(e.currentTarget.id, cardPackName));
            }
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


