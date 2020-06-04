import React from 'react'
import styles from './Registration.module.css'
import Input from "../../ui/common/Input/Input"
import Button from "../../ui/common/Button/Button"
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";


type RegistrationPropsType = {
  register: UseFormRegisterType
  errors: UseFormErrorsType
  onSubmit: () => void
}

const RegistrationForm: React.FC<RegistrationPropsType> = ({onSubmit, register, ...props}) => {
  return <div>
    <form onSubmit={onSubmit} className={styles.registration__form}>
      <Input
        register={register}
        name='email'
        {...props}
        placeholder='email'
      />
      <Input
        register={register}
        type='password'
        name='password'
        {...props}
        placeholder='password'
      />
      <Input
        register={register}
        type='password'
        name='passwordConfirmation'
        {...props}
        placeholder='confirm password'
      />
      <div className={styles.registration__form_button}>
        <Button tittle='sign up free'/>
      </div>
    </form>
  </div>
}

export default RegistrationForm
