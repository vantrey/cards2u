import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import {loginReducer} from "../../auth/a1-login/loginReducer";
import {registrationReducer} from "../../auth/a2-registration/registrationReducer";
import {restorePswReducer} from "../../auth/a3-restorePsw/restorePswReducer";
import {newPswReducer} from "../../auth/a4-newPsw/newPswReducer";
import {profileReducer} from "../../auth/a5-profile/profileReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  restorePsw: restorePswReducer,
  newPsw: newPswReducer,
  profile: profileReducer,

})
export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store