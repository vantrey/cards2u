import React from 'react';
import LoginForm from "./LoginForm";
import styles from "../registration/Registration.module.css";
import {ErrorsLoginType, RegisterLoginType} from "./LoginContainer";

type LoginPropsType = {
    errorServerMessage: string
    register: RegisterLoginType
    errors: ErrorsLoginType
    isFetching: boolean
    onSubmit: () => void
}


const Login: React.FC<LoginPropsType> = ({isFetching, errorServerMessage, ...props}) => {
    return <div className={styles.registration}>
        <LoginForm {...props}/>
        {isFetching && <span>...LOADING</span>}
        {errorServerMessage && <div className={styles.registration__form_errorMessage}>{errorServerMessage}</div>}

    </div>
}
export default Login
