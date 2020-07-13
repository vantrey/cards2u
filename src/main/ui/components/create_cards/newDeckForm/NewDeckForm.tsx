import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";
import {createDeck} from "../../../../bll/currentUserDecks/currentUserDecksReducer";


type EditCardFormType = {
    deckName: string
}

type PropsType = {}

const NewDeckForm: React.FC<PropsType> = React.memo(({}) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset, setValue, watch} = useForm<EditCardFormType>({
        mode: 'onBlur',
    });


    const onSubmit = handleSubmit((data) => {
            dispatch(createDeck({name: data.deckName}));
            reset();
        }
    );

    return (
        <form onSubmit={onSubmit}>

            <Textarea
                register={register}
                name='deckName'
                errors={errors}
                placeholder='Enter name of your new deck'
            />

            <div>
                <Button>Create</Button>
            </div>

        </form>
    )
});
export default NewDeckForm;