import {AppStateType, InferActionTypes} from '../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {api} from "../../dal/api";

const initialState = {
    /*    email:''*/
    isSuccess: true


}

type  initialStateType = typeof initialState;

export const restorePswReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "VALID_EMAIL":

            return {
                ...state,
                /*        email: action.email*/
                isSuccess: action.isSuccess
            };


        default:
            return state;
    }
}


const actions = {
    sendEmail: (/*email:string*/ isSuccess: boolean) => ({type: 'VALID_EMAIL', isSuccess/*email*/} as const)
}

type ActionsType = InferActionTypes<typeof actions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const send_Email = (isSuccess: boolean, emailForApi: string,
                           html1: string, html2: string): ThunkType =>
    async (dispatch: DispatchType, getState: () => AppStateType) => {
        try {
            await api.restorePsw(emailForApi, html1, html2);
            dispatch(actions.sendEmail(isSuccess));
        } catch (e) {
            console.error('error: ' + {...e});
        }
    }
