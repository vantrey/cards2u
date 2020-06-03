import React from 'react';
import {Route} from 'react-router-dom';
import Login from "../../../auth/login/Login";
import NewPsw from "../../../auth/newPsw/newPsw";
import Profile from "../../../auth/profile/Profile";
import RegistrationPage from '../../../auth/registration/RegirtrationPage';
import RestorePswPage from "../../../auth/restorePsw/RestorePswPage";

export const LOGIN_PATH = '/login'
export const REGISTRATION_PATH = '/registration'
export const RESTORE_PSW_PATH = '/restorePsw'
export const NEW_PSW_PATH = '/newPsw'
export const PROFILE_PATH = '/profile'

const Routs = () => {
    return <div>
        <Route path={LOGIN_PATH} render={() => <Login/>}/>
        <Route path={REGISTRATION_PATH} render={() => <RegistrationPage/>}/>
        <Route path={RESTORE_PSW_PATH} render={() => <RestorePswPage/>}/>
        <Route path={NEW_PSW_PATH} render={() => <NewPsw/>}/>
        <Route path={PROFILE_PATH} render={() => <Profile/>}/>
    </div>
}
export default Routs