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

const Registration: React.FC<RegistrationPropsType> = (props) => {

  return <div className={styles.registration}>
    <RegistrationForm register={props.register} errors={props.errors} onSubmit={props.onSubmit}/>
    {props.isFetching && <span>...LOADING</span>}
    <div className={styles.registration__form_errorMessage}>{props.errorServerMessage}</div>
  </div>
}

export default Registration
