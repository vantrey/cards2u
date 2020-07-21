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
        < div className={styles.form__wrap} >
            <div className={styles.form__item} tabIndex={1} >
            <textarea
                className={styles.form__textarea}
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
            <div className={styles.tooltip}>
                <div className={styles.tooltip__wrap}>
                    <h4 className={styles.tooltip__title}>123 df dgd
                        gdfgd dsfgdfgd dg <strong className={styles.tooltip__title_strong}>{restLimit}</strong> dfsdfsdf sdfsdfsd
                    </h4>
                </div>
                <div className={styles.tooltip__arrow}></div>
            </div>
        </div>
    )
};

export default CreateCardTextarea
