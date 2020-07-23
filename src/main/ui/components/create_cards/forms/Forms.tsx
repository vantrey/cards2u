import React from "react";
import {CardType} from "../../../../types/entities";
import CardForm from "./cardForm/CardForm";
import MultiAnswerCardForm from "./multiAnswerCardForm/MultiAnswerCardForm";
import CreateDeckForm from "./createDeckForm/CreateDeckForm";
import Loader from "../../../common/loader/Loader";
import styles from "./Forms.module.css"


type PropsType = {
    isSuccess: boolean
    isMultiDeck: boolean
    cardsPack_id: string
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    isEditCardMode: boolean
    selectedCard: CardType | undefined
    onIsMultiDeckChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isPreventFetching: boolean
    setIsMultiDeck: (isMultiDeck: boolean) => void
}

const Forms: React.FC<PropsType> = React.memo(({
                                                   isSuccess,
                                                   isMultiDeck,
                                                   cardsPack_id,
                                                   setIsEditCardMode,
                                                   isEditCardMode,
                                                   selectedCard,
                                                   onIsMultiDeckChange,
                                                   isPreventFetching,
                                                   setIsMultiDeck
                                               }) => {

    return (
        <div className={styles.forms__wrap}>
            {isSuccess && !isMultiDeck &&
            <CardForm
                isPreventFetching={isPreventFetching}
                cardsPack_id={cardsPack_id}
                setIsEditCardMode={setIsEditCardMode}
                isEditCardMode={isEditCardMode}
                selectedCard={selectedCard}
            />}

            {isSuccess && isMultiDeck &&
            <MultiAnswerCardForm
                isPreventFetching={isPreventFetching}
                isEditCardMode={isEditCardMode}
                selectedCard={selectedCard}
                setIsEditCardMode={setIsEditCardMode}
                cardsPack_id={cardsPack_id}
            />
            }

            {!isSuccess &&
            <CreateDeckForm
                isPreventFetching={isPreventFetching}
                onIsMultiDeckChange={onIsMultiDeckChange}
                isMultiDeck={isMultiDeck}
				setIsMultiDeck={setIsMultiDeck}
            />}

            {isPreventFetching &&
            <div className={styles.forms__loader}>
				<Loader/>
            </div>}
        </div>
    )
});

export default Forms;

