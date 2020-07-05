import {UserType} from "../../../../types/entities";
import React from "react";
import styles from "./FindDeck.module.css";
import UserData from "./user-data/UserData";
import Sort from './sort/Sort'
import UserInfo from "../../../common/user/UserInfo";



type UsersDeckType = {
    users: Array<UserType>
    sortDeckUp: (e: React.MouseEvent<HTMLButtonElement>) => void
    sortDeckDown: (e: React.MouseEvent<HTMLButtonElement>) => void
    onShowDecks: (e: React.MouseEvent<HTMLDivElement>) => void
    showMode: string
}

const FindDeck: React.FC<UsersDeckType> = ({
                                               users,
                                               sortDeckUp,
                                               sortDeckDown,
                                               onShowDecks,
                                               showMode,
                                           }) => {
    const Headers = [
        {name: 'avatar', title: 'Avatar'},
        {name: 'nick', title: 'Nick'},
        {name: 'decks', title: 'Decks'}
    ]

    return (
        <div>
            <div className={styles.find_headers__wrap}>
                {
                    Headers.map(h =>
                        <div key={h.name}>
                            <Sort
                                name={h.name}
                                title={h.title}
                                sortDeckUp={sortDeckUp}
                                sortDeckDown={sortDeckDown}/>
                        </div>)
                }
            </div>
            <div className={styles.user_data__wrap}>
                {
                    users.map(u =>
                        <div className={styles.user__data} key={u._id}>
                            <UserData
                                avatar={u.avatar}
                                name={u.name}
                                decks={u.publicCardPacksCount}
                                id={u._id}
                                onShowDecks={onShowDecks}
                                showMode={showMode}
                            />

                        </div>)
                }
            </div>
        </div>

    )
}

export default FindDeck