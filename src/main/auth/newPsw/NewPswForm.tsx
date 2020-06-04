import React from 'react'
import styles from './NewPsw.module.css'
import Input from "../../ui/common/Input/Input"
import Button from "../../ui/common/Button/Button"
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";


type NewPswFormPropsType = {
  register: UseFormRegisterType
  errors: UseFormErrorsType
  onSubmit: () => void
}

const NewPswForm: React.FC<NewPswFormPropsType> = ({onSubmit, register, ...props}) => {
  return <div>
    <form onSubmit={onSubmit} className={styles.newPsw__form}>
      <Input
        register={register}
        type='password'
        name='password'
        {...props}
        placeholder='new password'
      />
      <Input
        register={register}
        type='password'
        name='passwordConfirmation'
        {...props}
        placeholder='confirm password'
      />
      <div className={styles.newPsw__form_button}>
        <Button tittle='set new password'/>
      </div>
    </form>
  </div>
}

export default NewPswForm
