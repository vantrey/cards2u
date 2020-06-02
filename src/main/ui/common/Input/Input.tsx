import React from 'react';
import styles from './Input.module.css'
import {ErrorsType, RegisterType} from "../../../auth/registration/RegirtrationContainer";

type OwnPropsType = {
  name: string
  errors: ErrorsType
  register: RegisterType
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = OwnPropsType & InputType
const Input: React.FC<PropsType> = ({name, register, ...props}) => {
  let classForEl = props.errors[name] ? `${styles.input} ${styles.error}` : styles.input
  return (
    <>
      <input
        {...props}
        name={name}
        ref={register}
        className={classForEl}
      />
      {props.errors[name] && <span className={styles.errorMessage}>{props.errors[name].message}</span>}
    </>
  )
}

export default Input
