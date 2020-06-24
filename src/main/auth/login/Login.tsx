import React from 'react';
import LoginForm from "./LoginForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type LoginPropsType = {
    errorServerMessage: string
    register: UseFormRegisterType
    errors: UseFormErrorsType
    onSubmit: () => void
}

const
    Login: React.FC<LoginPropsType> = ({ errorServerMessage, ...props}) => {
    return (
        <>
            <LoginForm {...props}/>
            {errorServerMessage && <div>{errorServerMessage}</div>}
        </>
    )
}
export default Login
