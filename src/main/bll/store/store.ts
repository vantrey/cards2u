import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import {loginReducer} from "../../auth/login/loginReducer";
import {registrationReducer} from "../../auth/registration/registrationReducer";
import {restorePswReducer} from "../../auth/restorePsw/restorePswReducer";
import {newPswReducer} from "../../auth/newPsw/newPswReducer";
import {profileReducer} from "../../auth/profile/profileReducer";

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