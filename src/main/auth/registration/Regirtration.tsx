import React from 'react';
import styles from './Registration.module.css'
import * as yup from "yup";
import {useForm} from "react-hook-form";
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store/store";
import {createUser} from "./registrationReducer";
import {Redirect} from 'react-router-dom';
import {LOGIN_PATH} from "../../ui/components/routes/Routes";

type RegistrationPropsType = {
  errorMessage: string
  register: any
  handleSubmit: any
  errors: any
  onSubmit: (data: {email: string, password:string}, e: {target: { reset: () => void}}) => void
}

const Registration: React.FC<RegistrationPropsType> = (props) => {

  return <div className={styles.registration}>
    <form onSubmit={props.handleSubmit(props.onSubmit)} className={styles.registration__form}>
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
    <div className={styles.registration__form_errorMessage}>{props.errorMessage}</div>
  </div>
}

export default Registration
