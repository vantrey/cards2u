import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";


const initialState = {
    isSuccess: false,
    messageAboutError: '',
    isFetchingRestorePsw: false
}

type  initialStateType = typeof initialState;

export const restorePswReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "RESTORE_PASSWORD_REDUCER/SEND_EMAIL_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess,
                messageAboutError: action.messageAboutError
            };

        case "RESTORE_PASSWORD_REDUCER/IS_FETCHING":
            return {
                ...state,
                isFetchingRestorePsw: action.isFetchingRestorePsw
            };
        default:
            return state;
    }
}


const actions = {
    sendEmail: (isSuccess: boolean, messageAboutError: string) =>
        ({type: "RESTORE_PASSWORD_REDUCER/SEND_EMAIL_SUCCESS", isSuccess, messageAboutError} as const),
    set_Fetching: (isFetchingRestorePsw: boolean) =>
        ({type: "RESTORE_PASSWORD_REDUCER/IS_FETCHING", isFetchingRestorePsw} as const)
}

type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const send_Email = (email: string, html1: string, html2: string): ThunkType =>
    async (dispatch: DispatchType, getState: () => AppStateType) => {
        try {
            dispatch(actions.set_Fetching(true));
            const res = await api.restorePsw(email, html1, html2)
            dispatch(actions.sendEmail(res.data.success, ''));
            dispatch(actions.set_Fetching(false));
        } catch (e) {
            dispatch(actions.sendEmail(false, e.response.data.error));
            dispatch(actions.set_Fetching(false));
        }
    }
