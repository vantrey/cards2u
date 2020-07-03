import React, {useEffect} from 'react'
import SaveDeck from "./SaveDeck";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import styles from "../../../features/users/ui/User.module.css";
import {get_Cards} from "../../../features/Cards/bll/cardsReducer";


const SaveDeckContainer: React.FC = (props) => {
        // const {pack_id} = useParams(); достает из урла
        const pack_id = '5ef06b4d97515400043923a2'
        const {cards, isFetching} = useSelector((state: AppStateType) => state.cards)
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(get_Cards(pack_id))
        }, [pack_id])

        return (
            <div className={styles.get_users_container}>
                {isFetching && <span>...LOADING</span>}
                <SaveDeck
                    isFetching={isFetching}
                    cardsPackId={pack_id}
                    cards={cards}
                />
            </div>
        );
    }
;
export default SaveDeckContainer;