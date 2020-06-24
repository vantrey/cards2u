import React from 'react';
import Input from "../../ui/common/Input/Input";
import Button from "../../ui/common/Button/Button";
import styles from './RestorePassword.module.css';
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type RestorePswFormType = {
    onSubmit: () => void
    register: UseFormRegisterType
    errors: UseFormErrorsType
}

const RestorePswForm: React.FC<RestorePswFormType> = ({onSubmit, register, errors}) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <Input
                register={register}
                name='email'
                onSubmit={onSubmit}
                errors={errors}
                type={'email'}
                title={'email'}
            />
            <Button/>
        </form>
    );
};

export default RestorePswForm;