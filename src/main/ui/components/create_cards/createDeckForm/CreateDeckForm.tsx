import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createDeck} from "../../../../bll/currentUserDecks/currentUserDecksReducer";
import styles from "./CreateDeckForm.module.css"
import CreateCardTextarea from "../../../common/createCardTextarea/CreateCardTextarea";
import * as yup from "yup";
import CreateCardButton from "../../../common/CreateCardButton/CreateCardButton";

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
        <div className={styles.cardform__wrap}>
            <form className={styles.form}  onSubmit={onSubmit}>
                <div className={styles.formtextarea__wrap}>
                    <CreateCardTextarea
                        register={register}
                        name='deckName'
                        errors={errors}
                        placeholder='Enter deck name'
                    />
                </div>
                <div className={styles.checkBox}>
                    <input
                        className={styles.form__checkbox}
                        type='checkbox'
                        checked={isMultiDeck}
                        onChange={onIsMultiDeckChange}
                        id='checkbox1'
                    />
                    <label   className={styles.form__label} htmlFor="checkbox1"> </label>
                    <div className={styles.checkBox__span}>multi answer deck</div>
                </div>
                <div  className={styles.formbuttons__wrap}>
                    <CreateCardButton className={styles.form__button}>Create</CreateCardButton>
                </div>
            </form>
        </div>
    )
});
export default CreateDeckForm;