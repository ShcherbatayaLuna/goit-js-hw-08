!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return v.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(T,t),d?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function T(){var e=g();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,s&&r?b(e):(r=i=void 0,u)}function w(){var e=g(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=x(t)||0,y(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(x(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var S={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},j="feedback-form-state",T="mailTo";!function(){var e=localStorage.getItem(j),t=localStorage.getItem(T);e&&(S.textarea.value=e);t&&(S.input.value=t)}(),S.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===S.input.value||""===S.textarea.value)return alert("All fields must be are filled");console.log({email:S.input.value,message:S.textarea.value}),e.currentTarget.reset(),localStorage.removeItem(T),localStorage.removeItem(j)})),S.input.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(T,t)}),500)),S.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(j,t)}),500))}();
//# sourceMappingURL=03-feedback.e68deafd.js.map
