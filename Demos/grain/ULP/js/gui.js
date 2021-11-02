function guiinit(){
	var dialwidth = parseInt($('.col-sm-2').css('width')) - ( parseInt($('.col-sm-2').css('width')) / 2);
	
	var settings = {
		'min':0,
		'max':100,
		'width' : dialwidth,
		"displayInput" :  false,
		"angleArc" : 180,
		"angleOffset" : -90
	};

	var bg = '#E4E4E4';
	var fg = '#2a6496';
	$("#attack").knob({
		'min':1,
		'max':100,
		'width' : dialwidth,
		"displayInput" :  false,
		"val": 50,
		"angleArc" : 180,
		"angleOffset" : -90,
		'bgColor': bg,
		'fgColor': fg,
		"change": function(v){
			attack = v / 100;
			
		}
	});
	
	$("#release").knob({
		'min':1,
		'max':100,
		'width' : dialwidth,
		"displayInput" :  false,
		"val": 50,
		"angleArc" : 180,
		"angleOffset" : -90,
		'bgColor': bg,
		'fgColor': fg,
		"change": function(v){
			release = v / 100;
			
		}
	});
	$('#density').knob({
		'min':0,
		'max':100,
		'width' : dialwidth,
		"displayInput" :  false,
		"val": 50,
		"angleArc" : 180,
		"angleOffset" : -90,
		'bgColor': bg,
		'fgColor': fg,
		"change": function(v){
			density = v / 100;
			
		}
	});
	$('#spread').knob({
		'min':0,
		'max':200,
		'width' : dialwidth,
		"displayInput" :  false,
		"val": 50,
		"angleArc" : 180,
		"angleOffset" : -90,
		'bgColor': bg,
		'fgColor': fg,
		"change": function(v){
			spread = v / 100;

			
		}
	});
	$('#pan').knob({
		'min':0,
		'max':200,
		'width' : dialwidth,
		"displayInput" :  false,
		"val": 50,
		"angleArc" : 180,
		"angleOffset" : -90,
		'bgColor': bg,
		'fgColor': fg,
		"change": function(v){
			pan = v / 100;

			
		}
	});
	
	$('#minus').click(function(){
		trans = trans * 0.5;
		$('#minus').css('opacity',0.3);
		setTimeout(function(){
			$('#minus').css('opacity',1);
		},200);
	});

	$('#plus').click(function(){
		trans = trans * 2;
		$('#plus').css('opacity',0.3);
		setTimeout(function(){
			$('#plus').css('opacity',1);
		},200);
	});

	var minus = document.getElementById('minus');
	minus.addEventListener('touchstart',function(e){
		e.preventDefault();
		$('#minus').css('opacity',0.3);
		trans = trans * 0.5;
	});
	minus.addEventListener('touchend',function(e){
		e.preventDefault();
		$('#minus').css('opacity',1);
	});

	var plus = document.getElementById('plus');
	plus.addEventListener('touchstart',function(e){
		e.preventDefault();
		$('#plus').css('opacity',0.3);
		trans = trans * 2;
	});
	plus.addEventListener('touchend',function(e){
		e.preventDefault();
		$('#plus').css('opacity',1);
	});


	function load(){
		$('#canvas').show();
		$('#canvas2').show();

		$('#canvas').animate({
			opacity : 1
		},1000);

		$('#canvas2').animate({
			opacity : 1
		},1000);

		$('#help').animate({
			opacity : 0
		},1000,function(){
			$('#help').hide();
			helpvisible = false;
		});
	}

	$('#canvas2').hide();
	$('#canvas').hide();
	$('#helpbutton').click(function(){
		if(helpvisible){
			load();
			helpvisible = false;

		}else{
			//$('#help').css('opacity','0');
			$('#canvas2').animate({
				opacity:0.1
			},1000,function(){
				$('#help').css('opacity',0);
				
				$('#canvas2').hide();
				$('#help').animate({
					opacity : 1
				},1000);

				$('#help').show();
				
			});

			$('#canvas').animate({
				opacity:0.0
			},1000,function(){
				$('#help').show();
				$('#canvas').hide();
			});
			
			helpvisible = true;
		}
		
	});
	
	$('.sample').hover(function(){
		$(this).css('opacity','0.5');
	},function(){
		$(this).css('opacity','1');
	});


	$('#sample1').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/AllTheSwingleLadies.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample2').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/BloopyBleeps.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample3').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/CDUO.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample4').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/CheezLeedz.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample5').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/CRMSLPAcid.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample6').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/CrplusetoLPG.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample7').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/CRVNOISEMSFILTERBEAT.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample8').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/DancingBoris.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample9').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/Delicates.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample10').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/DFFNoise.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample11').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/DMTELFCHORUS.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample12').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/DodgyDrums.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample13').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/EnergyBar.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample14').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/FMPERC.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample15').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/GhostWithAStick.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample16').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/GooglyEyes.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample17').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/HorridGlitch.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample18').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/JollyJaunt.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample19').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/Liver.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample20').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/LoopMangler.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample21').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/LoopMangler2.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample22').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/LoopMangler3.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample23').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/Micromess.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample24').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/MSFilterSineFM.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample25').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/MSFilterSineFMNOQ.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample26').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/NightWizardFunk.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample27').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/ProblemArea.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample28').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/RandomCrap.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample29').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/RaveChords.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample30').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/ResBounder.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample31').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/Returner.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample32').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/SaltySwingers.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample33').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/Splitbass1.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample34').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/Splitbass2.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});

	$('#sample35').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/WeirdAcid.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});
	
	$('#sample36').click(function(){
		//loading the sound with XML HTTP REQUEST

		var request = new XMLHttpRequest();
			request.open('GET','audio/WTBASS.mp3',true);
			request.responseType = "arraybuffer";
			request.onload = function(){
				context.decodeAudioData(request.response,function(b){
					buffer = b; //set the buffer
					data = buffer.getChannelData(0);
					isloaded = true;
					var canvas1 = document.getElementById('canvas');
					//initialize the processing draw when the buffer is ready
					var processing = new Processing(canvas1,waveformdisplay);
					load();

				},function(){
					console.log('loading failed');
					alert('loading failed');
					
				});
			};
		request.send();
		

	});


	//drop
	var drop = document.getElementById('waveform');

	drop.addEventListener("dragover",function(e){
    //prevents from loading the file in a new page
   	 e.preventDefault();
	},false);
	drop.addEventListener('drop',function(e){
		e.preventDefault();
		var file = e.dataTransfer.files[0];
		var reader = new FileReader();
    	reader.onload = function(e){
    		var array = e.target.result;
    		context.decodeAudioData(array,function(b){
    			
    			buffer = b
    			data = buffer.getChannelData(0);
    			var canvas1 = document.getElementById('canvas');
    			var processing = new Processing(canvas1,waveformdisplay);
    			load();

    		},function(){
    			console.log('loading failed');
    			alert('loading failed');
    		});
    	}
    	reader.readAsArrayBuffer(file);
	},false);

}