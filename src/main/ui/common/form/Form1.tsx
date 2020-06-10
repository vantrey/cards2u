import React from 'react';
import styles from './Form1.module.css'
import warning from '../../icons/shield.svg'



const Form1 = () => {

    return (
            <form method="post" className={styles.form}>
                <div className={styles.form__group}>
                    <input type="text" id="input" required={true}/>
                    <label className={styles.control__label} htmlFor="input">New User</label>
                    <i className={styles.mtrl__select}> </i>
                    <div  className={styles.form__warning_wrap}>
                        <div className={styles.form__warning_icon}>
                            <img src={warning} alt="warning"/>
                        </div>
                        <span  className={styles.form__warning_info}> warning warning warning </span>
                    </div>
                </div>
                <div className={styles.form__group}>
                    <input type="password" id="input" required={true}/>
                    <label className={styles.control__label} htmlFor="input">New password</label>
                    <i className={styles.mtrl__select}> </i>
                    <div  className={styles.form__warning_wrap}>
                        <div className={styles.form__warning_icon}>
                            <img src={warning} alt="warning"/>
                        </div>
                        <span  className={styles.form__warning_info}> warning warning warning </span>
                    </div>
                </div>
                <div className={styles.form__group}>
                    <input type="password" id="input" required={true}/>
                    <label className={styles.control__label} htmlFor="input">New password</label>
                    <i className={styles.mtrl__select}> </i>
                    <div  className={styles.form__warning_wrap}>
                        <div className={styles.form__warning_icon}>
                            <img src={warning} alt="warning"/>
                        </div>
                        <span  className={styles.form__warning_info}> warning warning warning </span>
                    </div>
                </div>
                <div className={styles.form__checkbox}>
                    <input type='checkbox' id='checkbox'/>
                    <label htmlFor="checkbox"> </label>
                    <span className={styles.form__remember}>remember me</span>
                </div>
                <div className={styles.form__group}>
                    <button className={styles.form__button}>ACCEPT</button>
                </div>
            </form>
    )
}

export default Form1;
