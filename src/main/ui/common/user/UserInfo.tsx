import React from 'react';
import styles from './UserInfo.module.css'
import UserDecks from "./decks/UserDecks";
import UserPicture from "./picture/UserPicture";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import {getCardPacks} from "../../../features/cardsPacks/bll/cardPacksReducer";


const UserInfo: React.FC = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: AppStateType) => state.cardPacks.cardPacks)
    const user = useSelector((state: AppStateType) => state.profile.user)
    const ShowMyDecs = () => {
        dispatch(getCardPacks(1, 100, user._id))
    }

    return (
        <div className={styles.avatar__wrap}>
            <div><UserPicture avatar={user.avatar}
                              nick={user.name}/></div>

            <div><UserDecks cardPacks={cardPacks}
                            ShowMyDecs={ShowMyDecs}/></div>
        </div>
    );
};

export default UserInfo

//Переименовать компонеты, в компоненете колод использовать ключ ответа с сервера есть колоды, нет колод,до от вета с сервера кнопка,далее мап колод,клличество колод и кнопка делит или надпись колод нет

