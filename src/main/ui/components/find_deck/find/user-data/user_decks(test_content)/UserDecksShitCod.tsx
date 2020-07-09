/*
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../../bll/store/store";
import {get_Cards} from "../../../../../../features/Cards/bll/cardsReducer";
import styles from './UserDecksShitCod.module.css'
import Popup from "reactjs-popup";
import FindDeckPopup from "../../../findDeckPopup/FindDeckPopup";
import {updateUserFavoriteDecks} from "../../../../../../bll/favoriteDecks/favoriteDecksReducer";


/!*type UserDecksTypeC = {
    id: string
}*!/

const UserDecksShitCode: React.FC = () => {
    const {cardPacks} = useSelector((state: AppStateType) => state.cardPacks);
    const {cards} = useSelector((state: AppStateType) => state.cards);
    const {isAuth} = useSelector((state: AppStateType) => state.login)
    const {user} = useSelector((state: AppStateType) => state.profile);
    const [showPopup, setShowPopup] = useState<boolean>(false)
    const dispatch = useDispatch();
    const myDecks = useSelector((state: AppStateType) => state.favoriteDecks.userFavoriteDecks)


    const handleOpen = () => {
        if (isAuth && myDecks !== null && myDecks.favoriteDecks.length === 5) {
            setShowPopup(!showPopup);
        } else if (isAuth && myDecks !== null && myDecks.favoriteDecks.length < 5) {
            dispatch(updateUserFavoriteDecks(user._id,'id','noName',[]))
        } else {
            close();
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
                <Popup open={showPopup} onOpen={handleOpen} className={styles.shit__popup} modal
                       trigger={<button>save as a favorite</button>}>
                    {close => <FindDeckPopup close={close}/>}

                </Popup>
            </div>
            <div>
                {cards.map(card =>
                    <div key={card._id}>
                        <span>question:{card.question}</span>
                        <span>answer:{card.answer}</span>
                    </div>)}
            </div>
        </div>
    );
};

export default UserDecksShitCode*/
export default 1