import React from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../bll/store/store'
import {loginFormSchema} from "./loginFormShema";
import {login} from "./loginReducer";
import Login from "./Login";
import {Redirect} from 'react-router-dom';


type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginContainer: React.FC = () => {

    const {isAuth, errorServerMessage} = useSelector((state: AppStateType) => state.login);

    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset} = useForm<LoginFormDataType>({
        mode: 'onBlur',
        validationSchema: loginFormSchema
    });

    const onSubmit = handleSubmit((data) => {
        dispatch(login(data.email, data.password, data.rememberMe));
        reset()
    });

    if (isAuth) {
        return (
            <Redirect to='/'/>
        )
    }

    return <Login
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        errorServerMessage={errorServerMessage}
    />
};

export default LoginContainer
