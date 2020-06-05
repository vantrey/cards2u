import React from 'react';
import styles from './NewPsw.module.css'
import NewPswForm from "./NewPswForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type NewPswPropsType = {
  isSuccess: boolean
  isFetching: boolean
  errorServerMessage: string
  register: UseFormRegisterType
  errors: UseFormErrorsType
  onSubmit: () => void
}

const NewPsw: React.FC<NewPswPropsType> = (
  {isFetching, isSuccess, errorServerMessage, ...props}
) => {

  return (
    <div className={styles.newPsw}>
      <NewPswForm {...props}/>
      {isFetching && <span>...LOADING</span>}
      {!isSuccess && <div className={styles.newPsw__form_errorMessage}>{errorServerMessage}</div>}
      {isSuccess && <div className={styles.newPsw__form_successMessage}>Your password has been updated</div>}
    </div>
  )
}
export default NewPsw
