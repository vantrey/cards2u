import React, {useState} from 'react';
import styles from './OwnCardsLogout.module.css';
import decor from "../../../../images/decor-gold.png";
import MultiColoredTextComponent from '../../../../../helpers/fireText/MultiColoredTextComponent';


const OwnCardsLogout = React.memo(() => {

    const [effect, setEffect] = useState(false);

    return (

        <div className={styles.container__rightBlock}>
            <MultiColoredTextComponent effect={effect}>Here you can see the information about others users decks.
                If you like some deck you can add it to your favorite list. </MultiColoredTextComponent>
            <button className={styles.game__button} onClick={ () => {setEffect(!effect)}}> X </button>
            {/*<div className={styles.cardsLogout__wrap}>*/}
            {/*    <p className={styles.cardsLogout__text}> Here you can see the information about others users decks.*/}
            {/*        If you like some deck you can add it to your favorite list.*/}
            {/*    </p>*/}
            {/*    <div className={styles.cardsLogout__img}>*/}
            {/*        <img src={decor} alt='decor'/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
})

export default OwnCardsLogout;




