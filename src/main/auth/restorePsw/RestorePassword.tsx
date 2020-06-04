import React from 'react';
import styles from './RestorePassword.module.css'
import RestorePswForm from "./RestorePswForm";
import {UseFormErrorsType, UseFormRegisterType} from "../../types/entities";

type ownProps = {
    register: UseFormRegisterType
    errors: UseFormErrorsType
    messageAboutError: string
    onSubmit: () => void
    isFetching: boolean
}

const RestorePassword: React.FC<ownProps> = ({isFetching, messageAboutError, onSubmit, register, errors}) => {
    return <div className={styles.restorePsw}>
        {isFetching && <div>...Loading please wait</div>}
        <RestorePswForm
            onSubmit={onSubmit}
            errors={errors}
            register={register}/>
        {messageAboutError && <div className={styles.restorePasw_formError}>{messageAboutError}</div>}
    </div>
}
export default RestorePassword
