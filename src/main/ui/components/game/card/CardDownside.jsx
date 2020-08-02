import React, { useEffect, useState } from 'react';
import styles from './CardDownside.module.css';
import arrow from '../../../icons/arrows.png'
import { useDispatch, useSelector } from "react-redux";
import { getCurrentFavCard, setGrade } from "../../../../bll/favoriteDecks/favoriteDecksReducer"
import soundTrue from "../../../audio/correctly.mp3";
import soundFalse from "../../../audio/mistake.mp3";
import { loudlinks } from "../../../../helpers/loudlinks";


const CardDownside = ({ setCardFace }) => {

	const dispatch = useDispatch ();
	const [ popupBlock, setPopupBlock ] = useState (false);
	const { currentFavCard, isRandomMode, gameType, isMulti, isSound } = useSelector ((state) => state.favoriteDecks);

	const onSelectGrade = (e) => {
		dispatch (setGrade (Number (e.currentTarget.name)));
	};

	useEffect (() => {
		let pElements = document.querySelectorAll ("p[data-text='answer']");

		pElements.forEach ((el) => {
			el.addEventListener ('click', () => {
				if ( el.getAttribute ('id') === 'trueAnswer' ) {
					el.classList.add (`${styles.discr__text_green}`);
					if ( gameType === 'test' ) {
						setPopupBlock (true);
						setTimeout (() => {
							setCardFace (true);
							dispatch (getCurrentFavCard ());
						}, 1000);
					}
				} else {
					el.classList.add (`${styles.discr__text_red}`);
					if ( gameType === 'test' ) {
						setPopupBlock (true);
						setTimeout (() => {
							setCardFace (true);
							dispatch (getCurrentFavCard ());
						}, 1000);
					}
				}
			});
		});
	}, [ isMulti, isSound ]);

	useEffect( () => {
		const trueAnswerSoundEl = document.getElementById ('trueAnswerSound');
		const trueAnswerSoundElP = document.getElementById ('trueAnswer');
		const falseAnswerSound1El = document.getElementById ('falseAnswerSound1');
		const falseAnswerSound1ElP = document.getElementById ('falseAnswer1');
		const falseAnswerSound2El = document.getElementById ('falseAnswerSound2');
		const falseAnswerSound2ElP = document.getElementById ('falseAnswer2');

		if(trueAnswerSoundElP && trueAnswerSoundEl) {
			trueAnswerSoundElP.addEventListener('click', () => {
				trueAnswerSoundEl.play ();
			});
		}

		if(falseAnswerSound1ElP && falseAnswerSound1El) {
			falseAnswerSound1ElP.addEventListener('click', () => {
				falseAnswerSound1El.play ();
			});
		}

		if(falseAnswerSound2ElP && falseAnswerSound2El) {
			falseAnswerSound2ElP.addEventListener('click', () => {
				falseAnswerSound2El.play ();
			});
		}

	},[isMulti])


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
					<p className={styles.text__discr}>{currentFavCard.answer}</p>
				</div>
				}
				{isMulti &&
				<div className={styles.card__text}>
					<h3 className={styles.text__title}>answer</h3>
					<div id={'multyanswer'} className={styles.text__discr}>
						<div className={styles.discr}>
							<span className={styles.discr__number}>1.</span>
							<p data-text='answer' id='trueAnswer' className={styles.discr__text}>
								Курсор мыши появляется над элементом.
							</p>
							<audio autoPlay={false} muted={!isSound} id='trueAnswerSound'>
								<source src={soundTrue} type="audio/mpeg"/>
							</audio>
						</div>
						<div className={styles.discr}>
							<span className={styles.discr__number}>2.</span>
							<p data-text='answer' id='falseAnswer1'  className={styles.discr__text}>
								Курсор мыши появляется над элементом и уходит с него.
							</p>
							<audio autoPlay={false} muted={!isSound} id='falseAnswerSound1'>
								<source src={soundFalse} type="audio/mpeg"/>
							</audio>
						</div>
						<div className={styles.discr}>
							<span className={styles.discr__number}>3.</span>
							<p data-text='answer' id='falseAnswer2'  className={styles.discr__text}>
								Курсор мыши появляется над над элементом элементом и уходит с него.
							</p>
							<audio autoPlay={false} muted={!isSound} id='falseAnswerSound2'>
								<source src={soundFalse} type="audio/mpeg"/>
							</audio>
						</div>
					</div>
					{popupBlock && <div className={styles.card__popupBlock}></div>}
				</div>
				}
			</div>
		</div>
	)
}
export default CardDownside;