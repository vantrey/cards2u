import React from 'react';
import styles from './Card.module.css';

import Radium from 'radium';




let Card = ({cardBG}) => {

	let stylesRadium = {
		card: {
			backgroundImage: `url("${ cardBG }")`,
			'&::before': {
				backgroundImage: `url("${ cardBG }")`
			}
		}
	}

	// <div className={styles.card}  style={{backgroundImage: 'url(' + cardBG + ')'}} >
	// console.log (cardBG)

	return (
		<div className={styles.card__wrap}>
			 <div className={styles.card}  style={stylesRadium.card} >
				<div className={styles.card__content}>
					<h2 className={styles.card__title}>Mountain View</h2>
					<p className={styles.card__text}>Check out all of these gorgeous mountain trips with beautiful views
						of, you
						guessed it, the mountains</p>
					<button className={styles.card__btn}>see answer</button>
				</div>
			</div>
		</div>
	)
}


Card = Radium (Card);


export default Card;