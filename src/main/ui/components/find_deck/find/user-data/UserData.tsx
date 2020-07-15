import React from "react";
import UserDecks from "./user-decks/UserDecks";
import styles from "./UserData.module.css";
import userAvaDefault from "../../../../icons/face-mask.png";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../bll/store/store";


type UserDecsType = {
    avatar: string,
    name: string,
    decks: number
    id: string,
    onShowDecks:(e: React.MouseEvent<HTMLDivElement>)=>void
    showMode:string
}

const UserData: React.FC<UserDecsType> = ({
                                              avatar,
                                              name,
                                              decks,
                                              id,
                                              onShowDecks,
                                              showMode
                                          }) => {

    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);
    const classForUserData = isPreventFetching  ? `${styles.users__data} ${styles.users__data_block}` : `${styles.users__data}`

    return (
        <div className={classForUserData} onClick={onShowDecks} id={id} data-nameuser={name}
             data-deckscount={decks} >
            {avatar &&
            <div className={styles.users__avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            }
            {!avatar &&
            <div className={styles.users__avatar}>
                <img src={userAvaDefault} alt='avatar'/>
            </div>
            }
            <div className={styles.users__nick}>{name}</div>
            <div className={styles.users__decks}>{decks}</div>
        </div>

    )


}
export default UserData