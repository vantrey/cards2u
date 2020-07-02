import React from 'react';
import styles from './Menu.module.css'
import imgTaverna from '../../images/taverna-shadow2.png';
import imgPoint from '../../images/point-shadow2.png';
import imgAbout from "../../images/about-shadow2.png";
import imgClose from "../../images/clouse-shadow2.png";
import Taverna from "./taverna/Taverna";
import About from "./about/About";


const Menu = ({toggleMenu, setMenu, toggleAbout, setAbout, setProfile, openProfile, toggleBg}) => {

	const openAbout = () => {
		setProfile(true);

		if ( toggleMenu ) {
            setMenu(false);
            setAbout (!toggleAbout);
		} else {

			setAbout (!toggleAbout);
		}
	}

	const openMenu = () => {
		setProfile(true);

        if ( toggleAbout ) {
            setAbout (false);
            setMenu(true);
        } else {
            setMenu(!toggleMenu);
        }
    }

	const classForMenu = toggleBg === true ? `${styles.menu} ${styles.menu_notActive}` : `${styles.menu}`;

	return (
		<>
			<div className={classForMenu}>
				<div className={styles.menu__wrap}>
					{!toggleMenu &&

					<div className={styles.menu__taverna} onClick={openMenu}>
						<img src={imgTaverna} alt="logo"/>
					</div>

					}
					{toggleMenu &&

					<div className={styles.menu__close} onClick={() => setMenu (!toggleMenu)}>
						<img src={imgClose} alt="close"/>
					</div>

					}

					<div className={styles.menu__point}>
						<img src={imgPoint} alt="point"/>
					</div>
					<div className={styles.menu__about}>
						<img src={imgAbout} alt="about" onClick={openAbout}/>
					</div>
				</div>
			</div>
			<Taverna toggleMenu={toggleMenu} setMenu={setMenu}/>
			<About toggleAbout={toggleAbout}/>
		</>
	)
}
export default Menu;