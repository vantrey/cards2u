import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './CardDownside.module.css';
import arrow from '../../../icons/arrows.png'
import { useDispatch, useSelector } from "react-redux";
import { favoriteDecksActions, getCurrentFavCard, setGrade } from "../../../../bll/favoriteDecks/favoriteDecksReducer"
import soundTrue from "../../../audio/correctly.mp3";
import soundFalse from "../../../audio/mistake.mp3";
import { shuffle } from "../../../../helpers/random_multyanswer/randomAnswer";
import { cardBG, getRandomBg, maxNumber } from "../../../common/random_bg/Random_bg";


const CardDownside = ({ setCardFace, setCardBg }) => {

	const dispatch = useDispatch ();
	const [ popupBlock, setPopupBlock ] = useState (false);
	const { currentFavCard, isRandomMode, gameType, isMulti, isSound, currentAnalytics } =
			useSelector ((state) => state.favoriteDecks);

	// dispatch(favoriteDecksActions.setAnalytics(true));

	const onSelectGrade = (e) => {
		dispatch (setGrade (Number (e.currentTarget.name)));
	};

	let arrShuffle;

	if ( isMulti ) {
		const arrAnswer = [ { id: 'trueAnswer', answer: currentFavCard.answer },
			{ id: 'falseAnswer1', answer: currentFavCard.wrongAnswers[0] },
			{ id: 'falseAnswer2', answer: currentFavCard.wrongAnswers[1] }
		];
		arrShuffle = shuffle (arrAnswer);
	}

	// const memoizedCallback = useCallback(
	// 	() => {
	// 		if ( isMulti ) {
	// 			const arrAnswer = [ { id: 'trueAnswer', answer: currentFavCard.answer },
	// 				{ id: 'falseAnswer1', answer: currentFavCard.wrongAnswers[0] },
	// 				{ id: 'falseAnswer2', answer: currentFavCard.wrongAnswers[1] }
	// 			];
	// 			return arrShuffle = shuffle (arrAnswer);
	// 		}
	// 	},
	// 	[isMulti, gameType],
	// );
	//
	// memoizedCallback();

	useEffect (() => {

		let pElements = document.querySelectorAll ("p[data-text='answer']");
		let idTest, idTest1;

		pElements.forEach ((el) => {
			el.addEventListener ('click', () => {
				if ( el.getAttribute ('id') === 'trueAnswer' ) {
					el.classList.add (`${styles.discr__text_green}`);
					if ( gameType === 'test' ) {
						setPopupBlock (true);
						dispatch(favoriteDecksActions.setAnalytics(true));
						idTest = setTimeout (() => {
							setCardFace (true);
							getRandomBg (maxNumber);
							setCardBg(cardBG);
							dispatch (getCurrentFavCard ());
						}, 1000);
					}
				} else {
					el.classList.add (`${styles.discr__text_red}`);
					if ( gameType === 'test' ) {
						setPopupBlock (true);
						dispatch(favoriteDecksActions.setAnalytics(false));
						idTest1 = setTimeout (() => {
							setCardFace (true);
							getRandomBg (maxNumber);
							setCardBg(cardBG);
							dispatch (getCurrentFavCard ());
						}, 1000);
					}
				}

			});
		});

		return () => {
			pElements.forEach ((el) => {
				el.removeEventListener('click', () => {
					if ( el.getAttribute ('id') === 'trueAnswer' ) {
						el.classList.add (`${styles.discr__text_green}`);
						if ( gameType === 'test' ) {
							setPopupBlock (true);
							idTest = setTimeout (() => {
								setCardFace (true);
								getRandomBg (maxNumber);
								setCardBg(cardBG);
								dispatch (getCurrentFavCard ());
							}, 1000);
						}
					} else {
						el.classList.add (`${styles.discr__text_red}`);
						if ( gameType === 'test' ) {
							setPopupBlock (true);
							idTest1 = setTimeout (() => {
								setCardFace (true);
								getRandomBg (maxNumber);
								setCardBg(cardBG);
								dispatch (getCurrentFavCard ());
							}, 1000);
						}
					}

				});
			});

			clearTimeout(idTest);
			clearTimeout(idTest1);
		}
	}, [isMulti]);

	useEffect (() => {

		const trueAnswerSoundEl = document.getElementById ('trueAnswerSound');
		const trueAnswerSoundElP = document.getElementById ('trueAnswer');
		const falseAnswerSound1El = document.getElementById ('falseAnswerSound1');
		const falseAnswerSound1ElP = document.getElementById ('falseAnswer1');
		const falseAnswerSound2El = document.getElementById ('falseAnswerSound2');
		const falseAnswerSound2ElP = document.getElementById ('falseAnswer2');

		if ( trueAnswerSoundElP && trueAnswerSoundEl ) {
			trueAnswerSoundElP.addEventListener ('click', () => {
				trueAnswerSoundEl.play ();
			});
		}

		if ( falseAnswerSound1ElP && falseAnswerSound1El ) {
			falseAnswerSound1ElP.addEventListener ('click', () => {
				falseAnswerSound1El.play ();
			});
		}

		if ( falseAnswerSound2ElP && falseAnswerSound2El ) {
			falseAnswerSound2ElP.addEventListener ('click', () => {
				falseAnswerSound2El.play ();
			});
		}

	}, [ isMulti ])


	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>
				{(isRandomMode && (gameType !== 'test')) &&
				<div className={styles.card__voting}>
					<div className={styles.card__buttons}>
						<div className={styles.buttons__group}>
							<button name={'1'} onMouseDown={onSelectGrade}>0%</button>
							<button name={'2'} onMouseDown={onSelectGrade}>25%</button>
							<button name={'3'} onMouseDown={onSelectGrade}>75%</button>
							<button name={'4'} onMouseDown={onSelectGrade}>100%</button>
						</div>
					</div>
					<div className={styles.card__title}>
						<div className={styles.title__icon}>
							<img src={arrow} alt="arrow"/>
						</div>
						<p>
							click here to rate your reply where 0% - didn't know the reply,<br></br> up to
							100% - sure in the reply
						</p>
					</div>
				</div>
				}
				{!isRandomMode &&
				<div className={styles.card__voting}></div>
				}
				{!isMulti &&
				<div className={styles.card__text}>
					<h3 className={styles.text__title}>answer</h3>
					<p className={`${styles.text__discr} ${styles.text__discr_center}`}>{currentFavCard.answer}</p>
				</div>
				}
				{isMulti &&
				<div className={styles.card__text}>
					<h3 className={styles.text__title}>answer</h3>
					<div id={'multyanswer'} className={styles.text__discr}>
						{
							arrShuffle.map ((answer, index) => {
								let soundForAnswer = answer.id === 'trueAnswer' ? soundTrue : soundFalse;
								let idForAudio = answer.id === 'trueAnswer' ? 'trueAnswerSound' :
									answer.id === 'falseAnswer1' ? 'falseAnswerSound1' : 'falseAnswerSound2';
								return (
									<div className={styles.discr} key={answer.id}>
										<span className={styles.discr__number}>{index + 1}</span>
										<p data-text='answer' id={answer.id} className={styles.discr__text}>
											{answer.answer}
										</p>
										<audio autoPlay={false} muted={!isSound} id={idForAudio}>
											<source src={soundForAnswer} type="audio/mpeg"/>
										</audio>
									</div>
								)

							})
						}
					</div>
					{popupBlock && <div className={styles.card__popupBlock}></div>}
				</div>
				}
			</div>
		</div>
	)
}
export default CardDownside;