import React from 'react'
import styles from './CreateCardButton.module.css'


type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType =  ButtonType
const CreateCardButton: React.FC<PropsType> = ({children, ...props}) => {

  return (
      <div className={styles.createform__buttons} >
          {children && <button {...props} tabIndex={3} className={styles.createform__button}>{children}</button>}
          {!children && <button {...props}  className={styles.createform__button}>create</button>}
      </div>
  )
};

export default CreateCardButton