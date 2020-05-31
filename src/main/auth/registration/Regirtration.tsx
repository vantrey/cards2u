import React from 'react';
import styles from './Registration.module.css'
import * as yup from "yup";
import {useForm} from "react-hook-form";
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";

const Registration = () => {
  const registrationFormSchema = yup.object().shape({
    email: yup.string().required('⚠ please, fill up your email')
      .email('⚠ please, fill up a valid email address'),
    password: yup.string().required('⚠ please, fill up your password'),
    passwordConfirmation: yup.string()
      .oneOf([yup.ref('password'), undefined], 'password mismatch')
  })
  const {register, handleSubmit, errors} = useForm({mode: 'onBlur', validationSchema: registrationFormSchema});
  const onSubmit = (data: any, e: any) => {
    e.target.reset()
    console.log(data)
  }
  return  <div className={styles.registration}>
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button tittle='sign up free'/>
    </form>
  </div>
}
export default Registration
