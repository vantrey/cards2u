import React from 'react';
import styles from './Deck_yellow.module.css';
import img1 from '../../../images/shirt-4.png'


const Deck_blue = () => {

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
export default Deck_blue;