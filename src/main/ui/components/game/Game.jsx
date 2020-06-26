import React from 'react';
import styles from './Game.module.css';
import Deck_blue from "./deck/Deck_blue";
import Deck_red from "./deck/Deck_red";
import Deck_green from "./deck/Deck_green";
import Deck_yellow from "./deck/Deck_yellow";
import ava from '../../images/shirt6.png';
import Deck_green2 from "./deck/Deck_green2";
import Deck_blue2 from "./deck/Deck_blue2";


const Game = () => {

	return (
		<div className={styles.game__wrap}>
			<div className={styles.game__left}> </div>
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
								<div className={`${styles.decks__item} ${styles.decks__item_6}`}>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>Task title </h4>
										</div>
									</div>
								</div>
								<div className={`${styles.decks__item} ${styles.decks__item_2}`}>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>Task title </h4>
										</div>
									</div>
								</div>
								<div className={`${styles.decks__item} ${styles.decks__item_3}`}>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>Task title </h4>
										</div>
									</div>
								</div>
								<div className={`${styles.decks__item} ${styles.decks__item_4}`}>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>Task title </h4>
										</div>
									</div>
								</div>
								<div className={`${styles.decks__item} ${styles.decks__item_5}`}>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>Task title </h4>
										</div>
									</div>
								</div>
								<div className={`${styles.decks__item} ${styles.decks__item_1}`}>
									<div className={styles.tooltip}>
										<div className={styles.tooltip_wrap}>
											<h4 className={styles.tooltip_title}>Task title </h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.content__main}>
						<div className={styles.main__card}>card</div>
						<div className={styles.main__deck}>
							<Deck_blue2/>
							{/*<Deck_green/>*/}
							{/*<Deck_red/>*/}
							{/*<Deck_yellow/>*/}
							{/*<Deck_green2/>*/}
							{/*<Deck_blue/>*/}
						</div>
					</div>
					<div className={styles.content__buttons}>buttons</div>
				</div>
				{/*<div className={styles.game__chat}>chat</div>*/}
			</div>
			<div className={styles.game__right}> </div>
		</div>
	)
}
export default Game;