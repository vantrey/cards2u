import React, { useEffect, useState } from 'react';
import styles from './Matrix.module.css';


const Matrix = () => {

	const [ closeMatrix, setCloseMatrix ] = useState (false);

	useEffect (() => {
		let q = document.getElementById('q');
		let width = q.width = 315;
		let height = q.height = 950;
		let letters = Array(256).join(1).split('');

		let draw = function () {
			q.getContext('2d').fillStyle='rgba(0,0,0,0)'; //Тут цвет фона
			q.getContext('2d').fillRect(0,0,width,height);
			q.getContext('2d').fillStyle='#00aaff'; //Тут цвет букв
			letters.map(function(y_pos, index) {
				let text = String.fromCharCode(512+Math.random()*75);
				let x_pos = index * 11;
				q.getContext('2d').fillText(text, x_pos, y_pos);
				letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
			});
		};
		setInterval(draw, 33);
	}, []);

	useEffect (() => {
			setTimeout (() => {
				setCloseMatrix (true);
			}, 7000);

	}, [closeMatrix]);

	const classForMatrix = closeMatrix ? `${styles.matrix__wrap_active}` : `${styles.matrix__wrap}`;

	return (
		<div className={classForMatrix}>
			<canvas id="q"> </canvas>
		</div>

	)
}

export default Matrix;