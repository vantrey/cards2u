import React from 'react';
import styles from './OwnCardsLogout.module.css';
import decor from "../../../../images/decor-gold.png";
import FireComponent from '../../../../../helpers/fireText/FireComponent';


const OwnCardsLogout = ({effect}) => {

    let classForImg = effect === true ? `${styles.cardsLogout__img} ${styles.cardsLogout__img_active}` : `${styles.cardsLogout__img}`;

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.cardsLogout__text}>
                <FireComponent effect={effect}>Here you can create your</FireComponent>
                <FireComponent effect={effect}>personal cards and decks,</FireComponent>
                <FireComponent effect={effect}>edit or delete existing</FireComponent>
                <FireComponent effect={effect}>ones.</FireComponent>
                <FireComponent effect={effect}>Here you can sees.sf sdfsd</FireComponent>
            </div>
            <div className={classForImg}>
                <img src={decor} alt='decor'/>
            </div>
        </div>
    )
}

export default OwnCardsLogout;




