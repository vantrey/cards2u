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

    const [toggleBg, setBg] = useState(true);
    const [ toggleMenu, setMenu ] = useState (false);
    const [ toggleAbout, setAbout ] = useState (false);
    const [openProfile, setProfile] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(localAuthMe());
    }, [dispatch]);

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
            <Header toggleBg={toggleBg} toggleMenu={toggleMenu} setMenu={setMenu}
                    toggleAbout={toggleAbout} setAbout={setAbout} openProfile={openProfile}
                    setProfile={setProfile}/>
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
            <Menu toggleMenu={toggleMenu} setMenu={setMenu} toggleAbout={toggleAbout}
                  setAbout={setAbout} openProfile={openProfile}
                  setProfile={setProfile} toggleBg={toggleBg} />
        </>
    )
}
export default Main