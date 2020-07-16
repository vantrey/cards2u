import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";
import {createDeck} from "../../../../bll/currentUserDecks/currentUserDecksReducer";
import styles from "./CreateDeckForm.module.css"
import CreateCardTextarea from "../../../common/createCardTextarea/CreateCardTextarea";
import * as yup from "yup";

type CreateDeckFormType = {
    deckName: string
}

type PropsType = {
    onIsMultiDeckChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isMultiDeck: boolean
}

const CreateDeckForm: React.FC<PropsType> = React.memo(({
                                                            onIsMultiDeckChange,
                                                            isMultiDeck,
                                                     }) => {

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        deckName: yup.string().required('⚠ please, fill up deck name'),
    });

    const {register, handleSubmit, errors, reset} = useForm<CreateDeckFormType>({
        mode: 'onBlur',
        validationSchema: schema
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
                    checked={isMultiDeck}
                    onChange={onIsMultiDeckChange}
                    id='checkbox'
                />
                <label htmlFor="checkbox"> </label>
                <span>multi answer deck</span>
            </div>

            <form onSubmit={onSubmit}>

                <CreateCardTextarea
                    register={register}
                    name='deckName'
                    errors={errors}
                    placeholder='Enter deck name'
                />

                <div>
                    <Button>Create</Button>
                </div>

            </form>
        </div>
    )
});
export default CreateDeckForm;