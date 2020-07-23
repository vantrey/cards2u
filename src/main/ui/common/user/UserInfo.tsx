import React, {useEffect, useState} from 'react';
import styles from './UserInfo.module.css'
import UserDecks from "./decks/UserDecks";
import UserPicture from "./picture/UserPicture";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {get_Cards} from "../../../features/Cards/bll/cardsReducer";
import {getCurrentUserDecks} from "../../../bll/currentUserDecks/currentUserDecksReducer";
import {useLocation} from "react-router-dom";
import {getCurrentUserCards} from "../../../bll/currentUserCardsReducer/currentUserCardsReducer";


type UserInfoType = {
    setSelectUser: (selectUser: boolean) => void
    setDecksQuestions: (decksQuestions: boolean) => void
}

const UserInfo: React.FC<UserInfoType> = ({setSelectUser, setDecksQuestions}) => {

    const dispatch = useDispatch();
    const {
        currentUserDecks,
        isSuccess,
        isCurrentUserDecksFetching
    } = useSelector((state: AppStateType) => state.currentUserDecks);
    const user = useSelector((state: AppStateType) => state.profile.user);
    const {isAuth, userId} = useSelector((state: AppStateType) => state.login);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);
    const currentPath = useLocation<string>().pathname;
    const [showDecks, setShowDecks] = useState<boolean>(false);

    useEffect(() => {
        if (currentPath === '/cards') {
            setShowDecks(true);
            if (isAuth && !isSuccess && userId) {
                dispatch(getCurrentUserDecks(userId));
            }
        }
    }, [userId, isSuccess, isAuth]);

    const showMyDecks = () => {
        setSelectUser(false);
        setDecksQuestions(false);
        setShowDecks(!showDecks);
        if (!isSuccess) {
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
                isLocalFetching={isCurrentUserDecksFetching}
            />
        </div>
    );
};

export default UserInfo


