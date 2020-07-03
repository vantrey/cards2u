import React from 'react';
import styles from './Deck_green.module.css';
import img1 from '../../../images/shirt 2.png'


const Deck_green = () => {

	return (
		<div className={styles.deck__wrap} >
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={img1} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h6> Famous</h6>
				</div>
			</div>
		</div>
	)
}
export default Deck_green;