import React from 'react';
import LoginForm from "./LoginForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type LoginPropsType = {
    errorServerMessage: string
    register: UseFormRegisterType
    errors: UseFormErrorsType
    isFetching: boolean
    onSubmit: () => void
}

const Login: React.FC<LoginPropsType> = ({isFetching, errorServerMessage, ...props}) => {
    return (
        <>
            <LoginForm {...props}/>
            {isFetching && <span>...LOADING</span>}
            {errorServerMessage && <div>{errorServerMessage}</div>}
        </>
    )
}
export default Login
