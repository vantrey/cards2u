import React from 'react';
import {Route} from 'react-router-dom';
import Profile from "../../../auth/profile/Profile";
import RegistrationPage from '../../../auth/registration/RegirtrationPage';
import LoginContainer from "../../../auth/login/LoginContainer";
import Logout from "../../../auth/login/Loguot"
import Root from "../root/Root";
import RestorePswPage from "../../../auth/restorePsw/RestorePswPage";
import NewPswPage from "../../../auth/newPsw/NewPswPage";

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
        <Route path={RESTORE_PSW_PATH} render={() => <RestorePswPage/>}/>
        <Route path={`${NEW_PSW_PATH}/:resetPswToken?`} render={() => <NewPswPage/>}/>
        <Route path={PROFILE_PATH} render={() => <Profile/>}/>
        <Route path={ROOT_PATH} render={() => <Root/>}/>
    </div>
}
export default Routs