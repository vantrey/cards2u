import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import {loginReducer} from "../../auth/login/loginReducer";
import {registrationReducer} from "../../auth/registration/registrationReducer";
import {restorePswReducer} from "../../auth/restorePsw/restorePswReducer";
import {newPswReducer} from "../../auth/newPsw/newPswReducer";
import {profileReducer} from "../profile/profileReducer";
import {CardsReducer} from "../../features/Cards/bll/cardsReducer";
import {userReducer} from "../../features/users/bll/UserReducer";
import {cardPacksReducer} from "../../features/cardsPacks/bll/cardPacksReducer";
import {favoriteDecksReducer} from "../favoriteDecks/favoriteDecksReducer";
import {preventRequestReducer} from "../preventReques/preventRequestReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    restorePsw: restorePswReducer,
    newPsw: newPswReducer,
    profile: profileReducer,
    cards: CardsReducer,
    getUserReducer: userReducer,
    cardPacks: cardPacksReducer,
    favoriteDecks: favoriteDecksReducer,
    preventRequest: preventRequestReducer,

});

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
export default store