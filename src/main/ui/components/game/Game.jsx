import React, { useState } from 'react';
import styles from './Game.module.css';
import ava from '../../images/ava.jpg';
import DecksRoutes, {
	GAME_PATH_DECK_BLUE,
	GAME_PATH_DECK_GREEN,
	GAME_PATH_DECK_PINK,
	GAME_PATH_DECK_PURPLE,
	GAME_PATH_DECK_RED,
	GAME_PATH_DECK_YELLOW
} from "../routes/DecksRoutes";
import { NavLink } from "react-router-dom";
import Card from "./card/Card";
import CardDownside from "./card/CardDownside";
import Buttons from "./buttons/Buttons";
import bg_1  from './../../images/card-bg/card-bg-1.jpg';


const Game = () => {

	const [ cardface , setCardFace ] = useState(true);
	const [ cardBg , setCardBg ] = useState(bg_1);

	return (
		<div className={styles.game__wrap}>
			<div className={styles.game__left}> </div>
			<div className={styles.game__container}>
				<div className={styles.game__analytics}>analytics</div>
				<div className={styles.game__content}>
					<div className={styles.content__header}>
						<div className={styles.header__user}>
							<div className={styles.user__avatar}>
								<img src={ava} alt="avatar"/>
							</div>
							<div className={styles.user__nick}>
								<span>Leat</span>
							</div>
						</div>
						<div className={styles.header__info}>
							<h3 className={styles.header__title}>your favourite decks</h3>
							<div className={styles.header__decks}>
								<NavLink to={GAME_PATH_DECK_BLUE} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={ GAME_PATH_DECK_RED} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_2}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_GREEN} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_3}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_PINK} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_4}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_YELLOW} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_5}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>Task title </h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_PURPLE} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_6}`}>
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
							{ cardface && 	<Card cardBg={cardBg} setCardFace={setCardFace} cardface={cardface}/> }
							{ !cardface && 	<CardDownside/> }
							<div className={styles.content__buttons}>
								<Buttons setCardFace={setCardFace} cardface={cardface} setCardBg={setCardBg}/>
							</div>
						</div>
						<div className={styles.main__deck}>
							<DecksRoutes setCardBg={setCardBg}/>
						</div>
					</div>

				</div>
				{/*<div className={styles.game__chat}>chat</div>*/}
			</div>
			<div className={styles.game__right}> </div>
		</div>
	)
}
export default Game;