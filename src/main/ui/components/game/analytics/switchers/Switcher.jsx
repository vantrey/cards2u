import React from 'react';
import styles from './Switcher.module.css';


const Switcher = () => {

	return (
		<div className={styles.switcher__wrap}>
			<span className={`${styles.switcher} ${styles.switcher1}`}>
   				<input className={styles.switcher__input} type="checkbox" id="switcher-1" />
   				<label className={styles.switcher__label} htmlFor="switcher-1"> </label>
				<div className={styles.tooltip}>
				<div className={styles.tooltip_wrap}>
					<h4 className={styles.tooltip_title}> еусыа ывапыаы впвапв </h4>
				</div>
			</div>
			</span>
		</div>
	)
}

export default Switcher;