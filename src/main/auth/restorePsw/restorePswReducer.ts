import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";

const initialState = {
    isSuccess: false,
    messageAboutError: '',
};

type  initialStateType = typeof initialState;

export const restorePswReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "RESTORE_PASSWORD_REDUCER/SEND_EMAIL_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess,
                messageAboutError: action.messageAboutError
            };

        default:
            return state;
    }
};

const actions = {
    sendEmail: (isSuccess: boolean, messageAboutError: string) =>
        ({type: "RESTORE_PASSWORD_REDUCER/SEND_EMAIL_SUCCESS", isSuccess, messageAboutError} as const),
};

type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const send_Email = (email: string, html1: string, html2: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            const res = await api.restorePsw(email, html1, html2);
            dispatch(actions.sendEmail(res.data.success, ''));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            dispatch(actions.sendEmail(false, e.response.data.error));
            dispatch(setIsPreventFetching(false));
        }
    };
