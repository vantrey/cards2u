import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardPackType} from "../../types/entities";
import {AppStateType, InferActionTypes} from "../store/store";
import {setIsPreventFetching} from "../preventReques/preventRequestReducer";
import {repository} from "../../helpers/repos_localStorage/Token";
import {cardPacksApi} from "../../features/cardsPacks/dal/cardPacksApi";
import {cardsApi} from "../../features/Cards/dal/сardsApi";
import {get_Cards} from "../../features/Cards/bll/cardsReducer";

const initialState = {
    currentUserDecks: [] as Array<CardPackType>,
    errorFromServer: '',
    totalDecksCount: 0,
    isSuccess: false,
    isCurrentUserDecksFetching: false
};

type InitialStateType = typeof initialState

export const currentUserDecksReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "CURRENT_USER_DECKS_REDUCER/GET_DECKS_SUCCESS":
            return {
                ...state,
                currentUserDecks: action.decks,
                totalDecksCount: action.totalDecksCount
            };

        case "CURRENT_USER_DECKS_REDUCER/CREATE_DECK_SUCCESS":
            return {
                ...state,
                currentUserDecks: [...state.currentUserDecks, action.newDeck],
            };

        case "CURRENT_USER_DECKS_REDUCER/DELETE_DECK_SUCCESS":
            return {
                ...state,
                currentUserDecks: state.currentUserDecks.filter(d => d._id !== action.deckId)
            };

        case "CURRENT_USER_DECKS_REDUCER/SET_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess
            };

        case "CURRENT_USER_DECKS_REDUCER/SET_ERROR":
            return {
                ...state,
                errorFromServer: action.error,
            };

        case "CURRENT_USER_DECKS_REDUCER/SET_IS_FETCHING":
            return {
                ...state,
                isCurrentUserDecksFetching: action.isFetching
            };

        default:
            return state
    }
};

export const currentUserDecksActions = {
    setIsSuccess: (isSuccess: boolean) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/SET_SUCCESS', isSuccess
    } as const),

    getDecksSuccess: (decks: Array<CardPackType>, totalDecksCount: number) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/GET_DECKS_SUCCESS',
        decks,
        totalDecksCount
    } as const),

    createDeckSuccess: (newDeck: CardPackType) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/CREATE_DECK_SUCCESS',
        newDeck
    } as const),

    setError: (error: string) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/SET_ERROR',
        error
    } as const),

    deleteDeckSuccess: (deckId: string) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/DELETE_DECK_SUCCESS',
        deckId
    } as const),

    setIsFetching: (isFetching: boolean) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/SET_IS_FETCHING',
        isFetching
    } as const),
};

type ActionsType = InferActionTypes<typeof currentUserDecksActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getCurrentUserDecks =
    (user_id: string | null, currentPage = 1, pageSize = 100,): ThunkType =>
        async (dispatch: DispatchType) => {
            try {
                dispatch(setIsPreventFetching(true));
                dispatch(currentUserDecksActions.setIsFetching(true));
                let token = repository.getToken();
                const response = await cardPacksApi.getPacks(token, currentPage, pageSize, user_id);
                dispatch(
                    currentUserDecksActions.getDecksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount)
                );
                repository.saveToken(response.data.token, response.data.tokenDeathTime);
                dispatch(currentUserDecksActions.setIsSuccess(true));
                dispatch(currentUserDecksActions.setIsFetching(false));
                dispatch(setIsPreventFetching(false));

            } catch (e) {
                dispatch(currentUserDecksActions.setError(e.response.data.error));
                repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
                dispatch(currentUserDecksActions.setIsSuccess(false));
                dispatch(currentUserDecksActions.setIsFetching(false));
                dispatch(setIsPreventFetching(false));
            }
        };

export const createDeck = (newCardsPack: { name: string }): ThunkType => async (dispatch: DispatchType) => {
    try {
        dispatch(setIsPreventFetching(true));
        dispatch(currentUserDecksActions.setIsFetching(true));
        let token = repository.getToken();
        let user_id = repository.get_Auth_id();
        const response = await cardPacksApi.createCardsPack(token, {...newCardsPack, user_id});
        dispatch(currentUserDecksActions.createDeckSuccess(response.data.newCardsPack));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);

        const cardsPack = response.data.newCardsPack;
        dispatch(get_Cards(cardsPack._id, cardsPack.name));
        dispatch(currentUserDecksActions.setIsFetching(false));
        dispatch(setIsPreventFetching(false));

    } catch (e) {
        dispatch(currentUserDecksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(currentUserDecksActions.setIsFetching(false));
        dispatch(setIsPreventFetching(false));
    }
};

export const deleteDeck = (cardsPackId: string): ThunkType => async (dispatch: DispatchType) => {
    try {
        dispatch(setIsPreventFetching(true));
        dispatch(currentUserDecksActions.setIsFetching(true));
        let token = repository.getToken();
        const response = await cardPacksApi.deleteCardsPack(token, cardsPackId);
        dispatch(currentUserDecksActions.deleteDeckSuccess(response.data.deletedCardsPack._id));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        dispatch(currentUserDecksActions.setIsFetching(false));
        dispatch(setIsPreventFetching(false));

    } catch (e) {
        dispatch(currentUserDecksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        dispatch(currentUserDecksActions.setIsFetching(false));
        dispatch(setIsPreventFetching(false));
    }
};
