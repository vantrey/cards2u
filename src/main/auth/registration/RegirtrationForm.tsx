import React from 'react'
import styles from './Registration.module.css'
import Input from "../../ui/common/Input/Input"
import Button from "../../ui/common/Button/Button"
import {ErrorsType, RegisterType} from "./RegirtrationContainer";


type RegistrationPropsType = {
  register: RegisterType
  errors: ErrorsType
  onSubmit: () => void
}

const RegistrationForm: React.FC<RegistrationPropsType> = (props) => {
  return <div>
    <form onSubmit={props.onSubmit} className={styles.registration__form}>
      <Input
        name='email'
        register={props.register}
        error={props.errors.email}
        placeholder='email'
      />
      <Input
        type='password'
        name='password'
        register={props.register}
        error={props.errors.password}
        placeholder='password'
      />
      <Input
        type='password'
        name='passwordConfirmation'
        register={props.register}
        error={props.errors.passwordConfirmation}
        placeholder='confirm password'
      />
      <div className={styles.registration__form_button}>
        <Button tittle='sign up free'/>
      </div>
    </form>
  </div>
}

export default RegistrationForm
