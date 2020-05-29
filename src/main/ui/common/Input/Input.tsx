import React from 'react';
import styles from './Input.module.css'

type OwnPropsType = {
  name: string
  register: any
  errors: any
}

const Input: React.FC<OwnPropsType> = ({name, errors, register}) => {

  let classForEl = errors.name ? `${styles.input} ${styles.error}` : styles.input
  return (
    <>
      <input name={name} ref={register({required: true})} className={classForEl} type='text' placeholder=''/>
      {errors.name && <span>This field is required</span>}
    </>
  )
}

export default Input
