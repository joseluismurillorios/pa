import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

class AudioVisualizer {
  constructor( audioContext, processFrame, processError ) {
    this.audioContext = audioContext;
    this.processFrame = processFrame;
    this.connectStream = this.connectStream.bind( this );
    navigator.mediaDevices.getUserMedia( { audio: true, video: false } )
      .then( this.connectStream )
      .catch( ( error ) => {
        if ( processError ) {
          processError( error );
        }
      } );
  }

  connectStream( stream ) {
    this.analyser = this.audioContext.createAnalyser();
    const source = this.audioContext.createMediaStreamSource( stream );
    source.connect( this.analyser );
    this.analyser.smoothingTimeConstant = 0.5;
    this.analyser.fftSize = 32;

    this.initRenderLoop( this.analyser );
  }

  initRenderLoop() {
    const frequencyData = new Uint8Array( this.analyser.frequencyBinCount );
    const processFrame = this.processFrame || ( () => {} );

    const renderFrame = () => {
      this.analyser.getByteFrequencyData( frequencyData );
      processFrame( frequencyData );

      requestAnimationFrame( renderFrame );
    };
    requestAnimationFrame( renderFrame );
  }
}

const visualMainElement = document.querySelector( 'main' );
const visualValueCount = 16;
let visualElements;
const createDOMElements = () => {
  let i;
  for ( i = 0; i < visualValueCount; ++i ) {
    const elm = document.createElement( 'div' );
    visualMainElement.appendChild( elm );
  }

  visualElements = document.querySelectorAll( 'main div' );
};
createDOMElements();

const init = () => {
  // Creating initial DOM elements
  const audioContext = new AudioContext();
  const initDOM = () => {
    visualMainElement.innerHTML = '';
    createDOMElements();
  };
  initDOM();

  // Swapping values around for a better visual effect
  const dataMap = { 0: 15, 1: 10, 2: 8, 3: 9, 4: 6, 5: 5, 6: 2, 7: 1, 8: 0, 9: 4, 10: 3, 11: 7, 12: 11, 13: 12, 14: 13, 15: 14 };
  const processFrame = ( data ) => {
    const values = Object.values( data );
    let i;
    for ( i = 0; i < visualValueCount; ++i ) {
      const value = values[ dataMap[ i ] ] / 255;
      const elmStyles = visualElements[ i ].style;
      elmStyles.transform = `scaleY( ${ value } )`;
      elmStyles.opacity = Math.max( .25, value );
    }
  };

  const processError = () => {
    visualMainElement.classList.add( 'error' );
    visualMainElement.innerText = 'Please allow access to your microphone in order to see this demo.\nNothing bad is going to happen... hopefully :P';
  }

  const a = new AudioVisualizer( audioContext, processFrame, processError );
};

window.onload = () => {
  const speech = new p5.Speech(() => {
    console.log(speech.listVoices());
  });

  function voiceReady() {
    console.log('voice ready');
    //console.log(speech.voices);
    speech.setVoice('Juan');
    init();
  }

  speech.onLoad = voiceReady;

  speech.started(startSpeaking);
  speech.ended(endSpeaking);

  function startSpeaking() {
    console.log('talking', annyang.isListening());
    if (annyang.isListening()) {
      annyang.pause();
    }
  }

  function endSpeaking() {
    // while (condition) {
      
    // }
    console.log('speech', speech.synth);
    console.log('note talking', annyang.isListening());
    setTimeout(() => {
      if (!annyang.isListening()) {
        annyang.resume();
      }
      console.log('speech', speech.synth);
    }, 3000);
  }

  const a = "José";

  function hi() {
    speech.speak(`Hola ${a}`);
  }

  const loc = () => {
    alert(
      "List of commands-\n'hello (jarvis)': To give greetings\n'goodbye (jarvis)': to tell goodbye\n'search for *something': to google search'website search *website': to search a Website\n'repeat *saysome': to repeat what you say\n'close tab': go back to jarvis tab\n'what is the time': tells the time and daten'tell me a joke': tells a cheesy joke"
    )
  };

  const bye = () => {
    speech.speak(`Adiós ${a}, y que tengas un día muy agradable y agradable, mantén la esperanza y sé tonto, ese es el lema`);
  };
  const search = something => {
    window.open(`https://www.google.ae/?gfe_rd=cr&ei=08dvWLvzJuHu8AeY9a74Aw#safe=strict&q=${something}`);
    speech.speak(`Buscando resultados para ${something}`);
  };

  const searchWebsite = website => {
    window.open(`https://www.${website}/`);
    speech.speak(`Abriendo ${website}`);
  };

  const how = () => {
    speech.speak("Estoy bien señor. ¿Puedo preguntar cómo estás tú?");
  };

  const who = () => {
    speech.speak(`Su nombre señor, es ${a} y eres realmente la mejor persona que he conocido`);

  };
  const saysome = say => {
    speech.speak(say);
  };

  const ctab = () => {
    open(location, '_self').close();
    speech.speak("pestaña cerrada");
  };

  const date = () => {
    speech.speak(dayjs().format('dddd D [de] MMMM [del] YYYY'));
  };

  if (annyang) {
    // Let's define a command.
    annyang.setLanguage('es-MX');
    // const commands = {
    //   'commands': loc,
    //   'hola (jarvis)': hi,
    //   'bye (jarvis)': bye,
    //   'busca *something': search,
    //   'busca la página *website': searchWebsite,
    //   'repite *saysome': saysome,
    //   'cierra la pestaña': ctab,
    //   'qué hora es': date,
    //   // 'cuéntame un chiste': joke,
    //   // 'cuéntame otro chiste': anotherjoke,
    //   'cómo estás': how,
    //   'quién soy yo': who

    // };
    // // Add our commands to annyang
    // annyang.addCommands(commands);

    annyang.debug(true);

    // annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
    //   console.log('resultMatch');
    //   console.log(userSaid); // sample output: 'hello'
    //   console.log(commandText); // sample output: 'hello (there)'
    //   console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    // });

    annyang.addCallback('result', function(userSaid, commandText, phrases) {
      console.log('resultMatch');
      console.log(userSaid); // sample output: 'hello'
      console.log(commandText); // sample output: 'hello (there)'
      console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    });

    annyang.start();
  }
}
