import React from 'react';
import styles from './Input.module.css'

type OwnPropsType = {
  isError: boolean
}

const Input: React.FC<OwnPropsType> = (props) => {

  let classForEl = props.isError ? `${styles.input} ${styles.error}` : styles.input
  return (
    <input className={classForEl}
           type='text'
           placeholder=''
    />
  )
}

export default Input
