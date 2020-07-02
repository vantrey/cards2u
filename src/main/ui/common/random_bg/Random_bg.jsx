import React from 'react';
import bg_1 from './../../images/card-bg/card-bg-1.jpg';
import bg_2 from './../../images/card-bg/card-bg-2.jpg';
import bg_3 from './../../images/card-bg/card-bg-3.jpg';
import bg_4 from './../../images/card-bg/card-bg-4.jpg';
import bg_5 from './../../images/card-bg/card-bg-5.jpg';
import bg_6 from './../../images/card-bg/card-bg-6.jpg';
import bg_7 from './../../images/card-bg/card-bg-7.jpg';
import bg_8 from './../../images/card-bg/card-bg-8.jpg';
import bg_9 from './../../images/card-bg/card-bg-9.jpg';
import bg_10 from './../../images/card-bg/card-bg-10.jpg';
import bg_11 from './../../images/card-bg/card-bg-11.jpg';
// import bg_12 from './../../images/card-bg/card-bg-12.png';
import bg_13 from './../../images/card-bg/card-bg-13.jpg';
import bg_14 from './../../images/card-bg/card-bg-14.jpg';
import bg_15 from './../../images/card-bg/card-bg-15.jpg';
import bg_16 from './../../images/card-bg/card-bg-16.jpg';
import bg_17 from './../../images/card-bg/card-bg-17.jpg';
import bg_18 from './../../images/card-bg/card-bg-18.jpg';
import bg_19 from './../../images/card-bg/card-bg-19.jpg';
import bg_20 from './../../images/card-bg/card-bg-20.jpg';
import bg_21 from './../../images/card-bg/card-bg-21.jpg';
import bg_22 from './../../images/card-bg/card-bg-22.jpg';
import bg_23 from './../../images/card-bg/card-bg-23.jpg';
import bg_24 from './../../images/card-bg/card-bg-24.jpg';


let bgArray = [ bg_1, bg_2, bg_3, bg_4, bg_5, bg_6, bg_7, bg_8, bg_9, bg_10, bg_11, bg_13,
	bg_14, bg_15, bg_16, bg_17, bg_18, bg_19, bg_20, bg_21, bg_22, bg_23, bg_24 ];
export let maxNumber = bgArray.length;
export let cardBG;

export const getRandomBg = (maxNumber) => {
	let number = Math.floor (Math.random () * (maxNumber));
	return cardBG = bgArray[number];
}

getRandomBg (maxNumber);