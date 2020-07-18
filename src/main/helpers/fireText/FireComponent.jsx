import React from 'react'
import {WrappedChars} from './WrappedChars'
import styles from "../../ui/components/create_cards/cards/ownCardsLogout/OwnCardsLogout.module.css";


const FireComponent = ({effect, children} ) => {

  let classForEffect = effect === true ? `${styles.span} ${styles.span_active}` : `${styles.span}`;

  let fireCharsElements = WrappedChars.getChars(children).map((ch, i) => ch === '/'
    ? <span className={classForEffect } key={i}>&#160;</span>
    : <span className={classForEffect }  key={i}>{ch}</span>)
  return <div className={styles.cardsLogout__wrap}>{fireCharsElements}</div>

}

export default FireComponent
