import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CardType} from "../../../../types/entities";
import {useDispatch} from "react-redux";
import {add_Card, update_Card} from "../../../../features/Cards/bll/cardsReducer";
import Textarea from "../../../common/textarea/Textarea";
import Button from "../../../common/Button/Button";


type PropsType = {
    onModeSetterClick: (e: React.MouseEvent<HTMLDivElement>) => void
    currentMode: string
}

const ModeSetter: React.FC<PropsType> = React.memo(({
                                                        children,
                                                        onModeSetterClick,
                                                        currentMode
                                                    }) => {


    return (

        <div onClick={onModeSetterClick} id={currentMode}>
            {children}
        </div>
    )
});
export default ModeSetter;