import dayjs from 'dayjs';

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

  if (annyang) {
    // Let's define a command.
    annyang.setLanguage('es-MX');
    const commands = {
      'commands': loc,
      '(otro) hola (jarvis)': hi,
      'adiós (jarvis)': bye,
      '(jarvis) busca *something': search,
      '(jarvis) abre *website': searchWebsite,
      'repite *saysome': saysome,
      'cierra la pestaña': ctab,
      'qué hora es': hour,
      'qué fecha es': date,
      // 'cuéntame un chiste': joke,
      // 'cuéntame otro chiste': anotherjoke,
      '(jarvis) cómo estás': how,
      'quién soy yo': who

    };
    // Add our commands to annyang
    annyang.addCommands(commands);

    annyang.debug(true);

    annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
      console.log('resultMatch');
      console.log(userSaid);
      console.log(commandText);
      console.log(phrases);
    });

    annyang.addCallback('result', function(userSaid, commandText, phrases) {
      console.log('resultMatch');
      console.log(userSaid);
    });

    annyang.start();
  }
}