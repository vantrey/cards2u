import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, delete_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";
import {deleteDeck} from "../../../../bll/currentUserDecks/currentUserDecksReducer";


type CardFormType = {
    question: string
    answer: string
}

type PropsType = {
    isEditCardMode: boolean
    currentCard: CardType | undefined
    setIsEditCardMode: React.Dispatch<React.SetStateAction<boolean>>
    cardsPack_id: string
}

const CardForm: React.FC<PropsType> = React.memo(({
                                                          isEditCardMode,
                                                          currentCard,
                                                          setIsEditCardMode,
                                                          cardsPack_id,
                                                      }) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<CardFormType>({
        mode: 'onBlur',
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

    const getIsEmptyFields = () => {
        return !watch().answer && !watch().question;
    };

    const onSubmit = handleSubmit((data) => {

        if (isEditCardMode) {

            if (currentCard) { // to prevent undefined
                const {_id} = currentCard;

                if (!getIsEmptyFields()) {
                    dispatch(update_Card({_id, question: data.question, answer: data.answer}));
                    setIsEditCardMode(false);
                }

                if (getIsEmptyFields()) {
                    dispatch(delete_Card(_id));
                    setIsEditCardMode(false);
                }
            }
        }

        if (!isEditCardMode) {
            dispatch(add_Card({cardsPack_id, question: data.question, answer: data.answer}));
        }

        reset();
    });

    return (
        <>
            <button onClick={()=> {dispatch(deleteDeck(cardsPack_id))}}>del pack</button> {/*temp for del packs*/}
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
                    {isEditCardMode && !getIsEmptyFields() &&
                    <Button>Change</Button>}

                    {!isEditCardMode &&
                    <Button>Create</Button>}

                    {isEditCardMode && getIsEmptyFields() &&
                    <Button>Delete</Button>}
                </div>

            </form>
        </>
    )
});
export default CardForm;