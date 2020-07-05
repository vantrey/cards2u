import React from 'react';
import styles from './Textarea.module.css'
import {UseFormErrorsType, UseFormRegisterType} from "../../../types/entities";
import warning from "../../icons/shield.svg";

type OwnPropsType = {
    name: string
    errors: UseFormErrorsType
    register: UseFormRegisterType
}
type TextareaType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type PropsType = OwnPropsType & TextareaType

const Textarea: React.FC<PropsType> = ({register, errors, name, title, ...props}) => {

    return (
        <div className={styles.form__group}>
            <textarea
                ref={register}
                {...props}
                name={name}
            />

            {errors[name] &&

            <div className={styles.form__warning_wrap}>
                <div className={styles.form__warning_icon}>
                    <img src={warning} alt="warning"/>
                </div>
                <span className={styles.form__warning_info}>{errors[name].message}</span>
            </div>
            }
        </div>
    )
};

export default Textarea
