import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, delete_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
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

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<EditCardFormType>({
        mode: 'onBlur',
    });


    useEffect(() => {
        if (isEditCardMode && currentCardData) {
            setValue('question', currentCardData.question);
            setValue('answer', currentCardData.answer);
        }
        if (!isEditCardMode) {
            reset();
        }
    }, [isEditCardMode, currentCardData?.question, currentCardData?.answer]);

    const getIsEmptyFields = () => {
        return !watch().answer && !watch().question;
    };

    const onSubmit = handleSubmit((data) => {

        if (isEditCardMode) {

            if (currentCardData) { // to prevent undefined
                const {_id} = currentCardData;

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
    )
});
export default EditCardForm;