parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/bckg.jpg":[["bckg.9701a7b8.jpg","mWyj"],"mWyj"]}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={input:document.querySelector('[name="query"]'),button:document.querySelector(".btn"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".more")};exports.refs=e;
},{}],"jPfG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=require("./refs");function s(){e.refs.loadMore.classList.remove("is-hidden"),e.refs.loadMore.classList.add("is-visible")}
},{"./refs":"VyiV"}],"axMS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGalleryItem=e,exports.renderList=t,exports.clearMarkUp=i;var s=require("./refs");function e(e){const t=`<div class="photo-card">\n  <img src="${e.webformatURL}" alt="${e.tags}" width = 250, height = 200/>\n\n  <div class="stats">\n    <p class="stats-item">\n      <i class="material-icons">thumb_up </i>\n      ${e.likes}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons"> visibility </i>\n      ${e.views}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons"> comment </i>\n      ${e.comments}\n    </p>\n    <p class="stats-item">\n      <i class="material-icons" cloud_download </i>\n      ${e.downloads}\n    </p>\n  </div>\n</div>`;s.refs.gallery.insertAdjacentHTML("beforeend",t)}function t(s){s.forEach(s=>e(s))}function i(){""===s.refs.input.value&&(s.refs.gallery.innerHTML="",s.refs.loadMore.classList.add("is-hidden"))}
},{"./refs":"VyiV"}],"N8YO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=require("./refs");let t=document.getElementById("img");function o(){setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"end"})},700)}
},{"./refs":"VyiV"}],"eQwa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchImages=i,exports.incrementPage=l,exports.default=void 0;var e=n(require("./load_more")),t=require("./makeMarkUp"),r=require("./refs"),a=n(require("./scroll"));function n(e){return e&&e.__esModule?e:{default:e}}const o={searchQuery:"",key:"23141875-b38ef2a229822d56efda8eea3",base_url:"https://pixabay.com/api/",page:1,per_page:12};let u=document.getElementById("img");var s=o;function i(n){n.preventDefault(),o.searchQuery=r.refs.input.value;const u=`${o.base_url}?image_type=photo&orientation=horizontal&q=${o.searchQuery}&page=${o.page}&per_page=${o.per_page}&key=${o.key}`;return fetch(u).then(e=>e.json()).then(({hits:r})=>{(0,t.renderList)(r),0===r.length&&window.alert("Your request is no valid!Try again!"),r.length>11&&(0,e.default)()}).then((0,a.default)()).then(l()).then((0,a.default)()).catch(e=>{console.log(e)})}function l(){o.page++}exports.default=s;
},{"./load_more":"jPfG","./makeMarkUp":"axMS","./refs":"VyiV","./scroll":"N8YO"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=require("./js/refs.js"),r=a(require("./js/apiService.js")),t=require("./js/makeMarkUp"),n=i(require("./js/load_more.js")),s=i(require("./js/scroll.js"));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(t,s,i):t[s]=e[s]}return t.default=e,r&&r.set(e,t),t}function f(){""!==e.refs.input.value?e.refs.button.removeAttribute("disabled"):""===e.refs.input.value&&e.refs.button.setAttribute("disabled","disabled")}e.refs.button.addEventListener("click",r.fetchImages),e.refs.loadMore.addEventListener("click",r.fetchImages),e.refs.input.addEventListener("input",t.clearMarkUp),e.refs.input.addEventListener("input",f);
},{"./sass/main.scss":"clu1","./js/refs.js":"VyiV","./js/apiService.js":"eQwa","./js/makeMarkUp":"axMS","./js/load_more.js":"jPfG","./js/scroll.js":"N8YO"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.dfd56668.js.map