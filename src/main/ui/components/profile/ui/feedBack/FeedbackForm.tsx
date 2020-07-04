import React from "react";
import styles from './FeedBackForm.module.css';
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import Textarea from "../../../../common/textarea/Textarea";
import {UseFormErrorsType, UseFormRegisterType} from "../../../../../types/entities";


type FeedbackFormPropsType = {
    register: UseFormRegisterType
    errors: UseFormErrorsType
    onSubmit: () => void
}


const FeedbackForm: React.FC<FeedbackFormPropsType> = ({register, errors, onSubmit}) => {

    return (
            <div className={styles.feedback__wrap}>
                <h6 className={styles.feedback__title}>
                    FEED BACK
                </h6>
                <form onSubmit={onSubmit} className={styles.feedback__form}>
                    <Input
                        register={register}
                        name='name'
                        errors={errors}
                        // type
                        title={'name'}
                    />
                    <Input
                        register={register}
                        name='email'
                        errors={errors}
                        type='email'
                        title={'email'}
                    />
                    <Textarea
                        register={register}
                        name='message'
                        errors={errors}
                        title={'message'}
                    />
                    <div >
                        <Button/>
                    </div>
                </form>

            </div>
    )
}
export default FeedbackForm;
