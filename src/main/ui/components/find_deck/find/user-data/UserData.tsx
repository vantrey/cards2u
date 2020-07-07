import React from "react";
import UserDecksShitCod from "./user_decks(test_content)/UserDecksShitCod";
import styles from "./UserData.module.css";
import userAvaDefault from "../../../../icons/face-mask.png";


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
            <div className={styles.users__decks} id={id} onClick={onShowDecks}>{decks}</div>
            {showMode === id &&
            <div>
                <UserDecksShitCod id={id}/>
            </div>
            }
        </div>

    )


}
export default UserData