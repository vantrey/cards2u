import React, {useCallback, useState} from 'react';
import styles from './Create.module.css';
import {useDispatch, useSelector} from "react-redux";
import EditCardForm from "./cardForm/CardForm";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import CreateDeckForm from "./CreateDeckForm/CreateDeckForm";
import {cardsActions} from "../../../features/Cards/bll/cardsReducer";
import MultiAnswerCardForm from "./multiAnswerCardForm/MultiAnswerCardForm";
import CardForm from "./cardForm/CardForm";
import {useIsSuccessWithNotFirstRendering} from "../../../helpers/firstRenderHook";


const CreateContainer = () => {

    const dispatch = useDispatch();

    const {cards, cardPackName, cardsPack_id, isSuccess} = useSelector((state: AppStateType) => state.cards);

    const isSuccessWithNotFirstRendering = useIsSuccessWithNotFirstRendering(isSuccess, cardsActions.set_Success); // to prevent render with wrong users data from reducer while first rendering

    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet

    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);

    const [currentCardId, setCurrentCardId] = useState<string>('');

    const [isMultiDeck, setIsMultiDeck] = useState<boolean>(false);

    const currentCard = cards.find(c => c._id === currentCardId);  // is it correct?


    const onEditCardClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setIsEditCardMode(true);
        setCurrentCardId(e.currentTarget.id);
    }, []);

    const onCancelEditCardClick = useCallback(() => {
        setIsEditCardMode(false);
    }, []);

    const onExitEditCardMode = useCallback(() => {
        dispatch(cardsActions.set_Success(false))
    }, [isSuccess]);

    const onIsMultiDeckChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMultiDeck(e.currentTarget.checked);
    }, []);

    return (
        <div className={styles.create__wrap}>

            <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>

            {isSuccessWithNotFirstRendering &&
            <button onClick={onExitEditCardMode}>create new deck</button>}

            {isSuccessWithNotFirstRendering && !isMultiDeck &&
            <CardForm
                cardsPack_id={cardsPack_id}
                setIsEditCardMode={setIsEditCardMode}
                isEditCardMode={isEditCardMode}
                currentCard={currentCard}
            />}

            {isSuccessWithNotFirstRendering && isMultiDeck &&
                <MultiAnswerCardForm
                    isEditCardMode={isEditCardMode}
                    currentCard={currentCard}
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
                cards={isSuccessWithNotFirstRendering ? cards: []}
                cardPackName={isSuccessWithNotFirstRendering ? cardPackName: ''}
                isEditCardMode={isEditCardMode}
                onEditCardClick={onEditCardClick}
                currentCardId={currentCardId}
            />

        </div>
    )
};
export default CreateContainer;