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
    return <div>
        <LoginForm {...props}/>
        {isFetching && <span>...LOADING</span>}
        {errorServerMessage && <div>{errorServerMessage}</div>}
    </div>
}
export default Login
