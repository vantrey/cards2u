import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from './Create.module.css';
import {useDispatch, useSelector} from "react-redux";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import {cardsActions, delete_Card} from "../../../features/Cards/bll/cardsReducer";
import DefaultDeck from "./defaultDeck/DefaultDeck";
import CardForm from "./forms/cardForm/CardForm";
import MultiAnswerCardForm from "./forms/multiAnswerCardForm/MultiAnswerCardForm";
import CreateDeckForm from "./forms/createDeckForm/CreateDeckForm";
import {deleteDeck} from '../../../bll/currentUserDecks/currentUserDecksReducer';
import OwnCardsLogout from './cards/ownCardsLogout/OwnCardsLogout';
import PopupAuth from "../../common/popUp/popUp_Authorization/PopupAuth";
import {loginActions} from "../../../auth/login/loginReducer";
import {useLocation} from "react-router-dom";
import {
    currentUserCardsActions,
    deleteCurrentUserCard
} from "../../../bll/currentUserCardsReducer/currentUserCardsReducer";
import Loader from "../../common/loader/Loader";
import Forms from "./forms/Forms";
import Plug from "./plug/Plug";
import PopupDeleteDeck from "./popUp/PopupDeleteDeck";


const CreateContainer = () => {

    const dispatch = useDispatch();
    const {
        cards,
        cardPackName,
        cardsPack_id,
        isSuccess,
        isCardsFetching,
        isEffect,
        isStartMode
    } = useSelector((state: AppStateType) => state.currentUserCards);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);
    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet
    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);
    const [selectedCardId, setSelectedCardId] = useState<string>('');
    const [isMultiDeck, setIsMultiDeck] = useState<boolean>(false);
    const [popupAuth, setPopupAuth] = useState<boolean>(false);
    const {isAuth, userId} = useSelector((state: AppStateType) => state.login);
    const [modal, setModal] = useState(false);
    const [popupDeleteDeck, setPopupDeleteDeck] = useState(false);
    const [ownCards, setShowOwnCards] = useState(isSuccess);
    const currentLocation = useLocation<string>();
    let currentPath = currentLocation.pathname;

    useEffect(() => {
        dispatch(loginActions.setCurrentLocation(currentPath));
    }, [currentPath]);

    const selectedCard = useMemo(() => {
        return cards.find(c => c._id === selectedCardId);
    }, [cards, selectedCardId]);

    const onEditCardClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setIsEditCardMode(true);
        setSelectedCardId(e.currentTarget.id);
    }, []);

    const onCancelEditCardClick = useCallback(() => {
        setIsEditCardMode(false);
    }, []);

    const onCreateDeckClick = useCallback(() => {
            dispatch(currentUserCardsActions.set_Success(false));
            dispatch(currentUserCardsActions.setIsStartMode(false));
    }, []);

    const onIsMultiDeckChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMultiDeck(e.currentTarget.checked);
    }, []);

    const onDeleteDeck = useCallback(() => {
        dispatch(deleteDeck(cardsPack_id));
        dispatch(currentUserCardsActions.set_Success(false));
        setPopupDeleteDeck (false);
    }, [cardsPack_id]);

    const onDeleteCard = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteCurrentUserCard(e.currentTarget.id));
        setIsEditCardMode(false)
    }, []);

    useEffect(() => {
        if (isSuccess && !isEffect) {
            dispatch(currentUserCardsActions.setIsEffect(true));
            setTimeout(() => {
                setShowOwnCards(true);
            }, 4000);
        }
        if (!isSuccess && isEffect) {
            setShowOwnCards(false);
            dispatch(currentUserCardsActions.setIsEffect(false));
        }
    }, [isSuccess, isEffect]);

    useEffect(() => {
        let timerId = setTimeout(() => {
            setPopupAuth(true);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, []);

    return (
        <div className={styles.create__wrap}>
            <div className={styles.create__left}></div>
            <div className={styles.create__container}>
                <div className={styles.create__main}>
                    <div className={styles.main__top}>
                        <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>
                    </div>
                    <div className={styles.main__content}>
                        <div className={styles.main__forms}>
                            {isStartMode &&
                            <Plug isFetching={isCardsFetching}/>}
                            {!isStartMode &&
                            <Forms
                                isSuccess={isSuccess}
                                isMultiDeck={isMultiDeck}
                                cardsPack_id={cardsPack_id}
                                setIsEditCardMode={setIsEditCardMode}
                                isEditCardMode={isEditCardMode}
                                selectedCard={selectedCard}
                                onIsMultiDeckChange={onIsMultiDeckChange}
                                isPreventFetching={isPreventFetching}
                            />}
                        </div>
                        <div className={styles.main__decks}>
                            <DefaultDeck/>
                            <div className={styles.decks__buttons}>
                                <button
                                    disabled={!isAuth || (!isSuccess && !isStartMode)}
                                    onClick={onCreateDeckClick}
                                    className={styles.decks__button}
                                >
                                    create new deck
                                </button>
                                <button
                                    onClick={()=> {setPopupDeleteDeck (true)}}
                                    className={styles.decks__button}
                                    disabled={!isSuccess}
                                >
                                    delete deck
                                </button>
                            </div>
                        </div>
                        <PopupDeleteDeck popupDeleteDeck={popupDeleteDeck}
                                         setPopupDeleteDeck={setPopupDeleteDeck}
                                         onDeleteDeck={onDeleteDeck}/>
                    </div>
                </div>
                <div className={styles.create__aside}>
                    {!ownCards && <OwnCardsLogout effect={isEffect}/>}
                    {ownCards && <OwnCards
                        onDeleteCard={onDeleteCard}
                        onCancelEditCardClick={onCancelEditCardClick}
                        cards={cards}
                        cardPackName={cardPackName}
                        isEditCardMode={isEditCardMode}
                        onEditCardClick={onEditCardClick}
                        selectedCardId={selectedCardId}
                        isCardsFetching={isCardsFetching}
                    />}
                </div>
            </div>
            <div className={styles.create__right}></div>
            {
                !isAuth && popupAuth && <PopupAuth setPopupAuth={setPopupAuth}
                                                   modal={modal} setModal={setModal}
                                                   currentPath={currentPath}/>
            }
        </div>
    )
};
export default CreateContainer;