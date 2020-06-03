import React from 'react'
import styles from './Registration.module.css'
import {ErrorsType, RegisterType} from "./RegirtrationContainer";
import RegistrationForm from "./RegirtrationForm";

type RegistrationPropsType = {
  errorServerMessage: string
  register: RegisterType
  errors: ErrorsType
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
