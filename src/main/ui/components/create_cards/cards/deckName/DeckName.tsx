import React, {useCallback, useState} from "react";
import style from "./DeckName.module.css"


type PropsType = {
    cardPackName: string
    updateDeckName: (newDeckName: string) => void
    isPreventFetching: boolean
}

const DeckName: React.FC<PropsType> = React.memo(({cardPackName, updateDeckName, isPreventFetching}) => {

    const [editMode, setEditMode] = useState(false);
    const [nameValue, setNameValue] = useState('');

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.currentTarget.value);
    };

    const onSetEditMode = () => {
        setEditMode(true);
        setNameValue('');
    };

    const onCancelChangeName = () => {
        setEditMode(false);
    };

    const onUpdateDeckName = () => {
        updateDeckName(nameValue);
        setEditMode(false);
    };

    return (
        <>
            {editMode &&
            <div>
                <input
                    maxLength={20}
                    value={nameValue}
                    onChange={onChangeName}
                />
                <button disabled={!nameValue} onClick={onUpdateDeckName}>
                    apply
                </button>

                <button onClick={onCancelChangeName}>
                    cancel
                </button>

            </div>}

            {!editMode &&
            <div>
                {cardPackName}
                <button  disabled={isPreventFetching} onClick={onSetEditMode}>
                    change
                </button>
            </div>

            }
        </>
    )
});

export default DeckName