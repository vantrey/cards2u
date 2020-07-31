import React, { useEffect } from 'react';
import styles from './CardDownside.module.css';
import arrow from '../../../icons/arrows.png'
import { useDispatch, useSelector } from "react-redux";
import { getCurrentFavCard, setGrade } from "../../../../bll/favoriteDecks/favoriteDecksReducer"
import soundTrue from "../../../audio/correctly.mp3";
import soundFalse from "../../../audio/mistake.mp3";
import { loudlinks } from "../../../../helpers/loudlinks";


const CardDownside = ({ numberResponses, setCardFace }) => {

	const dispatch = useDispatch ();
	const { currentFavCard, gameType } = useSelector ((state) => state.favoriteDecks);

	const onSelectGrade = (e) => {
		dispatch (setGrade (Number (e.currentTarget.name)));
	};

	useEffect (() => {
		let pElements = document.querySelectorAll("p[data-text='answer']");
		pElements.forEach ((el) => {
			el.addEventListener ('click', () => {
                if ( el.getAttribute('id') === '123' ) {
                    el.classList.add (`${styles.discr__text_green}`);
                    setTimeout( () => {
                        dispatch(getCurrentFavCard());
                        setCardFace(true);
                    }, 1000)
                } else {
                    el.classList.add(`${styles.discr__text_red}`);
                    setTimeout( () => {
                        dispatch(getCurrentFavCard());
                        setCardFace(true);
                    }, 1000)
                }
            });
		});
		loudlinks();
	}, [numberResponses]);

	return (
		<div className={styles.card__wrap}>
			<div className={styles.card}>
				{(gameType === 'controlledRandom') &&
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
				{(gameType === 'inOrder') &&
				<div className={styles.card__voting}></div>
				}
				{(numberResponses === 'one') &&
				<div className={styles.card__text}>
					<h3 className={styles.text__title}>answer</h3>
					<p className={styles.text__discr}>{currentFavCard.answer}</p>
				</div>
				}
				{(numberResponses === 'few') &&
				<div className={styles.card__text}>
					<h3 className={styles.text__title}>answer</h3>
					<div id={'multyanswer'} className={styles.text__discr}>
						<div className={styles.discr}>
							<span className={styles.discr__number}>1.</span>
							<p data-text='answer' id={'123'} className={`${styles.discr__text} ${'soundClick'}`}
							   data-sound={soundTrue}>Курсор мыши
								появляется над элементом.</p>
						</div>
						<div className={styles.discr}>
							<span className={styles.discr__number}>2.</span>
							<p data-text='answer' className={`${styles.discr__text} ${'soundClick'}`}
							   data-sound={soundFalse}>Курсор мыши появляется над
								элементом и уходит с него.</p>
						</div>
						<div className={styles.discr}>
							<span className={styles.discr__number}>3.</span>
								<p data-text='answer' className={`${styles.discr__text} ${'soundClick'}`}
								   data-sound={soundFalse}> Курсор мыши появляется над над
									элементом элементом и уходит с него.
								</p>
						</div>
					</div>
				</div>
				}
			</div>
		</div>
	)
}
export default CardDownside;