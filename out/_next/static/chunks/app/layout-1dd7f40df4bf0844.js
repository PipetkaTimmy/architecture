(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1326:function(e,t,n){Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,7261)),Promise.resolve().then(n.bind(n,4404)),Promise.resolve().then(n.bind(n,7640)),Promise.resolve().then(n.bind(n,8833)),Promise.resolve().then(n.t.bind(n,4080,23)),Promise.resolve().then(n.t.bind(n,5427,23))},7261:function(e,t,n){"use strict";var r=n(7437),a=n(2265),i=n(3790);t.default=()=>{let[e,t]=(0,a.useState)(!1);return(0,r.jsx)("div",{className:"menu-container",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(i.A,{className:"fixBtn",isIconOnly:!0,onClick:()=>{t(!e),console.log(e)},children:(0,r.jsx)("img",{src:"/messages.svg",alt:"message"})}),e&&(0,r.jsxs)("div",{className:"menu",children:[(0,r.jsx)("a",{href:"https://wa.me/77064213729",target:"_blank",children:(0,r.jsx)(i.A,{className:"menuBtn",isIconOnly:!0,children:(0,r.jsx)("img",{src:"/wp.svg",alt:""})})}),(0,r.jsx)("a",{href:"https://www.instagram.com/nomadstroy_project?igsh=MWRzZ3Yzbm9hcmEybg%3D%3D",children:(0,r.jsx)(i.A,{className:"menuBtn",isIconOnly:!0,children:(0,r.jsx)("img",{src:"/inst.svg",alt:""})})}),(0,r.jsx)("a",{href:"tel:+77064213729",children:(0,r.jsx)(i.A,{className:"menuBtn",isIconOnly:!0,children:(0,r.jsx)("img",{className:"imgRotate",src:"/phone.svg",alt:""})})})]})]})})}},8833:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:i=null,children:o,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[o,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=i?"".concat(i,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},4404:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let i=n(7437),o=n(2265),l=(r=n(1877))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,i.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},7640:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let i=n(7437),o=n(2265),l=(r=n(1877))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:s,dataLayer:c}=e;void 0===a&&(a=n);let u="dataLayer"!==n?"&l=".concat(n):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(n,"');")}}),(0,i.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(u).concat(r?"&gtm_auth=".concat(r):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},1877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(4080),a=n.n(r),i={};for(var o in r)"default"!==o&&(i[o]=(function(e){return r[e]}).bind(0,o));n.d(t,i)},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return o},isEqualNode:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?a[i]=!!n[e]:a.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:o}=n;return o?a.innerHTML=o.__html||"":i&&(a.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),a}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(i(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(o-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y}});let r=n(9920),a=n(1452),i=n(7437),o=r._(n(4887)),l=a._(n(2265)),s=n(6590),c=n(905),u=n(9189),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:i,children:o="",strategy:l="afterInteractive",onError:s,stylesheets:u}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,s);return}let g=()=>{a&&a(),f.add(h)},y=document.createElement("script"),_=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(i?(y.innerHTML=i.__html||"",g()):o?(y.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",g()):t&&(y.src=t,d.set(t,_)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),u&&m(u),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:g,scripts:y,getIsSsr:_,appDir:v,nonce:w}=(0,l.useContext)(s.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(a&&e&&f.has(e)&&a(),b.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...m}]),g(y)):_&&_()?f.add(t||n):_&&!_()&&h(e)),v){if(p&&p.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:w}:{as:"script",nonce:w}),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:w}:{as:"script",nonce:w})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let v=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8877:function(){},5427:function(e){e.exports={style:{fontFamily:"'__Inter_90eebe', '__Inter_Fallback_90eebe'",fontStyle:"normal"},className:"__className_90eebe"}}},function(e){e.O(0,[404,961,50,971,23,744],function(){return e(e.s=1326)}),_N_E=e.O()}]);