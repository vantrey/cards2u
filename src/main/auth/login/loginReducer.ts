import {AppStateType, InferActionTypes} from "../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {api} from "../../dal/api";
import {repository} from "../../helpers/repos_localStorage/Token";
import {getUser, profileActions} from "../../bll/profile/profileReducer";
import {createUserFavoriteDecks} from "../../bll/favoriteDecks/favoriteDecksReducer";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";

const initialState = {
    isAuth: false,
    rememberMe: false,
    errorServerMessage: '',
    userId: null as string | null
};
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case 'LOGIN_REDUCER/LOGIN':
            return {
                ...state,
                isAuth: action.isAuth, userId: action.userId
            };

        case "LOGIN_REDUCER/LOGOUT":
            return {
                ...state,
                isAuth: false
            };

        case "LOGIN_REDUCER/SET_ERROR":
            return {
                ...state,
                errorServerMessage: action.error

            };
        default:
            return state
    }
};

const loginActions = {
    loginAuthMeSuccess: (isAuth: boolean, userId: string | null) => ({
        type: 'LOGIN_REDUCER/LOGIN', isAuth, userId
    } as const),
    logoutSuccess: () => ({
        type: 'LOGIN_REDUCER/LOGOUT',
    } as const),
    setErrorFromServer: (error: string) => ({
        type: 'LOGIN_REDUCER/SET_ERROR', error
    } as const),
};

type ActionsType = InferActionTypes<typeof loginActions> | InferActionTypes<typeof profileActions> // ??
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            const result = await api.login(email, password, rememberMe);
            dispatch(loginActions.loginAuthMeSuccess(result.data.success, result.data._id));
            repository.save_Auth_id(result.data._id);
            repository.saveToken(result.data.token, result.data.tokenDeathTime);
            dispatch(localAuthMe());
            dispatch(setIsPreventFetching(false));

        } catch (e) {
            dispatch(loginActions.setErrorFromServer(e.response.data.error));
            dispatch(loginActions.loginAuthMeSuccess(false, null));
            dispatch(setIsPreventFetching(false));
        }
    };

export const logout = (): ThunkType =>
    (dispatch: DispatchType) => {
        dispatch(loginActions.logoutSuccess());
        repository.saveToken(null, 0);
        repository.save_Auth_id(null);

        dispatch(profileActions.setUser({ // reset user data
            avatar: '',
            created: '',
            email: '',
            isAdmin: false,
            name: '',
            publicCardPacksCount: 0,
            updated: '',
            verified: false,
            _id: ''
        }));
        dispatch(profileActions.setIsSuccess(false));
    };


export const localAuthMe = (): ThunkType =>
    (dispatch: DispatchType) => {
        const token = repository.getToken();
        const userId = repository.get_Auth_id();

        dispatch(createUserFavoriteDecks(userId));

        if (token && userId) {
            dispatch(loginActions.loginAuthMeSuccess(true, userId));
            dispatch(getUser());

        } else {
            dispatch(loginActions.logoutSuccess());
        }
    };

