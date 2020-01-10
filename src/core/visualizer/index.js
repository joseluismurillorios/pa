import loopVisualizer from './visualizer';
import { tween } from 'shifty';

export default () => {
	/**
 *
 * Loop Waveform Visualizer by Felix Turner
 * www.airtight.cc
 *
 * Audio Reactive Waveform via Web Audio API.
 *
 */
	let LoopVisualizer;
	let mouseX = 0;
	let mouseY = 0;
	let windowHalfX = window.innerWidth / 2;
	let windowHalfY = window.innerHeight / 2;
	let camera;
	let scene;
	let renderer;
	let container;
	let source;
	let analyser;
	let buffer;
	let audioBuffer;
	let audioContext;
	let started = false;

	$(document).ready(() => {
		//Chrome is only browser to currently support Web Audio API
		const is_webgl = (() => {
			try {
				return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
			} catch (e) {
				return false;
			}
		})();

		if (!is_webgl) {
			$('#loading').html(
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.<br />' +
				'Find out how to get it <a href="http://get.webgl.org/">here</a>, or try restarting your browser.'
			);
		} else {
			$('#loading').html('drop mp3 here or <a id="loadSample">load sample mp3</a>');
			init();
		}
	});

	function init() {
		//init 3D scene
		container = document.createElement('div');
		document.body.appendChild(container);
		camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000000);
		camera.position.z = 350;
		scene = new THREE.Scene();
		scene.add(camera);
		renderer = new THREE.WebGLRenderer({
			antialias: false,
			sortObjects: false,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);

		container.appendChild(renderer.domElement);

		// stop the user getting a text cursor
		document.onselectStart = () => false;

		//add stats
		// stats = new Stats();
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.top = '0px';
		// container.appendChild(stats.domElement);

		//init listeners
		// $('#loadSample').click(loadSampleAudio);
		$(document).click(() => {
			initAudio();
		});
		$(document).mousemove(onDocumentMouseMove);
		$(document).mouseleave(() => {
			tween({
				from: { x: mouseX, y: mouseY },
				to: { x: -0.5, y: -0.5 },
				duration: 1500,
				easing: 'easeOutQuad',
				step: (state) => {
					mouseX = state.x;
					mouseY = state.y;
				},
			}).then(
				() => console.log('All done!')
			);
		});
		$(window).resize(onWindowResize);
		document.addEventListener('drop', onDocumentDrop, false);
		document.addEventListener('dragover', onDocumentDragOver, false);

		onWindowResize(null);
	}

	// function loadSampleAudio() {
	// 	$('#loading').text('loading...');

	// 	audioContext = new window.AudioContext();

	// 	source = audioContext.createBufferSource();
	// 	analyser = audioContext.createAnalyser();
	// 	analyser.fftSize = 1024;
	// 	analyser.smoothingTimeConstant = 0.1;

	// 	// Connect audio processing graph
	// 	source.connect(analyser);
	// 	analyser.connect(audioContext.destination);

	// 	// loadAudioBuffer('audio/EMDCR.mp3');
	// }

	// function loadAudioBuffer(url) {
	// 	// Load asynchronously
	// 	const request = new XMLHttpRequest();
	// 	request.open('GET', url, true);
	// 	request.responseType = 'arraybuffer';

	// 	request.onload = () => {
	// 		audioContext.decodeAudioData(
	// 			request.response,
	// 			buffer => {
	// 				audioBuffer = buffer;
	// 				finishLoad();
	// 			},
	// 			e => {
	// 				console.log(e);
	// 			}
	// 		);
	// 	};
	// 	request.send();
	// }

	// function finishLoad() {
	// 	source.buffer = audioBuffer;
	// 	source.loop = true;
	// 	source.start(0.0);
	// 	startViz();
	// }

	function onDocumentMouseMove({ clientX, clientY }) {
		mouseX = (clientX - windowHalfX) * -0.5;
		mouseY = (clientY - windowHalfY) * -0.5;
	}

	function onWindowResize(event) {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
		//stats.update();
	}

	function render() {
		LoopVisualizer.update();

		//mouse tilt
		const xrot = mouseX / window.innerWidth * Math.PI + Math.PI;
		const yrot = mouseY / window.innerHeight * Math.PI + Math.PI;
		LoopVisualizer.loopHolder.rotation.x += (-yrot - LoopVisualizer.loopHolder.rotation.x) * 0.3;
		LoopVisualizer.loopHolder.rotation.y += (xrot - LoopVisualizer.loopHolder.rotation.y) * 0.3;

		renderer.render(scene, camera);
	}

	$(window).mousewheel((event, delta) => {
		//set camera Z
		camera.position.z -= delta * 50;
	});

	function onDocumentDragOver(evt) {
		evt.stopPropagation();
		evt.preventDefault();
		return false;
	}

	function onDocumentDrop(evt) {
		evt.stopPropagation();
		evt.preventDefault();

		//clean up previous mp3
		if (source) {
			source.disconnect();
			LoopVisualizer.remove();
		}

		$('#loading').show();
		$('#loading').text('loading...');

		const droppedFiles = evt.dataTransfer.files;

		const reader = new FileReader();

		reader.onload = ({ target }) => {
			const data = target.result;
			initAudio(data);
		};

		reader.readAsArrayBuffer(droppedFiles[0]);
	}

	function initAudio(data) {
		navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then((stream) => {
			audioContext = new window.AudioContext();
      // const gainNode = context.createGain();

			source = audioContext.createMediaStreamSource(stream);
			createAudio();
		});
		// audioContext = new window.AudioContext();
		
		// source = audioContext.createBufferSource();

		// if (audioContext.decodeAudioData) {
		// 	audioContext.decodeAudioData(
		// 		data,
		// 		buffer => {
		// 			source.buffer = buffer;
		// 			createAudio();
		// 		},
		// 		e => {
		// 			console.log(e);
		// 			$('#loading').text('cannot decode mp3');
		// 		}
		// 	);
		// } else {
		// 	source.buffer = audioContext.createBuffer(data, false);
		// 	createAudio();
		// }
	}

	function createAudio() {
		analyser = audioContext.createAnalyser();
		analyser.fftSize = 1024;
		analyser.smoothingTimeConstant = 0.1;
		// source.connect(audioContext.destination);
		source.connect(analyser);
		// source.start(0);
		// source.loop = true;

		startViz();
	}

	function startViz() {
		$('#loading').hide();

		LoopVisualizer = loopVisualizer(scene, analyser);
		LoopVisualizer.init();

		if (!started) {
			started = true;
			animate();
		}
	}
}