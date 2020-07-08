import React  from 'react';
import styles from './DecksQuestions.module.css';


const DecksQuestions = () => {

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.deckInfo__wrap}>
                <h5 className={styles.deckInfo__title}>Selected deck: &nbsp;React JS</h5>
                <div className={styles.deckInfo__data}>
                    <div className={styles.data__title}>
                        <div className={styles.title__question}>Question</div>
                        <div className={styles.data__border}></div>
                        <div className={styles.title__answer}>Answer</div>
                    </div>
                    <div className={styles.data__item_box}>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>
                                Область информатики, в которой функции используются для
                                создания универсальной модели исчисления.
                            </div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>
                                Область информатики
                            </div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>
                                Область информатики, в которой функции используются для
                                создания универсальной модели исчисления.
                            </div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>
                                Область информатики
                            </div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                        <div className={styles.data__item}>
                            <div className={styles.item__question}>1</div>
                            <div className={styles.data__border}></div>
                            <div className={styles.item__answer}>2</div>
                        </div>
                    </div>
                    <div className={styles.deckInfo__button_wrap}>
                        <button className={styles.deckInfo__button}>save to favorites</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DecksQuestions;




