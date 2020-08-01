
export const loudlinks = (isSound) => {

	// Create audio element and make it awesome
	let audioPlayer = document.createElement('audio'),
		mp3Source = document.createElement('source'),
		oggSource = document.createElement('source'),
		eventsSet = false,
		typeReg = /{{type}}/gi, // regEx for replacing {{type}} in the URLs
		mp3Location = 'sounds/mp3/', // mp3 sounds location
		oggLocation = 'sounds/ogg/'; // ogg sounds location

	audioPlayer.setAttribute('preload',true); // audio element preload attribute
	mp3Source.setAttribute('type','audio/mpeg');
	oggSource.setAttribute('type','audio/ogg');

	// appending the sources to the player element
	audioPlayer.appendChild(mp3Source);
	audioPlayer.appendChild(oggSource);

	// appending audioplayer to body
	document.body.appendChild(audioPlayer);

	// Play audio
	function playAudio() {
		// get the audio source and appending it to <audio>
		let audioSrc = this.getAttribute('data-sound') || this.getAttribute('data-src'), // prefer `data-sound` attribute, but allow for backwards compatibility with `data-src`
			soundMp3Link,
			soundOggLink; // getting the sound name from the data-sound Attribute

		// check if the data-sound Attribute is filled (there is a name of a sound file), or exit
		if ( !audioSrc ) { return; }


		if ( audioSrc.indexOf('{{type}}') > 0 ) {
			// Replace all instances of '{{type}}' in the data-sound attribute to 'mp3' and 'ogg' respectfully.
			// For example: http://loudlinks.rocks/sounds/{{type}}/magic.{{type}} becomes http://loudlinks.rocks/sounds/mp3/magic.mp3 and http://loudlinks.rocks/sounds/ogg/magic.ogg
			soundMp3Link = audioSrc.replace(typeReg,'mp3');
			soundOggLink = audioSrc.replace(typeReg,'ogg');
		} else { // Allow for the original relative URLs
			// soundMp3Link = mp3Location + audioSrc + '.mp3';
			// soundOggLink = oggLocation + audioSrc + '.ogg';
			soundMp3Link = audioSrc;
			soundOggLink = audioSrc;
		}

		// Only set the `error` events once.
		if ( !eventsSet ) {
			eventsSet = true;
			mp3Source.addEventListener('error', function(){
				console.error('😶 D\'oh! The mp3 file URL is wrong!');
			});
			oggSource.addEventListener('error', function(){
				console.error('😶 D\'oh! The ogg file URL is wrong!');
			});
		}

		// Only reset `src` and reload if source is different
		if ( mp3Source.src !== soundMp3Link || oggSource.src !== soundOggLink ) {
			mp3Source.setAttribute('src', soundMp3Link); // putting the mp3 sound link in the src Attribute of <source>
			oggSource.setAttribute('src', soundOggLink); // putting the mp3 sound link in the src Attribute of <source>
			audioPlayer.load();
		}

		audioPlayer.play();
	}

	// Stop audio
	const stopAudio = () => {
		audioPlayer.pause();
		audioPlayer.currentTime = 0; // reset to beginning
	}

	// Add `hover` related event listeners
	const trackHover = (element) => {
		element.addEventListener('mouseenter', playAudio); // play audio on hover
		element.addEventListener('mouseleave', stopAudio); // stop audio on mouse out
		element.addEventListener('touchmove', stopAudio); // stop audio on touch and move
		element.addEventListener('click', stopAudio); // stop audio on click
	}

	let linkPlayAudio = playAudio;

	// Add `click` event listeners
	const trackClick = (element, isSound) => {
		if (isSound) {
			console.log ('Useeff-isSound-true-loud')
			element.addEventListener('click', playAudio);
		} else {
			console.log ('Useeff-isSound-false-loud')
			element.removeEventListener('click', linkPlayAudio);
		}

	}

	// Go crazy! Scan all the links and see if they have the 'data-sound' Attribute and attach the events
	const loudlinks = (isSound) => {
		let hoverLinks = document.getElementsByClassName('soundHover'),
			clickLinks = document.getElementsByClassName('soundClick'),
			hoverLength = hoverLinks.length,
			clickLength = clickLinks.length,
			i;

		for (i = 0; i < hoverLength; i++) { trackHover(hoverLinks[i], isSound); } // Hover
		for (i = 0; i < clickLength; i++) { trackClick(clickLinks[i], isSound); } // Click

		return loudlinks;
	}

	return loudlinks(isSound);

};