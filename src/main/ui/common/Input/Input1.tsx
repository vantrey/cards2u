import React from 'react';
import styles from './Input1.module.css'


const Input1 = () => {

    return (
        <>
            <form method="post" className={styles.form}>
                <div className={styles.form__group}>
                    <input type="text" id="input" required={true}/>
                    <label className={styles.control__label} htmlFor="input">New User</label>
                    <i className={styles.mtrl__select}> </i>
                </div>
                <div className={styles.form__group}>
                    <input type="password" id="input" required={true}/>
                    <label className={styles.control__label} htmlFor="input">New password</label>
                    <i className={styles.mtrl__select}> </i>
                </div>
                <div className={styles.form__group}>
                    <input type="password" id="input" required={true}/>
                    <label className={styles.control__label} htmlFor="input">New password</label>
                    <i className={styles.mtrl__select}> </i>
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
        </>
    )
}

export default Input1;
