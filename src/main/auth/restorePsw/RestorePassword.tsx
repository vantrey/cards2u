import React from 'react';
import styles from './RestorePassword.module.css';
import RestorePswForm from "./RestorePswForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type ownProps = {
    register: UseFormRegisterType
    errors: UseFormErrorsType
    messageAboutError: string
    onSubmit: () => void

}

const RestorePassword: React.FC<ownProps> = ({messageAboutError, onSubmit, register, errors}) => {
    return (
        <>
            <RestorePswForm
                onSubmit={onSubmit}
                errors={errors}
                register={register}/>
            {
                messageAboutError && <div className={styles.restorePasw_formError}>{messageAboutError}</div>
            }
        </>
    )
}
export default RestorePassword
