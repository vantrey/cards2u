import React from 'react'
import styles from './Button.module.css'

type OwnPropsType = {
  isDisabled: boolean
  tittle: string
  onButtonClick: () => void
}

const Button: React.FC<OwnPropsType> = ({...props}) => {
  return (
    <button onClick={props.onButtonClick} disabled={props.isDisabled} className={styles.button}>
      <span className={styles.buttonTitle}>{props.tittle}</span>
    </button>
  )
}

export default Button