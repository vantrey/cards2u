import React from 'react';
import styles from './Input.module.css'
import {UseFormErrorsType, UseFormRegisterType} from "../../../types/entities";

type OwnPropsType = {
    name: string
    errors: UseFormErrorsType | undefined
    register: UseFormRegisterType | undefined
    placeholder: string


}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = OwnPropsType & InputType
const Input: React.FC<PropsType> = ({register, errors, name, ...props}) => {
    let classForEl = errors?.[name] ? `${styles.input} ${styles.error}` : styles.input
    return (
        <>
            <input
                ref={register}
                {...props}
                name={name}
                className={classForEl}
            />
            {errors?.[name] && <span className={styles.errorMessage}>{errors[name].message}</span>}
        </>
    )
}

export default Input