import ImprovedNoise from './improvedNoise';

const LoopVisualizer = (scene, analyser) => {
  const RINGCOUNT = 60;
  const SEPARATION = 30;
  const INIT_RADIUS = 50;
  const SEGMENTS = 512;
  const VOL_SENS = 2;
  const BIN_COUNT = 512;

  let rings = [];
  let geoms;
  let materials = [];

  let levels = [];
  //var waves = [];
  let colors = [];

  const loopHolder = new THREE.Object3D();
  const perlin = new ImprovedNoise();
  let noisePos = 0;
  let freqByteData;
  let timeByteData;

  let loopGeom;//one geom for all rings


  function init() {

    rings = [];
    geoms = [];
    materials = [];
    levels = [];
    //waves = [];
    colors = [];

    ////////INIT audio in
    freqByteData = new Uint8Array(BIN_COUNT);
    timeByteData = new Uint8Array(BIN_COUNT);

    scene.add(loopHolder);

    let scale = 1;
    const alt = 0;

    const circleShape = new THREE.Shape();
    circleShape.absarc(0, 0, INIT_RADIUS, 0, Math.PI * 2, false);
    //createPointsGeometry returns (SEGMENTS * 2 )+ 1 points
    loopGeom = circleShape.createPointsGeometry(SEGMENTS / 2);
    loopGeom.dynamic = true;

    //create rings
    for (let i = 0; i < RINGCOUNT; i++) {

      const m = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        //depthTest : false,
        transparent: true

      });

      const line = new THREE.Line(loopGeom, m);

      rings.push(line);
      //geoms.push(geom);
      materials.push(m);
      scale *= 1.02;
      line.scale.x = scale;
      line.scale.y = scale;

      loopHolder.add(line);

      levels.push(0);
      //waves.push(emptyBinData);
      colors.push(0);

      //rings
      //if (Math.floor(i /20) % 2 == 0 ){
      // /line.visible = false;
      // /}

    }




  }

  function remove() {

    if (loopHolder) {
      for (let i = 0; i < RINGCOUNT; i++) {
        loopHolder.remove(rings[i]);
      }

    }
  }

  function update() {

    //analyser.smoothingTimeConstant = 0.1;
    analyser.getByteFrequencyData(freqByteData);
    analyser.getByteTimeDomainData(timeByteData);

    //get average level
    let sum = 0;
    for (var i = 0; i < BIN_COUNT; i++) {
      sum += freqByteData[i];
    }
    const aveLevel = sum / BIN_COUNT;
    // console.log('aveLevel', aveLevel);
    const scaled_average = (aveLevel / 256) * VOL_SENS; //256 is the highest a level can be
    // console.log('scaled_average', scaled_average * 2);
    levels.push(scaled_average * 2);
    // levels.push(scaled_average);
    
    //read waveform into timeByteData
    //waves.push(timeByteData);

    //get noise color posn
    noisePos += 0.005;
    const n = Math.abs(perlin.noise(noisePos, 0, 0));
    colors.push(n);

    levels.shift(1);
    //waves.shift(1);
    colors.shift(1);


    //write current waveform into all rings
    for (let j = 0; j < SEGMENTS; j++) {
      loopGeom.vertices[j].z = (timeByteData[j] - 128);//stretch by 2
    }
    // link up last segment
    loopGeom.vertices[SEGMENTS].z = loopGeom.vertices[0].z;
    loopGeom.verticesNeedUpdate = true;


    //for( i = RINGCOUNT-1; i > 0 ; i--) {

    for (i = 0; i < RINGCOUNT; i++) {

      const ringId = RINGCOUNT - i - 1;


      const normLevel = levels[ringId] + 0.3; //avoid scaling by 0
      // console.log(normLevel);
      const hue = colors[i];

      materials[i].color.setHSL(hue, 1, normLevel);
      materials[i].linewidth = normLevel * 3;
      materials[i].opacity = normLevel; //fadeout
      rings[i].scale.z = normLevel / 3;
    }

    //auto tilt
    // loopHolder.rotation.x = perlin.noise(noisePos * .5, 0,0) * Math.PI*.6;
    // loopHolder.rotation.y = perlin.noise(noisePos * .5,10,0) * Math.PI*.6;


  }

  return {
    init,
    update,
    remove,
    loopHolder
  };
};

export default LoopVisualizer;