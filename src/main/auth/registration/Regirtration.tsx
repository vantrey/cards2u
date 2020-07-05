import React from 'react'
import styles from './Registration.module.css'
import RegistrationForm from "./RegirtrationForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type RegistrationPropsType = {
  errorServerMessage: string
  register: UseFormRegisterType
  errors: UseFormErrorsType
  onSubmit: () => void
}

const Registration: React.FC<RegistrationPropsType> = ({ errorServerMessage, ...props}) => {

  return <div className={styles.registration}>
    <RegistrationForm {...props}/>
    {errorServerMessage && <div className={styles.registration__form_errorMessage}>{errorServerMessage}</div>}
  </div>
};

export default Registration
