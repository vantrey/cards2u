import React from "react";
import {useForm} from "react-hook-form";
import FeedbackForm from "./FeedbackForm";
import {feedbackFormSchema} from "./feedBackFormSchema";


type FeedbackFormDataType = {
    name: string
    email: string
    message: string
}


const FeedbackContainer = () => {

    const {register, handleSubmit, errors, reset} = useForm<FeedbackFormDataType>({
        mode: 'onBlur',
        validationSchema: feedbackFormSchema
    });


    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    return (
        <div>
            <FeedbackForm
                register={register}
                errors={errors}
                onSubmit={onSubmit}
            />
        </div>
    )
}
export default FeedbackContainer;
