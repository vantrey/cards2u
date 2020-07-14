import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";

const initialState = {
    isSuccess: false,
    messageAboutError: '',
    isRestorePswFetching: false
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

        case "RESTORE_PASSWORD_REDUCER/SET_IS_FETCHING":
            return {
                ...state,
              isRestorePswFetching: action.isFetching
            };

        default:
            return state;
    }
};

const restorePswActions = {
    sendEmail: (isSuccess: boolean, messageAboutError: string) =>
        ({type: "RESTORE_PASSWORD_REDUCER/SEND_EMAIL_SUCCESS", isSuccess, messageAboutError} as const),

    setIsFetching: (isFetching: boolean) => ({
        type: 'RESTORE_PASSWORD_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const),
};

type ActionsType = InferActionTypes<typeof restorePswActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const send_Email = (email: string, html1: string, html2: string): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(restorePswActions.setIsFetching(true));
            const res = await api.restorePsw(email, html1, html2);
            dispatch(restorePswActions.sendEmail(res.data.success, ''));
            dispatch(restorePswActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        } catch (e) {
            dispatch(restorePswActions.sendEmail(false, e.response.data.error));
            dispatch(restorePswActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));
        }
    };
