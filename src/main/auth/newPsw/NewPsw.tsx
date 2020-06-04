import React from 'react';
import styles from './NewPsw.module.css'
import NewPswForm from "./NewPswForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type NewPswPropsType = {
  register: UseFormRegisterType
  errors: UseFormErrorsType
  onSubmit: () => void
}

const NewPsw: React.FC<NewPswPropsType> = ({...props}) => {

  return (
    <div className={styles.newPsw}>
      <NewPswForm {...props}/>
    </div>
  )
}
export default NewPsw
