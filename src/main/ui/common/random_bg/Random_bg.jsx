import React from 'react';
import bg_1 from './../../images/card-bg/card-bg-1.jpg';
import bg_2 from './../../images/card-bg/card-bg-2.jpg';
import bg_3 from './../../images/card-bg/card-bg-3.jpg';
import bg_4 from './../../images/card-bg/card-bg-4.jpg';


let bgArray = [ bg_1, bg_2, bg_3, bg_4 ];
export let maxNumber = bgArray.length;
export let cardBG;

export const getRandomBg = (maxNumber) => {
	let number = Math.floor (Math.random () * (maxNumber));
	return cardBG = bgArray[number];
}

getRandomBg (maxNumber);


