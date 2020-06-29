import React  from 'react';
import bg_1  from './../../images/card-bg/card-bg-1.jpg';
import bg_2  from './../../images/card-bg/card-bg-2.jpg';
import bg_3  from './../../images/card-bg/card-bg-3.jpg';
import bg_4  from './../../images/card-bg/card-bg-4.jpg';


let bgArray = [bg_1, bg_2, bg_3, bg_4];
let maxNumber = bgArray.length;

const getRandomInt = ( maxNumber ) => {
	return Math.floor(Math.random() * (maxNumber + 1)) ;
}

let number = getRandomInt(maxNumber);

console.log (number)

export let cardBG = bgArray[number];