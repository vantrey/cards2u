import React, { useEffect, useState } from 'react';
import styles from './Data.module.css';
import arrowAxis from '../../../../../icons/arrow-axis.svg';
import { useDispatch, useSelector } from "react-redux";
import { favoriteDecksActions } from "../../../../../../bll/favoriteDecks/favoriteDecksReducer";


const Data = () => {

	const [ fadeIn, setFadeIn ] = useState (false);
	const { currentAnalytics, currentFavDeck } = useSelector ((state) => state.favoriteDecks);
	let countRightAnswers, countFaultsAnswers, countCards, percentPassing = 0, percentRightAnswers = 0;
	const dispatch = useDispatch ();

	countRightAnswers = currentAnalytics.rightAnswers;
	countFaultsAnswers = currentAnalytics.faults;
	countCards = currentFavDeck.cardsCount;
	percentPassing = Math.floor((countRightAnswers + countFaultsAnswers) * 100 / countCards);
	percentRightAnswers =  Math.floor(countRightAnswers * 100 / countCards);

	useEffect (() => {
		const currentPercentEl = document.getElementById('currentPercent');
		const currentPercentTestEl = document.getElementById('currentPercentTest');
		currentPercentEl.style.height = `${percentRightAnswers * 2}px`;
		currentPercentTestEl.style.width = `${percentPassing * 2}px`;
		dispatch(favoriteDecksActions.setPercentRightAnswers(percentRightAnswers))
	}, [currentAnalytics.rightAnswers, currentAnalytics.faults ]);

	useEffect (() => {
		let dataIdTimer = setTimeout (() => {
			setFadeIn (true);
		}, 1500);
		return () => {
			clearTimeout(dataIdTimer);
		}
	}, [ fadeIn ]);

	// const classForData = fadeIn ? `${styles.data__wrap_active}` : `${styles.data__wrap}`;

	return (
		<div className={styles.data__wrap}>
			<div className={styles.data__title}>Your score</div>
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
								<span className={styles.progress_bar_inner} id='currentPercentTest'>
									<div className={styles.progress__tooltip}>{percentPassing}%</div>
								</span>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className={styles.indicator__now} id='currentPercent'>
					<div className={styles.now__title}>current value {percentRightAnswers} %</div>
				</div>
				<div className={styles.indicator__best}>
					<div className={styles.best__title}>your best</div>
				</div>
			</div>
		</div>

	)
}

export default Data;