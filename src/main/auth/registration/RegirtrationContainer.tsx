import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../bll/store/store'
import {actions, createUser} from './registrationReducer'
import {Redirect} from 'react-router-dom'

import Registration from "./Regirtration"
import {registrationFormSchema} from './registrationFormShema'
import { LOGIN_PATH } from '../../ui/components/routes/FormRoutes';

type RegistrationFormDataType = {
  email: string
  password: string
  passwordConfirmation: string
}

const RegistrationContainer: React.FC = () => {
  const [isFirsRendering, setIsFirstRendering] = useState(true)
  const {isSuccess, errorServerMessage} = useSelector((state: AppStateType) => state.registration)
  const dispatch = useDispatch()
  const {register, handleSubmit, errors, reset} = useForm<RegistrationFormDataType>({
    mode: 'onBlur',
    validationSchema: registrationFormSchema
  })
  const onSubmit = handleSubmit((data) => {
    dispatch(createUser(data.email, data.password))
    reset()
  })
  if (isFirsRendering) {
    if (isSuccess) {
      dispatch(actions.setIsRegistrationSuccess(false))
    }
    setIsFirstRendering(false)
  }
  if (isSuccess && !isFirsRendering) return <Redirect to={LOGIN_PATH}/>
  return (
    <Registration
      errorServerMessage={errorServerMessage}
      register={register}
      errors={errors}
      onSubmit={onSubmit}
    />
  )
}

export default RegistrationContainer
