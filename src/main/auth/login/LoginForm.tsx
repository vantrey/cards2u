import React from 'react';
import styles from './Login.module.css'
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";
import Checkbox from "../../ui/common/checkbox/Checkbox";

type LoginFormPropsType = {
    register: UseFormRegisterType
    errors: UseFormErrorsType
    onSubmit: () => void
}
const LoginForm: React.FC<LoginFormPropsType> = ({onSubmit, register, ...props}) => {

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <Input
                register={register}
                name='email'
                {...props}
                title={'email'}
                type={'email'}
            />
            <Input
                register={register}
                name='password'
                {...props}
                title={'password'}
                type={'password'}
            />
            <Checkbox/>
            <Button/>
        </form>
    )
}
export default LoginForm