import React from 'react';
import styles from './Game.module.css';
import ava from '../../images/shirt6.png';
import DecksRoutes, {
	GAME_PATH_DECK_BLUE, GAME_PATH_DECK_BLUE2,
	GAME_PATH_DECK_GREEN, GAME_PATH_DECK_GREEN2,
	GAME_PATH_DECK_RED,
	GAME_PATH_DECK_YELLOW
} from "../routes/DecksRoutes";
import { NavLink } from "react-router-dom";
import Card from "./card/Card";


const Game = () => {

	return (
		<div className={styles.game__wrap}>
			<div className={styles.game__left}></div>
			<div className={styles.game__container}>
				<div className={styles.game__analytics}>analytics</div>
				<div className={styles.game__content}>
					<div className={styles.content__header}>
						<div className={styles.header__avatar}>
							<img src={ava} alt="avatar"/>
						</div>
						<div className={styles.header__info}>
							<h3 className={styles.header__title}>your favourite decks</h3>
							<div className={styles.header__decks}>
								<NavLink to={GAME_PATH_DECK_BLUE2} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_6}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_GREEN} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_2}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_RED} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_3}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_YELLOW} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_4}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_GREEN2} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_5}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_BLUE} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
						</div>
					</div>
					<div className={styles.content__main}>
						<div className={styles.main__card}>
							<Card/>
						</div>
						<div className={styles.main__deck}>
							<DecksRoutes/>
						</div>
					</div>
					<div className={styles.content__buttons}>buttons</div>
				</div>
				{/*<div className={styles.game__chat}>chat</div>*/}
			</div>
			<div className={styles.game__right}></div>
		</div>
	)
}
export default Game;