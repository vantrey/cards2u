import React from 'react';
import styles from './Card.module.css';


let Card = ({ cardBg, setCardFace, cardface }) => {

	let stylesOnline = {
		backgroundImage: `url("${cardBg}")`,
	}

	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>
				<div className={styles.card__background} style={stylesOnline}> </div>
				<div className={styles.card__content}>
					<h2 className={styles.card__title}>React Native</h2>
					<p className={styles.card__text}>Что то русскими буквами Что то русскими буквами Что то русскими буквамиCheck out all of these gorgeous mountain trips with beautiful
						views of, you guessed it, the mountains</p>
					<button className={styles.card__btn} onClick={() => {setCardFace (!cardface)}}>see answer</button>
				</div>
			</div>
		</div>

	)
}

export default Card;