import React from 'react'
import styles from './Button.module.css'

type OwnPropsType = {
  tittle: string
}
type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType = OwnPropsType & ButtonType
const Button: React.FC<PropsType> = ({...props}) => {
  return (
    <button
      className={styles.button}
    >
      <span
        className={styles.buttonTitle}
      >
        {props.tittle}
      </span>
    </button>
  )
}

export default Button