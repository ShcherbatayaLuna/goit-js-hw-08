function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,u=setTimeout(T,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function T(){var e=m();if(S(e))return j(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?v(n,i-(e-l)):n}(e))}function j(e){return u=void 0,p&&r?b(e):(r=o=void 0,a)}function h(){var e=m(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(T,t),b(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:j(m())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},x="feedback-form-state",S="mailTo";!function(){const e=localStorage.getItem(x),t=localStorage.getItem(S);e&&(b.textarea.value=e);t&&(b.input.value=t)}(),b.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.input.value||""===b.textarea.value)return alert("All fields must be are filled");console.log({email:b.input.value,message:b.textarea.value}),e.currentTarget.reset(),localStorage.removeItem(S),localStorage.removeItem(x)})),b.input.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem(S,t)}),500)),b.textarea.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem(x,t)}),500));
//# sourceMappingURL=03-feedback.f71119e5.js.map
