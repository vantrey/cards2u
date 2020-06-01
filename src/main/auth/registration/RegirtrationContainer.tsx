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
import Registration from "./Regirtration";

type FormDataType = {
  email: string
  password: string
  passwordConfirmation: string
}

const RegistrationContainer: React.FC = () => {
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
  const onSubmit = (data: {email: string, password:string}, e: {target: { reset: () => void}}) => {
    e.target.reset()
    console.log(data)
    dispatch(createUser(data.email, data.password))
  }
  if (isSuccess) return <Redirect to={LOGIN_PATH}/>
  return <Registration
    errorMessage={errorMessage}
    register={register}
    handleSubmit={handleSubmit}
    errors={errors}
    onSubmit={onSubmit}
  />
}

export default RegistrationContainer
