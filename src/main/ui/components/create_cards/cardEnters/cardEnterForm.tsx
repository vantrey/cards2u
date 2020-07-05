import React from "react";
import {UseFormErrorsType, UseFormRegisterType} from "../../../../types/entities";
import Button from "../../../common/Button/Button";
import Textarea from "../../../common/textarea/Textarea";


type PropsType = {
    register: UseFormRegisterType
    errors: UseFormErrorsType
    onSubmit: () => void
}


const FeedbackForm: React.FC<PropsType> = ({register, errors, onSubmit}) => {

    return (
            <div >

                <form onSubmit={onSubmit}>

                    <Textarea
                        register={register}
                        name='question'
                        errors={errors}
                    />
                    <Textarea
                        register={register}
                        name='answer'
                        errors={errors}
                    />
                    <div >
                        <Button/>
                    </div>
                </form>

            </div>
    )
};
export default FeedbackForm;
