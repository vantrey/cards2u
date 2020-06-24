import React from 'react'
import styles from './Button.module.css'


type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType =  ButtonType
const Button: React.FC<PropsType> = () => {

  return (
      <div className={styles.form__group}>
        <button className={styles.form__button}>ACCEPT</button>
      </div>
  )
}

export default Button