import React, {useState} from "react";
import styles from "./DeckName.module.css"


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

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            onUpdateDeckName();
        }
        if (e.keyCode === 27) {
            setEditMode(false);
        }
    }

    return (
        <>
            {editMode &&
            <>
                <input
                    className={styles.deckname__input}
                    maxLength={20}
                    value={nameValue}
                    onChange={onChangeName}
                    autoFocus={true}
                    onKeyDown={onKeyDown}
                />
                <div className={styles.deckname__buttons}>
                    <button className={styles.deckname__button}
                            disabled={!nameValue} onClick={onUpdateDeckName}>
                        apply
                    </button>
                    <button className={styles.deckname__button}
                            onClick={onCancelChangeName}>
                        cancel
                    </button>
                </div>
            </>
            }

            {!editMode &&
            <>
                <h5 className={styles.deckname__title}>
                    {cardPackName}
                </h5>
                <div className={styles.deckname__buttons}>
                    <button className={styles.deckname__button_change}
                            disabled={isPreventFetching} onClick={onSetEditMode}>
                        change
                    </button>
                </div>
            </>
            }
        </>
    )
});

export default DeckName