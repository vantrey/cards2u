import React from 'react';
import styles from './DefaultDeck.module.css';
import deckBG from '../../../images/card-bg-LBR.jpg';


const DefaultDeck = () => {

	return (
		<div className={styles.deck__wrap} >
			<div className={styles.deck}>
				<div className={styles.card__imgBx}>
					<img src={deckBG} alt="images"/>
				</div>
				<div className={styles.deck__details}>
					<h2>123</h2>
				</div>
			</div>
		</div>
	)
}
export default DefaultDeck;