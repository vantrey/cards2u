import React from 'react';
import styles from './Login.module.css'
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type LoginFormPropsType = {
    register: UseFormRegisterType
    errors: UseFormErrorsType
    onSubmit: () => void
}
const LoginForm: React.FC<LoginFormPropsType> = ({onSubmit, register, ...props}) => {

    return <div className={styles.login__form}>
        <form onSubmit={onSubmit} className={styles.form}>
                <Input
                    register={register}
                    name='email'
                    {...props}
                    placeholder='email'
                />
                <Input
                    register={register}
                    type='password'
                    name='password'
                    {...props}
                    placeholder='password'
                />
                <Input
                    register={register}
                    type='checkbox'
                    name='rememberMe'
                    {...props}
                    placeholder='confirm password'
                />RememberMe
                <div className={styles.login__form_button}>
                    <Button tittle='sign in'/>
                </div>
        </form>
    </div>
}
export default LoginForm