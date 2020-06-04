import React from 'react'
import styles from './Registration.module.css'
import RegistrationForm from "./RegirtrationForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type RegistrationPropsType = {
  errorServerMessage: string
  register: UseFormRegisterType
  errors: UseFormErrorsType
  isFetching: boolean
  onSubmit: () => void
}

const Registration: React.FC<RegistrationPropsType> = ({isFetching, errorServerMessage, ...props}) => {

  return <div className={styles.registration}>
    <RegistrationForm {...props}/>
    {isFetching && <span>...LOADING</span>}
    {errorServerMessage && <div className={styles.registration__form_errorMessage}>{errorServerMessage}</div>}
  </div>
}

export default Registration
