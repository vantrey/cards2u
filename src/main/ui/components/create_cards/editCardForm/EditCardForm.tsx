import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";


type EditCardFormType = {
    question: string
    answer: string
}

type PropsType = {
    isEditCardMode: boolean
    currentCardData: CardType | undefined
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    cardsPack_id: string
}

const EditCardForm: React.FC<PropsType> = React.memo(({
                                                            isEditCardMode,
                                                            currentCardData,
                                                            setIsEditCardMode,
                                                            cardsPack_id,
                                                        }) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset, setValue} = useForm<EditCardFormType>({
        mode: 'onBlur',

    });

    useEffect(() => {
        if (isEditCardMode) {
            setValue('question', currentCardData ? currentCardData.question : '');
            setValue('answer', currentCardData ? currentCardData.answer : '');
        }
    }, [isEditCardMode, currentCardData?.question, currentCardData?.answer]);


    const onSubmit = handleSubmit((data) => {

        if (isEditCardMode) {

            if (currentCardData) {  // if find method returned undefined
                const {_id} = currentCardData;
                dispatch(update_Card({_id, question: data.question, answer: data.answer}));
                setIsEditCardMode(false);
            }
        }

        if (!isEditCardMode) {
            dispatch(add_Card({cardsPack_id, question: data.question, answer: data.answer}));
        }
        reset();
    });

    return (
        <div>

            <form onSubmit={onSubmit}>

                    <Textarea
                        register={register}
                        name='question'
                        errors={errors}
                        placeholder='Enter your question'
                    />
                    <Textarea
                        register={register}
                        name='answer'
                        errors={errors}
                        placeholder='Enter your answer'
                    />


                <div>
                    <Button/>
                </div>
            </form>
        </div>
    )
});
export default EditCardForm;