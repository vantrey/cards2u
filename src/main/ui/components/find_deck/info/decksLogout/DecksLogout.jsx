import React  from 'react';
import styles from './DecksLogout.module.css';
import decor from '../../../../images/decor-gold.png';


const DecksLogout = () => {

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.decksLogout__wrap}>
              <p className={styles.decksLogout__text}>
                 Here you can see the information about others users decks.
                  If you like some deck you can add it to your favorite list.
              </p>
                <div className={styles.decksLogout__img}>
                    <img src={decor} alt='decor'/>
                </div>
            </div>
        </div>
    )
}

export default DecksLogout;




