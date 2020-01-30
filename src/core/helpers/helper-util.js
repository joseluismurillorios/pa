/* eslint-disable camelcase */

export const debounce = (func, wait, immediate, ...args) => {
  let timeout;
  return () => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const throttle = (callback, delay, ...args) => {
  let isThrottled = false;
  let arg;
  let context;

  function wrapper() {
    if (isThrottled) {
      arg = args;
      context = this;
      return;
    }

    isThrottled = true;
    callback.apply(this, args);

    setTimeout(() => {
      isThrottled = false;
      if (arg) {
        wrapper.apply(context, arg);
        arg = null;
        context = null;
      }
    }, delay);
  }

  return wrapper;
};

export const transformProperty = (() => {
  const transform = typeof window !== 'undefined' && window.document.documentElement.style.transform;
  if (typeof transform === 'string') {
    return 'transform';
  }
  return 'WebkitTransform';
})();


// const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const { userAgent } = window.navigator;

export const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
export const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
export const isIOSChrome = /CriOS/.test(userAgent);
export const isMac = (navigator.platform.toUpperCase().indexOf('MAC') >= 0);
export const isIOS = /iphone|ipad|ipod/.test(userAgent.toLowerCase());

export const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

export const isCordova = () => !!(window.cordova);

export const iosVersion = parseFloat(
  (`${(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]}`)
    .replace('undefined', '3_2').replace(/_/g, ''),
) || false;

export const printElem = (elem) => {
  const mywindow = window.open('', 'PRINT', 'height=400,width=600');

  mywindow.document.write(`
    <html>
      <head>
        <title>${document.title}</title>
        <style>
          button{display: none;}
          img{display: none;}
          iframe{display: none;}
        </style>
      </head>
      <body>
        <h1>${document.title}</h1>
        ${elem.innerHTML}
      </body>
    </html>
  `);

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  // mywindow.print();
  // mywindow.close();

  return true;
};

export const deg2rad = deg => deg * (Math.PI / 180);

export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
    * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

export const isEmail = email => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
export const isPhone = phone => (phone.match(/\d/g) || []).length === 10;
export const isPhone164 = phone => /^\+?[1-9]\d{9,14}$/.test(phone);
export const isDate = v => new Date(v) instanceof Date && !Number.isNaN(new Date(v).getTime());
export const notBlank = str => str !== '';
export const hasLength = (name, l = 2) => name.length > l;
export const hasItems = items => items.length > 0;

export const validatePassword = (pass, passConf) => {
  const messages = [];
  const hasPass = !!(pass && pass.length > 0);
  const equalPass = passConf === pass;
  const lenPass = !!(pass && pass.length > 5);
  const error = hasPass && !(equalPass && lenPass);
  if (error && !equalPass) {
    messages.push('Las contraseñas no coinciden');
  }
  if (error && !lenPass) {
    messages.push('Contraseña debe tener al menos seis caracteres de largo.');
  }
  return {
    error,
    messages,
  };
};

export const validateUserInfo = (user, newuser = false) => {
  const {
    email = '',
    // phone = '',
    password = '',
    password_confirm = '',
    displayName = '',
    avatar = '',
    disabled = false,
  } = user;
  const errors = {};
  const correo_interno = `${email.split('@')[0]}@boltmedia.com.mx`;
  errors.email = !hasLength(correo_interno) || !isEmail(correo_interno);
  // errors.phone = !isPhone164(phone);
  const errPass = validatePassword(password, password_confirm);
  errors.password = (newuser && !hasLength(password)) || errPass.error;
  errors.displayName = !hasLength(displayName);
  const hassErrors = Object.keys(errors).map(key => errors[key]).indexOf(true) > -1;
  const hasImg = (avatar instanceof Blob);
  return {
    errors,
    valid: !hassErrors,
    data: {
      email: errors.email ? '' : correo_interno,
      // phoneNumber: phone,
      disabled,
      password,
      displayName,
      avatar: hasImg ? avatar : '',
    },
  };
};

const formatCurrency = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});

export const toMoney = number => formatCurrency.format(number);

// export const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

export const capitalize = words => words
  .split(' ')
  .map(w => w[0].toUpperCase() + w.substring(1))
  .join(' ');
