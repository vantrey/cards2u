import {CardsType} from "../../../types/entities";
import {AppStateType, InferActionTypes} from "../../../bll/store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CardsApi} from "../dal/CardsApi";
import {repository} from "../../../helpers/repos_localStorage/Token";


const initialState = {
    cards: [] as Array<CardsType>,
    isFetching: false,
    newCard: {} as object,
    isSuccess: false
}

type initialStateType = typeof initialState;

export const CardsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "CARDS_REDUCER/SET_CARDS":
            return {
                ...state,
                cards: action.cards
            }
        case "CARDS_REDUCER/IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "CARDS_REDUCER/ADD_CARD":
            return {
                ...state,
                newCard: action.newCard
            }
        case  "CARDS_REDUCER/SET_SUCCESS":
            return {
                ...state,
                isSuccess: action.isSuccess
            }
        default:
            return state;

    }

}

const actions = {
    setCards: (cards: Array<CardsType>) => ({type: 'CARDS_REDUCER/SET_CARDS', cards} as const),
    set_Fetching: (isFetching: boolean) => ({type: "CARDS_REDUCER/IS_FETCHING", isFetching} as const),
    addCard: (newCard: object) => ({type: "CARDS_REDUCER/ADD_CARD", newCard} as const),
    set_Success: (isSuccess: boolean) => ({type: "CARDS_REDUCER/SET_SUCCESS", isSuccess} as const),
}

type ActionsType = InferActionTypes<typeof actions>


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const set_Cards = (cardsPack_id: string): ThunkType =>
    async (dispatch: DispatchType, getState: () => AppStateType) => {
        try {
            dispatch(actions.set_Fetching(true));
            let token = repository.getToken();
            if (!token) token = ''
            const res = await CardsApi.getCards(cardsPack_id, token);
            dispatch(actions.setCards(res.data.cards));
            dispatch(actions.set_Fetching(false));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        }

    }

export const add_Card = (newCard: { cardsPack_id: string }): ThunkType =>
    async (dispatch: DispatchType, getState: () => AppStateType) => {
        try {
            let token = repository.getToken();
            if (!token) token = ''
            const res = await CardsApi.addCard({...newCard}, token);
            dispatch(actions.set_Success(res.data.success))
            dispatch(actions.addCard(res.data.newCard));
            repository.saveToken(res.data.token, res.data.tokenDeathTime);
        } catch (e) {
            repository.saveToken(e.response.data.token, e.response.data.tokenDeathTime);
        }
    }


