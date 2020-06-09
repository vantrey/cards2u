import React from 'react'
import styles from './Checkbox.module.css'

type OwnPropsType = {
  tittle: string
}
type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType = OwnPropsType & ButtonType

const Checkbox: React.FC<PropsType> = ({title}) => {
  return (
      <div className={styles.form__checkbox}>
          <input type='checkbox' id='checkbox'/>
          <label htmlFor="checkbox"> </label>
          <span className={styles.form__remember}>remember me</span>
      </div>
  )
}

export default Checkbox;