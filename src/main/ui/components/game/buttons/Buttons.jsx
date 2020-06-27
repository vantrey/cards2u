import React from 'react';
import styles from './Buttons.module.css';



const Buttons = () => {

	return (
		<div className={styles.buttons__wrap}>
			<button className={`${styles.buttons} ${styles.button__left}`}>Left</button>
			<button className={`${styles.buttons} ${styles.button__center}`}>Center</button>
			<button className={`${styles.buttons} ${styles.button__right}`}>Right</button>
		</div>
	)
}
export default Buttons;