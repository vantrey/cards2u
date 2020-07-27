import React, { useEffect, useState } from 'react';
import styles from './Game.module.css';
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
import bg_1 from './../../images/card-bg/card-bg-1.jpg';
import { useSelector } from "react-redux";
import avaDefault from "../../images/ava-default.png";
import soundDeck from "../../audio/deck.mp3";
import soundCard from "../../audio/card.mp3";
import { loudlinks } from "../../../helpers/loudlinks";
import Matrix from "./analytics/Analytics";


const Game = () => {

	const [ cardface, setCardFace ] = useState (true);
	const [ startMatrix, setstartMatrix] = useState (false);
	const [ cardBg, setCardBg ] = useState (bg_1);
	const { user } = useSelector ((state) => state.profile);
	const { userFavoriteDecks } = useSelector ((state) => state.favoriteDecks);

	useEffect (() => {
		loudlinks ();
	}, []);

	return (
		<div className={styles.game__wrap}>
			<div className={styles.game__left}></div>
			<div className={styles.game__container}>
				<div className={styles.game__analytics}>
					{
						!startMatrix &&
						<div className={styles.analytics__start}>
							<button
								className={styles.analytics__button}
								onClick={() => {setstartMatrix(true)}}>
								analytics
							</button>
						</div>
					}
					{
						startMatrix &&
						<Matrix/>
					}
				</div>
				<div className={styles.game__content}>
					<div className={styles.content__header}>
						<div className={styles.header__user}>
							<div className={styles.user__avatar}>
								{
									user.avatar &&
									<img src={user.avatar} alt="avatar"/>
								}
								{
									!user.avatar &&
									<img src={avaDefault} alt='avatar'/>
								}
							</div>
							<div className={styles.user__nick}>
								{
									user.name &&
									<span>{user.name}</span>
								}
								{
									!user.name &&
									<span>John Wick</span>
								}
							</div>
						</div>
						<div className={styles.header__info}>
							<h3 className={styles.header__title}>your favourite decks</h3>
							<div className={styles.header__decks}>
								<NavLink to={GAME_PATH_DECK_BLUE} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>React Native</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_RED} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_2}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[0].deckName}</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_GREEN} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_3}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[1].deckName}</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_PINK} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_4}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[2].deckName}</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_YELLOW} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_5}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[3].deckName}</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_PURPLE} className={styles.header__link}>
									<div className={`${styles.decks__item} ${styles.decks__item_6}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>{userFavoriteDecks.favoriteDecks[4].deckName}</h4>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
						</div>
					</div>
					<div className={styles.content__main}>
						<div className={styles.main__card}>
							{cardface && <Card cardBg={cardBg} setCardFace={setCardFace} cardface={cardface}/>}
							{!cardface && <CardDownside/>}
							<div className={styles.content__buttons}>
								<Buttons setCardFace={setCardFace} cardface={cardface} setCardBg={setCardBg}/>
							</div>
						</div>
						<div className='soundClick' data-sound={soundCard}>
							<div className='soundHover' data-sound={soundDeck}>
								<div className={`${styles.main__deck}`}>
									<DecksRoutes setCardBg={setCardBg}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<div className={styles.game__chat}>chat</div>*/}
			</div>
			<div className={styles.game__right}></div>
		</div>
	)
}
export default Game;