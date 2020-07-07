export const dragHandler = {
	lastClientX: 0,
	start: function (e) {
		if (e.button == 0) {
			window.addEventListener('mousemove', dragHandler.drag);
			dragHandler.lastClientX = e.clientX;
			e.preventDefault();
		}
	},
	end: function (e) {
		if (e.button == 0) {
			window.removeEventListener('mousemove', dragHandler.drag);
		}
	},
	drag: function (e) {
		let delta = e.clientX - dragHandler.lastClientX;
		window.scrollTo(window.scrollX - delta, window.scrollY);
		dragHandler.lastClientX = e.clientX;
		e.preventDefault();
	}
};

// document.body.addEventListener('mousedown', dragHandler.start);
// document.body.addEventListener('mouseup', dragHandler.end);