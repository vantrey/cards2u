import {useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store/store";

const useLocalFetch = () => {

    const [isFetching, setIsLocalFetching] = useState<boolean>(false);
    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);

    const isLocalFetching = isPreventFetching && isFetching;

    if (!isPreventFetching) {
        setIsLocalFetching(false)
    }

    return [
        setIsLocalFetching,
        isLocalFetching
    ]
};