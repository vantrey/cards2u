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

type FormDataType = {
  email: string
  password: string
  passwordConfirmation: string
}

const Registration: React.FC = () => {
  const {isSuccess, errorMessage} = useSelector((state: AppStateType) => state.registration)
  const dispatch = useDispatch()
  const registrationFormSchema = yup.object().shape({
    email: yup.string().required('⚠ please, fill up your email')
      .email('⚠ please, fill up a valid email address'),
    password: yup.string().required('⚠ please, fill up your password')
      .min(8, `password has to be at least ${8} characters long.`),
    passwordConfirmation: yup.string()
      .oneOf([yup.ref('password'), undefined], 'password mismatch')
  })
  const {register, handleSubmit, errors} = useForm({mode: 'onBlur', validationSchema: registrationFormSchema});
  const onSubmit = (data: any, e: any) => {
    e.target.reset()
    console.log(data)
    dispatch(createUser(data.email, data.password))
  }
  if (isSuccess) return <Redirect to={LOGIN_PATH}/>
  return <div className={styles.registration}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registration__form}>
      <Input
        name='email'
        register={register}
        error={errors.email}
        placeholder='email'
      />
      <Input
        type='password'
        name='password'
        register={register}
        error={errors.password}
        placeholder='password'
      />
      <Input
        type='password'
        name='passwordConfirmation'
        register={register}
        error={errors.passwordConfirmation}
        placeholder='confirm password'
      />
      <div className={styles.registration__form_button}>
        <Button tittle='sign up free'/>
      </div>
    </form>
    <div className={styles.registration__form_errorMessage}>{errorMessage}</div>
  </div>
}

export default Registration
