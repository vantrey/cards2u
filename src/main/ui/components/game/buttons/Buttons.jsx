import React from 'react';
import styles from './Buttons.module.css';



const Buttons = ({ setCardFace, cardface}) => {

	return (
		<div className={styles.buttons__wrap}>
			<button className={`${styles.buttons} ${styles.button__left}`}>Left</button>
			<button className={`${styles.buttons} ${styles.button__center}`} onClick={()=>{setCardFace(!cardface)}}>Center</button>
			<button className={`${styles.buttons} ${styles.button__right}`}>Right</button>
		</div>
	)
}
export default Buttons;