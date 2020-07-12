import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";


type CreateNewDeckFormType = {
    deckName: string
}

type PropsType = {

}

const CreateNewDeckForm: React.FC<PropsType> = React.memo(({

                                                        }) => {

    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset} = useForm<CreateNewDeckFormType>({
        mode: 'onBlur',

    });


    const onSubmit = handleSubmit((data) => {

        reset();
    });

    return (
        <div>

            <form onSubmit={onSubmit}>

                    <Textarea
                        register={register}
                        name='deckName'
                        errors={errors}
                        placeholder='Enter new deck name'
                    />

                <div>
                    <Button/>
                </div>
            </form>
        </div>
    )
});
export default CreateNewDeckForm;