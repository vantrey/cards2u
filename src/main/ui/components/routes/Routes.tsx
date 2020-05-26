import React from 'react';
import {Route} from 'react-router-dom';
import Login from "../../../auth/login/Login";
import Registration from "../../../auth/registration/Regirtration";
import RestorePsw from "../../../auth/restorePsw/RestorePsw";
import NewPsw from "../../../auth/newPsw/newPsw";
import Profile from "../../../auth/profile/Profile";

export const loginPath = '/login'
export const registrationPath = '/registration'
export const restorePswPath = '/restorePsw'
export const newPswPath = '/newPsw'
export const profilePath = '/profile'

const Routs = () => {
  return <div>
    <Route path={loginPath} render={() => <Login/>}/>
    <Route path={registrationPath} render={() => <Registration/>}/>
    <Route path={restorePswPath} render={() => <RestorePsw/>}/>
    <Route path={newPswPath} render={() => <NewPsw/>}/>
    <Route path={profilePath} render={() => <Profile/>}/>
  </div>
}
export default Routs