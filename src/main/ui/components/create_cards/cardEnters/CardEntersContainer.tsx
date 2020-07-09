import React from 'react';
import {useForm} from "react-hook-form";
import {cardEntersFormSchema} from "./cardEntersFormSchema";
import CardEntersForm from "./CardEntersForm";

type PropsType = {}

type cardEntersFormType = {
    question: string
    answer: string
}

const CardEntersContainer: React.FC<PropsType> = React.memo(({}) => {

    const {register, handleSubmit, errors, reset} = useForm<cardEntersFormType>({
        mode: 'onBlur',
        validationSchema: cardEntersFormSchema
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    return (
        <div>
            <CardEntersForm
                register={register}
                errors={errors}
                onSubmit={onSubmit}
            />
        </div>
    )
});
export default CardEntersContainer;