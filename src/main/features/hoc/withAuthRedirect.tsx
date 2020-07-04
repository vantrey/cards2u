import React from "react"
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import {AppStateType} from "../../bll/store/store"

export function withAuthRedirect<T>(Component: React.FC) {
    return (props: T) => {

        const {isAuth} = useSelector((state: AppStateType) => state.login);

        if (!isAuth) return <Redirect to={`/redirect`}/>;
        return <Component {...props}/>
    }
};