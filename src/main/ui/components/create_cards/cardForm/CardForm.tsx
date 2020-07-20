import React, {useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, delete_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import styles from "./CardForm.module.css";
import CreateCardTextarea from "../../../common/createCardTextarea/CreateCardTextarea";
import * as yup from "yup";
import CreateCardButton from "../../../common/CreateCardButton/CreateCardButton";
import {getRestLimit} from "../../../../helpers/restLimit/restLimit";
import {
    addCurrentUserCard,
    updateCurrentUserCard
} from "../../../../bll/currentUserCardsReducer/currentUserCardsReducer";


type CardFormType = {
    question: string
    answer: string
}

type PropsType = {
    isEditCardMode: boolean
    selectedCard: CardType | undefined
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    cardsPack_id: string
}

const CardForm: React.FC<PropsType> = React.memo(({
                                                      isEditCardMode,
                                                      selectedCard,
                                                      setIsEditCardMode,
                                                      cardsPack_id,

                                                  }) => {

    const dispatch = useDispatch();
    const questionMaxLength = 220;
    const answerMaxLength = 190;

    const schema = yup.object().shape({
        question: yup.string().required('⚠ please, fill up question')
            .max(questionMaxLength, `Limit ${questionMaxLength}`),
        answer: yup.string().required('⚠ please, fill up answer')
            .max(answerMaxLength, `Limit ${questionMaxLength}`),
    });

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<CardFormType>({
        mode: 'onChange',
        validationSchema: schema
    });

    const questionRestLimit = useMemo(() => {
        return getRestLimit(questionMaxLength, watch().question)
    }, [questionMaxLength, watch().question]);

    const answerRestLimit = useMemo(() => {
        return getRestLimit(answerMaxLength, watch().answer)
    }, [answerMaxLength, watch().answer]);

    useEffect(() => {
        if (isEditCardMode && selectedCard) {
            setValue('question', selectedCard.question);
            setValue('answer', selectedCard.answer);
        }
        if (!isEditCardMode) {
            reset();
        }
    }, [isEditCardMode, selectedCard?.question, selectedCard?.answer]);

    const onSubmit = handleSubmit((data) => {

        if (isEditCardMode) {

            if (selectedCard) { // to prevent undefined
                const {_id} = selectedCard;

                dispatch(updateCurrentUserCard({_id, question: data.question, answer: data.answer}));
                setIsEditCardMode(false);
            }
        }

        if (!isEditCardMode) {
            dispatch(addCurrentUserCard({cardsPack_id, question: data.question, answer: data.answer}));
        }

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
                        placeholder='enter your question'
                        restLimit={questionRestLimit}
                    />
                    <CreateCardTextarea
                        register={register}
                        name='answer'
                        errors={errors}
                        placeholder='enter your answer'
                        restLimit={answerRestLimit}
                    />
                </div>
                <div className={styles.formbuttons__wrap}>
                    {isEditCardMode &&
                    <CreateCardButton className={styles.form__button}>Change</CreateCardButton>}

                    {!isEditCardMode &&
                    <CreateCardButton className={styles.form__button}>Create</CreateCardButton>}
                </div>
            </form>
        </div>
    )
});
export default CardForm;