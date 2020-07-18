import React from 'react'
import {multiColoredText} from './multiColoredText'
import styles from "../../ui/components/create_cards/cards/ownCardsLogout/OwnCardsLogout.module.css";


const MultiColoredTextComponent = ( props ) => {

  // let classForEffect = effect === true ? `${styles.span} ${styles.span_active}` : `${styles.span}`;

  let multiColoredTextElements = multiColoredText.getChars(props.children).map((ch, i) => ch === '/'
    ? <span className={`${styles.span} ${styles.span_active}` } key={i}>&#160;</span>
    : <span className={`${styles.span} ${styles.span_active}` }  key={i}>{ch}</span>)
  return <div className={styles.game__test}>{multiColoredTextElements}</div>

}

export default MultiColoredTextComponent
