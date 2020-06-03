import React from 'react';
import {Route} from 'react-router-dom';
import Login from "../../../auth/login/Login";
import Registration from "../../../auth/registration/Regirtration";
import RestorePsw from "../../../auth/restorePsw/RestorePsw";
import NewPsw from "../../../auth/newPsw/newPsw";
import Profile from "../../../auth/profile/Profile";
import Root from "../root/Root";


export const LOGIN_PATH = '/login'
export const REGISTRATION_PATH = '/registration'
export const RESTORE_PSW_PATH = '/restorePsw'
export const NEW_PSW_PATH = '/newPsw'
export const PROFILE_PATH = '/profile'
export const ROOT_PATH = '/root'


const Routs = () => {
  return <div>
    <Route path={LOGIN_PATH} render={() => <Login/>}/>
    <Route path={REGISTRATION_PATH} render={() => <Registration/>}/>
    <Route path={RESTORE_PSW_PATH} render={() => <RestorePsw/>}/>
    <Route path={NEW_PSW_PATH} render={() => <NewPsw/>}/>
    <Route path={PROFILE_PATH} render={() => <Profile/>}/>
    <Route path={ROOT_PATH} render={() => <Root/>}/>
  </div>
}
export default Routs