import React from 'react';
import styles from './Game.module.css';



const Game = () => {

	return (
		<div className={styles.game__wrap}>
			<div className={styles.game__left}> </div>
			<div className={styles.game__container}>
				<div className={styles.game__analytics}>analytics</div>
				<div className={styles.game__content}>
					<div className={styles.content__header}>header</div>
					<div className={styles.content__main}>
						<div className={styles.main__card}>card</div>
						<div className={styles.main__deck}>deck</div>
					</div>
					<div className={styles.content__buttons}>buttons</div>
				</div>
				<div className={styles.game__chat}>chat</div>
			</div>
			<div className={styles.game__right}> </div>
		</div>
	)
}
export default Game;