import React from 'react';
import styles from './Deck_blue2.module.css';
import img1 from '../../../images/shirt6.png'


const Deck_blue2 = () => {

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
export default Deck_blue2;