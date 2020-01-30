import dayjs from 'dayjs';
import Artyom from 'artyom.js';
// import { debounce } from '../helpers/helper-util';
import debounce from 'lodash/debounce';

// Create a variable that stores your instance
const artyom = new Artyom();

export default () => {
  const speech = new p5.Speech();

  function voiceReady() {
    console.log('voice ready');
    //console.log(speech.voices);
    speech.setVoice('Juan');
    // speech.setPitch(1.5);
    // speech.setRate(0.8);
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

  // const a = "José";

  function hi(a) {
    speech.speak(`Hola ${a}`);
  }

  const loc = () => {
    alert(
      "List of commands-\n'hello (chuy)': To give greetings\n'goodbye (chuy)': to tell goodbye\n'search for *something': to google search'website search *website': to search a Website\n'repeat *saysome': to repeat what you say\n'close tab': go back to chuy tab\n'what is the time': tells the time and daten'tell me a joke': tells a cheesy joke"
    )
  };

  const bye = () => {
    speech.speak(`Adiós ${a}, y que tengas un día muy agradable`);
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
    speech.speak("Estoy bien. ¿Puedo preguntar cómo estás tú?");
  };

  const who = () => {
    speech.speak(`Su nombre es ${a} y eres realmente la mejor persona que he conocido`);

  };
  const saysome = say => {
    speech.speak(say);
  };

  const ctab = () => {
    open(location, '_self').close();
    speech.speak("pestaña cerrada");
  };

  const hour = () => {
    speech.speak(dayjs().format('[son las] H [horas con] m [minutos]'));
  };

  const date = () => {
    speech.speak(dayjs().format('dddd D [de] MMMM [del] YYYY'));
  };

  // if (annyang) {
  //   // Let's define a command.
  //   annyang.setLanguage('es-MX');
  //   const commands = {
  //     'commands': loc,
  //     '(otro) hola (chuy)': hi,
  //     'adiós (chuy)': bye,
  //     '(chuy) busca *something': search,
  //     '(chuy) abre *website': searchWebsite,
  //     'repite *saysome': saysome,
  //     'cierra la pestaña': ctab,
  //     'qué hora es': hour,
  //     'qué fecha es': date,
  //     // 'cuéntame un chiste': joke,
  //     // 'cuéntame otro chiste': anotherjoke,
  //     '(chuy) cómo estás': how,
  //     'quién soy yo': who
  //   };
  //   // Add our commands to annyang
  //   annyang.addCommands(commands);

  //   annyang.debug(true);

  //   annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
  //     console.log('resultMatch');
  //     console.log(userSaid);
  //     console.log(commandText);
  //     console.log(phrases);
  //   });

  //   annyang.addCallback('result', function(userSaid, commandText, phrases) {
  //     console.log('resultMatch');
  //     console.log(userSaid);
  //   });

  //   annyang.start();
  // }

  // // Add some commandsDemostrations in the normal way
  // artyom.addCommands([
  //   {
  //       indexes: [/hola|Hola/g],
  //       smart:true,
  //       action: (i,wildcard) => {
  //           console.log(i, wildcard)
  //           artyom.say("Dijiste: "+ wildcard, {
  //             lang: "es-MX",
  //           });
  //       }
  //   },
  // ]);

  // // Start the commands !
  // artyom.initialize({
  //   lang: "es-MX", // GreatBritain english
  //   continuous: true, // Listen forever
  //   soundex: true,// Use the soundex algorithm to increase accuracy
  //   debug: true, // Show messages in the console
  //   // executionKeyword: "and do it now",
  //   listen: true, // Start to listen commands !

  //   // If providen, you can only trigger a command if you say its name
  //   // e.g to trigger Good Morning, you need to say "Jarvis Good Morning"
  //   // name: "Jarvis" 
  // }).then(() => {
  //   console.log("Artyom has been succesfully initialized");
  // }).catch((err) => {
  //   console.error("Artyom couldn't be initialized: ", err);
  // });
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  let finalTranscript = '';
  let recognition = new window.SpeechRecognition();

  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = true;
  recognition.lang = "es-MX";

  const onSpeech = (speech) => {
    console.log('speech', speech);
  }

  const debounced = debounce(onSpeech, 2000);

  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        console.log('isFinal', interimTranscript);
        debounced(interimTranscript);
      } else {
        interimTranscript += transcript;
      }
    }
    debounced(interimTranscript);

    console.log('interimTranscript', interimTranscript);
  }
  recognition.start();
}