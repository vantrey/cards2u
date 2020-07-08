import React  from 'react';
import styles from './DecksNames.module.css';
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../../bll/store/store";
import EmptyDecks from "../emptyDecks/EmptyDecks";


const DecksNames = () => {

    // const {isAuth} = useSelector((state: AppStateType) => state.login);

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.decksNames__wrap}>
                <h5 className={styles.decksNames__title}>Your friend &nbsp;
                   <strong className={styles.subtitle__name}>Vanya</strong>
                </h5>
                <div className={styles.decksNames__subtitle}>has &nbsp;
                    <strong className={styles.subtitle__number}>10 &nbsp;</strong>decks
                </div>
                <div className={styles.decksNames}>

                {/*    if(decksNames) {*/}
                {/*    decksNames.map(decksNames =>*/}
                {/*        <div className={styles.decksNames__item}*/}
                {/*            id={decksNames._id}*/}
                {/*            key={decksNames._id}*/}
                {/*            onClick={onSelectDeck}*/}
                {/*        >{decksNames.name}*/}
                {/*        </div>)*/}
                {/*    } else  <EmptyDecks/>*/}
                {/*}*/}
                {/*    <EmptyDecks/>*/}
                <div className={styles.decksNames__item}>React JS</div>
                <div className={styles.decksNames__item}>JS Native</div>
                <div className={styles.decksNames__item}>1</div>
                <div className={styles.decksNames__item}>2</div>
                <div className={styles.decksNames__item}>3</div>
                <div className={styles.decksNames__item}>4</div>
                <div className={styles.decksNames__item}>5</div>
                </div>
            </div>
        </div>
    )
}

export default DecksNames;




