import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../../bll/store/store";
import {get_Cards} from "../../../../../../features/Cards/bll/cardsReducer";
import styles from './UserDecksShitCod.module.css'
import Popup from "reactjs-popup";
import FindDeckPopup from "../../../findDeckPopup/FindDeckPopup";
import {repository} from "../../../../../../helpers/repos_localStorage/Token";


type UserDecksTypeC = {
    id: string
}

const UserDecksShitCode: React.FC<UserDecksTypeC> = ({id}) => {
    const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks);
    const {cards} = useSelector((state: AppStateType) => state.cards);
    const {userId} = useSelector((state: AppStateType) => state.login);
    const [showPopup, setShowPopup] = useState<boolean>(false)
    const dispatch = useDispatch();

    const onOpenPopup = () => {
        const myDecks = repository.get_UserFavoriteDecksFromLS(userId)
        if (myDecks?.favoriteDecks.length === 5) {
            setShowPopup(!showPopup);
        }
        else {
         return null;
        }
    }

    return (
        <div className={styles.ShitCod__wrap}>
            <div>
                {cardPacks.map(cardPack =>
                    <div onClick={() => dispatch(get_Cards(cardPack._id))} key={cardPack.name}>
                        {cardPack.name}
                    </div>)
                }
            </div>
            <div>
                <div>
                    <Popup onOpen={onOpenPopup}  className={styles.shit__popup} modal
                           trigger={<button>save as a favorite</button>}>
                        {close => <FindDeckPopup close={close}/>}
                    </Popup>
                </div>
                {cards.map(card =>
                    <div key={card._id}>
                        <span>question:{card.question}</span>
                        <span>answer:{card.answer}</span>
                    </div>)}
            </div>
        </div>
    );
};

export default UserDecksShitCode