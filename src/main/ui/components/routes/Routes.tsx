import React from 'react';
import {Route} from 'react-router-dom';
import Login from "../../../auth/a1-login/Login";
import Registration from "../../../auth/a2-registration/Regirtration";
import RestorePsw from "../../../auth/a3-restorePsw/RestorePsw";
import NewPsw from "../../../auth/a4-newPsw/newPsw";
import Profile from "../../../auth/a5-profile/Profile";

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