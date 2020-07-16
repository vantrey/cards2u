import React, {useCallback, useMemo, useState} from 'react';
import styles from './Create.module.css';
import {useDispatch, useSelector} from "react-redux";
import CardForm from "./cardForm/CardForm";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import CreateDeckForm from "./createDeckForm/CreateDeckForm";
import {cardsActions, delete_Card} from "../../../features/Cards/bll/cardsReducer";
import MultiAnswerCardForm from "./multiAnswerCardForm/MultiAnswerCardForm";
import {useIsSuccessWithNotFirstRendering} from "../../../helpers/firstRenderHook";
import {deleteDeck} from "../../../bll/currentUserDecks/currentUserDecksReducer";


const CreateContainer = () => {

    const dispatch = useDispatch();

    const {cards, cardPackName, cardsPack_id, isSuccess} = useSelector((state: AppStateType) => state.cards);

    const isSuccessWithNotFirstRendering = useIsSuccessWithNotFirstRendering(isSuccess, cardsActions.set_Success); // to prevent render with wrong users data from reducer while first rendering

    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet

    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);

    const [selectedCardId, setSelectedCardId] = useState<string>('');

    const [isMultiDeck, setIsMultiDeck] = useState<boolean>(false);

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

    const onExitEditCardMode = useCallback(() => {
        dispatch(cardsActions.set_Success(false))
    }, []);

    const onIsMultiDeckChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMultiDeck(e.currentTarget.checked);
    }, []);

    const onDeleteDeck = useCallback(() => {
        dispatch(deleteDeck(cardsPack_id));
    }, [cardsPack_id]);

    const onDeleteCard = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(delete_Card(e.currentTarget.id));
        setIsEditCardMode(false)
    }, []);

    return (
        <div className={styles.create__wrap}>

            <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>

            {isSuccessWithNotFirstRendering &&
            <button onClick={onExitEditCardMode}>create new deck</button>}

            {isSuccessWithNotFirstRendering && !isMultiDeck &&
            <CardForm
                onDeleteDeck={onDeleteDeck}
                cardsPack_id={cardsPack_id}
                setIsEditCardMode={setIsEditCardMode}
                isEditCardMode={isEditCardMode}
                selectedCard={selectedCard}
            />}

            {isSuccessWithNotFirstRendering && isMultiDeck &&
            <MultiAnswerCardForm
                isEditCardMode={isEditCardMode}
                selectedCard={selectedCard}
                setIsEditCardMode={setIsEditCardMode}
                cardsPack_id={cardsPack_id}
            />
            }

            {!isSuccessWithNotFirstRendering &&
            <CreateDeckForm
                onIsMultiDeckChange={onIsMultiDeckChange}
                isMultiDeck={isMultiDeck}
            />}

            <OwnCards // decksQuestion copy
                onCancelEditCardClick={onCancelEditCardClick}
                cards={isSuccessWithNotFirstRendering ? cards : []}
                cardPackName={isSuccessWithNotFirstRendering ? cardPackName : ''}
                isEditCardMode={isEditCardMode}
                onEditCardClick={onEditCardClick}
                selectedCardId={selectedCardId}
                onDeleteCard={onDeleteCard}
            />

        </div>
    )
};
export default CreateContainer;