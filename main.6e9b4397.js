parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return o(t)||n(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=document.querySelector(".message-start"),c=document.querySelector(".message-win"),s=document.querySelector(".message-lose"),u=document.querySelector(".game-field"),f=4,l=document.querySelector(".start"),d=document.querySelector(".game-score"),m=2048,y=0,v=!1,h=L();function L(){return Array.from({length:f},function(){return Array(f).fill(0)})}function p(){h=L()}function g(){h.flat().includes(m)&&(c.classList.remove("hidden"),l.classList.remove("restart"),l.classList.add("start"),l.innerText="Start",p(),document.removeEventListener("keyup",M))}function S(){h.flat().some(function(t){return 0===t})||(s.classList.remove("hidden"),c.classList.add("hidden"),document.removeEventListener("keyup",M))}function A(){return Math.floor(Math.random()*f)}function b(){var t=[A(),A()],e=t[0],r=t[1];h[e][r]?b():(h[e][r]=Math.random()>.9?4:2,S())}function w(){h.forEach(function(t,e){t.forEach(function(t,r){var n=u.rows[e].cells[r],o=h[e][r];n.classList="field-cell",n.innerText=o,o>0?n.classList.add("field-cell--"+o):n.innerText=""})})}function E(){return h.map(function(t){return t.slice()})}function k(t,e){return JSON.stringify(t)===JSON.stringify(e)}function T(e){return e.map(function(e){return t(e).reverse()})}function q(t){var e=L();return e.forEach(function(r,n){r.forEach(function(r,o){e[n][o]=t[o][n]})}),e}function x(t){var e=t.filter(function(t){return t>0});return Array(f-e.length).fill(0).concat(e)}function O(t){for(var e=f-1;e>0;e--)t[e]===t[e-1]&&(t[e]+=t[e-1],t[e-1]=0,y+=t[e]);return d.innerText=y,t}function j(t){var e=!1,r=!1;switch(t){case"ArrowUp":h=T(h=q(h)),e=!0,r=!0;break;case"ArrowDown":h=q(h),r=!0;break;case"ArrowLeft":h=T(h),e=!0}var n=E(),o=k(h=h.map(function(t){return x(O(x(t)))}),n);e&&(h=T(h)),r&&(h=q(h)),o||b()}function M(t){j(t.key),w(),g()}l.addEventListener("click",function(){l.classList.contains("start")&&!v?(v=!0,a.classList.add("hidden"),l.classList.remove("start"),l.classList.add("restart"),l.innerText="Restart"):l.classList.contains("restart")&&(v=!1,d.innerText=0,y=0,s.classList.add("hidden"),c.classList.add("hidden")),p(),b(),b(),w(),document.addEventListener("keyup",M)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6e9b4397.js.map