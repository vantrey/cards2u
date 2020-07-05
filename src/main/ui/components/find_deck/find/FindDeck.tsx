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
        <div className={styles.findDeck__wrap}>
            <div className={styles.findDeck__header}>
                {
                    Headers.map(h =>
                        <div  className={styles.findDeck__item} key={h.name} >
                            <Sort
                                name={h.name}
                                title={h.title}
                                sortDeckUp={sortDeckUp}
                                sortDeckDown={sortDeckDown}/>
                        </div>)
                }
            </div>
            <div className={styles.findDeck__users}>
                {
                    users.map(u =>
                            <UserData key={u._id}
                                avatar={u.avatar}
                                name={u.name}
                                decks={u.publicCardPacksCount}
                                id={u._id}
                                onShowDecks={onShowDecks}
                                showMode={showMode}
                            />)

                }
            </div>
        </div>

    )
}

export default FindDeck