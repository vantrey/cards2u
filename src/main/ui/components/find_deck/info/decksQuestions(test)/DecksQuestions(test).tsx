import React, {useState} from 'react';
import styles from '../decksQuestions/DecksQuestions.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../bll/store/store";
import {updateUserFavoriteDecks} from "../../../../../bll/favoriteDecks/favoriteDecksReducer";
import FindDeckPopup from "../../findDeckPopup/FindDeckPopup";
import Popup from "reactjs-popup";

const DecksQuestionsTest = () => {

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
            dispatch(updateUserFavoriteDecks(user._id,'id','noName',[]));
        } else {
            return null;
        }

    }

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.deckInfo__wrap}>
                <h5 className={styles.deckInfo__title}>Selected deck: &nbsp;React JS</h5>
                <div className={styles.deckInfo__data}>
                    <div className={styles.data__title}>
                        <div className={styles.title__question}>Question</div>
                        <div className={styles.data__border}></div>
                        <div className={styles.title__answer}>Answer</div>
                    </div>
                    <div className={styles.data__item_box}>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>
                                Область информатики, в которой функции используются для
                                создания универсальной модели исчисления.
                            </div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>
                                Область информатики
                            </div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>
                                Область информатики, в которой функции используются для
                                создания универсальной модели исчисления.
                            </div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>
                                Область информатики
                            </div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                    </div>
                    <div className={styles.deckInfo__button_wrap}>
                        <Popup open={showPopup} onOpen={handleOpen} className={styles.shit__popup} modal
                               trigger={<button className={styles.deckInfo__button}>save to favorites</button>}>
                            {close => <FindDeckPopup close={close}/>}

                        </Popup>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DecksQuestionsTest;




