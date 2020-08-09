import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardPackType} from "../../types/entities";
import {AppStateType, InferActionTypes} from "../store/store";
import {setIsPreventFetching} from "../preventReques/preventRequestReducer";
import {repository} from "../../helpers/repos_localStorage/reposetory";
import {cardPacksApi} from "../../features/cardsPacks/dal/cardPacksApi";
import {currentUserCardsActions, getCurrentUserCards} from "../currentUserCardsReducer/currentUserCardsReducer";
import {put, call, takeLatest, all} from "redux-saga/effects"

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
                currentUserDecks: [action.newDeck, ...state.currentUserDecks],
            };

        case "CURRENT_USER_DECKS_REDUCER/DELETE_DECK_SUCCESS":
            return {
                ...state,
                currentUserDecks: state.currentUserDecks.filter(d => d._id !== action.deckId)
            };

        case "CURRENT_USER_DECKS_REDUCER/UPDATE_DECK_SUCCESS":
            return {
                ...state,
                currentUserDecks: state.currentUserDecks.map(d => {
                    if (d._id === action.updatedDeck._id) {
                        return action.updatedDeck
                    }
                    return d
                })
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

    updateDeckSuccess: (updatedDeck: CardPackType) => ({
        type: 'CURRENT_USER_DECKS_REDUCER/UPDATE_DECK_SUCCESS',
        updatedDeck
    } as const),
};

type ActionsType = InferActionTypes<typeof currentUserDecksActions> |
    InferActionTypes<typeof currentUserCardsActions>

export const getCurrentUserDecks =
    (user_id: string | null, currentPage = 1, pageSize = 100,) => ({
        type: "CURRENT_USER_DECKS_REDUCER/GET_DECKS",
        user_id,
        currentPage,
        pageSize
    })

export const createDeck = (newCardsPack: { name: string }) => ({
    type: "CURRENT_USER_DECKS_REDUCER/CREATE_DECK",
    newCardsPack
})

export const deleteDeck = (cardsPackId: string) => ({
    type: "CURRENT_USER_DECKS_REDUCER/DELETE_DECK",
    cardsPackId
})

export const updateDeck = (cardsPackId: string, name: string) => ({
    type: "CURRENT_USER_DECKS_REDUCER/UPDATE_DECK",
    cardsPackId,
    name
})
//@ts-ignore
export const createDeckSaga = function* ({newCardsPack}) {
    try {
        // @ts-ignore
        yield put(setIsPreventFetching(true))
        yield put(currentUserDecksActions.setIsFetching(true))
        let token = repository.getToken();
        let user_id = repository.get_Auth_id();
        const response = yield call(cardPacksApi.createCardsPack, token, {...newCardsPack, user_id})
        yield put(currentUserDecksActions.createDeckSuccess(response.data.newCardsPack));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        const cardsPack = response.data.newCardsPack;
        //@ts-ignore
        yield put(getCurrentUserCards(cardsPack._id, cardsPack.name));
        yield put(currentUserDecksActions.setIsFetching(false));
        //@ts-ignore
        yield put(setIsPreventFetching(false));

    } catch (e) {
        yield put(currentUserDecksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsFetching(false));
        //@ts-ignore
        yield put(setIsPreventFetching(false));
    }
};

//@ts-ignore
export const deleteDeckSaga = function* ({cardsPackId}) {
    try {
        // @ts-ignore
        yield put(setIsPreventFetching(true))
        yield put(currentUserDecksActions.setIsFetching(true))
        let token = repository.getToken();
        const response = yield call(cardPacksApi.deleteCardsPack, token, cardsPackId);
        yield put(currentUserDecksActions.deleteDeckSuccess(response.data.deletedCardsPack._id));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsFetching(false));
        // @ts-ignore
        yield put(setIsPreventFetching(false));

    } catch (e) {
        yield put(currentUserDecksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsFetching(false));
        // @ts-ignore
        yield put(setIsPreventFetching(false));
    }
};
//@ts-ignore
export const updateDeckSaga = function* ({cardsPackId, name}) {
    try {
        // @ts-ignore
        yield put(setIsPreventFetching(true))
        yield put(currentUserDecksActions.setIsFetching(true))
        let token = repository.getToken()
        const response = yield call(cardPacksApi.updateCardsPack, token, {_id: cardsPackId, name});
        yield put(currentUserDecksActions.updateDeckSuccess(response.data.updatedCardsPack));
        yield put(currentUserCardsActions.setCards(response.data.updatedCardsPack.name, response.data.updatedCardsPack._id));
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsFetching(false));
        //@ts-ignore
        yield put(setIsPreventFetching(false));

    } catch (e) {
        yield put(currentUserDecksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsFetching(false));
        // @ts-ignore
        yield put(setIsPreventFetching(false));
    }

};

// @ts-ignore
const getCurrentUserDecksSaga = function* ({currentPage, pageSize, user_id}) {
    try {
        // @ts-ignore
        yield put(setIsPreventFetching(true))
        yield put(currentUserDecksActions.setIsFetching(true))
        let token = repository.getToken();
        // @ts-ignore
        const response = yield call(cardPacksApi.getPacks, token, currentPage, pageSize, user_id)
        yield put(currentUserDecksActions.getDecksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount))
        repository.saveToken(response.data.token, response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsSuccess(true))
        yield put(currentUserDecksActions.setIsFetching(false))
        //@ts-ignore
        yield put(setIsPreventFetching(false))

    } catch (e) {
        yield put(currentUserDecksActions.setError(e.response.data.error));
        repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        yield put(currentUserDecksActions.setIsSuccess(false));
        yield put(currentUserDecksActions.setIsFetching(false));
        //@ts-ignore
        yield put(setIsPreventFetching(false));
    }
}

const saga = function* () {
    //@ts-ignore
    yield takeLatest("CURRENT_USER_DECKS_REDUCER/GET_DECKS", getCurrentUserDecksSaga)
    //@ts-ignore
    yield takeLatest("CURRENT_USER_DECKS_REDUCER/CREATE_DECK", createDeckSaga)
    //@ts-ignore
    yield takeLatest("CURRENT_USER_DECKS_REDUCER/DELETE_DECK", deleteDeckSaga)
    //@ts-ignore
    yield takeLatest("CURRENT_USER_DECKS_REDUCER/UPDATE_DECK", updateDeckSaga)


}

export const allUserDecksSagas = function* () {
    yield all([
        saga()
    ])
}
