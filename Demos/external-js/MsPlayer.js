var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

						  function loadJS(file) {
						  // DOM: Create the script element
						  var jsElm = document.createElement("script");
						  // set the type attribute
						  jsElm.type = "application/javascript";
						  // make the script element load file
						  jsElm.src = file;
						  // finally insert the element to the body element in order to load the script
						  document.body.appendChild(jsElm);
						  }



						  var midi = {};

						  WebMidi.enable(function (err) {

						      if (err) {
						        console.log("WebMidi could not be enabled.", err);
						        return;
						      } else {
						        console.log("WebMidi enabled!");
						        console.log(WebMidi.inputs);
						           console.log(WebMidi.outputs);
						      }

						      WebMidi.inputs.forEach((o) => {
						        console.log(o.name)

						      o.addListener('noteon', "all", function (e) {
						 
						        console.log(e)

						          let octave = parseInt(e.note.octave);
						          let note = e.note.name + octave;
						        console.log(note)

						          if (!(note in midi)) {
						     
						              console.log(keys)
						              keys.triggerAttack(note, Tone.context.currentTime + 0.01, e.velocity);
						              midi[note] = keys;
						          }
						      });

						          o.addListener('noteoff', "all", function (e) {
						              let octave = parseInt(e.note.octave);
						              let note = e.note.name + octave;
						              let keys = midi[note];

						              if (keys) {
						                  keys.triggerRelease(note, undefined, e.velocity);
						                  delete midi[note];
						              }
						          });
						      });

						  });




						  //////////////////////////

						  var eq = new Tone.Volume({
						      "volume" : -12

						  }).toMaster({
						  })

						  var verb = new Tone.Freeverb({
						  "wet" : 0.0
						  }).connect(eq);    

						  //the feedback delay
						  var feedbackDelay = new Tone.PingPongDelay({
						  "wet" : 0.0
						  }).connect(verb);        

						  var chorus = new Tone.Chorus({
						      "wet" : 0.0
						  }).connect(feedbackDelay);        


						  var filter = new Tone.AutoFilter({
						      "wet" : 0.0
						  }).connect(chorus).start();        


						  //the notes
						  var noteNames = ["B3", "A#3", "A3", "G#3", "G3", "F#3", "F3", "E3","D#3", "D3", "C#3", "C3", "B2", "A#2", "A2", "G#2","G2", "F#2", "F2", "E2","D#2", "D2", "C#2", "C2"  ];






						  var loop = new Tone.Sequence(function(time, col){
						  var column = document.querySelector("#seq1").currentColumn;
						  column.forEach(function(val, i){
						  if (val){

						  //slightly randomized velocities
						  keys.triggerAttackRelease(noteNames[i], "0.25", time);
						  }
						  });

						  Tone.Transport.start("+0.2");
						  //set the columne on the correct draw frame
						  Tone.Draw.schedule(function(){
						  document.querySelector("#seq1").setAttribute("highlight", col);
						  }, time);
						  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n").start(0);


						  function stop() {
						  Tone.Transport.stop();
						  keys.disconnect();
						  keys.dispose();
						  }



						  Nexus.colors.accent = "#806f14"
						  Nexus.colors.fill = "#ecd7a2"


						  //aENV Controls
						  var attack = new Nexus.Slider('#attack', {
						  'mode': 'absolute', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.01,
						  'max': 10.00,
						  'step': 0,
						  'value': 0
						  })

						  attack.on('change', function(v) {
						  keys.attack = v;
						  });


						  var release = new Nexus.Slider('#release', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.01,
						  'max': 10.00,
						  'step': 0,
						  'value': 0
						  })

						  release.on('change', function(v) {
						  keys.release = v;
						  });



						  //chorus Controls

						  var cwet = new Nexus.Slider('#cwet', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.0,
						  'max': 0.5,
						  'step': 0,
						  'value': 0
						  })

						  cwet.on('change', function(v) {
						  chorus.wet.value = v;
						  });


						  var cfreq = new Nexus.Slider('#cfreq', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.1,
						  'max': 2.0,
						  'step': 0,
						  'value': 0.60
						  })

						  cfreq.on('change', function(v) {
						  chorus.frequency.value = v;
						  });

						  //delay Controls

						  var dwet = new Nexus.Slider('#dwet', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.0,
						  'max': 0.7,
						  'step': 0,
						  'value': 0
						  })

						  dwet.on('change', function(v) {
						  feedbackDelay.wet.value = v;
						  });

						  var dtime = new Nexus.Slider('#dtime', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.01,
						  'max': 1.0,
						  'step': 0,
						  'value': 0.25
						  })

						  dtime.on('change', function(v) {
						  feedbackDelay.delayTime.value = v;
						  });


						  //Reverb Controls

						  var rwet = new Nexus.Slider('#rwet', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 0.0,
						  'max': 0.7,
						  'step': 0,
						  'value': 0
						  })

						  rwet.on('change', function(v) {
						  verb.wet.value = v;
						  });


						  //Transport/seq Controls

						  var vol = new Nexus.Slider('#vol', {size: [25, 100], min: -36, max: 12,  value: -12});
						  vol.on('change', v => eq.volume.value = v)


						  var tempo = new Nexus.Slider('#tempo', {
						  'mode': 'relative', // "absolute" or "absolute"
						  'size': [25, 100],
						  'min': 60,
						  'max': 240,
						  'step': 0,
						  'value': 120
						  })

						  tempo.on('change', function(v) {
						  Tone.Transport.bpm.value = v;
						  });



						  document.querySelector("tone-play-toggle").bind(Tone.Transport);
						  Tone.Transport.on("stop", () => {
						  setTimeout(() => {
						  document.querySelector("#seq1").setAttribute("highlight", "-1");

						  }, 100);

						  });
						         
						  //keys


						  var keyboard = new AudioKeys(
						      {
						          rootNote: 36
						  
						      }
						  );

						  Tone.context.currentTime + 0.01

						  keyboard.down(function(note) {
						  keys.triggerAttack(Tone.Frequency(note.note, "midi").toNote());
						  });

						  keyboard.up(function(note) {
						  keys.triggerRelease(Tone.Frequency(note.note, "midi").toNote());
						  });

						  // Enable WebMidi.js