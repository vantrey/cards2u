import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../bll/store/store'
import {createUser} from './registrationReducer'
import {Redirect} from 'react-router-dom'
import {LOGIN_PATH} from '../../ui/components/routes/Routes'
import Registration from "./Regirtration"
import {registrationFormSchema} from './registrationFormShema'

type RegistrationFormDataType = {
  email: string
  password: string
  passwordConfirmation: string
}
export type RegisterType = ReturnType<typeof useForm>['register']
export type ErrorsType = ReturnType<typeof useForm>['errors']

const RegistrationContainer: React.FC = () => {
  const {isSuccess, errorServerMessage, isFetching} = useSelector((state: AppStateType) => state.registration)
  const dispatch = useDispatch()
  const {register, handleSubmit, errors, reset} = useForm<RegistrationFormDataType>({
    mode: 'onBlur',
    validationSchema: registrationFormSchema
  })
  const onSubmit = handleSubmit((data) => {
    dispatch(createUser(data.email, data.password))
    reset()
  })

  if (isSuccess) return <Redirect to={LOGIN_PATH}/>
  return <Registration
    errorServerMessage={errorServerMessage}
    register={register}
    errors={errors}
    onSubmit={onSubmit}
    isFetching={isFetching}
  />
}

export default RegistrationContainer
