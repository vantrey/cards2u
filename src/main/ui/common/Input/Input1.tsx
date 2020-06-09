import React from 'react';
import styles from './Input1.module.css'
import {UseFormErrorsType, UseFormRegisterType} from "../../../types/entities";


type OwnPropsType = {
    name: string
    errors: UseFormErrorsType
    register: UseFormRegisterType
    title: string
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = OwnPropsType & InputType

const Input1: React.FC<PropsType> = ({ title,register, errors, name, ...props}) => {

    return (
        <>
            <div className={styles.form__group}>
                <input type="text" id="input"
                       required={true}
                       ref={register}
                       {...props}
                       name={name}/>
                <label className={styles.control__label} htmlFor="input">{title}</label>
                <i className={styles.mtrl__select}> </i>
            </div>
        </>
    )
}

export default Input1;
