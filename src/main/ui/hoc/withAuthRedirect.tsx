import React from "react"
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import {AppStateType} from "../../bll/store/store"

export const withAuthRedirect = (Component: React.FC) => (props: any) => {

    const {isAuth} = useSelector((state: AppStateType) => state.login);

    if (!isAuth) return <Redirect to={`/`}/>;
    return <Component {...props}/>
};