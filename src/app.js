import dayjs from 'dayjs';
import 'dayjs/locale/es';
// import { initVisualizer } from './core';
import speech from './core/speech';
import visualizer from './core/visualizer';

dayjs.locale('es');

// visualizer();

window.onload = () => {
  window.addEventListener('click', () => {
    // initVisualizer();
    visualizer();
    speech();
  })
}
