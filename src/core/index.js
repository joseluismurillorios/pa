import AudioVisualizer from './audio-visualizer';

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

export const initVisualizer = () => {
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