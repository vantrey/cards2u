import React, { useEffect } from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.png';
import closeIcon from '../../icons/cancel .png';


const Scroll = () => {

// ===== временно для работы =====

	useEffect (() => {
		let closeEl = document.getElementById ('closeIconId');
		let modalEl = document.getElementById('modal');
		closeEl.addEventListener ('click', () => {
			modalEl.classList.remove('scroll__wrap_active');
		}, true);

	}, []);

// =====

	return (
		<div className={styles.scroll__wrap} id='modal'>
			<div className={styles.scroll__img}>
				<div className={styles.scroll__icon} id='closeIconId'>
					<img src={closeIcon} alt="cancel-Icon"/>
				</div>
				<img src={scrollBg} alt="scroll"/>
			</div>
		</div>
	)
}
export default Scroll;