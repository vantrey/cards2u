import React from 'react';
import {Route} from 'react-router-dom';
import LoginContainer from "../../../auth/login/LoginContainer";
import Scroll from '../../common/scroll/Scroll';
import RegistrationContainer from '../../../auth/registration/RegirtrationContainer';
import RestorePswContainer from '../../../auth/restorePsw/RestorePswContainer';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import PopupSingIn from '../../common/popUp/PopupSingIn';

export const REDIRECT_PATH = '/redirect'
export const LOGIN_PATH = '/login'
export const SET_NEW_PSW__PATH = '/newPsw'
export const REGISTRATION_PATH = '/registration'
export const RESTORE_PSW_PATH = '/restorePsw'


const FormRoutes = () => {

    const {isFetchingLogin} = useSelector((state: AppStateType) => state.login);
    const {isFetchingRegistration} = useSelector((state: AppStateType) => state.registration);
    const {isFetchingRestorePsw} = useSelector((state: AppStateType) => state.restorePsw);

    return (
        <>
            <Route path={REDIRECT_PATH} render={() => <Scroll children={<PopupSingIn/>} title={'Sing in'}
                                                              isFetching={isFetchingLogin}/>}/>
            <Route path={LOGIN_PATH} render={() => <Scroll children={<LoginContainer/>} title={'Login'}
                                                           isFetching={isFetchingLogin}/>}/>
            <Route path={REGISTRATION_PATH}
                   render={() => <Scroll children={<RegistrationContainer/>} title={'Registration'}
                                         isFetching={isFetchingRegistration}/>}/>
            <Route path={RESTORE_PSW_PATH}
                   render={() => <Scroll children={<RestorePswContainer/>} title={'Restore pswd'}
                                         isFetching={isFetchingRestorePsw}/>}/>
        </>
    )
}
export default FormRoutes;