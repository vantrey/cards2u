import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, delete_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";
import {deleteDeck} from "../../../../bll/currentUserDecks/currentUserDecksReducer";
import CreateCardTextarea from "../../../common/createCardTextarea/CreateCardTextarea";
import * as yup from "yup";


type CardFormType = {
    question: string
    answer: string
}

type PropsType = {
    isEditCardMode: boolean
    currentCard: CardType | undefined
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    cardsPack_id: string
    onDeleteDeck: () => void
}

const CardForm: React.FC<PropsType> = React.memo(({
                                                      isEditCardMode,
                                                      currentCard,
                                                      setIsEditCardMode,
                                                      cardsPack_id,
                                                      onDeleteDeck,
                                                  }) => {

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        question: yup.string().required('⚠ please, fill up question'),
        answer: yup.string().required('⚠ please, fill up answer'),
    });

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<CardFormType>({
        mode: 'onBlur',
        validationSchema: schema
    });


    useEffect(() => {
        if (isEditCardMode && currentCard) {
            setValue('question', currentCard.question);
            setValue('answer', currentCard.answer);
        }
        if (!isEditCardMode) {
            reset();
        }
    }, [isEditCardMode, currentCard?.question, currentCard?.answer]);


    const onSubmit = handleSubmit((data) => {

        if (isEditCardMode) {

            if (currentCard) { // to prevent undefined
                const {_id} = currentCard;

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
        <>
            <button onClick={onDeleteDeck}>del pack</button>  {/*temp for del packs*/}

            <form onSubmit={onSubmit}>

                <CreateCardTextarea
                    register={register}
                    name='question'
                    errors={errors}
                    placeholder='Enter your question'
                />
                <CreateCardTextarea
                    register={register}
                    name='answer'
                    errors={errors}
                    placeholder='Enter your answer'
                />


                <div>
                    {isEditCardMode &&
                    <Button>Change</Button>}

                    {!isEditCardMode &&
                    <Button>Create</Button>}

                </div>

            </form>
        </>
    )
});
export default CardForm;