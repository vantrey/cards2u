import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, delete_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import * as yup from "yup";
import CreateCardTextarea from "../../../common/createCardTextarea/CreateCardTextarea";
import styles from "./MultiAnswerCardForm.module.css";
import CreateCardButton from "../../../common/CreateCardButton/CreateCardButton";


type AlternativeFormType = {
    question: string
    answerRight: string
    answerFirstVariant: string
    answerSecondVariant: string
}

type PropsType = {
    isEditCardMode: boolean
    selectedCard: CardType | undefined  // will another type with 3 answers
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    cardsPack_id: string
}

const MultiAnswerCardForm: React.FC<PropsType> = React.memo(({
                                                          isEditCardMode,
                                                                 selectedCard,
                                                          setIsEditCardMode,
                                                          cardsPack_id,
                                                      }) => {

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        question: yup.string().required('⚠ please, fill up question'),
        answerRight: yup.string().required('⚠ please, fill up right answer'),
        answerFirstVariant: yup.string().required('⚠ please, fill up first variant'),
        answerSecondVariant: yup.string().required('⚠ please, fill up second variant'),
    });

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<AlternativeFormType>({
        mode: 'onBlur',
        validationSchema: schema
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


    const onSubmit = handleSubmit((data) => {

        reset();

    });

    return (
        <div className={styles.cardform__wrap}>
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formtextarea__wrap}>
            <CreateCardTextarea
                register={register}
                name='question'
                errors={errors}
                placeholder='Enter your question'
            />
            <CreateCardTextarea
                register={register}
                name='answerRight'
                errors={errors}
                placeholder='Enter right your answer'
            />
            <CreateCardTextarea
                register={register}
                name='answerFirstVariant'
                errors={errors}
                placeholder='Enter first variant of answer'
            />
            <CreateCardTextarea
                register={register}
                name='answerSecondVariant'
                errors={errors}
                placeholder='Enter second variant of answer'
            />
            </div>
            <div className={styles.formbuttons__wrap}>
                <CreateCardButton/>
            </div>
        </form>
        </div>
    )
});
export default MultiAnswerCardForm;