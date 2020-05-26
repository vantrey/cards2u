import React from 'react'
import styles from './Button.module.css'

type OwnPropsType = {
  isDisabled: boolean
}

const Button: React.FC<OwnPropsType> = (props) => {
  return (
    <button disabled={props.isDisabled} className={styles.button}>
      <span className={styles.buttonTitle}>button</span>
    </button>
  )
}

export default Button