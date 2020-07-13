import React, {useCallback, useState} from 'react';
import styles from './Create.module.css';
import {useSelector} from "react-redux";
import EditCardForm from "./editCardForm/EditCardForm";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import NewDeckForm from "./newDeckForm/NewDeckForm";

const CreateContainer = () => {

    const {cards, cardPackName, cardsPack_id} = useSelector((state: AppStateType) => state.cards);

    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet

    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);

    const [isCreateDeckMode, setIsCreateDeckMode] = useState<boolean>(true);

    const [currentCardId, setCurrentCardId] = useState<string>('');


    const onEditCardClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setIsEditCardMode(true);
        setCurrentCardId(e.currentTarget.id);
        setIsCreateDeckMode(false);
    }, []);

    const onCancelEditCardClick = useCallback(() => {
        setIsEditCardMode(false);
    }, []);

    const toggleIsCreateDeckMode = () => {
        setIsCreateDeckMode(!isCreateDeckMode)
    };

    return (
        <div className={styles.create__wrap}>

            <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>

            {isCreateDeckMode &&
            <button onClick={toggleIsCreateDeckMode}>create or edit cards</button>}

            {!isCreateDeckMode &&
            <button onClick={toggleIsCreateDeckMode}>create new deck</button>}

            {!isCreateDeckMode &&
            <EditCardForm
                cardsPack_id={cardsPack_id}
                setIsEditCardMode={setIsEditCardMode}
                isEditCardMode={isEditCardMode}
                currentCardData={cards.find(c => c._id === currentCardId)}
            />}

            {isCreateDeckMode &&
            <NewDeckForm/>}

            <OwnCards // decksQuestion copy
                onCancelEditCardClick={onCancelEditCardClick}
                cards={cards}
                cardPackName={cardPackName}
                isEditCardMode={isEditCardMode}
                onEditCardClick={onEditCardClick}
                currentCardId={currentCardId}
            />

        </div>
    )
};
export default CreateContainer;