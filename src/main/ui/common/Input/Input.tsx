import React from 'react';
import styles from './Input.module.css'

type OwnPropsType = {
  name: string
  errorMessage: string
  register: any
  errors: any
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = OwnPropsType & InputType
const Input: React.FC<PropsType> = ({name, errors, register, errorMessage, ...props}) => {
  let classForEl = errors[name] ? `${styles.input} ${styles.error}` : styles.input
  return (
    <>
      <input
        {...props}
        name={name}
        ref={register({required: errorMessage})}
        className={classForEl}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  )
}

export default Input
