import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";
import {createDeck} from "../../../../bll/currentUserDecks/currentUserDecksReducer";
import styles from "./NewDeckForm.module.css"

type EditCardFormType = {
    deckName: string
}

type PropsType = {
    onIsAlternativeDeckChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isAlternativeDeck: boolean
}

const NewDeckForm: React.FC<PropsType> = React.memo(({
                                                         onIsAlternativeDeckChange,
                                                         isAlternativeDeck,
                                                     }) => {

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
        <div>

            <div className={styles.checkBox}>

                <input
                    type='checkbox'
                    checked={isAlternativeDeck}
                    onChange={onIsAlternativeDeckChange}
                    id='checkbox'
                />
                <label htmlFor="checkbox"> </label>
                <span>alternative deck</span>
            </div>

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
        </div>
    )
});
export default NewDeckForm;