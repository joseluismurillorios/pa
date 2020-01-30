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

},{"dayjs":"../node_modules/dayjs/dayjs.min.js"}],"../node_modules/artyom.js/build/artyom.js":[function(require,module,exports) {
"use strict";
/**
 * Artyom.js is a voice control, speech recognition and speech synthesis JavaScript library.
 *
 * @requires {webkitSpeechRecognition && speechSynthesis}
 * @license MIT
 * @version 1.0.6
 * @copyright 2017 Our Code World (www.ourcodeworld.com) All Rights Reserved.
 * @author Carlos Delgado (https://github.com/sdkcarlos) and Sema García (https://github.com/semagarcia)
 * @see https://sdkcarlos.github.io/sites/artyom.html
 * @see http://docs.ourcodeworld.com/projects/artyom-js
 */
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="artyom.d.ts" />
// Remove "export default " keywords if willing to build with `npm run artyom-build-window`
var Artyom = (function () {
    // Triggered at the declaration of 
    function Artyom() {
        this.ArtyomCommands = [];
        this.ArtyomVoicesIdentifiers = {
            // German
            "de-DE": ["Google Deutsch", "de-DE", "de_DE"],
            // Spanish
            "es-ES": ["Google español", "es-ES", "es_ES", "es-MX", "es_MX"],
            // Italian
            "it-IT": ["Google italiano", "it-IT", "it_IT"],
            // Japanese
            "jp-JP": ["Google 日本人", "ja-JP", "ja_JP"],
            // English USA
            "en-US": ["Google US English", "en-US", "en_US"],
            // English UK
            "en-GB": ["Google UK English Male", "Google UK English Female", "en-GB", "en_GB"],
            // Brazilian Portuguese
            "pt-BR": ["Google português do Brasil", "pt-PT", "pt-BR", "pt_PT", "pt_BR"],
            // Portugal Portuguese
            // Note: in desktop, there's no voice for portugal Portuguese
            "pt-PT": ["Google português do Brasil", "pt-PT", "pt_PT"],
            // Russian
            "ru-RU": ["Google русский", "ru-RU", "ru_RU"],
            // Dutch (holland)
            "nl-NL": ["Google Nederlands", "nl-NL", "nl_NL"],
            // French
            "fr-FR": ["Google français", "fr-FR", "fr_FR"],
            // Polish
            "pl-PL": ["Google polski", "pl-PL", "pl_PL"],
            // Indonesian
            "id-ID": ["Google Bahasa Indonesia", "id-ID", "id_ID"],
            // Hindi
            "hi-IN": ["Google हिन्दी", "hi-IN", "hi_IN"],
            // Mandarin Chinese
            "zh-CN": ["Google 普通话（中国大陆）", "zh-CN", "zh_CN"],
            // Cantonese Chinese
            "zh-HK": ["Google 粤語（香港）", "zh-HK", "zh_HK"],
            // Native voice
            "native": ["native"]
        };
        // Important: retrieve the voices of the browser as soon as possible.
        // Normally, the execution of speechSynthesis.getVoices will return at the first time an empty array.
        if (window.hasOwnProperty('speechSynthesis')) {
            speechSynthesis.getVoices();
        }
        else {
            console.error("Artyom.js can't speak without the Speech Synthesis API.");
        }
        // This instance of webkitSpeechRecognition is the one used by Artyom.
        if (window.hasOwnProperty('webkitSpeechRecognition')) {
            this.ArtyomWebkitSpeechRecognition = new window.webkitSpeechRecognition();
        }
        else {
            console.error("Artyom.js can't recognize voice without the Speech Recognition API.");
        }
        this.ArtyomProperties = {
            lang: 'en-GB',
            recognizing: false,
            continuous: false,
            speed: 1,
            volume: 1,
            listen: false,
            mode: "normal",
            debug: false,
            helpers: {
                redirectRecognizedTextOutput: null,
                remoteProcessorHandler: null,
                lastSay: null,
                fatalityPromiseCallback: null
            },
            executionKeyword: null,
            obeyKeyword: null,
            speaking: false,
            obeying: true,
            soundex: false,
            name: null
        };
        this.ArtyomGarbageCollection = [];
        this.ArtyomFlags = {
            restartRecognition: false
        };
        this.ArtyomGlobalEvents = {
            ERROR: "ERROR",
            SPEECH_SYNTHESIS_START: "SPEECH_SYNTHESIS_START",
            SPEECH_SYNTHESIS_END: "SPEECH_SYNTHESIS_END",
            TEXT_RECOGNIZED: "TEXT_RECOGNIZED",
            COMMAND_RECOGNITION_START: "COMMAND_RECOGNITION_START",
            COMMAND_RECOGNITION_END: "COMMAND_RECOGNITION_END",
            COMMAND_MATCHED: "COMMAND_MATCHED",
            NOT_COMMAND_MATCHED: "NOT_COMMAND_MATCHED"
        };
        this.Device = {
            isMobile: false,
            isChrome: true
        };
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            this.Device.isMobile = true;
        }
        if (navigator.userAgent.indexOf("Chrome") == -1) {
            this.Device.isChrome = false;
        }
        /**
         * The default voice of Artyom in the Desktop. In mobile, you will need to initialize (or force the language)
         * with a language code in order to find an available voice in the device, otherwise it will use the native voice.
         */
        this.ArtyomVoice = {
            default: false,
            lang: "en-GB",
            localService: false,
            name: "Google UK English Male",
            voiceURI: "Google UK English Male"
        };
    }
    /**
     * Add dinamically commands to artyom using
     * You can even add commands while artyom is active.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/addcommands
     * @since 0.6
     * @param {Object | Array[Objects]} param
     * @returns {undefined}
     */
    Artyom.prototype.addCommands = function (param) {
        var _this = this;
        var processCommand = function (command) {
            if (command.hasOwnProperty("indexes")) {
                _this.ArtyomCommands.push(command);
            }
            else {
                console.error("The given command doesn't provide any index to execute.");
            }
        };
        if (param instanceof Array) {
            for (var i = 0; i < param.length; i++) {
                processCommand(param[i]);
            }
        }
        else {
            processCommand(param);
        }
        return true;
    };
    ;
    /**
     * The SpeechSynthesisUtterance objects are stored in the artyom_garbage_collector variable
     * to prevent the wrong behaviour of artyom.say.
     * Use this method to clear all spoken SpeechSynthesisUtterance unused objects.
     *
     * @returns {Array<any>}
     */
    Artyom.prototype.clearGarbageCollection = function () {
        return this.ArtyomGarbageCollection = [];
    };
    ;
    /**
     * Displays a message in the console if the artyom propery DEBUG is set to true.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/debug
     * @returns {undefined}
     */
    Artyom.prototype.debug = function (message, type) {
        var preMessage = "[v" + this.getVersion() + "] Artyom.js";
        if (this.ArtyomProperties.debug === true) {
            switch (type) {
                case "error":
                    console.log("%c" + preMessage + ":%c " + message, 'background: #C12127; color: black;', 'color:black;');
                    break;
                case "warn":
                    console.warn(message);
                    break;
                case "info":
                    console.log("%c" + preMessage + ":%c " + message, 'background: #4285F4; color: #FFFFFF', 'color:black;');
                    break;
                default:
                    console.log("%c" + preMessage + ":%c " + message, 'background: #005454; color: #BFF8F8', 'color:black;');
                    break;
            }
        }
    };
    /**
     * Artyom have it's own diagnostics.
     * Run this function in order to detect why artyom is not initialized.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/detecterrors
     * @param {type} callback
     * @returns {}
     */
    Artyom.prototype.detectErrors = function () {
        var _this = this;
        if ((window.location.protocol) == "file:") {
            var message = "Error: running Artyom directly from a file. The APIs require a different communication protocol like HTTP or HTTPS";
            console.error(message);
            return {
                code: "artyom_error_localfile",
                message: message
            };
        }
        if (!_this.Device.isChrome) {
            var message = "Error: the Speech Recognition and Speech Synthesis APIs require the Google Chrome Browser to work.";
            console.error(message);
            return {
                code: "artyom_error_browser_unsupported",
                message: message
            };
        }
        if (window.location.protocol != "https:") {
            console.warn("Warning: artyom is being executed using the '" + window.location.protocol + "' protocol. The continuous mode requires a secure protocol (HTTPS)");
        }
        return false;
    };
    /**
     * Removes all the added commands of artyom.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/emptycommands
     * @since 0.6
     * @returns {Array}
     */
    Artyom.prototype.emptyCommands = function () {
        return this.ArtyomCommands = [];
    };
    /**
     * Returns an object with data of the matched element
     *
     * @private
     * @param {string} comando
     * @returns {MatchedCommand}
     */
    Artyom.prototype.execute = function (voz) {
        var _this = this;
        if (!voz) {
            console.warn("Internal error: Execution of empty command");
            return;
        }
        // If artyom was initialized with a name, verify that the name begins with it to allow the execution of commands.
        if (_this.ArtyomProperties.name) {
            if (voz.indexOf(_this.ArtyomProperties.name) != 0) {
                _this.debug("Artyom requires with a name \"" + _this.ArtyomProperties.name + "\" but the name wasn't spoken.", "warn");
                return;
            }
            // Remove name from voice command
            voz = voz.substr(_this.ArtyomProperties.name.length);
        }
        _this.debug(">> " + voz);
        /** @3
         * Artyom needs time to think that
         */
        for (var i = 0; i < _this.ArtyomCommands.length; i++) {
            var instruction = _this.ArtyomCommands[i];
            var opciones = instruction.indexes;
            var encontrado = -1;
            var wildy = "";
            for (var c = 0; c < opciones.length; c++) {
                var opcion = opciones[c];
                if (!instruction.smart) {
                    continue; //Jump if is not smart command
                }
                // Process RegExp
                if (opcion instanceof RegExp) {
                    // If RegExp matches 
                    if (opcion.test(voz)) {
                        _this.debug(">> REGEX " + opcion.toString() + " MATCHED AGAINST " + voz + " WITH INDEX " + c + " IN COMMAND ", "info");
                        encontrado = parseInt(c.toString());
                    }
                    // Otherwise just wildcards
                }
                else {
                    if (opcion.indexOf("*") != -1) {
                        ///LOGIC HERE
                        var grupo = opcion.split("*");
                        if (grupo.length > 2) {
                            console.warn("Artyom found a smart command with " + (grupo.length - 1) + " wildcards. Artyom only support 1 wildcard for each command. Sorry");
                            continue;
                        }
                        //START SMART COMMAND
                        var before = grupo[0];
                        var later = grupo[1];
                        // Wildcard in the end
                        if ((later == "") || (later == " ")) {
                            if ((voz.indexOf(before) != -1) || ((voz.toLowerCase()).indexOf(before.toLowerCase()) != -1)) {
                                wildy = voz.replace(before, '');
                                wildy = (wildy.toLowerCase()).replace(before.toLowerCase(), '');
                                encontrado = parseInt(c.toString());
                            }
                        }
                        else {
                            if ((voz.indexOf(before) != -1) || ((voz.toLowerCase()).indexOf(before.toLowerCase()) != -1)) {
                                if ((voz.indexOf(later) != -1) || ((voz.toLowerCase()).indexOf(later.toLowerCase()) != -1)) {
                                    wildy = voz.replace(before, '').replace(later, '');
                                    wildy = (wildy.toLowerCase()).replace(before.toLowerCase(), '').replace(later.toLowerCase(), '');
                                    wildy = (wildy.toLowerCase()).replace(later.toLowerCase(), '');
                                    encontrado = parseInt(c.toString());
                                }
                            }
                        }
                    }
                    else {
                        console.warn("Founded command marked as SMART but have no wildcard in the indexes, remove the SMART for prevent extensive memory consuming or add the wildcard *");
                    }
                }
                if ((encontrado >= 0)) {
                    encontrado = parseInt(c.toString());
                    break;
                }
            }
            if (encontrado >= 0) {
                _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_MATCHED);
                var response = {
                    index: encontrado,
                    instruction: instruction,
                    wildcard: {
                        item: wildy,
                        full: voz
                    }
                };
                return response;
            }
        } //End @3
        /** @1
         * Search for IDENTICAL matches in the commands if nothing matches
         * start with a index match in commands
         */
        for (var i = 0; i < _this.ArtyomCommands.length; i++) {
            var instruction = _this.ArtyomCommands[i];
            var opciones = instruction.indexes;
            var encontrado = -1;
            /**
             * Execution of match with identical commands
             */
            for (var c = 0; c < opciones.length; c++) {
                var opcion = opciones[c];
                if (instruction.smart) {
                    continue; //Jump wildcard commands
                }
                if ((voz === opcion)) {
                    _this.debug(">> MATCHED FULL EXACT OPTION " + opcion + " AGAINST " + voz + " WITH INDEX " + c + " IN COMMAND ", "info");
                    encontrado = parseInt(c.toString());
                    break;
                }
                else if ((voz.toLowerCase() === opcion.toLowerCase())) {
                    _this.debug(">> MATCHED OPTION CHANGING ALL TO LOWERCASE " + opcion + " AGAINST " + voz + " WITH INDEX " + c + " IN COMMAND ", "info");
                    encontrado = parseInt(c.toString());
                    break;
                }
            }
            if (encontrado >= 0) {
                _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_MATCHED);
                var response = {
                    index: encontrado,
                    instruction: instruction
                };
                return response;
            }
        } //End @1
        /**
         * Step 3 Commands recognition.
         * If the command is not smart, and any of the commands match exactly then try to find
         * a command in all the quote.
         */
        for (var i = 0; i < _this.ArtyomCommands.length; i++) {
            var instruction = _this.ArtyomCommands[i];
            var opciones = instruction.indexes;
            var encontrado = -1;
            /**
             * Execution of match with index
             */
            for (var c = 0; c < opciones.length; c++) {
                if (instruction.smart) {
                    continue; //Jump wildcard commands
                }
                var opcion = opciones[c];
                if ((voz.indexOf(opcion) >= 0)) {
                    _this.debug(">> MATCHED INDEX EXACT OPTION " + opcion + " AGAINST " + voz + " WITH INDEX " + c + " IN COMMAND ", "info");
                    encontrado = parseInt(c.toString());
                    break;
                }
                else if (((voz.toLowerCase()).indexOf(opcion.toLowerCase()) >= 0)) {
                    _this.debug(">> MATCHED INDEX OPTION CHANGING ALL TO LOWERCASE " + opcion + " AGAINST " + voz + " WITH INDEX " + c + " IN COMMAND ", "info");
                    encontrado = parseInt(c.toString());
                    break;
                }
            }
            if (encontrado >= 0) {
                _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_MATCHED);
                var response = {
                    index: encontrado,
                    instruction: instruction
                };
                return response;
            }
        } //End Step 3
        /**
         * If the soundex options is enabled, proceed to process the commands in case that any of the previous
         * ways of processing (exact, lowercase and command in quote) didn't match anything.
         * Based on the soundex algorithm match a command if the spoken text is similar to any of the artyom commands.
         * Example :
         * If you have a command with "Open Wallmart" and "Open Willmar" is recognized, the open wallmart command will be triggered.
         * soundex("Open Wallmart") == soundex("Open Willmar") <= true
         *
         */
        if (_this.ArtyomProperties.soundex) {
            for (var i = 0; i < _this.ArtyomCommands.length; i++) {
                var instruction = _this.ArtyomCommands[i];
                var opciones = instruction.indexes;
                var encontrado = -1;
                for (var c = 0; c < opciones.length; c++) {
                    var opcion = opciones[c];
                    if (instruction.smart) {
                        continue; //Jump wildcard commands
                    }
                    if (_this.soundex(voz) == _this.soundex(opcion)) {
                        _this.debug(">> Matched Soundex command '" + opcion + "' AGAINST '" + voz + "' with index " + c, "info");
                        encontrado = parseInt(c.toString());
                        _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_MATCHED);
                        var response = {
                            index: encontrado,
                            instruction: instruction
                        };
                        return response;
                    }
                }
            }
        }
        _this.debug("Event reached : " + _this.ArtyomGlobalEvents.NOT_COMMAND_MATCHED);
        _this.triggerEvent(_this.ArtyomGlobalEvents.NOT_COMMAND_MATCHED);
        return;
    };
    /**
     * Force artyom to stop listen even if is in continuos mode.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/fatality
     * @returns {Boolean}
     */
    Artyom.prototype.fatality = function () {
        var _this = this;
        //fatalityPromiseCallback
        return new Promise(function (resolve, reject) {
            // Expose the fatality promise callback to the helpers object of Artyom.
            // The promise isn't resolved here itself but in the onend callback of
            // the speechRecognition instance of artyom
            _this.ArtyomProperties.helpers.fatalityPromiseCallback = resolve;
            try {
                // If config is continuous mode, deactivate anyway.
                _this.ArtyomFlags.restartRecognition = false;
                _this.ArtyomWebkitSpeechRecognition.stop();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Returns an array with all the available commands for artyom.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/getavailablecommands
     * @readonly
     * @returns {Array}
     */
    Artyom.prototype.getAvailableCommands = function () {
        return this.ArtyomCommands;
    };
    /**
     * Artyom can return inmediately the voices available in your browser.
     *
     * @readonly
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/getvoices
     * @returns {Array}
     */
    Artyom.prototype.getVoices = function () {
        return window.speechSynthesis.getVoices();
    };
    /**
     * Verify if the browser supports speechSynthesis.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/speechsupported
     * @returns {Boolean}
     */
    Artyom.prototype.speechSupported = function () {
        return 'speechSynthesis' in window;
    };
    /**
     * Verify if the browser supports webkitSpeechRecognition.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/recognizingsupported
     * @returns {Boolean}
     */
    Artyom.prototype.recognizingSupported = function () {
        return 'webkitSpeechRecognition' in window;
    };
    /**
     * Stops the actual and pendings messages that artyom have to say.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/shutup
     * @returns {undefined}
     */
    Artyom.prototype.shutUp = function () {
        if ('speechSynthesis' in window) {
            do {
                window.speechSynthesis.cancel();
            } while (window.speechSynthesis.pending === true);
        }
        this.ArtyomProperties.speaking = false;
        this.clearGarbageCollection();
    };
    /**
     * Returns an object with the actual properties of artyom.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/getproperties
     * @returns {object}
     */
    Artyom.prototype.getProperties = function () {
        return this.ArtyomProperties;
    };
    /**
     * Returns the code language of artyom according to initialize function.
     * if initialize not used returns english GB.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/getlanguage
     * @returns {String}
     */
    Artyom.prototype.getLanguage = function () {
        return this.ArtyomProperties.lang;
    };
    /**
     * Retrieves the used version of Artyom.js
     *
     * @returns {String}
     */
    Artyom.prototype.getVersion = function () {
        return '1.0.6';
    };
    /**
     * Artyom awaits for orders when this function
     * is executed.
     *
     * If artyom gets a first parameter the instance will be stopped.
     *
     * @private
     * @returns {undefined}
     */
    Artyom.prototype.hey = function (resolve, reject) {
        var start_timestamp;
        var artyom_is_allowed;
        var _this = this;
        /**
         * On mobile devices the recognized text is always thrown twice.
         * By setting the following configuration, fixes the issue
         */
        if (this.Device.isMobile) {
            this.ArtyomWebkitSpeechRecognition.continuous = false;
            this.ArtyomWebkitSpeechRecognition.interimResults = false;
            this.ArtyomWebkitSpeechRecognition.maxAlternatives = 1;
        }
        else {
            this.ArtyomWebkitSpeechRecognition.continuous = true;
            this.ArtyomWebkitSpeechRecognition.interimResults = true;
        }
        this.ArtyomWebkitSpeechRecognition.lang = this.ArtyomProperties.lang;
        this.ArtyomWebkitSpeechRecognition.onstart = function () {
            _this.debug("Event reached : " + _this.ArtyomGlobalEvents.COMMAND_RECOGNITION_START);
            _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_RECOGNITION_START);
            _this.ArtyomProperties.recognizing = true;
            artyom_is_allowed = true;
            resolve();
        };
        /**
         * Handle all artyom posible exceptions
         *
         * @param {type} event
         * @returns {undefined}
         */
        this.ArtyomWebkitSpeechRecognition.onerror = function (event) {
            // Reject promise on initialization
            reject(event.error);
            // Dispath error globally (artyom.when)
            _this.triggerEvent(_this.ArtyomGlobalEvents.ERROR, {
                code: event.error
            });
            if (event.error == 'audio-capture') {
                artyom_is_allowed = false;
            }
            if (event.error == 'not-allowed') {
                artyom_is_allowed = false;
                if (event.timeStamp - start_timestamp < 100) {
                    _this.triggerEvent(_this.ArtyomGlobalEvents.ERROR, {
                        code: "info-blocked",
                        message: "Artyom needs the permision of the microphone, is blocked."
                    });
                }
                else {
                    _this.triggerEvent(_this.ArtyomGlobalEvents.ERROR, {
                        code: "info-denied",
                        message: "Artyom needs the permision of the microphone, is denied"
                    });
                }
            }
        };
        /**
         * Check if continuous mode is active and restart the recognition.
         * Throw events too.
         *
         * @returns {undefined}
         */
        _this.ArtyomWebkitSpeechRecognition.onend = function () {
            if (_this.ArtyomFlags.restartRecognition === true) {
                if (artyom_is_allowed === true) {
                    _this.ArtyomWebkitSpeechRecognition.start();
                    _this.debug("Continuous mode enabled, restarting", "info");
                }
                else {
                    console.error("Verify the microphone and check for the table of errors in sdkcarlos.github.io/sites/artyom.html to solve your problem. If you want to give your user a message when an error appears add an artyom listener");
                }
                _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_RECOGNITION_END, {
                    code: "continuous_mode_enabled",
                    message: "OnEnd event reached with continuous mode"
                });
            }
            else {
                // If the fatality promise callback was set, invoke it
                if (_this.ArtyomProperties.helpers.fatalityPromiseCallback) {
                    // As the speech recognition doesn't finish really, wait 500ms
                    // to trigger the real fatality callback
                    setTimeout(function () {
                        _this.ArtyomProperties.helpers.fatalityPromiseCallback();
                    }, 500);
                    _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_RECOGNITION_END, {
                        code: "continuous_mode_disabled",
                        message: "OnEnd event reached without continuous mode"
                    });
                }
            }
            _this.ArtyomProperties.recognizing = false;
        };
        /**
         * Declare the processor dinamycally according to the mode of artyom
         * to increase the performance.
         *
         * @type {Function}
         * @return
         */
        var onResultProcessor;
        // Process the recognition in normal mode
        if (_this.ArtyomProperties.mode == "normal") {
            onResultProcessor = function (event) {
                if (!_this.ArtyomCommands.length) {
                    _this.debug("No commands to process in normal mode.");
                    return;
                }
                var cantidadResultados = event.results.length;
                _this.triggerEvent(_this.ArtyomGlobalEvents.TEXT_RECOGNIZED);
                for (var i = event.resultIndex; i < cantidadResultados; ++i) {
                    var identificated = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        var comando = _this.execute(identificated.trim());
                        // Redirect the output of the text if necessary
                        if (typeof (_this.ArtyomProperties.helpers.redirectRecognizedTextOutput) === "function") {
                            _this.ArtyomProperties.helpers.redirectRecognizedTextOutput(identificated, true);
                        }
                        if ((comando) && (_this.ArtyomProperties.recognizing == true)) {
                            _this.debug("<< Executing Matching Recognition in normal mode >>", "info");
                            _this.ArtyomWebkitSpeechRecognition.stop();
                            _this.ArtyomProperties.recognizing = false;
                            // Execute the command if smart
                            if (comando.wildcard) {
                                comando.instruction.action(comando.index, comando.wildcard.item, comando.wildcard.full);
                                // Execute a normal command
                            }
                            else {
                                comando.instruction.action(comando.index);
                            }
                            break;
                        }
                    }
                    else {
                        // Redirect output when necesary
                        if (typeof (_this.ArtyomProperties.helpers.redirectRecognizedTextOutput) === "function") {
                            _this.ArtyomProperties.helpers.redirectRecognizedTextOutput(identificated, false);
                        }
                        if (typeof (_this.ArtyomProperties.executionKeyword) === "string") {
                            if (identificated.indexOf(_this.ArtyomProperties.executionKeyword) != -1) {
                                var comando = _this.execute(identificated.replace(_this.ArtyomProperties.executionKeyword, '').trim());
                                if ((comando) && (_this.ArtyomProperties.recognizing == true)) {
                                    _this.debug("<< Executing command ordered by ExecutionKeyword >>", 'info');
                                    _this.ArtyomWebkitSpeechRecognition.stop();
                                    _this.ArtyomProperties.recognizing = false;
                                    //Executing Command Action
                                    if (comando.wildcard) {
                                        comando.instruction.action(comando.index, comando.wildcard.item, comando.wildcard.full);
                                    }
                                    else {
                                        comando.instruction.action(comando.index);
                                    }
                                    break;
                                }
                            }
                        }
                        _this.debug("Normal mode : " + identificated);
                    }
                }
            };
        }
        // Process the recognition in quick mode
        if (_this.ArtyomProperties.mode == "quick") {
            onResultProcessor = function (event) {
                if (!_this.ArtyomCommands.length) {
                    _this.debug("No commands to process.");
                    return;
                }
                var cantidadResultados = event.results.length;
                _this.triggerEvent(_this.ArtyomGlobalEvents.TEXT_RECOGNIZED);
                for (var i = event.resultIndex; i < cantidadResultados; ++i) {
                    var identificated = event.results[i][0].transcript;
                    if (!event.results[i].isFinal) {
                        var comando = _this.execute(identificated.trim());
                        //Redirect output when necesary
                        if (typeof (_this.ArtyomProperties.helpers.redirectRecognizedTextOutput) === "function") {
                            _this.ArtyomProperties.helpers.redirectRecognizedTextOutput(identificated, true);
                        }
                        if ((comando) && (_this.ArtyomProperties.recognizing == true)) {
                            _this.debug("<< Executing Matching Recognition in quick mode >>", "info");
                            _this.ArtyomWebkitSpeechRecognition.stop();
                            _this.ArtyomProperties.recognizing = false;
                            //Executing Command Action
                            if (comando.wildcard) {
                                comando.instruction.action(comando.index, comando.wildcard.item);
                            }
                            else {
                                comando.instruction.action(comando.index);
                            }
                            break;
                        }
                    }
                    else {
                        var comando = _this.execute(identificated.trim());
                        //Redirect output when necesary
                        if (typeof (_this.ArtyomProperties.helpers.redirectRecognizedTextOutput) === "function") {
                            _this.ArtyomProperties.helpers.redirectRecognizedTextOutput(identificated, false);
                        }
                        if ((comando) && (_this.ArtyomProperties.recognizing == true)) {
                            _this.debug("<< Executing Matching Recognition in quick mode >>", "info");
                            _this.ArtyomWebkitSpeechRecognition.stop();
                            _this.ArtyomProperties.recognizing = false;
                            //Executing Command Action
                            if (comando.wildcard) {
                                comando.instruction.action(comando.index, comando.wildcard.item);
                            }
                            else {
                                comando.instruction.action(comando.index);
                            }
                            break;
                        }
                    }
                    _this.debug("Quick mode : " + identificated);
                }
            };
        }
        // Process the recognition in remote mode
        if (_this.ArtyomProperties.mode == "remote") {
            onResultProcessor = function (event) {
                var cantidadResultados = event.results.length;
                _this.triggerEvent(_this.ArtyomGlobalEvents.TEXT_RECOGNIZED);
                if (typeof (_this.ArtyomProperties.helpers.remoteProcessorHandler) !== "function") {
                    return _this.debug("The remoteProcessorService is undefined.", "warn");
                }
                for (var i = event.resultIndex; i < cantidadResultados; ++i) {
                    var identificated = event.results[i][0].transcript;
                    _this.ArtyomProperties.helpers.remoteProcessorHandler({
                        text: identificated,
                        isFinal: event.results[i].isFinal
                    });
                }
            };
        }
        /**
         * Process the recognition event with the previously
         * declared processor function.
         *
         * @param {type} event
         * @returns {undefined}
         */
        _this.ArtyomWebkitSpeechRecognition.onresult = function (event) {
            if (_this.ArtyomProperties.obeying) {
                onResultProcessor(event);
            }
            else {
                // Handle obeyKeyword if exists and artyom is not obeying
                if (!_this.ArtyomProperties.obeyKeyword) {
                    return;
                }
                var temporal = "";
                var interim = "";
                for (var i = 0; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        temporal += event.results[i][0].transcript;
                    }
                    else {
                        interim += event.results[i][0].transcript;
                    }
                }
                _this.debug("Artyom is not obeying", "warn");
                // If the obeyKeyword is found in the recognized text
                // enable command recognition again
                if (((interim).indexOf(_this.ArtyomProperties.obeyKeyword) > -1) || (temporal).indexOf(_this.ArtyomProperties.obeyKeyword) > -1) {
                    _this.ArtyomProperties.obeying = true;
                }
            }
        };
        if (_this.ArtyomProperties.recognizing) {
            _this.ArtyomWebkitSpeechRecognition.stop();
            _this.debug("Event reached : " + _this.ArtyomGlobalEvents.COMMAND_RECOGNITION_END);
            _this.triggerEvent(_this.ArtyomGlobalEvents.COMMAND_RECOGNITION_END);
        }
        else {
            try {
                _this.ArtyomWebkitSpeechRecognition.start();
            }
            catch (e) {
                _this.triggerEvent(_this.ArtyomGlobalEvents.ERROR, {
                    code: "recognition_overlap",
                    message: "A webkitSpeechRecognition instance has been started while there's already running. Is recommendable to restart the Browser"
                });
            }
        }
    };
    /**
     * Set up artyom for the application.
     *
     * This function will set the default language used by artyom
     * or notice the user if artyom is not supported in the actual
     * browser
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/initialize
     * @param {Object} config
     * @returns {Boolean}
     */
    Artyom.prototype.initialize = function (config) {
        var _this = this;
        if (typeof (config) !== "object") {
            return Promise.reject("You must give the configuration for start artyom properly.");
        }
        if (config.hasOwnProperty("lang")) {
            _this.ArtyomVoice = _this.getVoice(config.lang);
            _this.ArtyomProperties.lang = config.lang;
        }
        if (config.hasOwnProperty("continuous")) {
            if (config.continuous) {
                this.ArtyomProperties.continuous = true;
                this.ArtyomFlags.restartRecognition = true;
            }
            else {
                this.ArtyomProperties.continuous = false;
                this.ArtyomFlags.restartRecognition = false;
            }
        }
        if (config.hasOwnProperty("speed")) {
            this.ArtyomProperties.speed = config.speed;
        }
        if (config.hasOwnProperty("soundex")) {
            this.ArtyomProperties.soundex = config.soundex;
        }
        if (config.hasOwnProperty("executionKeyword")) {
            this.ArtyomProperties.executionKeyword = config.executionKeyword;
        }
        if (config.hasOwnProperty("obeyKeyword")) {
            this.ArtyomProperties.obeyKeyword = config.obeyKeyword;
        }
        if (config.hasOwnProperty("volume")) {
            this.ArtyomProperties.volume = config.volume;
        }
        if (config.hasOwnProperty("listen")) {
            this.ArtyomProperties.listen = config.listen;
        }
        if (config.hasOwnProperty("name")) {
            this.ArtyomProperties.name = config.name;
        }
        if (config.hasOwnProperty("debug")) {
            this.ArtyomProperties.debug = config.debug;
        }
        else {
            console.warn("The initialization doesn't provide how the debug mode should be handled. Is recommendable to set this value either to true or false.");
        }
        if (config.mode) {
            this.ArtyomProperties.mode = config.mode;
        }
        if (this.ArtyomProperties.listen === true) {
            return new Promise(function (resolve, reject) {
                _this.hey(resolve, reject);
            });
        }
        return Promise.resolve(true);
    };
    /**
     * Add commands like an artisan. If you use artyom for simple tasks
     * then probably you don't like to write a lot to achieve it.
     *
     * Use the artisan syntax to write less, but with the same accuracy.
     *
     * @disclaimer Not a promise-based implementation, just syntax.
     * @returns {Boolean}
     */
    Artyom.prototype.on = function (indexes, smart) {
        var _this = this;
        return {
            then: function (action) {
                var command = {
                    indexes: indexes,
                    action: action
                };
                if (smart) {
                    command.smart = true;
                }
                _this.addCommands(command);
            }
        };
    };
    /**
     * Generates an artyom event with the designed name
     *
     * @param {type} name
     * @returns {undefined}
     */
    Artyom.prototype.triggerEvent = function (name, param) {
        var event = new CustomEvent(name, {
            'detail': param
        });
        document.dispatchEvent(event);
        return event;
    };
    /**
     * Repeats the last sentence that artyom said.
     * Useful in noisy environments.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/repeatlastsay
     * @param {Boolean} returnObject If set to true, an object with the text and the timestamp when was executed will be returned.
     * @returns {Object}
     */
    Artyom.prototype.repeatLastSay = function (returnObject) {
        var last = this.ArtyomProperties.helpers.lastSay;
        if (returnObject) {
            return last;
        }
        else {
            if (last != null) {
                this.say(last.text);
            }
        }
    };
    /**
     * Create a listener when an artyom action is called.
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/when
     * @param {type} event
     * @param {type} action
     * @returns {undefined}
     */
    Artyom.prototype.when = function (event, action) {
        return document.addEventListener(event, function (e) {
            action(e["detail"]);
        }, false);
    };
    /**
     * Process the recognized text if artyom is active in remote mode.
     *
     * @returns {Boolean}
     */
    Artyom.prototype.remoteProcessorService = function (action) {
        this.ArtyomProperties.helpers.remoteProcessorHandler = action;
        return true;
    };
    /**
     * Verify if there's a voice available for a language using its language code identifier.
     *
     * @return {Boolean}
     */
    Artyom.prototype.voiceAvailable = function (languageCode) {
        return typeof (this.getVoice(languageCode)) !== "undefined";
    };
    /**
     * A boolean to check if artyom is obeying commands or not.
     *
     * @returns {Boolean}
     */
    Artyom.prototype.isObeying = function () {
        return this.ArtyomProperties.obeying;
    };
    /**
     * Allow artyom to obey commands again.
     *
     * @returns {Boolean}
     */
    Artyom.prototype.obey = function () {
        return this.ArtyomProperties.obeying = true;
    };
    /**
     * Pause the processing of commands. Artyom still listening in the background and it can be resumed after a couple of seconds.
     *
     * @returns {Boolean}
     */
    Artyom.prototype.dontObey = function () {
        return this.ArtyomProperties.obeying = false;
    };
    /**
     * This function returns a boolean according to the speechSynthesis status
     * if artyom is speaking, will return true.
     *
     * Note: This is not a feature of speechSynthesis, therefore this value hangs on
     * the fiability of the onStart and onEnd events of the speechSynthesis
     *
     * @since 0.9.3
     * @summary Returns true if speechSynthesis is active
     * @returns {Boolean}
     */
    Artyom.prototype.isSpeaking = function () {
        return this.ArtyomProperties.speaking;
    };
    /**
     * This function returns a boolean according to the SpeechRecognition status
     * if artyom is listening, will return true.
     *
     * Note: This is not a feature of SpeechRecognition, therefore this value hangs on
     * the fiability of the onStart and onEnd events of the SpeechRecognition
     *
     * @since 0.9.3
     * @summary Returns true if SpeechRecognition is active
     * @returns {Boolean}
     */
    Artyom.prototype.isRecognizing = function () {
        return this.ArtyomProperties.recognizing;
    };
    /**
     * This function will return the webkitSpeechRecognition object used by artyom
     * retrieve it only to debug on it or get some values, do not make changes directly
     *
     * @readonly
     * @since 0.9.2
     * @summary Retrieve the native webkitSpeechRecognition object
     * @returns {Object webkitSpeechRecognition}
     */
    Artyom.prototype.getNativeApi = function () {
        return this.ArtyomWebkitSpeechRecognition;
    };
    /**
     * Returns the SpeechSynthesisUtterance garbageobjects.
     *
     * @returns {Array}
     */
    Artyom.prototype.getGarbageCollection = function () {
        return this.ArtyomGarbageCollection;
    };
    /**
     *  Retrieve a single voice of the browser by it's language code.
     *  It will return the first voice available for the language on every device.
     *
     * @param languageCode
     */
    Artyom.prototype.getVoice = function (languageCode) {
        var voiceIdentifiersArray = this.ArtyomVoicesIdentifiers[languageCode];
        if (!voiceIdentifiersArray) {
            console.warn("The providen language " + languageCode + " isn't available, using English Great britain as default");
            voiceIdentifiersArray = this.ArtyomVoicesIdentifiers["en-GB"];
        }
        var voice = undefined;
        var voices = speechSynthesis.getVoices();
        var voicesLength = voiceIdentifiersArray.length;
        var _loop_1 = function (i) {
            var foundVoice = voices.filter(function (voice) {
                return ((voice.name == voiceIdentifiersArray[i]) || (voice.lang == voiceIdentifiersArray[i]));
            })[0];
            if (foundVoice) {
                voice = foundVoice;
                return "break";
            }
        };
        for (var i = 0; i < voicesLength; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        return voice;
    };
    /**
     * Artyom provide an easy way to create a
     * dictation for your user.
     *
     * Just create an instance and start and stop when you want
     *
     * @returns Object | newDictation
     */
    Artyom.prototype.newDictation = function (settings) {
        var _this = this;
        if (!_this.recognizingSupported()) {
            console.error("SpeechRecognition is not supported in this browser");
            return false;
        }
        var dictado = new window.webkitSpeechRecognition();
        dictado.continuous = true;
        dictado.interimResults = true;
        dictado.lang = _this.ArtyomProperties.lang;
        dictado.onresult = function (event) {
            var temporal = "";
            var interim = "";
            for (var i = 0; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    temporal += event.results[i][0].transcript;
                }
                else {
                    interim += event.results[i][0].transcript;
                }
            }
            if (settings.onResult) {
                settings.onResult(interim, temporal);
            }
        };
        return new function () {
            var dictation = dictado;
            var flagStartCallback = true;
            var flagRestart = false;
            this.onError = null;
            this.start = function () {
                if (settings.continuous === true) {
                    flagRestart = true;
                }
                dictation.onstart = function () {
                    if (typeof (settings.onStart) === "function") {
                        if (flagStartCallback === true) {
                            settings.onStart();
                        }
                    }
                };
                dictation.onend = function () {
                    if (flagRestart === true) {
                        flagStartCallback = false;
                        dictation.start();
                    }
                    else {
                        flagStartCallback = true;
                        if (typeof (settings.onEnd) === "function") {
                            settings.onEnd();
                        }
                    }
                };
                dictation.start();
            };
            this.stop = function () {
                flagRestart = false;
                dictation.stop();
            };
            if (typeof (settings.onError) === "function") {
                dictation.onerror = settings.onError;
            }
        };
    };
    /**
     * A voice prompt will be executed.
     *
     * @param {type} config
     * @returns {undefined}
     */
    Artyom.prototype.newPrompt = function (config) {
        if (typeof (config) !== "object") {
            console.error("Expected the prompt configuration.");
        }
        var copyActualCommands = Object.assign([], this.ArtyomCommands);
        var _this = this;
        this.emptyCommands();
        var promptCommand = {
            description: "Setting the artyom commands only for the prompt. The commands will be restored after the prompt finishes",
            indexes: config.options,
            action: function (i, wildcard) {
                _this.ArtyomCommands = copyActualCommands;
                var toExe = config.onMatch(i, wildcard);
                if (typeof (toExe) !== "function") {
                    console.error("onMatch function expects a returning function to be executed");
                    return;
                }
                toExe();
            }
        };
        if (config.smart) {
            promptCommand.smart = true;
        }
        this.addCommands(promptCommand);
        if (typeof (config.beforePrompt) !== "undefined") {
            config.beforePrompt();
        }
        var callbacks = {
            onStart: function () {
                if (typeof (config.onStartPrompt) !== "undefined") {
                    config.onStartPrompt();
                }
            },
            onEnd: function () {
                if (typeof (config.onEndPrompt) !== "undefined") {
                    config.onEndPrompt();
                }
            }
        };
        this.say(config.question, callbacks);
    };
    /**
     * Says a random quote and returns it's object
     *
     * @param {type} data
     * @returns {object}
     */
    Artyom.prototype.sayRandom = function (data) {
        if (data instanceof Array) {
            var index = Math.floor(Math.random() * data.length);
            this.say(data[index]);
            return {
                text: data[index],
                index: index
            };
        }
        else {
            console.error("Random quotes must be in an array !");
            return null;
        }
    };
    /**
     * Shortcut method to enable the artyom debug on the fly.
     *
     * @returns {Array}
     */
    Artyom.prototype.setDebug = function (status) {
        if (status) {
            return this.ArtyomProperties.debug = true;
        }
        else {
            return this.ArtyomProperties.debug = false;
        }
    };
    /**
     * Simulate a voice command via JS
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/simulateinstruction
     * @param {type} sentence
     * @returns {undefined}
     */
    Artyom.prototype.simulateInstruction = function (sentence) {
        var _this = this;
        if ((!sentence) || (typeof (sentence) !== "string")) {
            console.warn("Cannot execute a non string command");
            return false;
        }
        var foundCommand = _this.execute(sentence); //Command founded object
        if (typeof (foundCommand) === "object") {
            if (foundCommand.instruction) {
                if (foundCommand.instruction.smart) {
                    _this.debug('Smart command matches with simulation, executing', "info");
                    foundCommand.instruction.action(foundCommand.index, foundCommand.wildcard.item, foundCommand.wildcard.full);
                }
                else {
                    _this.debug('Command matches with simulation, executing', "info");
                    foundCommand.instruction.action(foundCommand.index); //Execute Normal command
                }
                return true;
            }
        }
        else {
            console.warn("No command founded trying with " + sentence);
            return false;
        }
    };
    /**
     * Javascript implementation of the soundex algorithm.
     * @see https://gist.github.com/shawndumas/1262659
     * @returns {String}
     */
    Artyom.prototype.soundex = function (s) {
        var a = s.toLowerCase().split('');
        var f = a.shift();
        var r = '';
        var codes = { a: "", e: "", i: "", o: "", u: "", b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6 };
        r = f + a
            .map(function (v, i, a) {
            return codes[v];
        })
            .filter(function (v, i, a) {
            return ((i === 0) ? v !== codes[f] : v !== a[i - 1]);
        })
            .join('');
        return (r + '000').slice(0, 4).toUpperCase();
    };
    /**
     * Splits a string into an array of strings with a limited size (chunk_length).
     *
     * @param {String} input text to split into chunks
     * @param {Integer} chunk_length limit of characters in every chunk
     */
    Artyom.prototype.splitStringByChunks = function (input, chunk_length) {
        input = input || "";
        chunk_length = chunk_length || 100;
        var curr = chunk_length;
        var prev = 0;
        var output = [];
        while (input[curr]) {
            if (input[curr++] == ' ') {
                output.push(input.substring(prev, curr));
                prev = curr;
                curr += chunk_length;
            }
        }
        output.push(input.substr(prev));
        return output;
    };
    /**
     * Allows to retrieve the recognized spoken text of artyom
     * and do something with it everytime something is recognized
     *
     * @param {String} action
     * @returns {Boolean}
     */
    Artyom.prototype.redirectRecognizedTextOutput = function (action) {
        if (typeof (action) != "function") {
            console.warn("Expected function to handle the recognized text ...");
            return false;
        }
        this.ArtyomProperties.helpers.redirectRecognizedTextOutput = action;
        return true;
    };
    /**
     * Restarts artyom with the initial configuration.
     *
     * @param configuration
     */
    Artyom.prototype.restart = function () {
        var _this = this;
        var _copyInit = _this.ArtyomProperties;
        return new Promise(function (resolve, reject) {
            _this.fatality().then(function () {
                _this.initialize(_copyInit).then(resolve, reject);
            });
        });
    };
    /**
     * Talks a text according to the given parameters.
     *
     * @private This function is only to be used internally.
     * @param {String} text Text to be spoken
     * @param {Int} actualChunk Number of chunk of the
     * @param {Int} totalChunks
     * @returns {undefined}
     */
    Artyom.prototype.talk = function (text, actualChunk, totalChunks, callbacks) {
        var _this = this;
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.volume = this.ArtyomProperties.volume;
        msg.rate = this.ArtyomProperties.speed;
        // Select the voice according to the selected
        var availableVoice = _this.getVoice(_this.ArtyomProperties.lang);
        if (callbacks) {
            // If the language to speak has been forced, use it
            if (callbacks.hasOwnProperty("lang")) {
                availableVoice = _this.getVoice(callbacks.lang);
            }
        }
        // If is a mobile device, provide only the language code in the lang property i.e "es_ES"
        if (this.Device.isMobile) {
            // Try to set the voice only if exists, otherwise don't use anything to use the native voice
            if (availableVoice) {
                msg.lang = availableVoice.lang;
            }
            // If browser provide the entire object
        }
        else {
            msg.voice = availableVoice;
        }
        // If is first text chunk (onStart)
        if (actualChunk == 1) {
            msg.addEventListener('start', function () {
                // Set artyom is talking
                _this.ArtyomProperties.speaking = true;
                // Trigger the onSpeechSynthesisStart event
                _this.debug("Event reached : " + _this.ArtyomGlobalEvents.SPEECH_SYNTHESIS_START);
                _this.triggerEvent(_this.ArtyomGlobalEvents.SPEECH_SYNTHESIS_START);
                // Trigger the onStart callback if exists
                if (callbacks) {
                    if (typeof (callbacks.onStart) == "function") {
                        callbacks.onStart.call(msg);
                    }
                }
            });
        }
        // If is final text chunk (onEnd)
        if ((actualChunk) >= totalChunks) {
            msg.addEventListener('end', function () {
                // Set artyom is talking
                _this.ArtyomProperties.speaking = false;
                // Trigger the onSpeechSynthesisEnd event
                _this.debug("Event reached : " + _this.ArtyomGlobalEvents.SPEECH_SYNTHESIS_END);
                _this.triggerEvent(_this.ArtyomGlobalEvents.SPEECH_SYNTHESIS_END);
                // Trigger the onEnd callback if exists.
                if (callbacks) {
                    if (typeof (callbacks.onEnd) == "function") {
                        callbacks.onEnd.call(msg);
                    }
                }
            });
        }
        // Notice how many chunks were processed for the given text.
        this.debug((actualChunk) + " text chunk processed succesfully out of " + totalChunks);
        // Important : Save the SpeechSynthesisUtterance object in memory, otherwise it will get lost
        this.ArtyomGarbageCollection.push(msg);
        window.speechSynthesis.speak(msg);
    };
    /**
     * Process the given text into chunks and execute the private function talk
     *
     * @tutorial http://docs.ourcodeworld.com/projects/artyom-js/documentation/methods/say
     * @param {String} message Text to be spoken
     * @param {Object} callbacks
     * @returns {undefined}
     */
    Artyom.prototype.say = function (message, callbacks) {
        var artyom_say_max_chunk_length = 115;
        var _this = this;
        var definitive = [];
        if (this.speechSupported()) {
            if (typeof (message) != 'string') {
                return console.warn("Artyom expects a string to speak " + typeof message + " given");
            }
            if (!message.length) {
                return console.warn("Cannot speak empty string");
            }
            // If the providen text is long, proceed to split it
            if (message.length > artyom_say_max_chunk_length) {
                // Split the given text by pause reading characters [",",":",";",". "] to provide a natural reading feeling.
                var naturalReading = message.split(/,|:|\. |;/);
                naturalReading.forEach(function (chunk, index) {
                    // If the sentence is too long and could block the API, split it to prevent any errors.
                    if (chunk.length > artyom_say_max_chunk_length) {
                        // Process the providen string into strings (withing an array) of maximum aprox. 115 characters to prevent any error with the API.
                        var temp_processed = _this.splitStringByChunks(chunk, artyom_say_max_chunk_length);
                        // Add items of the processed sentence into the definitive chunk.
                        definitive.push.apply(definitive, temp_processed);
                    }
                    else {
                        // Otherwise just add the sentence to being spoken.
                        definitive.push(chunk);
                    }
                });
            }
            else {
                definitive.push(message);
            }
            // Clean any empty item in array
            definitive = definitive.filter(function (e) { return e; });
            // Finally proceed to talk the chunks and assign the callbacks.
            definitive.forEach(function (chunk, index) {
                var numberOfChunk = (index + 1);
                if (chunk) {
                    _this.talk(chunk, numberOfChunk, definitive.length, callbacks);
                }
            });
            // Save the spoken text into the lastSay object of artyom
            _this.ArtyomProperties.helpers.lastSay = {
                text: message,
                date: new Date()
            };
        }
    };
    return Artyom;
}());
exports.default = Artyom;

},{}],"../node_modules/lodash/isObject.js":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],"../node_modules/lodash/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

},{}],"../node_modules/lodash/_root.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":"../node_modules/lodash/_freeGlobal.js"}],"../node_modules/lodash/now.js":[function(require,module,exports) {
var root = require('./_root');

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_Symbol.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":"../node_modules/lodash/_root.js"}],"../node_modules/lodash/_getRawTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js"}],"../node_modules/lodash/_objectToString.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],"../node_modules/lodash/_baseGetTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":"../node_modules/lodash/_Symbol.js","./_getRawTag":"../node_modules/lodash/_getRawTag.js","./_objectToString":"../node_modules/lodash/_objectToString.js"}],"../node_modules/lodash/isObjectLike.js":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],"../node_modules/lodash/isSymbol.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":"../node_modules/lodash/_baseGetTag.js","./isObjectLike":"../node_modules/lodash/isObjectLike.js"}],"../node_modules/lodash/toNumber.js":[function(require,module,exports) {
var isObject = require('./isObject'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;

},{"./isObject":"../node_modules/lodash/isObject.js","./isSymbol":"../node_modules/lodash/isSymbol.js"}],"../node_modules/lodash/debounce.js":[function(require,module,exports) {
var isObject = require('./isObject'),
    now = require('./now'),
    toNumber = require('./toNumber');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

},{"./isObject":"../node_modules/lodash/isObject.js","./now":"../node_modules/lodash/now.js","./toNumber":"../node_modules/lodash/toNumber.js"}],"core/speech/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _artyom = _interopRequireDefault(require("artyom.js"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { debounce } from '../helpers/helper-util';
// Create a variable that stores your instance
var artyom = new _artyom.default();

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
  } // const a = "José";


  function hi(a) {
    speech.speak("Hola ".concat(a));
  }

  var loc = function loc() {
    alert("List of commands-\n'hello (chuy)': To give greetings\n'goodbye (chuy)': to tell goodbye\n'search for *something': to google search'website search *website': to search a Website\n'repeat *saysome': to repeat what you say\n'close tab': go back to chuy tab\n'what is the time': tells the time and daten'tell me a joke': tells a cheesy joke");
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
  }; // if (annyang) {
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
  var finalTranscript = '';
  var recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.continuous = true;
  recognition.lang = "es-MX";

  var onSpeech = function onSpeech(speech) {
    console.log('speech', speech);
  };

  var debounced = (0, _debounce.default)(onSpeech, 2000);

  recognition.onresult = function (event) {
    var interimTranscript = '';

    for (var i = event.resultIndex, len = event.results.length; i < len; i++) {
      var transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        console.log('isFinal', interimTranscript);
        debounced(interimTranscript);
      } else {
        interimTranscript += transcript;
      }
    }

    debounced(interimTranscript);
    console.log('interimTranscript', interimTranscript);
  };

  recognition.start();
};

exports.default = _default;
},{"dayjs":"../node_modules/dayjs/dayjs.min.js","artyom.js":"../node_modules/artyom.js/build/artyom.js","lodash/debounce":"../node_modules/lodash/debounce.js"}],"core/visualizer/improvedNoise.js":[function(require,module,exports) {
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

var LoopVisualizer = function LoopVisualizer(scene, analyser, mic) {
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

    var aveOffset = mic ? 2 : 1;
    levels.push(scaled_average * aveOffset); // levels.push(scaled_average);
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
      var offset = mic ? 0.3 : 0.01;
      var normLevel = levels[ringId] + offset; //avoid scaling by 0
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
  var mic = false;
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
      initMic();
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

  function initMic() {
    if (source) {
      source.disconnect();
      LoopVisualizer.remove();
    }

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    }).then(function (stream) {
      audioContext = new window.AudioContext(); // const gainNode = context.createGain();

      source = audioContext.createMediaStreamSource(stream);
      mic = true;
      createAudio();
    });
  }

  function initAudio(data) {
    // navigator.mediaDevices
    // .getUserMedia({ audio: true, video: false })
    // .then((stream) => {
    // 	audioContext = new window.AudioContext();
    // 	source = audioContext.createMediaStreamSource(stream);
    // 	createAudio();
    // });
    audioContext = new window.AudioContext();
    source = audioContext.createBufferSource();

    if (audioContext.decodeAudioData) {
      audioContext.decodeAudioData(data, function (buffer) {
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);
        mic = false;
        createAudio();
      }, function (e) {
        console.log(e);
        $('#loading').text('cannot decode mp3');
      });
    } else {
      source.buffer = audioContext.createBuffer(data, false);
      mic = false;
      createAudio();
    }
  }

  function createAudio() {
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.1;
    source.connect(analyser); // source.loop = true;

    startViz();
  }

  function startViz() {
    $('#loading').hide();
    LoopVisualizer = (0, _visualizer.default)(scene, analyser, mic);
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


var started = false;

window.onload = function () {
  window.addEventListener('click', function () {
    // initVisualizer();
    if (!started) {
      (0, _visualizer.default)();
      (0, _speech.default)();
      started = true;
    }
  });
};
},{"dayjs":"../node_modules/dayjs/dayjs.min.js","dayjs/locale/es":"../node_modules/dayjs/locale/es.js","./core/speech":"core/speech/index.js","./core/visualizer":"core/visualizer/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64477" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map