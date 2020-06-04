import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import NewPsw from "./NewPsw";
import {newPswFormSchema} from "./newPswFormShema";

type NewPswFormDataType = {
  email: string
  password: string
  passwordConfirmation: string
}

const NewPswContainer: React.FC = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit, errors, reset} = useForm<NewPswFormDataType>({
    mode: 'onBlur',
    validationSchema: newPswFormSchema
  })
  const onSubmit = handleSubmit((data) => {

    reset()
  })

  return <NewPsw
    register={register}
    errors={errors}
    onSubmit={onSubmit}
  />
}

export default NewPswContainer
