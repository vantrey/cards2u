import React from "react";
import styles from './Sort.module.css'


type UsersDeckHeader = {
    title: string
    name: string
    sortDeckUp: (e: React.MouseEvent<HTMLButtonElement>) => void
    sortDeckDown: (e: React.MouseEvent<HTMLButtonElement>) => void
}



const Sort: React.FC<UsersDeckHeader> = ({
                                                           title,
                                                           name,
                                                           sortDeckUp,
                                                           sortDeckDown
                                                       }) => {

    return (
        <div className={styles.header__data}>
            {title}
            <>
                <button onClick={sortDeckUp} name={name}>&#8593;</button>
                <button onClick={sortDeckDown} name={name}>&#8595;</button>
            </>

        </div>
    )
}
export  default Sort

