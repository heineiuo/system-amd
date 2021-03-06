/**
 * Copyright (c) 2020-present, heineiuo.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare const SystemJS: any

const state = {
  loaded: false,
  loading: false,
  loadingPromise: Promise.resolve(),
}

function load(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ('SystemJS' in window) {
      state.loaded = true
      state.loading = false
      return resolve()
    }
    const script = document.createElement('script')
    const scriptContent = `
/*
* SystemJS 6.2.5
*/
!function(){const t="undefined"!=typeof self,e="undefined"!=typeof document,n=t?self:global;let r;if(e){const t=document.querySelector("base[href]");t&&(r=t.href)}if(!r&&"undefined"!=typeof location){const t=(r=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==t&&(r=r.slice(0,t+1))}const o=/\\\\/g;function i(t,e){if(-1!==t.indexOf("\\\\")&&(t=t.replace(o,"/")),"/"===t[0]&&"/"===t[1])return e.slice(0,e.indexOf(":")+1)+t;if("."===t[0]&&("/"===t[1]||"."===t[1]&&("/"===t[2]||2===t.length&&(t+="/"))||1===t.length&&(t+="/"))||"/"===t[0]){const n=e.slice(0,e.indexOf(":")+1);let r;if(r="/"===e[n.length+1]?"file:"!==n?(r=e.slice(n.length+2)).slice(r.indexOf("/")+1):e.slice(8):e.slice(n.length+("/"===e[n.length])),"/"===t[0])return e.slice(0,e.length-r.length-1)+t;const o=r.slice(0,r.lastIndexOf("/")+1)+t,i=[];let c=-1;for(let t=0;t<o.length;t++)-1!==c?"/"===o[t]&&(i.push(o.slice(c,t+1)),c=-1):"."===o[t]?"."!==o[t+1]||"/"!==o[t+2]&&t+2!==o.length?"/"===o[t+1]||t+1===o.length?t+=1:c=t:(i.pop(),t+=2):c=t;return-1!==c&&i.push(o.slice(c)),e.slice(0,e.length-r.length)+i.join("")}}function c(t,e){return i(t,e)||(-1!==t.indexOf(":")?t:i("./"+t,e))}function s(t,e){for(let n in e)t[n]=e[n];return t}function u(t,e,n,r,o){for(let c in t){const s=i(c,n)||c,u=t[c];if("string"!=typeof u)continue;const l=d(r,i(u,n)||u,o);l?e[s]=l:a(c,u,"bare specifier did not resolve")}}function l(t,e){if(e[t])return t;let n=t.length;do{const r=t.slice(0,n+1);if(r in e)return r}while(-1!==(n=t.lastIndexOf("/",n-1)))}function f(t,e){const n=l(t,e);if(n){const r=e[n];if(null===r)return;if(!(t.length>n.length&&"/"!==r[r.length-1]))return r+t.slice(n.length);a(n,r,"should have a trailing '/'")}}function a(t,e,n){console.warn("Package target "+n+", resolving target '"+e+"' for "+t)}function d(t,e,n){let r=n&&l(n,t.scopes);for(;r;){const n=f(e,t.scopes[r]);if(n)return n;r=l(r.slice(0,r.lastIndexOf("/")),t.scopes)}return f(e,t.imports)||-1!==e.indexOf(":")&&e}const h="undefined"!=typeof Symbol,p=h&&Symbol.toStringTag,m=h?Symbol():"@";function y(){this[m]={}}const g=y.prototype;function v(t){return t.id}function b(t,e,n){if(t.onload(n,e.id,e.d&&e.d.map(v)),n)throw n}let x;g.prepareImport=function(){},g.import=function(t,e){const n=this;return Promise.resolve(n.prepareImport()).then(function(){return n.resolve(t,e)}).then(function(t){const e=function t(e,n,r){let o=e[m][n];if(o)return o;const i=[],c=Object.create(null);p&&Object.defineProperty(c,p,{value:"Module"});let s=Promise.resolve().then(function(){return e.instantiate(n,r)}).then(function(t){if(!t)throw Error("Module "+n+" did not instantiate");const r=t[1](function(t,e){o.h=!0;let n=!1;if("object"!=typeof t)t in c&&c[t]===e||(c[t]=e,n=!0);else{for(let e in t){let r=t[e];e in c&&c[e]===r||(c[e]=r,n=!0)}t.__esModule&&(c.__esModule=t.__esModule)}if(n)for(let t=0;t<i.length;t++)i[t](c);return e},2===t[1].length?{import:function(t){return e.import(t,n)},meta:e.createContext(n)}:void 0);return o.e=r.execute||function(){},[t[0],r.setters||[]]});const u=(s=s.catch(function(t){b(e,o,t)})).then(function(r){return Promise.all(r[0].map(function(o,i){const c=r[1][i];return Promise.resolve(e.resolve(o,n)).then(function(r){const o=t(e,r,n);return Promise.resolve(o.I).then(function(){return c&&(o.i.push(c),!o.h&&o.I||c(o.n)),o})})})).then(function(t){o.d=t})});return u.catch(function(t){o.e=null,o.er=t}),o=e[m][n]={id:n,i:i,n:c,I:s,L:u,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0}}(n,t);return e.C||function(t,e){return e.C=function t(e,n,r){if(!r[n.id])return r[n.id]=!0,Promise.resolve(n.L).then(function(){return Promise.all(n.d.map(function(n){return t(e,n,r)}))})}(t,e,{}).then(function(){return function t(e,n,r){if(r[n.id])return;if(r[n.id]=!0,!n.e){if(n.er)throw n.er;return n.E?n.E:void 0}let o;return n.d.forEach(function(i){try{const c=t(e,i,r);c&&(c.catch(function(t){b(e,n,t)}),(o=o||[]).push(c))}catch(t){b(e,n,t)}}),o?Promise.all(o).then(i):i();function i(){try{let t=n.e.call(S);if(t)return t=t.then(function(){n.C=n.n,n.E=null,b(e,n,null)},function(t){b(e,n,t)}),n.E=n.E||t;n.C=n.n,b(e,n,null)}catch(t){throw b(e,n,t),n.er=t,t}finally{n.L=n.I=void 0,n.e=null}}}(t,e,{})}).then(function(){return e.n})}(n,e)})},g.createContext=function(t){return{url:t}},g.onload=function(){},g.register=function(t,e){x=[t,e]},g.getRegister=function(){const t=x;return x=void 0,t};const S=Object.freeze(Object.create(null));n.System=new y;let E,O={imports:{},scopes:{}};e&&Array.prototype.forEach.call(document.querySelectorAll('script[type="systemjs-importmap"][src]'),function(t){t._j=fetch(t.src).then(function(t){return t.json()})}),g.prepareImport=function(){return E||(E=Promise.resolve(),e&&Array.prototype.forEach.call(document.querySelectorAll('script[type="systemjs-importmap"]'),function(t){E=E.then(function(){return(t._j||t.src&&fetch(t.src).then(function(t){return t.json()})||Promise.resolve(JSON.parse(t.innerHTML))).then(function(e){O=function(t,e,n){const r={imports:s({},n.imports),scopes:s({},n.scopes)};if(t.imports&&u(t.imports,r.imports,e,n,null),t.scopes)for(let o in t.scopes){const i=c(o,e);u(t.scopes[o],r.scopes[i]||(r.scopes[i]={}),e,n,i)}return r}(e,t.src||r,O)})})})),E},g.resolve=function(t,e){return d(O,i(t,e=e||r)||t,e)||function(t,e){throw Error("Unable to resolve specifier '"+t+(e?"' from "+e:"'"))}(t,e)};const w=g.register;let j,P;function A(){Array.prototype.forEach.call(document.querySelectorAll("script[type=systemjs-module]"),function(t){t.src&&System.import("import:"===t.src.slice(0,7)?t.src.slice(7):c(t.src,r))})}g.register=function(t,e){w.call(this,t,e)},g.createScript=function(t){const e=document.createElement("script");return e.charset="utf-8",e.async=!0,e.crossOrigin="anonymous",e.src=t,e},e&&window.addEventListener("error",function(t){j=t.filename,P=t.error}),g.instantiate=function(t,e){const n=this;return new Promise(function(r,o){const i=g.createScript(t);i.addEventListener("error",function(){o(Error("Error loading "+t+(e?" from "+e:"")))}),i.addEventListener("load",function(){document.head.removeChild(i),j===t?o(P):r(n.getRegister())}),document.head.appendChild(i)})},e&&(window.addEventListener("DOMContentLoaded",A),A()),t&&"function"==typeof importScripts&&(g.instantiate=function(t){const e=this;return new Promise(function(n,r){try{importScripts(t)}catch(t){r(t)}n(e.getRegister())})}),function(t){const e=t.System.constructor.prototype,n=-1!==navigator.userAgent.indexOf("Trident");let r,o,i;const c=e.import;e.import=function(e,s){return function(){r=o=void 0;for(let e in t)!t.hasOwnProperty(e)||!isNaN(e)&&e<t.length||n&&t[e]&&t[e].parent===window||(r?o||(o=e):r=e,i=e)}(),c.call(this,e,s)};const s=[[],function(){return{}}],u=e.getRegister;e.getRegister=function(){const e=u.call(this);if(e)return e;const c=function(){let e,c=0;for(let i in t)if(!(!t.hasOwnProperty(i)||!isNaN(i)&&i<t.length||n&&t[i]&&t[i].parent===window)){if(0===c&&i!==r||1===c&&i!==o)return i;c++,e=i}if(e!==i)return e}();if(!c)return s;let l;try{l=t[c]}catch(t){return s}return[[],function(t){return{execute:function(){t({default:l,__useDefault:!0})}}}]}}("undefined"!=typeof self?self:global),function(t){const e=t.System.constructor.prototype,n=e.instantiate,r=/\\.(css|html|json|wasm)$/;e.shouldFetch=function(t){const e=t.split("?")[0].split("#")[0];return e.slice(e.lastIndexOf(".")).match(r)},e.fetch=function(t){return fetch(t)},e.instantiate=function(t,e){const r=this;return this.shouldFetch(t)?this.fetch(t).then(function(n){if(!n.ok)throw Error(n.status+" "+n.statusText+", loading "+t+(e?" from "+e:""));const o=n.headers.get("content-type");if(o.match(/^(text|application)\\/(x-)?javascript(;|$)/))return n.text().then(function(t){return(0,eval)(t),r.getRegister()});if(o.match(/^application\\/json(;|$)/))return n.text().then(function(t){return[[],function(e){return{execute:function(){e("default",JSON.parse(t))}}}]});if(o.match(/^text\\/css(;|$)/))return n.text().then(function(t){return[[],function(e){return{execute:function(){const n=new CSSStyleSheet;n.replaceSync(t),e("default",n)}}}]});if(o.match(/^application\\/wasm(;|$)/))return(WebAssembly.compileStreaming?WebAssembly.compileStreaming(n):n.arrayBuffer().then(WebAssembly.compile)).then(function(t){const e=[],n=[],r={};return WebAssembly.Module.imports&&WebAssembly.Module.imports(t).forEach(function(t){const o=t.module;-1===e.indexOf(o)&&(e.push(o),n.push(function(t){r[o]=t}))}),[e,function(e){return{setters:n,execute:function(){return WebAssembly.instantiate(t,r).then(function(t){e(t.exports)})}}}]});throw new Error('Unknown module type "'+o+'"')}):n.apply(this,arguments)}}("undefined"!=typeof self?self:global);const I="undefined"!=typeof Symbol&&Symbol.toStringTag;g.get=function(t){const e=this[m][t];if(e&&null===e.e&&!e.E)return e.er?null:e.n},g.set=function(t,e){let n;I&&"Module"===e[I]?n=e:(n=Object.assign(Object.create(null),e),I&&Object.defineProperty(n,I,{value:"Module"}));const r=Promise.resolve(n),o=this[m][t]||(this[m][t]={id:t,i:[],h:!1,d:[],e:null,er:void 0,E:void 0});return!o.e&&!o.E&&(Object.assign(o,{n:n,I:void 0,L:void 0,C:r}),n)},g.has=function(t){return!!this[m][t]},g.delete=function(t){const e=this[m],n=e[t];if(!n||null!==n.e||n.E)return!1;let r=n.i;return n.d&&n.d.forEach(function(t){const e=t.i.indexOf(n);-1!==e&&t.i.splice(e,1)}),delete e[t],function(){const n=e[t];if(!n||!r||null!==n.e||n.E)return!1;r.forEach(function(t){n.i.push(t),t(n.n)}),r=null}};const C="undefined"!=typeof Symbol&&Symbol.iterator;g.entries=function(){const t=this,e=Object.keys(t[m]);let n,r,o=0;const i={next:function(){for(;void 0!==(r=e[o++])&&void 0===(n=t.get(r)););return{done:void 0===r,value:void 0!==r&&[r,n]}}};return i[C]=function(){return this},i}}();;

!function(t){const e=t.System.constructor.prototype,n=[[],function(){return{}}];function r(){throw Error("AMD require not supported.")}let o,s;function i(){}const u=["require","exports","module"];function f(t,e){const n={},o={exports:n},s=[],i=[];let u=0;for(let e=0;e<t.length;e++){const f=t[e],c=i.length;if("require"===f)s[e]=r,u++;else if("module"===f)s[e]=o,u++;else if("exports"===f)s[e]=n,u++;else{const t=e;i.push(function(e){s[t]=e.__useDefault?e.default:e})}u&&(t[c]=f)}u&&(t.length-=u);const f=e;return[t,function(t){return t({default:n,__useDefault:!0}),{setters:i,execute:function(){const e=f.apply(n,s);void 0!==e&&(o.exports=e),n!==o.exports&&t("default",o.exports)}}}]}let c;const l=e.register;e.register=function(t,e,n){c="string"==typeof t?n:e,l.apply(this,arguments)};const p=e.instantiate;e.instantiate=function(){return a=null,p.apply(this,arguments)};const g=e.getRegister;let a,y;function d(t,e){return t instanceof Array?[t,e]:"object"==typeof t?[[],function(){return t}]:"function"==typeof t?[u,t]:void 0}function m(t,e){s||(s=e,setTimeout(function(){s=null})),o=e,System.registerRegistry[t]=System.getRegister(),o=null}e.getRegister=function(){if(o)return o;const t=s;s=null;const e=g.call(this);if(e&&e[1]===c)return e;const r=a;return a=null,t||(r?f(r,y):e||n)},t.define=function(t,e,n){if("string"==typeof t){const r=d(e,n);if(a){if(!System.registerRegistry)throw Error("Include the named register extension for SystemJS named AMD support.");return m(t,f(r[0],r[1])),a=[],void(y=i)}System.registerRegistry&&m(t,f([].concat(r[0]),r[1])),t=e,e=n}const r=d(t,e);a=r[0],y=r[1]},t.define.amd={}}("undefined"!=typeof self?self:global);
//# sourceMappingURL=/sm/5bc31c1a035bbb1677b597ce74c365d5133c22619db6c7446feaf46f022d4d08.map

window.SystemJS = System;
`
    const blob = new Blob([scriptContent], {
      type: 'application/javascript',
    })
    script.src = URL.createObjectURL(blob)
    script.onload = (): void => {
      state.loaded = true
      state.loading = false
      resolve()
    }
    script.onerror = (e): void => {
      state.loaded = false
      state.loading = false
      reject(e)
    }

    document.body.appendChild(script)
  })
}

function importScript<T = any>(url: string): Promise<T> {
  if (!state.loaded) {
    if (!state.loading) {
      state.loading = true
      state.loadingPromise = load()
    }

    return new Promise(async (resovle, reject) => {
      try {
        await state.loadingPromise
        resovle(await SystemJS.import(url))
      } catch (e) {
        reject(e)
      }
    })
  }

  return SystemJS.import(url)
}

export default {
  import: importScript,
}
