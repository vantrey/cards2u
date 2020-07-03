import React from 'react';
import {Route} from 'react-router-dom';
import Deck_blue2 from "../game/deck/Deck_blue2";
import Deck_green from "../game/deck/Deck_green";
import Deck_red from "../game/deck/Deck_red";
import Deck_yellow from "../game/deck/Deck_yellow";
import Deck_green2 from "../game/deck/Deck_green2";
import Deck_blue from "../game/deck/Deck_blue";


export const GAME_PATH_DECK_BLUE = '/game';
export const GAME_PATH_DECK_GREEN = '/game/deckgreen';
export const GAME_PATH_DECK_RED = '/game/deckred';
export const GAME_PATH_DECK_PINK = '/game/deckpink';
export const GAME_PATH_DECK_YELLOW = '/game/deckyellow';
export const GAME_PATH_DECK_PURPLE = '/game/deckpurple';

const DecksRoutes = ({ setCardBg }) => {

    return (
        <>
            <Route exact path={GAME_PATH_DECK_BLUE} render={() => <Deck_blue setCardBg={setCardBg}/>} />
            <Route exact path={GAME_PATH_DECK_PURPLE} render={() => <Deck_blue2 setCardBg={setCardBg}/>} />
            <Route exact path={GAME_PATH_DECK_GREEN} render={() => <Deck_green setCardBg={setCardBg}/>}/>
            <Route exact path={GAME_PATH_DECK_PINK} render={() => <Deck_green2 setCardBg={setCardBg}/>}/>
            <Route exact path={GAME_PATH_DECK_RED} render={() => <Deck_red setCardBg={setCardBg}/>}/>
            <Route exact path={GAME_PATH_DECK_YELLOW} render={() => <Deck_yellow setCardBg={setCardBg}/>}/>
        </>
    )
}
export default DecksRoutes;