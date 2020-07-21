import React from 'react';
import Loader from "../../../common/loader/Loader";

type PropsType = {
    isFetching: boolean
}


const Plug: React.FC<PropsType> = React.memo(({isFetching}) => {

    return (
            <div>
                PLUG PLUG PLUG

                {isFetching && <Loader/>}
            </div>
    )
});
export default Plug;