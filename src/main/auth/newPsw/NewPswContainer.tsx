import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import NewPsw from "./NewPsw";
import {newPswFormSchema} from "./newPswFormShema";
import {AppStateType} from "../../bll/store/store";
import {setNewPsw} from "./newPswReducer";
import {useParams, Redirect} from 'react-router-dom';
import {SET_NEW_PSW__PATH} from "../../ui/components/routes/FormRoutes";

type NewPswFormDataType = {
  password: string
  passwordConfirmation: string
}

const NewPswContainer: React.FC = () => {

  const {isSuccess, errorServerMessage} = useSelector((state: AppStateType) => state.newPsw);
  const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);
  const [successWithTiming, setSuccessWithTiming] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setSuccessWithTiming(true)
      }, 1000)
    }
  }, [isSuccess]);

  const dispatch = useDispatch();
  const {resetPswToken} = useParams();
  const {register, handleSubmit, errors, reset} = useForm<NewPswFormDataType>({
    mode: 'onBlur',
    validationSchema: newPswFormSchema
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setNewPsw(resetPswToken, data.password));
    reset()
  });

  if (successWithTiming) return <Redirect to={SET_NEW_PSW__PATH}/>;
  return (
    <NewPsw
      isSuccess={isSuccess}
      isFetching={isPreventFetching}
      errorServerMessage={errorServerMessage}
      register={register}
      errors={errors}
      onSubmit={onSubmit}
    />
  )
};

export default NewPswContainer
