import {AppStateType, InferActionTypes} from "../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {api} from "../../dal/api";
import {repository} from "../../helpers/repos_localStorage/reposetory";
import {getUser, profileActions} from "../../bll/profile/profileReducer";
import {createUserFavoriteDecks} from "../../bll/favoriteDecks/favoriteDecksReducer";
import {setIsPreventFetching} from "../../bll/preventReques/preventRequestReducer";
import {cardPacksActions} from "../../features/cardsPacks/bll/cardPacksReducer";
import {usersActions} from "../../features/users/bll/UserReducer";
import {currentUserDecksActions} from "../../bll/currentUserDecks/currentUserDecksReducer";
import {currentUserCardsActions} from "../../bll/currentUserCardsReducer/currentUserCardsReducer";

const initialState = {
    isAuth: false,
    rememberMe: false,
    errorServerMessage: '',
    userId: null as string | null,
    currentLocation: '',
    isLoginFetching: false
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

        case "LOGIN_REDUCER/CURRENT_LOCATION":
            return {
                ...state,
                currentLocation: action.currentLocation
            };

        case "LOGIN_REDUCER/SET_IS_FETCHING":
            return {
                ...state,
              isLoginFetching: action.isFetching
            };

        default:
            return state
    }
};

export const loginActions = {

    loginAuthMeSuccess: (isAuth: boolean, userId: string | null) => ({
        type: 'LOGIN_REDUCER/LOGIN', isAuth, userId
    } as const),

    logoutSuccess: () => ({
        type: 'LOGIN_REDUCER/LOGOUT',
    } as const),

    setErrorFromServer: (error: string) => ({
        type: 'LOGIN_REDUCER/SET_ERROR', error
    } as const),

    setCurrentLocation: (currentLocation: string) => ({
        type: 'LOGIN_REDUCER/CURRENT_LOCATION', currentLocation
    } as const),

    setIsFetching: (isFetching: boolean) => ({
        type: 'LOGIN_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const),
};

type ActionsType = InferActionTypes<typeof loginActions> |
    InferActionTypes<typeof profileActions> |
    InferActionTypes<typeof cardPacksActions> |
    InferActionTypes<typeof usersActions> |
    InferActionTypes<typeof currentUserDecksActions> |
    InferActionTypes<typeof currentUserCardsActions>


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: DispatchType) => {
        try {
            dispatch(setIsPreventFetching(true));
            dispatch(loginActions.setIsFetching(true));
            const result = await api.login(email, password, rememberMe);
            dispatch(loginActions.loginAuthMeSuccess(result.data.success, result.data._id));
            repository.save_Auth_id(result.data._id);
            repository.saveToken(result.data.token, result.data.tokenDeathTime);
            dispatch(getUser());
            dispatch(loginActions.setIsFetching(false));
            dispatch(setIsPreventFetching(false));

        } catch (e) {
            dispatch(loginActions.setErrorFromServer(e.response.data.error));
            dispatch(loginActions.loginAuthMeSuccess(false, null));
            dispatch(loginActions.setIsFetching(false));
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

        dispatch(cardPacksActions.getCardPacksSuccess([], 0));  // reset user Decks
        dispatch(cardPacksActions.setIsSuccess(false));

        dispatch(usersActions.getUserSuccess([])); // reset array of users

        dispatch(currentUserDecksActions.getDecksSuccess([], 0)); // reset current user decks
        dispatch(currentUserDecksActions.setIsSuccess(false));

        dispatch(createUserFavoriteDecks(null)); // reset currentUserFavoriteDeck

        dispatch(currentUserCardsActions.setIsStartMode(true));  // reset current user cards (createCards component)
        dispatch(currentUserCardsActions.set_Success(false));
    };


export const localAuthMe = (): ThunkType =>
    (dispatch: DispatchType) => {
        const token = repository.getToken();
        let userId = repository.get_Auth_id();

        if(!token) {
            userId = null;
            dispatch(loginActions.logoutSuccess());
        }
        dispatch(createUserFavoriteDecks(userId));

        if (token) {
            dispatch(loginActions.loginAuthMeSuccess(true, userId));
            dispatch(getUser());
        }
    };

