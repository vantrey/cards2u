import React from 'react';
import {Route} from 'react-router-dom';
import LoginContainer from "../../../auth/login/LoginContainer";
import Scroll from '../../common/scroll/Scroll';
import RegistrationContainer from '../../../auth/registration/RegirtrationContainer';
import RestorePswContainer from '../../../auth/restorePsw/RestorePswContainer';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store/store";
import PopupSingIn from '../../common/popUp/PopupSingIn';

export const REDIRECT_PATH = '/redirect';
export const LOGIN_PATH = '/login';
export const SET_NEW_PSW__PATH = '/newPsw';
export const REGISTRATION_PATH = '/registration';
export const RESTORE_PSW_PATH = '/restorePsw';


const FormRoutes = () => {

    const {isPreventFetching} = useSelector((state: AppStateType) => state.preventRequest);

    return (
        <>
            <Route path={REDIRECT_PATH} render={() => <Scroll children={<PopupSingIn/>} title={'Sing in'}
                                                              isFetching={isPreventFetching}/>}/>
            <Route path={LOGIN_PATH} render={() => <Scroll children={<LoginContainer/>} title={'Login'}
                                                           isFetching={isPreventFetching}/>}/>
            <Route path={REGISTRATION_PATH}
                   render={() => <Scroll children={<RegistrationContainer/>} title={'Registration'}
                                         isFetching={isPreventFetching}/>}/>
            <Route path={RESTORE_PSW_PATH}
                   render={() => <Scroll children={<RestorePswContainer/>} title={'Restore pswd'}
                                         isFetching={isPreventFetching}/>}/>
        </>
    )
};
export default FormRoutes;