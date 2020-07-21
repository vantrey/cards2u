import {useState} from "react";
import {useDispatch} from "react-redux";

export const useIsSuccessWithNotFirstRendering = (isSuccess: boolean, setIsSuccess: (isSuccess: boolean) => void) => {

    const dispatch = useDispatch();

    const [isFirsRendering, setIsFirstRendering] = useState(true);


    if (isFirsRendering) {
        if (isSuccess) {
            dispatch(setIsSuccess(false))
        }
        setIsFirstRendering(false)
    }
    return  isSuccess && !isFirsRendering
};


