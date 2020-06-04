import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import NewPsw from "./NewPsw";
import {newPswFormSchema} from "./newPswFormShema";
import {AppStateType} from "../../bll/store/store";
import {setNewPsw} from "./newPswReducer";
import { useParams } from 'react-router-dom';

type NewPswFormDataType = {
  password: string
  passwordConfirmation: string
}

const NewPswContainer: React.FC = () => {
  const {isSuccess, errorServerMessage, isFetching} = useSelector((state: AppStateType) => state.newPsw)
  const dispatch = useDispatch()
  const {resetPswToken} = useParams()
  const {register, handleSubmit, errors, reset} = useForm<NewPswFormDataType>({
    mode: 'onBlur',
    validationSchema: newPswFormSchema
  })
  const onSubmit = handleSubmit((data) => {
    dispatch(setNewPsw(resetPswToken, data.password))
    reset()
  })

  return (
    <NewPsw
      isSuccess={isSuccess}
      isFetching={isFetching}
      errorServerMessage={errorServerMessage}
      register={register}
      errors={errors}
      onSubmit={onSubmit}
    />
  )
}

export default NewPswContainer
