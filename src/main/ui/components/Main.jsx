import React, {useEffect, useState} from 'react';
import styles from './Main.module.css'
import Header from "./header/Header";
import Menu from './menu/Menu';
import Intro from "./intro/Intro";
import FormRoutes from "./routes/FormRoutes";
import MainRoutes from "./routes/MainRoutes";
import {useDispatch} from "react-redux"
import {localAuthMe} from "../../auth/login/loginReducer"


const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(localAuthMe());
    }, [dispatch]);

    let [toggleBg, setBg] = useState(true);

    useEffect(() => {
        let vid = document.getElementById('intro');
        vid.addEventListener('ended', () => {
            setBg(!toggleBg);
        }, true);

        return () => {
            vid.removeEventListener('ended', () => {
                setBg(!toggleBg);
            }, true);

        }
    }, []);

    return (
        <>
            <Header toggleBg={toggleBg}/>
            <>
                {
                    toggleBg &&
                    <Intro setBg={setBg} toggleBg={toggleBg} />
                }
                {
                    !toggleBg &&
                    <MainRoutes/>
                }
            </>
            <FormRoutes/>
            <Menu/>
        </>
    )
}
export default Main