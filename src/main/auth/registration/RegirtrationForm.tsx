import React from 'react'
import styles from './Registration.module.css'
import Input from "../../ui/common/Input/Input"
import Button from "../../ui/common/Button/Button"
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";


type RegistrationFormPropsType = {
  register: UseFormRegisterType
  errors: UseFormErrorsType
  onSubmit: () => void
}

const RegistrationForm: React.FC<RegistrationFormPropsType> = ({onSubmit, register, ...props}) => {
  return <div>
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        register={register}
        name='email'
        {...props}
        type='email'
        title={'email'}
      />
      <Input
        register={register}
        type='password'
        name='password'
        {...props}
        title={'password'}
      />
      <Input
        register={register}
        type='password'
        name='passwordConfirmation'
        {...props}
        title={'password'}
      />
        <Button/>
    </form>
  </div>
}

export default RegistrationForm
