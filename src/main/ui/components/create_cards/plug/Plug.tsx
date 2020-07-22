import React from 'react';
import Loader from "../../../common/loader/Loader";
import styles from "./Plug.module.css";


type PropsType = {
    isFetching: boolean
}

const Plug: React.FC<PropsType> = React.memo(({isFetching}) => {

    return (
            <div className={styles.plug__wrap}>
                {isFetching &&
                <div className={styles.plug__loader}>
					<Loader/>
                </div>}
            </div>
    )
});

export default Plug;