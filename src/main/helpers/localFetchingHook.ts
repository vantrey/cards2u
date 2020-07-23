import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store/store";

export const useLocalFetch = () => {
    const [isFetching, setIsLocalFetching] = useState<boolean>(false);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);

    const isLocalFetching = isFetching && isPreventFetching;

    useEffect(() => {
        if (!isPreventFetching) {
            setIsLocalFetching(false)
        }
    }, [isPreventFetching]);

    return {
        setIsLocalFetching,
        isLocalFetching
    }
};