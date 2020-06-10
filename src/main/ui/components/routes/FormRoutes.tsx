import React from 'react';
import {Route} from 'react-router-dom';
import LoginContainer from "../../../auth/login/LoginContainer";
import Scroll from '../../common/scroll/Scroll';
import RegistrationContainer from '../../../auth/registration/RegirtrationContainer';
import RestorePswContainer from '../../../auth/restorePsw/RestorePswContainer';

export const LOGIN_PATH = '/login'
export const REGISTRATION_PATH = '/registration'
export const RESTORE_PSW_PATH = '/restorePsw'

const FormRoutes = () => {
    return (
        <>
            <Route path={LOGIN_PATH} render={() => <Scroll children={<LoginContainer/>} title={'Login'}/>}/>
            <Route path={REGISTRATION_PATH} render={() => <Scroll children={<RegistrationContainer/>} title={'Registration'}/>}/>
            <Route path={RESTORE_PSW_PATH} render={() => <Scroll children={<RestorePswContainer/>} title={'Restore pswd'}/>}/>
        </>
    )
}
export default FormRoutes;