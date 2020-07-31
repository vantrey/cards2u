import React from 'react';
import styles from './CardDownside.module.css';
// import arrow from '../../../icons/back.png'
import arrow from '../../../icons/arrows.png'
import {useDispatch, useSelector} from "react-redux";
import {setGrade} from "../../../../bll/favoriteDecks/favoriteDecksReducer"


const CardDownside = ({numberResponses}) => {

    const dispatch = useDispatch();
    const {currentFavCard, gameType} = useSelector((state) => state.favoriteDecks);

    const onSelectGrade = (e) => {
	dispatch(setGrade(Number(e.currentTarget.name)));
    }

    return (
        <div className={styles.card__wrap}>
            <div className={styles.card}>
                {(gameType === 'controlledRandom') &&
                <div className={styles.card__voting}>
                    <div className={styles.card__buttons}>
                        <div className={styles.buttons__group}>
                            <button name={'1'} onClick={onSelectGrade}>0%</button>
                            <button name={'2'} onClick={onSelectGrade}>25%</button>
                            <button name={'3'} onClick={onSelectGrade}>75%</button>
                            <button name={'4'} onClick={onSelectGrade}>100%</button>
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
                <div className={styles.card__voting}>1</div>
                }
                {(numberResponses === 'one') &&
                <div className={styles.card__text}>
                    <h3 className={styles.text__title}>answer</h3>
                    <p className={styles.text__discr}>{currentFavCard.answer}</p>
                </div>
                }
                {(numberResponses === 'few') &&
                <div className={styles.card__text}>
                    <h3 className={styles.text__title}>answerFwe</h3>
                    <p className={styles.text__discr}>{currentFavCard.answer}</p>
                </div>
                }
            </div>
        </div>
    )
}
export default CardDownside;