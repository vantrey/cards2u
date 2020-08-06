import React, { useEffect, useState } from 'react';
import styles from './Data.module.css';


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
			<h4 className={styles.data__title}>Data</h4>
			<div className={styles.data__graph}>
				<div className={styles.yAxis__wrap}>
					<div className={styles.graph__yAxis}>
						<div className={styles.yAxis__arrow}>
							<img src="" alt=""/>
						</div>
						<span className={styles.yAxis__title}></span>
						<span className={styles.yAxis__percent100}></span>
						<span className={styles.yAxis__percent0}></span>
					</div>
				</div>
				<div className={styles.xAxis__wrap}>
					<div className={styles.graph__xAxis}>
						<div className={styles.xAxis__arrow}>
							<img src="" alt=""/>
						</div>
						<span className={styles.xAxis__title}></span>
						<span className={styles.xAxis__percent100}></span>
						<div className={styles.xAxis__title}></div>
						<div className={styles.xAxis__progressbar}></div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Data;