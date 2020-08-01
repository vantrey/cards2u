import {AppStateType, InferActionTypes} from '../store/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
    CardType,
    currentAnalyticsType,
    GameType,
    NewCardGradeType,
    UserFavoriteDecksType,
    UserFavoriteDeckType
} from "../../types/entities";
import {repository} from "../../helpers/repos_localStorage/reposetory";

import {batch} from "react-redux";
import {getCard} from "../../helpers/getCard/getCard";
import {setCardGrade} from "../../features/Cards/bll/cardsReducer";

const initialState = {
    userFavoriteDecks: {
        userId: '',
        favoriteDecks: []
    } as UserFavoriteDecksType,

    currentFavDeck: {
        favoriteDeckId: '',
        deckName: '',
        deck: []
    } as UserFavoriteDeckType,

    currentFavCard: {} as CardType,

    isFireworks: false, // game stop
    nextCardNumber: 0,

    currentAnalytics: {
        totalCardCount: 0,
        rightAnswers: 0,
        faults: 0,
        restCards: 0,
    } as currentAnalyticsType,

    gameType: 'controlledRandom' as GameType,
    isMulti: false,
    isSound: true,
    isRandomMode: true,
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

            case "FAVORITE_DECKS_REDUCER/SET_CURRENT_FAV_DECK":
                const currentFavDeck = state.userFavoriteDecks.favoriteDecks.find(
                    d => d.favoriteDeckId === action.favoriteDeckId
                )
                if (currentFavDeck) {
                    const newState = {
                        ...state,
                        currentFavDeck: currentFavDeck,
                        currentAnalytics: {
                            ...state.currentAnalytics,
                            totalCardCount: currentFavDeck.deck.length
                        }
                    }
                    if (currentFavDeck.deck.length === 0) {
                        return {
                            ...newState,
                            currentFavCard: {
                                question: 'There is no cards',
                                answer: 'There is no cards',
                                _id: '',
                                user_id: '',
                                shots: 0,
                                grade: 0,
                                __v: 0,
                                cardsPack_id: '',
                                created: '',
                                rating: 0,
                                type: '',
                                updated: ''
                            }
                        }
                    } else return newState
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
                        deck: action.updatedDeck
                    }
                }

            case "FAVORITE_DECKS_REDUCER/SET_IS_FIREWORKS":
                return {
                    ...state,
                    isFireworks: action.isFireworks
                }

            case "FAVORITE_DECKS_REDUCER/SET_ANALYTICS":
                const {
                    rightAnswers,
                    totalCardCount,
                    restCards,
                    faults
                } = state.currentAnalytics

                return {
                    ...state,
                    currentAnalytics: {
                        totalCardCount,
                        rightAnswers: action.isRightAnswer ? rightAnswers + 1 : rightAnswers,
                        faults: action.isRightAnswer ? faults : faults + 1,
                        restCards: totalCardCount - (rightAnswers + faults)
                    }
                }

            case "FAVORITE_DECKS_REDUCER/SET_GAME_TYPE":
                return {
                    ...state,
                    gameType: action.gameType
                }

            case "FAVORITE_DECKS_REDUCER/SET_NEXT_CARD_NUMBER":
                return {
                    ...state,
                    nextCardNumber: action.cardNumber
                }

            case "FAVORITE_DECKS_REDUCER/SET_IS_MULTI":
                return {
                    ...state,
                    isMulti: action.isMulti
                }

            case "FAVORITE_DECKS_REDUCER/SET_IS_SOUND":
                return {
                    ...state,
                    isSound: action.isSound
                }

            case "FAVORITE_DECKS_REDUCER/RESET_ANALYTICS":
                return {
                    ...state,
                    currentAnalytics: {
                        ...state.currentAnalytics,
                        faults: 0,
                        rightAnswers: 0,
                        restCards: 0
                    }
                }

            case "FAVORITE_DECKS_REDUCER/SET_IS_RANDOM_MODE":
                return {
                    ...state,
                    isRandomMode: action.isRandomMode
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

    setCurrentFavCard: (card: CardType) => ({
        type: "FAVORITE_DECKS_REDUCER/SET_CURRENT_FAV_CARD",
        card
    } as const),

    setGradeSuccess: (updatedDeck: Array<CardType>) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_GRADE_SUCCESS',
        updatedDeck
    } as const),

    setIsFireworks: (isFireworks: boolean) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_IS_FIREWORKS',
        isFireworks
    } as const),

    setAnalytics: (isRightAnswer: boolean) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_ANALYTICS',
        isRightAnswer
    } as const),

    setGameTypeSuccess: (gameType: GameType) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_GAME_TYPE',
        gameType
    } as const),

    setNextCardNumber: (cardNumber: number) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_NEXT_CARD_NUMBER',
        cardNumber
    } as const),

    setIsSound: (isSound: boolean) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_IS_SOUND',
        isSound
    } as const),

    setIsMulti: (isMulti: boolean) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_IS_MULTI',
        isMulti
    } as const),

    resetAnalytics: () => ({
        type: 'FAVORITE_DECKS_REDUCER/RESET_ANALYTICS'
    } as const),

    setIsRandomMode: (isRandomMode: boolean) => ({
        type: 'FAVORITE_DECKS_REDUCER/SET_IS_RANDOM_MODE',
        isRandomMode
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

export const getCurrentFavDeck = (favoriteDeckId: string): ThunkType =>
    (dispatch: DispatchType, getState: () => AppStateType) => {
        batch(() => {
            dispatch(favoriteDecksActions.setCurrentFavDeck(favoriteDeckId));
            dispatch(favoriteDecksActions.setNextCardNumber(0));
            /*dispatch(favoriteDecksActions.setIsFireworks(false));*/
            dispatch(getCurrentFavCard());
        })
    };

export const setEndGame = (): ThunkType =>
    (dispatch: DispatchType, getState: () => AppStateType) => {
        const {gameType, currentAnalytics, nextCardNumber} = getState().favoriteDecks
        if (currentAnalytics.totalCardCount === nextCardNumber) {
            dispatch(favoriteDecksActions.setIsFireworks(true));
        }
        dispatch(favoriteDecksActions.setNextCardNumber(0));

        if (gameType === "test") {
            //repository
            dispatch(favoriteDecksActions.resetAnalytics());
        }
        dispatch(getCurrentFavCard());
    }

export const getCurrentFavCard = (): ThunkType =>
    (dispatch: DispatchType, getState: () => AppStateType) => {

        const gameType = getState().favoriteDecks.gameType
        const cards = getState().favoriteDecks.currentFavDeck.deck;
        const {
            totalCardCount,
            faults,
            restCards,
            rightAnswers
        } = getState().favoriteDecks.currentAnalytics
        if (totalCardCount === 0) {
            return
        }
        const nextCardNumber = getState().favoriteDecks.nextCardNumber
        let card: CardType; // undefined

        switch (gameType) {
            case "controlledRandom":
                card = getCard.controlledRandom(cards);
                dispatch(favoriteDecksActions.setCurrentFavCard(card));
                break;
            case "test":
            case "inOrder":
                if (totalCardCount === nextCardNumber) {
                    dispatch(setEndGame());
                } else {
                    card = cards[nextCardNumber];
                    batch(() => {
                        dispatch(favoriteDecksActions.setNextCardNumber(nextCardNumber + 1));
                        dispatch(favoriteDecksActions.setCurrentFavCard(card));
                    });
                }
                break;
        }
    };

export const setGameType = (gameType: GameType) => (dispatch: DispatchType) => {

    batch(() => {
        dispatch(favoriteDecksActions.setNextCardNumber(0));
        dispatch(favoriteDecksActions.setGameTypeSuccess(gameType));
        dispatch(getCurrentFavCard());
    })
};

export const setGrade = (selectedGrade: number) =>
    (dispatch: DispatchType, getState: () => AppStateType) => {
        const userId = getState().login.userId;
        const {favoriteDeckId, deckName, deck} = getState().favoriteDecks.currentFavDeck;
        const {_id, grade, shots} = getState().favoriteDecks.currentFavCard

        const newGrade = getCard.getCardGrade(grade, selectedGrade, shots);


        const updatedDeck = deck.map(card => {
            if (_id === card._id) {
                return {...card, grade: newGrade, shots: shots + 1}
            }
            return card
        })

        repository.updateUserFavoriteDeck(userId, favoriteDeckId, deckName, updatedDeck);
        const updatedUserFavoriteDecks = repository.get_UserFavoriteDecksFromLS(userId);

        if (updatedUserFavoriteDecks) {
            // PUT to server
            const updatedCardGrade = {_id, grade: newGrade, shots: shots + 1};
            batch(() => {
                dispatch(favoriteDecksActions.setUserFavoriteDecks(updatedUserFavoriteDecks));
                dispatch(favoriteDecksActions.setGradeSuccess(updatedDeck));
            })
        }
    };
