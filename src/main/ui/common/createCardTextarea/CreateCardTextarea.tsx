import React from 'react';
import styles from './CreateCardTextarea.module.css'
import {UseFormErrorsType, UseFormRegisterType} from "../../../types/entities";
import warning from "../../icons/shield.svg";

type OwnPropsType = {
    name: string
    errors: UseFormErrorsType
    register: UseFormRegisterType
    restLimit: string
}
type TextareaType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type PropsType = OwnPropsType & TextareaType

const CreateCardTextarea: React.FC<PropsType> = ({
                                                     register,
                                                     errors,
                                                     name,
                                                     title,
                                                     restLimit,
                                                     ...props
                                                 }) => {

    return (
        <div className={styles.form__item}>
            <textarea
                className={styles.form__textarea}
                ref={register}
                {...props}
                name={name}
            />

            <div style={{fontFamily: 'arial'}}>{restLimit}</div>

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

export default CreateCardTextarea
