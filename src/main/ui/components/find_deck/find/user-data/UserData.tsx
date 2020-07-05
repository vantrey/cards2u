import React from "react";
import UserDecks from "./user-decks/UserDecks";
import styles from "./UserData.module.css";


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
    return (
        <div className={styles.users__data}>
            <div className={styles.users__avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={styles.users__nick}>{name}</div>
            <div className={styles.users__decks} id={id} onClick={onShowDecks}>{decks}</div>
            {showMode === id &&
            <div>
                <UserDecks id={id}/>
            </div>
            }
        </div>

    )


}
export default UserData