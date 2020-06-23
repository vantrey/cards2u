import React, { useState } from 'react';
import styles from './Game.module.css';



const Game = () => {
	const [effect, setEffect] = useState(false);
	let classForEffect = effect === true ? `${styles.span} ${styles.span_active}` : `${styles.span}`;

	return (
		<div className={styles.game__wrap}>
			<button className={styles.game__button} onClick={ () => {setEffect(!effect)}}> X </button>
			<div className={styles.game__test}>
				<span className={classForEffect}>O</span>
				<span className={classForEffect}>K&nbsp;&nbsp;</span>
				<span className={classForEffect}>L</span>
				<span className={classForEffect}>E</span>
				<span className={classForEffect}>T</span>
				<span className={classForEffect}>`</span>
				<span className={classForEffect}>S&nbsp;&nbsp;</span>
				<span className={classForEffect}>N</span>
				<span className={classForEffect}>E</span>
				<span className={classForEffect}>X</span>
				<span className={classForEffect}>T</span>
			</div>

		</div>
	)
}
export default Game;