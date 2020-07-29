import {AppStateType, InferActionTypes} from '../store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CardType, GameType, NewCardGradeType, UserFavoriteDecksType, UserFavoriteDeckType} from "../../types/entities";
import {repository} from "../../helpers/repos_localStorage/reposetory";

import {batch} from "react-redux";
import {getCard} from "../../helpers/getCard/getCard";

const initialState = {
    userFavoriteDecks: {} as UserFavoriteDecksType,
    currentFavDeck: {} as UserFavoriteDeckType,
    currentFavCard: {} as CardType,
    isFireworks: false, // game stop
};

type InitialStateType = typeof initialState

export const favoriteDecksReducer =
    (state = initialState, action: ActionsType): InitialStateType => {
        switch (action.type) {

            case "FAVORITE_DECKS_REDUCER/SET_USER_FAVORITE_DECKS":

                return {
                    ...state,
                    userFavoriteDecks: action.userFavoriteDecks
                };

            case "FAVORITE_DECKS_REDUCER/SET_DEFAULT_FAV_DECK":
                return {
                    ...state,
                    currentFavDeck: action.deck
                }

            case "FAVORITE_DECKS_REDUCER/SET_CURRENT_FAV_DECK":
                const currentFavDeck = state.userFavoriteDecks.favoriteDecks.find(
                    d => d.favoriteDeckId === action.favoriteDeckId
                )

                if (currentFavDeck) {
                    return {
                        ...state,
                        currentFavDeck: currentFavDeck
                    }
                }
                return state

            case "FAVORITE_DECKS_REDUCER/SET_CURRENT_FAV_CARD":
                return {
                    ...state,
                    currentFavCard: action.card
                }

            case "FAVORITE_DECKS_REDUCER/SET_GRADE_SUCCESS":
                return {
                    ...state,
                    currentFavDeck: {
                        ...state.currentFavDeck,
                        deck: state.currentFavDeck.deck.map(card => {
                            if (action.newCardGrade._id === card._id) {
                                return {...card, grade: action.newCardGrade.grade, shots: action.newCardGrade.shots}
                            }
                            return card
                        })
                    }
                }

            case "FAVORITE_DECKS_REDUCER/SET_IS_FIREWORKS":
                return {
                    ...state,
                    isFireworks: action.isFireworks
                }

            default:
                return state
        }
    };


export const favoriteDecksActions = {
    setUserFavoriteDecks: (userFavoriteDecks: UserFavoriteDecksType) => ({
        type: "FAVORITE_DECKS_REDUCER/SET_USER_FAVORITE_DECKS", userFavoriteDecks
    } as const),

    setCurrentFavDeck: (favoriteDeckId: string) => ({
        type: "FAVORITE_DECKS_REDUCER/SET_CURRENT_FAV_DECK",
        favoriteDeckId
    } as const),

    setDefaultFavDeck: (deck: UserFavoriteDeckType) => ({
        type: "FAVORITE_DECKS_REDUCER/SET_DEFAULT_FAV_DECK",
        deck
    } as const),

    setCurrentFavCard: (card: CardType) => ({
        type: "FAVORITE_DECKS_REDUCER/SET_CURRENT_FAV_CARD",
        card
    } as const),

    setGradeSuccess: (newCardGrade: NewCardGradeType) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_GRADE_SUCCESS',
        newCardGrade
    } as const),

    setIsFireworks: (isFireworks: boolean) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_IS_FIREWORKS',
        isFireworks
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

export const getCurrentFavDeck = (favoriteDeckId: string, gameType: GameType): ThunkType =>
    (dispatch: DispatchType, getState: () => AppStateType) => {
        dispatch(favoriteDecksActions.setCurrentFavDeck(favoriteDeckId));
        getCurrentFavCard(gameType);
    };

export const getCurrentFavCard = (gameType: GameType): ThunkType =>
    (dispatch: DispatchType, getState: () => AppStateType) => {

        const cards = getState().favoriteDecks.currentFavDeck.deck;
        let card; // undefined

        if (gameType === "controlledRandom") {
            card = getCard.controlledRandom(cards);
        }

        if (card) {
            dispatch(favoriteDecksActions.setCurrentFavCard(card));
        }
    };

export const setGrade = (newCardGrade: NewCardGradeType) =>
    (dispatch: DispatchType, getState: () => AppStateType) => {

        const userId = getState().login.userId;
        const {favoriteDeckId, deckName, deck} = getState().favoriteDecks.currentFavDeck;

        const updatedDeck = deck.map(card => {
            if (newCardGrade._id === card._id) {
                return {...card, grade: newCardGrade.grade, shots: newCardGrade.shots}
            }
            return card
        })

        repository.updateUserFavoriteDeck(userId, favoriteDeckId, deckName, updatedDeck);
        const updatedUserFavoriteDecks = repository.get_UserFavoriteDecksFromLS(userId);

        if (updatedUserFavoriteDecks) {
            // PUT to server
            batch(() => {
                dispatch(favoriteDecksActions.setUserFavoriteDecks(updatedUserFavoriteDecks));
                dispatch(favoriteDecksActions.setGradeSuccess(newCardGrade));
            })
        }
    };
