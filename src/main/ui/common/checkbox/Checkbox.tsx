import React from 'react'
import styles from './Checkbox.module.css'

type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type PropsType =  InputType;

const Checkbox: React.FC<PropsType> = () => {
  return (
      <div className={styles.form__checkbox}>
          <input type='checkbox' id='checkbox'/>
          <label htmlFor="checkbox"> </label>
          <span className={styles.form__remember}>remember me</span>
      </div>
  )
}

export default Checkbox;