export const dragHandler = {
	lastClientX: 0,
	start: function (e, element) {

		if (e.button == 0) {
			console.log ("start")
			window.addEventListener('mousemove', dragHandler.drag(element));
			dragHandler.lastClientX = e.clientX;
			e.preventDefault();
		}
	},
	end: function (e, element) {
		console.log ("end")
		if (e.button == 0) {
			window.removeEventListener('mousemove', dragHandler.drag(element));
		}
	},
	drag: function (e, element) {
		console.log ("delta")
		let delta = e.clientX - dragHandler.lastClientX;
		// window.scrollTo(window.scrollX - delta, window.scrollY);
		element.scrollLeft = delta;
		dragHandler.lastClientX = e.clientX;
		e.preventDefault();
	}
};

// document.body.addEventListener('mousedown', dragHandler.start);
// document.body.addEventListener('mouseup', dragHandler.end);

//
// window.scrollTo({
// 	left: window.scrollX - delta,
// 	top: 0,
// 	behavior: "smooth"
// });