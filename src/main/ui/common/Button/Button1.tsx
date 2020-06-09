import React from 'react'
import styles from './Button1.module.css'

type OwnPropsType = {
  tittle: string
}
type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType = OwnPropsType & ButtonType

const Button1: React.FC<PropsType> = ({title}) => {
  return (
      <div className={styles.form__group}>
        <button className={styles.form__button}>{title}</button>
      </div>
  )
}

export default Button1;