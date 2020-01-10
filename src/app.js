import dayjs from 'dayjs';
import 'dayjs/locale/es';
// import { initVisualizer } from './core';
import speech from './core/speech';
import visualizer from './core/visualizer';

dayjs.locale('es');

// visualizer();
let started = false;

window.onload = () => {
  window.addEventListener('click', () => {
    // initVisualizer();
    if (!started) {
      visualizer();
      speech();
      started = true;
    }
  })
}
