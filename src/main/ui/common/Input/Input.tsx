import React from 'react';
import styles from './Input.module.css'
import {UseFormErrorsType, UseFormRegisterType} from "../../../types/entities";
import warning from "../../icons/shield.svg";

type OwnPropsType = {
    name: string
    errors: UseFormErrorsType
    register: UseFormRegisterType
    // onMouseOut : ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = OwnPropsType & InputType
const Input: React.FC<PropsType> = ({register, errors, name, title, type, ...props}) => {

    return (
        <div className={styles.form__group}>
            <input type={type} id="input"
                   ref={register}
                   {...props}
                   name={name}
            />
            <label className={styles.control__label} htmlFor="input">{title}</label>
            <i className={styles.mtrl__select}> </i>

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
}

export default Input
