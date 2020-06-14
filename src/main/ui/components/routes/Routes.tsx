import React from 'react';
import {Route} from 'react-router-dom';
import Profile from "../../../auth/profile/Profile";
import RegistrationPage from '../../../auth/registration/RegirtrationPage';
import LoginContainer from "../../../auth/login/LoginContainer";
import Root from "../root/Root";
import RestorePswPage from "../../../auth/restorePsw/RestorePswPage";
import NewPswPage from "../../../auth/newPsw/NewPswPage";
import UsersContainer from "../../../features/users/ui/UsersContainer";
import CardPacksContainer from "../../../features/cardsPacks/ui/CardPacksContainer";
import CardsContainer from "../../../features/Cards/ui/CardsContainer";

export const LOGIN_PATH = '/login'
export const REGISTRATION_PATH = '/registration'
export const RESTORE_PSW_PATH = '/restorePsw'
export const NEW_PSW_PATH = '/newPsw'
export const GET_USERS = '/getUsers'
export const PROFILE_PATH = '/profile'
export const ROOT_PATH = '/root'
export const CARD_PACKS_PATH = '/packs'
export const CARDS_PATH = '/cards'

const Routs = () => {
    return <div>
        <Route path={LOGIN_PATH} render={() => <LoginContainer/>}/>
        <Route path={REGISTRATION_PATH} render={() => <RegistrationPage/>}/>
        <Route path={RESTORE_PSW_PATH} render={() => <RestorePswPage/>}/>
        <Route path={`${NEW_PSW_PATH}/:resetPswToken?`} render={() => <NewPswPage/>}/>
        <Route path={GET_USERS} render={() => <UsersContainer/>}/>
        <Route path={PROFILE_PATH} render={() => <Profile/>}/>
        <Route path={ROOT_PATH} render={() => <Root/>}/>
        <Route path={CARD_PACKS_PATH} render={() => <CardPacksContainer/>}/>
        <Route path={`${CARDS_PATH}/:pack_id?`} render={() => <CardsContainer/>}/>
    </div>
}
export default Routs