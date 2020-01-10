// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/dayjs/dayjs.min.js":[function(require,module,exports) {
var define;
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.dayjs=n()}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});

},{}],"../node_modules/dayjs/locale/es.js":[function(require,module,exports) {
var define;
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],s):e.dayjs_locale_es=s(e.dayjs)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return e.locale(s,null,!0),s});

},{"dayjs":"../node_modules/dayjs/dayjs.min.js"}],"core/speech/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var speech = new p5.Speech();

  function voiceReady() {
    console.log('voice ready'); //console.log(speech.voices);

    speech.setVoice('Juan'); // speech.setPitch(1.5);
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
    setTimeout(function () {
      if (!annyang.isListening()) {
        annyang.resume();
      }

      console.log('speech', speech.synth);
    }, 3000);
  }

  var a = "José";

  function hi() {
    speech.speak("Hola ".concat(a));
  }

  var loc = function loc() {
    alert("List of commands-\n'hello (jarvis)': To give greetings\n'goodbye (jarvis)': to tell goodbye\n'search for *something': to google search'website search *website': to search a Website\n'repeat *saysome': to repeat what you say\n'close tab': go back to jarvis tab\n'what is the time': tells the time and daten'tell me a joke': tells a cheesy joke");
  };

  var bye = function bye() {
    speech.speak("Adi\xF3s ".concat(a, ", y que tengas un d\xEDa muy agradable"));
  };

  var search = function search(something) {
    window.open("https://www.google.ae/?gfe_rd=cr&ei=08dvWLvzJuHu8AeY9a74Aw#safe=strict&q=".concat(something));
    speech.speak("Buscando resultados para ".concat(something));
  };

  var searchWebsite = function searchWebsite(website) {
    window.open("https://www.".concat(website, "/"));
    speech.speak("Abriendo ".concat(website));
  };

  var how = function how() {
    speech.speak("Estoy bien. ¿Puedo preguntar cómo estás tú?");
  };

  var who = function who() {
    speech.speak("Su nombre es ".concat(a, " y eres realmente la mejor persona que he conocido"));
  };

  var saysome = function saysome(say) {
    speech.speak(say);
  };

  var ctab = function ctab() {
    open(location, '_self').close();
    speech.speak("pestaña cerrada");
  };

  var hour = function hour() {
    speech.speak((0, _dayjs.default)().format('[son las] H [horas con] m [minutos]'));
  };

  var date = function date() {
    speech.speak((0, _dayjs.default)().format('dddd D [de] MMMM [del] YYYY'));
  };

  if (annyang) {
    // Let's define a command.
    annyang.setLanguage('es-MX');
    var commands = {
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
    }; // Add our commands to annyang

    annyang.addCommands(commands);
    annyang.debug(true);
    annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
      console.log('resultMatch');
      console.log(userSaid);
      console.log(commandText);
      console.log(phrases);
    });
    annyang.addCallback('result', function (userSaid, commandText, phrases) {
      console.log('resultMatch');
      console.log(userSaid);
    });
    annyang.start();
  }
};

exports.default = _default;
},{"dayjs":"../node_modules/dayjs/dayjs.min.js"}],"core/visualizer/improvedNoise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://mrl.nyu.edu/~perlin/noise/
var ImprovedNoise = function ImprovedNoise() {
  var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

  for (var i = 0; i < 256; i++) {
    p[256 + i] = p[i];
  }

  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(t, a, b) {
    return a + t * (b - a);
  }

  function grad(hash, x, y, z) {
    var h = hash & 15;
    var u = h < 8 ? x : y;
    var v = h < 4 ? y : h == 12 || h == 14 ? x : z;
    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
  }

  return {
    noise: function noise(x, y, z) {
      var floorX = ~~x;
      var floorY = ~~y;
      var floorZ = ~~z;
      var X = floorX & 255;
      var Y = floorY & 255;
      var Z = floorZ & 255;
      x -= floorX;
      y -= floorY;
      z -= floorZ;
      var xMinus1 = x - 1;
      var yMinus1 = y - 1;
      var zMinus1 = z - 1;
      var u = fade(x);
      var v = fade(y);
      var w = fade(z);
      var A = p[X] + Y;
      var AA = p[A] + Z;
      var AB = p[A + 1] + Z;
      var B = p[X + 1] + Y;
      var BA = p[B] + Z;
      var BB = p[B + 1] + Z;
      return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], xMinus1, y, z)), lerp(u, grad(p[AB], x, yMinus1, z), grad(p[BB], xMinus1, yMinus1, z))), lerp(v, lerp(u, grad(p[AA + 1], x, y, zMinus1), grad(p[BA + 1], xMinus1, y, z - 1)), lerp(u, grad(p[AB + 1], x, yMinus1, zMinus1), grad(p[BB + 1], xMinus1, yMinus1, zMinus1))));
    }
  };
};

var _default = ImprovedNoise;
exports.default = _default;
},{}],"core/visualizer/visualizer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _improvedNoise = _interopRequireDefault(require("./improvedNoise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoopVisualizer = function LoopVisualizer(scene, analyser) {
  var RINGCOUNT = 60;
  var SEPARATION = 30;
  var INIT_RADIUS = 50;
  var SEGMENTS = 512;
  var VOL_SENS = 2;
  var BIN_COUNT = 512;
  var rings = [];
  var geoms;
  var materials = [];
  var levels = []; //var waves = [];

  var colors = [];
  var loopHolder = new THREE.Object3D();
  var perlin = new _improvedNoise.default();
  var noisePos = 0;
  var freqByteData;
  var timeByteData;
  var loopGeom; //one geom for all rings

  function init() {
    rings = [];
    geoms = [];
    materials = [];
    levels = []; //waves = [];

    colors = []; ////////INIT audio in

    freqByteData = new Uint8Array(BIN_COUNT);
    timeByteData = new Uint8Array(BIN_COUNT);
    scene.add(loopHolder);
    var scale = 1;
    var alt = 0;
    var circleShape = new THREE.Shape();
    circleShape.absarc(0, 0, INIT_RADIUS, 0, Math.PI * 2, false); //createPointsGeometry returns (SEGMENTS * 2 )+ 1 points

    loopGeom = circleShape.createPointsGeometry(SEGMENTS / 2);
    loopGeom.dynamic = true; //create rings

    for (var i = 0; i < RINGCOUNT; i++) {
      var m = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        //depthTest : false,
        transparent: true
      });
      var line = new THREE.Line(loopGeom, m);
      rings.push(line); //geoms.push(geom);

      materials.push(m);
      scale *= 1.02;
      line.scale.x = scale;
      line.scale.y = scale;
      loopHolder.add(line);
      levels.push(0); //waves.push(emptyBinData);

      colors.push(0); //rings
      //if (Math.floor(i /20) % 2 == 0 ){
      // /line.visible = false;
      // /}
    }
  }

  function remove() {
    if (loopHolder) {
      for (var i = 0; i < RINGCOUNT; i++) {
        loopHolder.remove(rings[i]);
      }
    }
  }

  function update() {
    //analyser.smoothingTimeConstant = 0.1;
    analyser.getByteFrequencyData(freqByteData);
    analyser.getByteTimeDomainData(timeByteData); //get average level

    var sum = 0;

    for (var i = 0; i < BIN_COUNT; i++) {
      sum += freqByteData[i];
    }

    var aveLevel = sum / BIN_COUNT; // console.log('aveLevel', aveLevel);

    var scaled_average = aveLevel / 256 * VOL_SENS; //256 is the highest a level can be
    // console.log('scaled_average', scaled_average * 2);

    levels.push(scaled_average * 2); // levels.push(scaled_average);
    //read waveform into timeByteData
    //waves.push(timeByteData);
    //get noise color posn

    noisePos += 0.005;
    var n = Math.abs(perlin.noise(noisePos, 0, 0));
    colors.push(n);
    levels.shift(1); //waves.shift(1);

    colors.shift(1); //write current waveform into all rings

    for (var j = 0; j < SEGMENTS; j++) {
      loopGeom.vertices[j].z = timeByteData[j] - 128; //stretch by 2
    } // link up last segment


    loopGeom.vertices[SEGMENTS].z = loopGeom.vertices[0].z;
    loopGeom.verticesNeedUpdate = true; //for( i = RINGCOUNT-1; i > 0 ; i--) {

    for (i = 0; i < RINGCOUNT; i++) {
      var ringId = RINGCOUNT - i - 1;
      var normLevel = levels[ringId] + 0.3; //avoid scaling by 0
      // console.log(normLevel);

      var hue = colors[i];
      materials[i].color.setHSL(hue, 1, normLevel);
      materials[i].linewidth = normLevel * 3;
      materials[i].opacity = normLevel; //fadeout

      rings[i].scale.z = normLevel / 3;
    } //auto tilt
    // loopHolder.rotation.x = perlin.noise(noisePos * .5, 0,0) * Math.PI*.6;
    // loopHolder.rotation.y = perlin.noise(noisePos * .5,10,0) * Math.PI*.6;

  }

  return {
    init: init,
    update: update,
    remove: remove,
    loopHolder: loopHolder
  };
};

var _default = LoopVisualizer;
exports.default = _default;
},{"./improvedNoise":"core/visualizer/improvedNoise.js"}],"../node_modules/shifty/dist/shifty.js":[function(require,module,exports) {
var define;
/*! Shifty 2.8.3 - https://github.com/jeremyckahn/shifty */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("shifty",[],n):"object"==typeof exports?exports.shifty=n():t.shifty=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){"use strict";(function(t){e.d(n,"e",(function(){return v})),e.d(n,"c",(function(){return _})),e.d(n,"b",(function(){return m})),e.d(n,"a",(function(){return b})),e.d(n,"d",(function(){return w}));var r=e(1);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f="undefined"!=typeof window?window:t,s=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.oRequestAnimationFrame||f.msRequestAnimationFrame||f.mozCancelRequestAnimationFrame&&f.mozRequestAnimationFrame||setTimeout,l=function(){},h=null,p=null,d=a({},r),v=function(t,n,e,r,i,u,o){var a=t<u?0:(t-u)/i;for(var c in n){var f=o[c],s=f.call?f:d[f],l=e[c];n[c]=l+(r[c]-l)*s(a)}return n},y=function(t,n){var e=t._attachment,r=t._currentState,i=t._delay,u=t._easing,o=t._originalState,a=t._duration,c=t._step,f=t._targetState,s=t._timestamp,l=s+i+a,h=n>l?l:n,p=a-(l-h);h>=l?(c(f,e,p),t.stop(!0)):(t._applyFilter("beforeTween"),h<s+i?(h=1,a=1,s=1):s+=i,v(h,r,o,f,a,s,u),t._applyFilter("afterTween"),c(r,e,p))},_=function(){for(var t=b.now(),n=h;n;){var e=n._next;y(n,t),n=e}},m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",e={},r=u(n);if("string"===r||"function"===r)for(var i in t)e[i]=n;else for(var o in t)e[o]=n[o]||"linear";return e},g=function(t){if(t===h)(h=t._next)?h._previous=null:p=null;else if(t===p)(p=t._previous)?p._next=null:h=null;else{var n=t._previous,e=t._next;n._next=e,e._previous=n}t._previous=t._next=null},b=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentState=n,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,e&&this.setConfig(e)}var n,e,r;return n=t,(e=[{key:"_applyFilter",value:function(t){var n=!0,e=!1,r=void 0;try{for(var i,u=this._filters[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var o=i.value[t];o&&o(this)}}catch(t){e=!0,r=t}finally{try{n||null==u.return||u.return()}finally{if(e)throw r}}}},{key:"tween",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this._attachment,r=this._configured;return!n&&r||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),e),this.resume()}},{key:"setConfig",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.attachment,i=e.delay,u=void 0===i?0:i,o=e.duration,c=void 0===o?500:o,f=e.easing,s=e.from,h=e.promise,p=void 0===h?Promise:h,d=e.start,v=void 0===d?l:d,y=e.step,_=void 0===y?l:y,g=e.to;this._configured=!0,this._attachment=r,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=u,this._start=v,this._step=_,this._duration=c,this._currentState=a({},s||this.get()),this._originalState=this.get(),this._targetState=a({},g||this.get());var b=this._currentState;this._targetState=a({},b,{},this._targetState),this._easing=m(b,f);var w=t.filters;for(var O in this._filters.length=0,w)w[O].doesApply(this)&&this._filters.push(w[O]);return this._applyFilter("tweenCreated"),this._promise=new p((function(t,e){n._resolve=t,n._reject=e})),this._promise.catch(l),this}},{key:"get",value:function(){return a({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,g(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;var n=t.now();return this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===h?(h=this,p=this,function t(){h&&(s.call(f,t,1e3/60),_())}()):(this._previous=p,p._next=this,p=this),this._promise}},{key:"seek",value:function(n){n=Math.max(n,0);var e=t.now();return this._timestamp+n===0?this:(this._timestamp=e-n,this._isPlaying||y(this,e),this)}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._attachment,e=this._currentState,r=this._easing,i=this._originalState,u=this._targetState;if(this._isPlaying)return this._isPlaying=!1,g(this),t?(this._applyFilter("beforeTween"),v(1,e,i,u,1,0,r),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(e,n)):this._reject(e,n),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&i(n.prototype,e),r&&i(n,r),t}();function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new b,e=n.tween(t);return e.tweenable=n,e}b.setScheduleFunction=function(t){return s=t},b.formulas=d,b.filters={},b.now=Date.now||function(){return+new Date}}).call(this,e(2))},function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return i})),e.d(n,"easeOutQuad",(function(){return u})),e.d(n,"easeInOutQuad",(function(){return o})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return c})),e.d(n,"easeInOutCubic",(function(){return f})),e.d(n,"easeInQuart",(function(){return s})),e.d(n,"easeOutQuart",(function(){return l})),e.d(n,"easeInOutQuart",(function(){return h})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return d})),e.d(n,"easeInOutQuint",(function(){return v})),e.d(n,"easeInSine",(function(){return y})),e.d(n,"easeOutSine",(function(){return _})),e.d(n,"easeInOutSine",(function(){return m})),e.d(n,"easeInExpo",(function(){return g})),e.d(n,"easeOutExpo",(function(){return b})),e.d(n,"easeInOutExpo",(function(){return w})),e.d(n,"easeInCirc",(function(){return O})),e.d(n,"easeOutCirc",(function(){return S})),e.d(n,"easeInOutCirc",(function(){return j})),e.d(n,"easeOutBounce",(function(){return M})),e.d(n,"easeInBack",(function(){return k})),e.d(n,"easeOutBack",(function(){return P})),e.d(n,"easeInOutBack",(function(){return x})),e.d(n,"elastic",(function(){return T})),e.d(n,"swingFromTo",(function(){return E})),e.d(n,"swingFrom",(function(){return F})),e.d(n,"swingTo",(function(){return A})),e.d(n,"bounce",(function(){return I})),e.d(n,"bouncePast",(function(){return C})),e.d(n,"easeFromTo",(function(){return D})),e.d(n,"easeFrom",(function(){return q})),e.d(n,"easeTo",(function(){return Q}));
/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */
/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */
var r=function(t){return t},i=function(t){return Math.pow(t,2)},u=function(t){return-(Math.pow(t-1,2)-1)},o=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},a=function(t){return Math.pow(t,3)},c=function(t){return Math.pow(t-1,3)+1},f=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},s=function(t){return Math.pow(t,4)},l=function(t){return-(Math.pow(t-1,4)-1)},h=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},p=function(t){return Math.pow(t,5)},d=function(t){return Math.pow(t-1,5)+1},v=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},y=function(t){return 1-Math.cos(t*(Math.PI/2))},_=function(t){return Math.sin(t*(Math.PI/2))},m=function(t){return-.5*(Math.cos(Math.PI*t)-1)},g=function(t){return 0===t?0:Math.pow(2,10*(t-1))},b=function(t){return 1===t?1:1-Math.pow(2,-10*t)},w=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},O=function(t){return-(Math.sqrt(1-t*t)-1)},S=function(t){return Math.sqrt(1-Math.pow(t-1,2))},j=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},M=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},k=function(t){var n=1.70158;return t*t*((n+1)*t-n)},P=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},x=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},T=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},E=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},F=function(t){var n=1.70158;return t*t*((n+1)*t-n)},A=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},I=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},C=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},D=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},q=function(t){return Math.pow(t,4)},Q=function(t){return Math.pow(t,.25)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"doesApply",(function(){return x})),e.d(r,"tweenCreated",(function(){return T})),e.d(r,"beforeTween",(function(){return E})),e.d(r,"afterTween",(function(){return F}));var i,u,o=e(0),a=/(\d|-|\.)/,c=/([^\-0-9.]+)/g,f=/[0-9.-]+/g,s=(i=f.source,u=/,\s*/.source,new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i,"\\)"),"g")),l=/^.*\(/,h=/#([0-9]|[a-f]){3,6}/gi,p=function(t,n){return t.map((function(t,e){return"_".concat(n,"_").concat(e)}))};function d(t){return parseInt(t,16)}var v=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[d(n.substr(0,2)),d(n.substr(2,2)),d(n.substr(4,2))]).join(","),")");var n},y=function(t,n,e){var r=n.match(t),i=n.replace(t,"VAL");return r&&r.forEach((function(t){return i=i.replace("VAL",e(t))})),i},_=function(t){for(var n in t){var e=t[n];"string"==typeof e&&e.match(h)&&(t[n]=y(h,e,v))}},m=function(t){var n=t.match(f).map(Math.floor),e=t.match(l)[0];return"".concat(e).concat(n.join(","),")")},g=function(t){return t.match(f)},b=function(t){var n,e,r={};for(var i in t){var u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(c),e?(1===e.length||n.charAt(0).match(a))&&e.unshift(""):e=["",""],e.join("VAL")),chunkNames:p(g(u),i)})}return r},w=function(t,n){var e=function(e){g(t[e]).forEach((function(r,i){return t[n[e].chunkNames[i]]=+r})),delete t[e]};for(var r in n)e(r)},O=function(t,n){var e={};return n.forEach((function(n){e[n]=t[n],delete t[n]})),e},S=function(t,n){return n.map((function(n){return t[n]}))},j=function(t,n){return n.forEach((function(n){return t=t.replace("VAL",+n.toFixed(4))})),t},M=function(t,n){for(var e in n){var r=n[e],i=r.chunkNames,u=r.formatString,o=j(u,S(O(t,i),i));t[e]=y(s,o,m)}},k=function(t,n){var e=function(e){var r=n[e].chunkNames,i=t[e];if("string"==typeof i){var u=i.split(" "),o=u[u.length-1];r.forEach((function(n,e){return t[n]=u[e]||o}))}else r.forEach((function(n){return t[n]=i}));delete t[e]};for(var r in n)e(r)},P=function(t,n){for(var e in n){var r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map((function(n){var e=t[n];return delete t[n],e})).join(" "):i}},x=function(t){var n=t._currentState;return Object.keys(n).some((function(t){return"string"==typeof n[t]}))};function T(t){var n=t._currentState;[n,t._originalState,t._targetState].forEach(_),t._tokenData=b(n)}function E(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;k(i,u),[n,e,r].forEach((function(t){return w(t,u)}))}function F(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach((function(t){return M(t,u)})),P(i,u)}function A(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(Object(e),!0).forEach((function(n){C(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var D=new o.a,q=o.a.filters,Q=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=I({},t),a=Object(o.b)(t,r);for(var c in D._filters.length=0,D.set({}),D._currentState=u,D._originalState=t,D._targetState=n,D._easing=a,q)q[c].doesApply(D)&&D._filters.push(q[c]);D._applyFilter("tweenCreated"),D._applyFilter("beforeTween");var f=Object(o.e)(e,u,t,n,1,i,a);return D._applyFilter("afterTween"),f};function B(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t,n){var e=n.get(t);if(!e)throw new TypeError("attempted to get private field on non-instance");return e.get?e.get.call(t):e.value}var z=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),L.set(this,{writable:!0,value:[]});for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}var n,e,r;return n=t,(e=[{key:"add",value:function(t){return R(this,L).push(t),t}},{key:"remove",value:function(t){var n=R(this,L).indexOf(t);return~n&&R(this,L).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return R(this,L).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return R(this,L).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return R(this,L).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return R(this,L).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return R(this,L).forEach((function(n){return n.stop(t)})),this}},{key:"tweenables",get:function(){return B(R(this,L))}},{key:"promises",get:function(){return R(this,L).map((function(t){return t._promise}))}}])&&N(n.prototype,e),r&&N(n,r),t}(),L=new WeakMap;function V(t,n,e,r,i,u){var o,a,c=0,f=0,s=0,l=0,h=0,p=0,d=function(t){return((c*t+f)*t+s)*t},v=function(t){return(3*c*t+2*f)*t+s},y=function(t){return t>=0?t:0-t};return c=1-(s=3*n)-(f=3*(r-n)-s),l=1-(p=3*e)-(h=3*(i-e)-p),o=t,a=function(t){return 1/(200*t)}(u),function(t){return((l*t+h)*t+p)*t}(function(t,n){var e,r,i,u,o,a;for(i=t,a=0;a<8;a++){if(u=d(i)-t,y(u)<n)return i;if(o=v(i),y(o)<1e-6)break;i-=u/o}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=d(i),y(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(o,a))}var W=function(t,n,e,r,i){var u=function(t,n,e,r){return function(i){return V(i,t,n,e,r,1)}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,o.a.formulas[t]=u},G=function(t){return delete o.a.formulas[t]};e.d(n,"processTweens",(function(){return o.c})),e.d(n,"Tweenable",(function(){return o.a})),e.d(n,"tween",(function(){return o.d})),e.d(n,"interpolate",(function(){return Q})),e.d(n,"Scene",(function(){return z})),e.d(n,"setBezierFunction",(function(){return W})),e.d(n,"unsetBezierFunction",(function(){return G})),o.a.filters.token=r}])}));

},{}],"core/visualizer/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _visualizer = _interopRequireDefault(require("./visualizer"));

var _shifty = require("shifty");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  /**
  *
  * Loop Waveform Visualizer by Felix Turner
  * www.airtight.cc
  *
  * Audio Reactive Waveform via Web Audio API.
  *
  */
  var LoopVisualizer;
  var mouseX = 0;
  var mouseY = 0;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  var camera;
  var scene;
  var renderer;
  var container;
  var source;
  var analyser;
  var buffer;
  var audioBuffer;
  var audioContext;
  var started = false;
  $(document).ready(function () {
    //Chrome is only browser to currently support Web Audio API
    var is_webgl = function () {
      try {
        return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
      } catch (e) {
        return false;
      }
    }();

    if (!is_webgl) {
      $('#loading').html('Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.<br />' + 'Find out how to get it <a href="http://get.webgl.org/">here</a>, or try restarting your browser.');
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
      sortObjects: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement); // stop the user getting a text cursor

    document.onselectStart = function () {
      return false;
    }; //add stats
    // stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.top = '0px';
    // container.appendChild(stats.domElement);
    //init listeners
    // $('#loadSample').click(loadSampleAudio);


    $(document).click(function () {
      initAudio();
    });
    $(document).mousemove(onDocumentMouseMove);
    $(document).mouseleave(function () {
      (0, _shifty.tween)({
        from: {
          x: mouseX,
          y: mouseY
        },
        to: {
          x: -0.5,
          y: -0.5
        },
        duration: 1500,
        easing: 'easeOutQuad',
        step: function step(state) {
          mouseX = state.x;
          mouseY = state.y;
        }
      }).then(function () {
        return console.log('All done!');
      });
    });
    $(window).resize(onWindowResize);
    document.addEventListener('drop', onDocumentDrop, false);
    document.addEventListener('dragover', onDocumentDragOver, false);
    onWindowResize(null);
  } // function loadSampleAudio() {
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


  function onDocumentMouseMove(_ref) {
    var clientX = _ref.clientX,
        clientY = _ref.clientY;
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
    render(); //stats.update();
  }

  function render() {
    LoopVisualizer.update(); //mouse tilt

    var xrot = mouseX / window.innerWidth * Math.PI + Math.PI;
    var yrot = mouseY / window.innerHeight * Math.PI + Math.PI;
    LoopVisualizer.loopHolder.rotation.x += (-yrot - LoopVisualizer.loopHolder.rotation.x) * 0.3;
    LoopVisualizer.loopHolder.rotation.y += (xrot - LoopVisualizer.loopHolder.rotation.y) * 0.3;
    renderer.render(scene, camera);
  }

  $(window).mousewheel(function (event, delta) {
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
    evt.preventDefault(); //clean up previous mp3

    if (source) {
      source.disconnect();
      LoopVisualizer.remove();
    }

    $('#loading').show();
    $('#loading').text('loading...');
    var droppedFiles = evt.dataTransfer.files;
    var reader = new FileReader();

    reader.onload = function (_ref2) {
      var target = _ref2.target;
      var data = target.result;
      initAudio(data);
    };

    reader.readAsArrayBuffer(droppedFiles[0]);
  }

  function initAudio(data) {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    }).then(function (stream) {
      audioContext = new window.AudioContext(); // const gainNode = context.createGain();

      source = audioContext.createMediaStreamSource(stream);
      createAudio();
    }); // audioContext = new window.AudioContext();
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
    analyser.smoothingTimeConstant = 0.1; // source.connect(audioContext.destination);

    source.connect(analyser); // source.start(0);
    // source.loop = true;

    startViz();
  }

  function startViz() {
    $('#loading').hide();
    LoopVisualizer = (0, _visualizer.default)(scene, analyser);
    LoopVisualizer.init();

    if (!started) {
      started = true;
      animate();
    }
  }
};

exports.default = _default;
},{"./visualizer":"core/visualizer/visualizer.js","shifty":"../node_modules/shifty/dist/shifty.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _dayjs = _interopRequireDefault(require("dayjs"));

require("dayjs/locale/es");

var _speech = _interopRequireDefault(require("./core/speech"));

var _visualizer = _interopRequireDefault(require("./core/visualizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { initVisualizer } from './core';
_dayjs.default.locale('es'); // visualizer();


window.onload = function () {
  window.addEventListener('click', function () {
    // initVisualizer();
    (0, _visualizer.default)();
    (0, _speech.default)();
  });
};
},{"dayjs":"../node_modules/dayjs/dayjs.min.js","dayjs/locale/es":"../node_modules/dayjs/locale/es.js","./core/speech":"core/speech/index.js","./core/visualizer":"core/visualizer/index.js"}],"../../../.nvm/versions/node/v8.11.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56336" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v8.11.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map