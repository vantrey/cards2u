import {AppStateType, InferActionTypes} from '../store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardType, UserFavoriteDecksType} from "../../types/entities";
import {repository} from "../../helpers/repos_localStorage/Token";

const initialState = {
    userFavoriteDecks: {} as UserFavoriteDecksType
};

type InitialStateType = typeof initialState

export const favoriteDecksReducer =
    (state: typeof initialState = initialState, action: ActionsType): InitialStateType => {
        switch (action.type) {

            case "FAVORITE_DECKS_REDUCER/SET_USER_FAVORITE_DECKS":

                return {
                    ...state,
                    userFavoriteDecks: action.userFavoriteDecks
                };

            default:
                return state
        }
    };


export const favoriteDecksActions = {
    setUserFavoriteDecks: (userFavoriteDecks: UserFavoriteDecksType) => ({
        type: "FAVORITE_DECKS_REDUCER/SET_USER_FAVORITE_DECKS", userFavoriteDecks
    } as const),
};

type ActionsType = InferActionTypes<typeof favoriteDecksActions>

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const createUserFavoriteDecks = (userId: string | null): ThunkType =>
    (dispatch: DispatchType) => {

        let userFavoriteDecks = repository.get_UserFavoriteDecksFromLS(userId);

        if (!userFavoriteDecks) {
            repository.createUserFavoriteDecks(userId);
            userFavoriteDecks = repository.get_UserFavoriteDecksFromLS(userId);
        }
        if (userFavoriteDecks) {
            dispatch(favoriteDecksActions.setUserFavoriteDecks(userFavoriteDecks));
        }
    };

export const updateUserFavoriteDecks =
    (userId: string | null, favoriteDeckId: string, deckName: string, deck: Array<CardType>): ThunkType =>
        (dispatch: DispatchType) => {

            repository.updateUserFavoriteDeck(userId, favoriteDeckId, deckName, deck);
            const updatedUserFavoriteDecks = repository.get_UserFavoriteDecksFromLS(userId);

            if (updatedUserFavoriteDecks) {
                dispatch(favoriteDecksActions.setUserFavoriteDecks(updatedUserFavoriteDecks));
            }
        };

export const delUserFavoriteDecks =
    (userId: string | null, favoriteDeckId: string): ThunkType =>
        (dispatch: DispatchType) => {

            repository.delUserFavoriteDeck(userId, favoriteDeckId);
            const updatedUserFavoriteDecks = repository.get_UserFavoriteDecksFromLS(userId);

            if (updatedUserFavoriteDecks) {
                dispatch(favoriteDecksActions.setUserFavoriteDecks(updatedUserFavoriteDecks));
            }
        };


