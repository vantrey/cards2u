import React from 'react';
import styles from './CardDownside.module.css';
// import arrow from '../../../icons/back.png'
import arrow from '../../../icons/arrows.png'


const CardDownside = () => {

	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>
				<div className={styles.card__voting}>
					<div className={styles.card__buttons}>
						<div className={styles.buttons__group}>
							<button>0%</button>
							<button>25%</button>
							<button>75%</button>
							<button>100%</button>
						</div>
					</div>
					<div className={styles.card__title}>
						<div className={styles.title__icon} >
							<img src={arrow} alt="arrow"/>
						</div>
						<p>
						click here to rate your reply  where 0% - didn't know the reply,<br></br> up to
						100% - sure in the reply
						</p>
					</div>
				</div>
				<div className={styles.card__text}>
					<h3 className={styles.text__title}>answer</h3>
					<p className={styles.text__discr}>knew and strongly believed</p>
				</div>
			</div>
		</div>
	)
}
export default CardDownside;