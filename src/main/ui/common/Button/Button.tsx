import React from 'react'
import styles from './Button.module.css'


type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType =  ButtonType
const Button: React.FC<PropsType> = ({children}) => {

  return (
      <div className={styles.form__group}>
          {children && <button className={styles.form__button}>{children}</button>}
          {!children && <button className={styles.form__button}>ACCEPT</button>}
      </div>
  )
};

export default Button