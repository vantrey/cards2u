import React, {useCallback, useState} from 'react';
import styles from './Create.module.css';
import {useDispatch, useSelector} from "react-redux";
import EditCardForm from "./editCardForm/EditCardForm";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import NewDeckForm from "./newDeckForm/NewDeckForm";
import {cardsActions} from "../../../features/Cards/bll/cardsReducer";
import AlternativeForm from "./alternativeForm/AlternativeForm";
import DefaultDeck from "./defaultDeck/DefaultDeck";


const CreateContainer = () => {

    const dispatch = useDispatch();

    const {cards, cardPackName, cardsPack_id, isSuccess} = useSelector((state: AppStateType) => state.cards);

    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet

    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);

    const [currentCardId, setCurrentCardId] = useState<string>('');

    const [isAlternativeDeck, setIsAlternativeDeck] = useState<boolean>(false);


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

    const onIsAlternativeDeckChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAlternativeDeck(e.currentTarget.checked);
    }, []);

    // @ts-ignore
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
                            {isSuccess && !isAlternativeDeck &&
							<EditCardForm
								cardsPack_id={cardsPack_id}
								setIsEditCardMode={setIsEditCardMode}
								isEditCardMode={isEditCardMode}
								currentCardData={cards.find(c => c._id === currentCardId)}
							/>}

                            {isSuccess && isAlternativeDeck &&
							<AlternativeForm
								isEditCardMode={isEditCardMode}
								currentCardData={cards.find(c => c._id === currentCardId)}
								setIsEditCardMode={setIsEditCardMode}
								cardsPack_id={cardsPack_id}
							/>
                            }

                            {!isSuccess &&
							<NewDeckForm
								onIsAlternativeDeckChange={onIsAlternativeDeckChange}
								isAlternativeDeck={isAlternativeDeck}
							/>}

                        </div>
                        <div className={styles.main__decks}>
                            <DefaultDeck/>
                            <div className={styles.decks__buttons}>
							    <button onClick={onExitEditCardMode} className={styles.decks__button}>create new deck</button>
							    <button onClick={onExitEditCardMode} className={styles.decks__button}>create new deck</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.create__aside}>
                    <OwnCards // decksQuestion copy
                        onCancelEditCardClick={onCancelEditCardClick}
                        cards={cards}
                        cardPackName={cardPackName}
                        isEditCardMode={isEditCardMode}
                        onEditCardClick={onEditCardClick}
                        currentCardId={currentCardId}
                    />
                </div>
            </div>
            <div className={styles.create__right}></div>
        </div>
    )
};
export default CreateContainer;