import React from 'react';
import styles from './Card.module.css';


const Card = () => {

	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>
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
export default Card;