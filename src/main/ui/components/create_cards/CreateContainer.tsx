import React, {useCallback, useState} from 'react';
import styles from './Create.module.css';
import {useDispatch, useSelector} from "react-redux";
import FormsContainer from "./cardEnters/FormsContainer";
import UserInfo from "../../common/user/UserInfo";
import OwnCards from "./cards/OwnCards";
import {AppStateType} from "../../../bll/store/store";
import {update_Card} from "../../../features/Cards/bll/cardsReducer";
import {CardType} from "../../../types/entities";

const CreateContainer = () => {

    const [selectUser, setSelectUser] = useState<boolean>(false);  //doesnt use yet
    const [decksQuestions, setDecksQuestions] = useState<boolean>(false);  //doesnt use yet

    const [isEditCardMode, setIsEditCardMode] = useState<boolean>(false);
    const [cardId, setCardId] = useState<string>('');

    const {cards, cardPackName} = useSelector((state: AppStateType) => state.cards);
    const {} = useSelector((state: AppStateType) => state.currentUserDecks);



    const onEditCardClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setIsEditCardMode(true);
        setCardId(e.currentTarget.id);
    }, []);

    return (
        <div className={styles.create__wrap}>

            <UserInfo setSelectUser={setSelectUser} setDecksQuestions={setDecksQuestions}/>

            <FormsContainer
                /*cardsPack_id={cards[0]?.cardsPack_id}*/
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