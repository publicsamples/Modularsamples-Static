var keys = new Tone.GrainPlayer({
			"url" : "/presets/drones/BANGER.mp3"
	
		}).connect(filter);
					

				document.querySelector("tone-grain-player").bind(keys);
document.querySelector("tone-play-toggle").bind(keys);
					
				


	
	