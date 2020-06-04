import React from 'react';
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import styles from './RestorePassword.module.css'
import {ErrorType, RegisterType} from "./RestorePswContainer";


type RestorePswFormType = {
    onSubmit: () => void;
    register: RegisterType,
    errors: ErrorType

}

const RestorePswForm: React.FC<RestorePswFormType> = ({onSubmit, register, errors}) => {
    return (
        <div className={styles.wrap_restorePassword_form}>
            <label>Type in your email</label>
            <form onSubmit={onSubmit} className={styles.restorePassword_form}>
                <Input
                    register={register}
                    name='email'
                    onSubmit={onSubmit}
                    errors={errors}
                    placeholder='email'
                />
                <div className={styles.restorePassword_form_button}>
                    <Button tittle='Send Email'/>
                </div>

            </form>
        </div>
    );
};

export default RestorePswForm;