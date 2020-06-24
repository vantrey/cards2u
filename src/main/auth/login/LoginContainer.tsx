import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../bll/store/store'
import {loginFormSchema} from "./loginFormShema";
import {login} from "./loginReducer";
import Login from "./Login";
import {useHistory} from "react-router";




type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    history : any
}

const LoginContainer: React.FC = () => {

    let history = useHistory();
    const {isAuth, errorServerMessage} = useSelector((state: AppStateType) => state.login)
    const dispatch = useDispatch()
    const {register, handleSubmit, errors, reset} = useForm<LoginFormDataType>({
        mode: 'onBlur',
        validationSchema: loginFormSchema
    })

    const onSubmit = handleSubmit((data) => {
        dispatch(login(data.email, data.password, data.rememberMe))
        reset()
    })

    if (isAuth) {
        history.push('/');
    }

    return <Login
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        errorServerMessage={errorServerMessage}
    />
}

export default LoginContainer
