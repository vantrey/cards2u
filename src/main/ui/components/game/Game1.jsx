import React, { useState } from 'react';
import styles from './Game1.module.css';



const Game = () => {
	const [effect, setEffect] = useState(false);
	let classForEffect = effect === true ? `${styles.span} ${styles.span_active}` : `${styles.span}`;

	return (
		<div className={styles.game__wrap}>
			<button className={styles.game__button} onClick={ () => {setEffect(!effect)}}> X </button>
			<div className={styles.game__test}>
				<span className={classForEffect}>O</span>
				<span className={classForEffect}>K</span>
				<span className={classForEffect}>,&nbsp;&nbsp;</span>
				<span className={classForEffect}>N</span>
				<span className={classForEffect}>E</span>
				<span className={classForEffect}>X</span>
				<span className={classForEffect}>T&nbsp;&nbsp;</span>
				<span className={classForEffect}>C</span>
				<span className={classForEffect}>A</span>
				<span className={classForEffect}>R</span>
				<span className={classForEffect}>D</span>

			</div>

		</div>
	)
}
export default Game;