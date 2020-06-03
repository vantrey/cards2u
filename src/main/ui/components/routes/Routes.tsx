import React from 'react';
import {Route} from 'react-router-dom';
import RestorePsw from "../../../auth/restorePsw/RestorePsw";
import NewPsw from "../../../auth/newPsw/newPsw";
import Profile from "../../../auth/profile/Profile";
import RegistrationPage from '../../../auth/registration/RegirtrationPage';
import LoginContainer from "../../../auth/login/LoginContainer";
import Logout from "../../../auth/login/Loguot"
import Root from "../root/Root";

export const LOGIN_PATH = '/login'
// export const LOGOUT_PATH = '/Logout'
export const REGISTRATION_PATH = '/registration'
export const RESTORE_PSW_PATH = '/restorePsw'
export const NEW_PSW_PATH = '/newPsw'
export const PROFILE_PATH = '/profile'
export const ROOT_PATH = '/root'

const Routs = () => {
  return <div>
    <Route path={LOGIN_PATH} render={() => <LoginContainer/>}/>
    {/*<Route path={LOGOUT_PATH} render={() => <Logout logout={logout}/>}/>*/}
    <Route path={REGISTRATION_PATH} render={() => <RegistrationPage/>}/>
    <Route path={RESTORE_PSW_PATH} render={() => <RestorePsw/>}/>
    <Route path={NEW_PSW_PATH} render={() => <NewPsw/>}/>
    <Route path={PROFILE_PATH} render={() => <Profile/>}/>
    <Route path={ROOT_PATH} render={() => <Root/>}/>
  </div>
}
export default Routs