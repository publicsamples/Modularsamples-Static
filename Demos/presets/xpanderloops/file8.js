var keys = new Tone.GrainPlayer({
			"url" : "/presets/xpanderloops/file8.mp3",
	"loop" : true
				}).connect(filter);
								
		
		document.querySelector("tone-grain-player").bind(keys);
document.querySelector("tone-play-toggle").bind(keys);

					
	
				

					
				

