import React from 'react';
import styles from './Settings.module.css';


const Settings  = () => {

	return (
		<div className={styles.switcher__wrap}>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Number of responses</h6>
				<div className={styles.radio__wrap}>
					<div className={styles.radio}>
						<label className={styles.radio__custom}>
							<input className={styles.radio__input} type="radio" name="number" value="1" checked/>
								<span className={styles.radio__titlte}>one</span>
						</label>
					</div>
					<div className={styles.radio}>
						<label className={styles.radio__custom}>
							<input className={styles.radio__input} type="radio" name="number" value="3"/>
								<span className={styles.radio__titlte}>few</span>
						</label>
					</div>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Number of responses</h6>
				<div className={`${styles.switcher} ${styles.switcher1}`}>
					<input className={styles.switcher__input} type="checkbox" id="switcher-1" />
					<label className={styles.switcher__label} htmlFor="switcher-1"> </label>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Number of responses</h6>
				<div className={`${styles.switcher} ${styles.switcher1}`}>
					<input className={styles.switcher__input} type="checkbox" id="switcher-2" />
					<label className={styles.switcher__label} htmlFor="switcher-2"> </label>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.switcher__info}>
				<h6 className={styles.switcher__title}>Number of responses</h6>
				<div className={`${styles.switcher} ${styles.switcher1}`}>
					<input className={styles.switcher__input} type="checkbox" id="switcher-3" />
					<label className={styles.switcher__label} htmlFor="switcher-3"> </label>
					<div className={styles.tooltip}>
						<div className={styles.tooltip_wrap}>
							<h4 className={styles.tooltip_title}>Number of responses</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings ;