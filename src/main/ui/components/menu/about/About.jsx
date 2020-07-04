import React from 'react';
import styles from './About.module.css'


const About = ({toggleAbout}) => {

    const classForAbout = toggleAbout === true ? `${styles.about__wrap} ${styles.about__wrap_active}` : `${styles.about__wrap}`;

    return (
        <div className={ classForAbout }>
            <div className={styles.about__left}> </div>
            <div className={styles.about__main}>
                <h2 className={styles.main__title}>ABOUT GAME</h2>
                <p className={styles.main__text}>text</p>
            </div>
            <div className={styles.about__right}> </div>
        </div>
    )
}
export default About;