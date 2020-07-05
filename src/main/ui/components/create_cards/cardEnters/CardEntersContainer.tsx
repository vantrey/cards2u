import React from 'react';
import {useForm} from "react-hook-form";
import {cardEntersFormSchema} from "./cardEntersFormSchema";

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



        </div>
    )
});
export default CardEntersContainer;