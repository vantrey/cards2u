import React from "react";


export const FireText = (text) => {

    let words, WrappedCharElements, wordsArray = [];

    const FindSpace = () => {
         words = text.split (' ').map ((w, i, wrds) => {
            if ( i === wrds.length - 1 ) {
                return [ ...w ]
            } else
                return [ ...w, '/' ]
        })
        return wordsArray = wordsArray.concat (...words);
    };

    console.log (wordsArray)

    const WrappedChar = () => {
        FindSpace();
        words = wordsArray.split (' ');
        WrappedCharElements = words.map ((ch, i) => ch === '/'
            ? <span key={i}>&#160;</span>
            : <span key={i}>{ch}</span>)
        return <div>{WrappedCharElements}</div>
    }
    WrappedChar();
    console.log (WrappedCharElements)
}

