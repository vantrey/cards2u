import React from 'react';
import styles from './CardDownside.module.css';


const CardDownside = () => {

	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>

				<div  className={styles.card__buttons}>
					<div  className={styles.buttons__group}>
						<button >0%</button>
						<button >25%</button>
						<button >75%</button>
						<button >100%</button>
					</div>
				</div>





			</div>
		</div>
	)
}
export default CardDownside;