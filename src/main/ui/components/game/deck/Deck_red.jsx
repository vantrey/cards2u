import React from 'react';
import styles from './Deck_red.module.css';
import img1 from '../../../images/shirt 3.png'


const Deck_red = () => {

	return (
		<div className={styles.deck__wrap}>
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={img1} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h2> Famous</h2>
				</div>
			</div>
		</div>
	)
}
export default Deck_red;