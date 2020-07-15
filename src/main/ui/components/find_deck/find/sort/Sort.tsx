import React from "react";
import styles from './Sort.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../bll/store/store";



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
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);

    return (
        <div className={styles.sort__wrap}>
            <h5 className={styles.sort__title}>{title}</h5>
            <>
                <button className={styles.sort__button} disabled={isPreventFetching} onClick={sortDeckDown} name={name}>&#8593;</button>
                <button className={styles.sort__button} disabled={isPreventFetching} onClick={sortDeckUp} name={name}>&#8595;</button>
            </>

        </div>
    )
}
export  default Sort

