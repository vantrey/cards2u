import React, { useEffect, useMemo, useState } from 'react';
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
import taper from './../../video/taper-2.gif';
import taperSound from './../../audio/taper.mp3';
import { useDispatch, useSelector } from "react-redux";
import avaDefault from "../../images/ava-default.png";
import soundDeck from "../../audio/deck.mp3";
import soundCard from "../../audio/card.mp3";
import Matrix from "./analytics/matrix/Matrix";
import Graph from "./analytics/graph/Graph";
import { favoriteDecksActions, getCurrentFavDeck, setGameType } from "../../../bll/favoriteDecks/favoriteDecksReducer";
import StartTest from "./test/Start_test";
import StopTest from "./test/Stop_test";
import { useLocation } from "react-router";
import { loginActions } from "../../../auth/login/loginReducer";


const Game = () => {

	const [ cardface, setCardFace ] = useState (true);
	const [ startMatrix, setstartMatrix ] = useState (false);
	const [ cardBg, setCardBg ] = useState (bg_1);
	const { user } = useSelector ((state) => state.profile);
	const { userFavoriteDecks, isSound, isTestModeStart, gameType } = useSelector ((state) => state.favoriteDecks);
	const dispatch = useDispatch ();
	const location = useLocation ();

	let currentPath = location.pathname;

	useEffect(() => {
		dispatch(loginActions.setCurrentLocation(currentPath));
	}, [currentPath]);

	useEffect (() => {

		switch ( currentPath ) {

			case '/game':
				dispatch (getCurrentFavDeck ('favoriteDeckSlot0'));
				break;
			case '/game/deckred':
				dispatch (getCurrentFavDeck ('favoriteDeckSlot1'));
				break;
			case '/game/deckgreen':
				dispatch (getCurrentFavDeck ('favoriteDeckSlot2'));
				break;
			case '/game/deckpink':
				dispatch (getCurrentFavDeck ('favoriteDeckSlot3'));
				break;
			case '/game/deckyellow':
				dispatch (getCurrentFavDeck ('favoriteDeckSlot4'));
				break;
			case '/game/deckpurple':
				dispatch (getCurrentFavDeck ('favoriteDeckSlot5'));
				break;
		}

	}, [ dispatch ]);


	const onSetFavoriteDeck = (favoriteDeckId) => {

		if( gameType === 'test') {
			dispatch (setGameType ("inOrder"));
			dispatch (favoriteDecksActions.setIsTestStart (false));
			dispatch (favoriteDecksActions.setBanner ('dragonBanner'));
		} else {
			dispatch (getCurrentFavDeck (favoriteDeckId));
			dispatch (favoriteDecksActions.setBanner ('infoBanner'));
		}
	};

	const onClickSound = () => {
		const nextCardDecksEl = document.getElementById ('nextCardDecks');
		nextCardDecksEl.play ();
	};

	useEffect (() => {

		const onSoundHoverEl = document.getElementById ('onSoundHover');
		const soundHoverEl = document.getElementById ('soundHover');

		if ( onSoundHoverEl && soundHoverEl ) {
			onSoundHoverEl.addEventListener ('mouseenter', () => {
				soundHoverEl.play ();
			});

			onSoundHoverEl.addEventListener ('mouseleave', () => {
				soundHoverEl.pause ();
				soundHoverEl.currentTime = 0;
			});

			onSoundHoverEl.addEventListener ('touchmove', () => {
				soundHoverEl.pause ();
				soundHoverEl.currentTime = 0;
			});

		}

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
								onClick={() => {
									setstartMatrix (true)
								}}>
								analytics
							</button>
						</div>
					}
					{
						startMatrix &&
						<div className={styles.analytics__data}>
							<Graph setCardFace={setCardFace} isSound={isSound}/>
							<Matrix/>
						</div>
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
								<NavLink to={GAME_PATH_DECK_BLUE} className={styles.header__link}
										 onClick={() => {
											 onSetFavoriteDeck ('favoriteDeckSlot0');
										 }}>
									<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>
													{userFavoriteDecks.favoriteDecks[0].deckName}
												</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_RED} className={styles.header__link}
										 onClick={() => {
											 onSetFavoriteDeck ('favoriteDeckSlot1');
										 }}>
									<div className={`${styles.decks__item} ${styles.decks__item_2}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>
													{userFavoriteDecks.favoriteDecks[1].deckName}
												</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_GREEN} className={styles.header__link}
										 onClick={() => {
											 onSetFavoriteDeck ('favoriteDeckSlot2');;
										 }}>
									<div className={`${styles.decks__item} ${styles.decks__item_3}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>
													{userFavoriteDecks.favoriteDecks[2].deckName}
												</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_PINK} className={styles.header__link}
										 onClick={() => {
											 onSetFavoriteDeck ('favoriteDeckSlot3');
										 }}>
									<div className={`${styles.decks__item} ${styles.decks__item_4}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>
													{userFavoriteDecks.favoriteDecks[3].deckName}
												</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_YELLOW} className={styles.header__link}
										 onClick={() => {
											 onSetFavoriteDeck ('favoriteDeckSlot4');
										 }}>
									<div className={`${styles.decks__item} ${styles.decks__item_5}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>
													{userFavoriteDecks.favoriteDecks[4].deckName}
												</h4>
											</div>
										</div>
									</div>
								</NavLink>
								<NavLink to={GAME_PATH_DECK_PURPLE} className={styles.header__link}
										 onClick={() => {
											 onSetFavoriteDeck ('favoriteDeckSlot5');
										 }}>
									<div className={`${styles.decks__item} ${styles.decks__item_6}`}>
										<div className={styles.tooltip}>
											<div className={styles.tooltip_wrap}>
												<h4 className={styles.tooltip_title}>
													{userFavoriteDecks.favoriteDecks[5].deckName}
												</h4>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
						</div>
					</div>
					<div className={styles.content__main}>
						{isTestModeStart &&
						<StartTest setCardFace={setCardFace} cardBg={cardBg} setCardBg={setCardBg}/>
							// <StopTest setCardFace={setCardFace} cardBg={cardBg} setCardBg={setCardBg}/>
						}
						{!isTestModeStart &&
						<div className={styles.main__card}>
							{cardface && <Card cardBg={cardBg} setCardFace={setCardFace} cardface={cardface}/>}
							{!cardface && <CardDownside setCardFace={setCardFace} setCardBg={setCardBg}/>}
							<div className={styles.content__buttons}>
								<Buttons setCardFace={setCardFace} cardface={cardface} setCardBg={setCardBg}
										 isSound={isSound}/>
							</div>
							{/*<div className={styles.main__card_fire} >*/}
							{/*	<img src={taper} alt="taper"/>*/}
							{/*</div>*/}
							{/*<audio autoPlay={true} muted={!isSound}>*/}
							{/*	<source src={taperSound} type="audio/mpeg"/>*/}
							{/*</audio>*/}
						</div>
						}
						<div onClick={onClickSound}>
							<div id='onSoundHover'>
								<div className={`${styles.main__deck}`}>
									<DecksRoutes setCardBg={setCardBg} setCardFace={setCardFace}/>
								</div>
								<audio autoPlay={false} muted={!isSound} id='nextCardDecks'>
									<source src={soundCard} type="audio/mpeg"/>
								</audio>
								<audio autoPlay={false} muted={!isSound} id='soundHover'>
									<source src={soundDeck} type="audio/mpeg"/>
								</audio>
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