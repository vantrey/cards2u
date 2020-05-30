import React from 'react';
import styles from './Input.module.css'

type OwnPropsType = {
  name: string
  error: {message: string, type: string} | undefined
  register: any
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = OwnPropsType & InputType
const Input: React.FC<PropsType> = ({name, register, error, ...props}) => {
  let classForEl = error ? `${styles.input} ${styles.error}` : styles.input
  return (
    <>
      <input
        {...props}
        name={name}
        ref={register}
        className={classForEl}
      />
      {error && <span>{error.message}</span>}
    </>
  )
}

export default Input
