import {AppStateType, InferActionTypes} from '../../../../bll/store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {UserType} from "../../../../types/entities";
import {repository} from "../../../../helpers/repos_localStorage/Token";
import {api} from "../../../../dal/api";

const initialState = {
    isSuccess: false,
    errorServerMessage: '',
    isFetching: false,
    user: {
        avatar: '',
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        updated: '',
        verified: false,
        _id: ''
    } as UserType
}

type InitialStateType = typeof initialState

export const profileReducer = (state: typeof initialState = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "PROFILE_REDUCER/SET_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess
            }

        case "PROFILE_REDUCER/SET_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        case "PROFILE_REDUCER/SET_ERROR":
            return {
                ...state,
                errorServerMessage: action.error
            }

        case "PROFILE_REDUCER/SET_USER_SUCCESS":
            return {
                ...state,
                user: action.user
            }


        default:
            return state
    }
}

export const profileActions = {
    setIsSuccess: (isSuccess: boolean) => ({type: "PROFILE_REDUCER/SET_SUCCESS", isSuccess} as const),
    setIsFetching: (isFetching: boolean) => ({type: 'PROFILE_REDUCER/SET_FETCHING', isFetching} as const),
    setErrorFromServer: (error: string) => ({type: 'PROFILE_REDUCER/SET_ERROR', error} as const),
    setUser: (user: UserType) => ({type: 'PROFILE_REDUCER/SET_USER_SUCCESS', user} as const),
}
type ActionsType = InferActionTypes<typeof profileActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getUser = (): ThunkType => async (dispatch: DispatchType, getState: () => AppStateType) => {
    try {

        const token = repository.getToken();
        const userId = getState().login.userId;
        let userFromLs: UserType | null = null;

        if (userId) {
            userFromLs = repository.get_UserFromLS(userId);
        }

        if (userFromLs) {
            dispatch(profileActions.setUser(userFromLs));

        } else {
            dispatch(profileActions.setIsFetching(true));
            const res = await api.getUser(token, userId);// userId & token can be null -> server will response error
            dispatch(profileActions.setUser(res.data.user));
            repository.save_UserToLS(res.data.user);
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
            dispatch(profileActions.setIsFetching(false));
        }
        dispatch(profileActions.setIsSuccess(true));

    } catch (e) {
        dispatch(profileActions.setErrorFromServer(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(profileActions.setIsFetching(false));
    }
};
export const updateUser = (name: string, avatar: string | null = null): ThunkType => async (dispatch: DispatchType) => {
    try {
        const token = repository.getToken();
        dispatch(profileActions.setIsFetching(true));
        const res = await api.updateUser(token, name, avatar);
        dispatch(profileActions.setUser(res.data.updatedUser));
        repository.saveToken(res.data.token, res.data.tokenDeathTime);
        repository.save_UserToLS(res.data.updatedUser);
        dispatch(profileActions.setIsFetching(false));
    } catch (e) {
        dispatch(profileActions.setErrorFromServer(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(profileActions.setIsFetching(false));
    }
};