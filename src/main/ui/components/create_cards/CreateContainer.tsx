import React, {useCallback, useState} from 'react';
import styles from './Create.module.css';
import {useDispatch, useSelector} from "react-redux";
import EditCardForm from "./editCardForm/EditCardForm";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import {update_Card} from "../../../features/Cards/bll/cardsReducer";
import {CardType} from "../../../types/entities";
import ModeSetter from "./modeSetter/ModeSetter";

const CreateContainer = () => {

    const {cards, cardPackName, cardsPack_id} = useSelector((state: AppStateType) => state.cards);

    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet

    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);
    const [isCreateDeckMode, setIsCreateDeckMode] = useState<boolean>(true);

    const [cardId, setCardId] = useState<string>('');




    const onEditCardClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setIsEditCardMode(true);
        setCardId(e.currentTarget.id);
        setIsCreateDeckMode(false);
    }, []);

    /*const onModeSetterClick = useCallback((e: React.MouseEvent<HTMLDivElement>) =>{

    }, []);*/



    return (
        <div className={styles.create__wrap}>

            <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>

            {/*<ModeSetter onModeSetterClick={onModeSetterClick} currentMode={''}>
                {}
            </ModeSetter>*/}


            <EditCardForm
                cardsPack_id={cardsPack_id}
                setIsEditCardMode={setIsEditCardMode}
                isEditCardMode={isEditCardMode}
                currentCardData={cards.find(c => c._id === cardId)}
            />



            <OwnCards // decksQuestion copy
                onEditCardClick={onEditCardClick}
                cards={cards} cardPackName={cardPackName}
            />


        </div>
    )
};
export default CreateContainer;