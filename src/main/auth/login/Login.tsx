import React from 'react';
import LoginForm from "./LoginForm";
import {ErrorsLoginType, RegisterLoginType} from "./LoginContainer";

type LoginPropsType = {
    errorServerMessage: string
    register: RegisterLoginType
    errors: ErrorsLoginType
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
