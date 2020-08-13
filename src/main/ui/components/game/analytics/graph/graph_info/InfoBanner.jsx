import React, { useEffect, useState } from 'react';
import styles from './InfoBanner.module.css';
import decor from '../../../../../images/decor-gold.png';


const InfoBanner = () => {

	const [ fadeIn, setFadeIn ] = useState (false);

	// useEffect (() => {
	//
	// 	setTimeout (() => {
	// 		setFadeIn (true);
	// 	}, 6500);
	//
	// }, [ fadeIn]);


	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.info__text}>
				<div className={styles.info__title}>Upgrade your skills !</div>
				<div className={styles.info__discr_little}>follow next steps:</div>
				<div className={styles.info__discr}>Choose the deck.</div>
				<div className={styles.info__discr}>Train in different modes.</div>
				<div className={styles.info__discr}>Pass the test.</div>
				<div className={styles.info__discr}>Evaluate your score.</div>
			</div>
			<div className={styles.info__img}>
				<img src={decor} alt="decor"/>
			</div>
		</div>
	)
}

export default InfoBanner;