import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, delete_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";


type AlternativeFormType = {
    question: string
    answerRight: string
    answerFirstVariant: string
    answerSecondVariant: string
}

type PropsType = {
    isEditCardMode: boolean
    currentCardData: CardType | undefined  // will another type with 3 answers
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    cardsPack_id: string
}

const AlternativeForm: React.FC<PropsType> = React.memo(({
                                                          isEditCardMode,
                                                          currentCardData,
                                                          setIsEditCardMode,
                                                          cardsPack_id,
                                                      }) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<AlternativeFormType>({
        mode: 'onBlur',
    });

    /*useEffect(() => {
        if (isEditCardMode && currentCardData) {
            setValue('question', currentCardData.question);
            setValue('answer', currentCardData.answer);
        }
        if (!isEditCardMode) {
            reset();
        }
    }, [isEditCardMode, currentCardData?.question, currentCardData?.answer]);*/

    const getIsEmptyFields = () => {
        return !watch().answerRight
            && !watch().answerFirstVariant
            && !watch().answerSecondVariant
            && !watch().question;
    };


    const onSubmit = handleSubmit((data) => {

        reset();

    });

    return (
        <form onSubmit={onSubmit}>

            <Textarea
                register={register}
                name='question'
                errors={errors}
                placeholder='Enter your question'
            />
            <Textarea
                register={register}
                name='answerRight'
                errors={errors}
                placeholder='Enter right your answer'
            />

            <Textarea
                register={register}
                name='answerFirstVariant'
                errors={errors}
                placeholder='Enter first variant of answer'
            />

            <Textarea
                register={register}
                name='answerSecondVariant'
                errors={errors}
                placeholder='Enter second variant of answer'
            />

            <div>
                <Button/>
            </div>

        </form>
    )
});
export default AlternativeForm;