import React, { useEffect, useState } from 'react';
import styles from './Data.module.css';
import arrowAxis from '../../../../../icons/arrow-axis.svg';



const Data = () => {

	const [ fadeIn, setFadeIn ] = useState (false);

	useEffect (() => {
		setTimeout (() => {
			setFadeIn (true);
		}, 1500);
	}, [ fadeIn ]);

	// const classForData = fadeIn ? `${styles.data__wrap_active}` : `${styles.data__wrap}`;

	return (
		<div className={styles.data__wrap}>
			<h4 className={styles.data__title}></h4>
			<div className={styles.data__graph}>
				<div className={styles.yAxis__wrap}>
					<div className={styles.graph__yAxis}>
						<div className={styles.yAxis__arrow}>
							<img src={arrowAxis} alt="arrow"/>
						</div>
						<div className={styles.yAxis__title}>correct answers in %</div>
						<span className={styles.yAxis__percent100}>100</span>
						<span className={styles.yAxis__percent0}>0</span>
					</div>
				</div>
				<div className={styles.xAxis__wrap}>
					<div className={styles.graph__xAxis}>
						<div className={`${styles.xAxis__arrow} ${styles.xAxis__arrow_rotate}` }>
							<img src={arrowAxis} alt="arrow"/>
						</div>
						<span className={styles.xAxis__percent100}>100</span>
						<div className={styles.xAxis__title}>test passing process in % </div>
						<div className={styles.xAxis__progressbar}>
						<div className={styles.progressbar__container}>
							<div className={`${styles.progress_bar} ${styles.stripes} ${styles.animated}
 								${styles.reverse} ${styles.slower}`}>
								<span className={styles.progress_bar_inner}>
									<div className={styles.progress__tooltip}>100%</div>
								</span>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className={styles.indicator__now}>
					<div className={styles.now__title}>current value 58%</div>
				</div>
				<div className={styles.indicator__best}>
					<div className={styles.best__title}>best</div>
				</div>
			</div>
		</div>

	)
}

export default Data;