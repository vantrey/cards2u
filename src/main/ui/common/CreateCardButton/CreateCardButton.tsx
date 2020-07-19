import React from 'react'
import styles from './CreateCardButton.module.css'


type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type PropsType =  ButtonType
const CreateCardButton: React.FC<PropsType> = ({children}) => {

  return (
      <div className={styles.createform__buttons}>
          {children && <button className={styles.createform__button}>{children}</button>}
          {!children && <button className={styles.createform__button}>ACCEPT</button>}
      </div>
  )
};

export default CreateCardButton