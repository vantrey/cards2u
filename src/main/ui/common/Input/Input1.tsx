import React from 'react';
import styles from './Input1.module.css'




const Input1 = () => {

  return (
    <>
        <form method="post">
            <div className={styles.form__group}>
                <input type="text" id="input"  required={true}/>
                <label className={styles.control__label} htmlFor="input">New User</label>
                <i className={styles.mtrl__select}> </i>
            </div>
            <div className={styles.form__group}>
                <input type="password" id="input"  required={true}/>
                <label className={styles.control__label} htmlFor="input">New password</label>
                <i className={styles.mtrl__select}> </i>
            </div>
            <div className={styles.form__group}>
                <input type="password" id="input"  required={true}/>
                <label className={styles.control__label} htmlFor="input">New password</label>
                <i className={styles.mtrl__select}> </i>
            </div>


            {/*<div className={styles.form__group}>*/}
            {/*    <input type="password" id="input"  required={true} name='psw'/>*/}
            {/*    <label className={styles.control__label} htmlFor="psw">New password</label>*/}
            {/*    <i className={styles.mtrl__select}> </i>*/}
            {/*</div>*/}
            {/*<div className={styles.form__group}>*/}
            {/*    <input type="password" id="input"  required={true}  name='psw1'/>*/}
            {/*    <label className={styles.control__label} htmlFor="psw1">New password</label>*/}
            {/*    <i className={styles.mtrl__select}> </i>*/}
            {/*</div>*/}
        </form>
    </>
  )
}

export default Input1;
