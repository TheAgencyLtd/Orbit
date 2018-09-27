"use strict";function addEvent(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)}function hasClass(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function addClass(e,t){e.classList?e.classList.add(t):hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"")}function toggleClass(e,t){hasClass(e,t)?removeClass(e,t):addClass(e,t)}function offset(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+s,left:t.left+n}}document.documentElement.classList.remove("no-webp"),function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window,function(e,t){if(t.getElementsByClassName){var n,s,r=t.documentElement,i=e.Date,a=e.HTMLPictureElement,o="addEventListener",l="getAttribute",c=e[o],u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,m=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],h={},g=Array.prototype.forEach,v=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[l]("class")||"")&&h[t]},y=function(e,t){v(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},A=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},w=function(e,t,n){var s=n?o:"removeEventListener";n&&w(e,t),p.forEach(function(n){e[s](n,t)})},C=function(e,s,r,i,a){var o=t.createEvent("CustomEvent");return r||(r={}),r.instance=n,o.initCustomEvent(s,!i,!a,r),e.dispatchEvent(o),o},b=function(t,n){var r;!a&&(r=e.picturefill||s.pf)?r({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<s.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},S=function(){var e,n,s=[],r=[],i=s,a=function(){var t=i;for(i=s.length?r:s,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(s,r){e&&!r?s.apply(this,arguments):(i.push(s),n||(n=!0,(t.hidden?u:d)(a)))};return o._lsFlush=a,o}(),x=function(e,t){return t?function(){S(e)}:function(){var t=this,n=arguments;S(function(){e.apply(t,n)})}},T=function(e){var t,n=0,s=125,r=666,a=r,o=function(){t=!1,n=i.now(),e()},l=f?function(){f(o,{timeout:a}),a!==r&&(a=r)}:x(function(){u(o)},!0);return function(e){var r;(e=e===!0)&&(a=44),t||(t=!0,r=s-(i.now()-n),r<0&&(r=0),e||r<9&&f?l():u(l,r))}},L=function(e){var t,n,s=99,r=function(){t=null,e()},a=function(){var e=i.now()-n;e<s?u(a,s-e):(f||r)(r)};return function(){n=i.now(),t||(t=u(a,s))}},_=function(){var a,d,f,p,h,E,_,R,$,N,P,B,k,I,W=/^img$/i,D=/^iframe$/i,F="onscroll"in e&&!/glebot/.test(navigator.userAgent),U=0,j=0,H=0,O=-1,q=function(e){H--,e&&e.target&&w(e.target,q),(!e||H<0||!e.target)&&(H=0)},Q=function(e,n){var s,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(R-=n,P+=n,$-=n,N+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=r;)a=(z(i,"opacity")||1)>0,a&&"visible"!=z(i,"overflow")&&(s=i.getBoundingClientRect(),a=N>s.left&&$<s.right&&P>s.top-1&&R<s.bottom+1);return a},G=function(){var e,i,o,c,u,f,m,h,g,v=n.elements;if((p=s.loadMode)&&H<8&&(e=v.length)){i=0,O++,null==k&&("expand"in s||(s.expand=r.clientHeight>500&&r.clientWidth>500?500:370),B=s.expand,k=B*s.expFactor),j<k&&H<1&&O>2&&p>2&&!t.hidden?(j=k,O=0):j=p>1&&O>1&&H<6?B:U;for(;i<e;i++)if(v[i]&&!v[i]._lazyRace)if(F)if((h=v[i][l]("data-expand"))&&(f=1*h)||(f=j),g!==f&&(E=innerWidth+f*I,_=innerHeight+f,m=f*-1,g=f),o=v[i].getBoundingClientRect(),(P=o.bottom)>=m&&(R=o.top)<=_&&(N=o.right)>=m*I&&($=o.left)<=E&&(P||N||$||R)&&(s.loadHidden||"hidden"!=z(v[i],"visibility"))&&(d&&H<3&&!h&&(p<3||O<4)||Q(v[i],f))){if(te(v[i]),u=!0,H>9)break}else!u&&d&&!c&&H<4&&O<4&&p>2&&(a[0]||s.preloadAfterLoad)&&(a[0]||!h&&(P||N||$||R||"auto"!=v[i][l](s.sizesAttr)))&&(c=a[0]||v[i]);else te(v[i]);c&&!u&&te(c)}},V=T(G),J=function(e){y(e.target,s.loadedClass),A(e.target,s.loadingClass),w(e.target,X),C(e.target,"lazyloaded")},K=x(J),X=function(e){K({target:e.target})},Y=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Z=function(e){var t,n=e[l](s.srcsetAttr);(t=s.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ee=x(function(e,t,n,r,i){var a,o,c,d,p,h;(p=C(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?y(e,s.autosizesClass):e.setAttribute("sizes",r)),o=e[l](s.srcsetAttr),a=e[l](s.srcAttr),i&&(c=e.parentNode,d=c&&m.test(c.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||d),p={target:e},h&&(w(e,q,!0),clearTimeout(f),f=u(q,2500),y(e,s.loadingClass),w(e,X,!0)),d&&g.call(c.getElementsByTagName("source"),Z),o?e.setAttribute("srcset",o):a&&!d&&(D.test(e.nodeName)?Y(e,a):e.src=a),i&&(o||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,A(e,s.lazyClass),S(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?q(p):H--,J(p))},!0)}),te=function(e){var t,n=W.test(e.nodeName),r=n&&(e[l](s.sizesAttr)||e[l]("sizes")),i="auto"==r;(!i&&d||!n||!e[l]("src")&&!e.srcset||e.complete||v(e,s.errorClass))&&(t=C(e,"lazyunveilread").detail,i&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,ee(e,t,i,r,n))},ne=function(){if(!d){if(i.now()-h<999)return void u(ne,999);var e=L(function(){s.loadMode=3,V()});d=!0,s.loadMode=3,V(),c("scroll",function(){3==s.loadMode&&(s.loadMode=2),e()},!0)}};return{_:function(){h=i.now(),n.elements=t.getElementsByClassName(s.lazyClass),a=t.getElementsByClassName(s.lazyClass+" "+s.preloadClass),I=s.hFac,c("scroll",V,!0),c("resize",V,!0),e.MutationObserver?new MutationObserver(V).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[o]("DOMNodeInserted",V,!0),r[o]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,V,!0)}),/d$|^c/.test(t.readyState)?ne():(c("load",ne),t[o]("DOMContentLoaded",V),u(ne,2e4)),n.elements.length?(G(),S._lsFlush()):V()},checkElems:V,unveil:te}}(),M=function(){var e,n=x(function(e,t,n,s){var r,i,a;if(e._lazysizesWidth=s,s+="px",e.setAttribute("sizes",s),m.test(t.nodeName||""))for(r=t.getElementsByTagName("source"),i=0,a=r.length;i<a;i++)r[i].setAttribute("sizes",s);n.detail.dataAttr||b(e,n.detail)}),r=function(e,t,s){var r,i=e.parentNode;i&&(s=E(e,i,s),r=C(e,"lazybeforesizes",{width:s,dataAttr:!!t}),r.defaultPrevented||(s=r.detail.width,s&&s!==e._lazysizesWidth&&n(e,i,r,s)))},i=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)r(e[t])},a=L(i);return{_:function(){e=t.getElementsByClassName(s.autosizesClass),c("resize",a)},checkElems:a,updateElem:r}}(),R=function(){R.i||(R.i=!0,M._(),_._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};s=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in s||(s[t]=n[t]);e.lazySizesConfig=s,u(function(){s.init&&R()})}(),n={cfg:s,autoSizer:M,loader:_,init:R,uP:b,aC:y,rC:A,hC:v,fire:C,gW:E,rAF:S}}}),!function(e,t,n){function s(e,t){return typeof e===t}function r(){var e,t,n,r,i,a,o;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],o=a.split("."),1===o.length?z[o[0]]=r:(!z[o[0]]||z[o[0]]instanceof Boolean||(z[o[0]]=new Boolean(z[o[0]])),z[o[0]][o[1]]=r),w.push((r?"":"no-")+o.join("-"))}}function i(e){var t=S.className,n=z._config.classPrefix||"";if(x&&(t=t.baseVal),z._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}z._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var s=e.split("."),r=z[s[0]];if(2==s.length&&(r=r[s[1]]),"undefined"!=typeof r)return z;t="function"==typeof t?t():t,1==s.length?z[s[0]]=t:(!z[s[0]]||z[s[0]]instanceof Boolean||(z[s[0]]=new Boolean(z[s[0]])),z[s[0]][s[1]]=t),i([(t&&0!=t?"":"no-")+s.join("-")]),z._trigger(e,t)}return z}function o(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],s(r,"function")?u(r,n||t):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,s){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var i=e.console;if(null!==r)s&&(r=r.getPropertyValue(s));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[s];return r}function p(){var e=t.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function h(e,n,s,r){var i,a,o,c,u="modernizr",d=l("div"),f=p();if(parseInt(s,10))for(;s--;)o=l("div"),o.id=r?r[s]:u+(s+1),d.appendChild(o);return i=l("style"),i.type="text/css",i.id="s"+u,(f.fake?f:d).appendChild(i),f.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",c=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),a=n(d,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=c,S.offsetHeight):d.parentNode.removeChild(d),!!a}function g(t,s){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(t[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+f(t[r])+":"+s+")");return i=i.join(" or "),h("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function v(e,t,r,i){function a(){d&&(delete R.style,delete R.modElem)}if(i=!s(i,"undefined")&&i,!s(r,"undefined")){var u=g(e,r);if(!s(u,"undefined"))return u}for(var d,f,m,p,h,v=["modernizr","tspan","samp"];!R.style&&v.length;)d=!0,R.modElem=l(v.shift()),R.style=R.modElem.style;for(m=e.length,f=0;m>f;f++)if(p=e[f],h=R.style[p],o(p,"-")&&(p=c(p)),R.style[p]!==n){if(i||s(r,"undefined"))return a(),"pfx"!=t||p;try{R.style[p]=r}catch(y){}if(R.style[p]!=h)return a(),"pfx"!=t||p}return a(),!1}function y(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+L.join(a+" ")+a).split(" ");return s(t,"string")||s(t,"undefined")?v(o,t,r,i):(o=(e+" "+_.join(a+" ")+a).split(" "),d(o,t,n))}function A(e,t,s){return y(e,n,n,t,s)}var w=[],C=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},z=function(){};z.prototype=b,z=new z;var E,S=t.documentElement,x="svg"===S.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;E=s(e,"undefined")||s(e.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),z.hasOwnProperty(e)&&setTimeout(function(){z._trigger(e,z[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,s;for(e=0;e<n.length;e++)(s=n[e])(t)},0),delete this._l[e]}},z._q.push(function(){b.addTest=a}),z.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var T="Moz O ms Webkit",L=b._config.usePrefixes?T.split(" "):[];b._cssomPrefixes=L;var _=b._config.usePrefixes?T.toLowerCase().split(" "):[];b._domPrefixes=_;var M={elem:l("modernizr")};z._q.push(function(){delete M.elem});var R={style:M.elem.style};z._q.unshift(function(){delete R.style}),b.testAllProps=y,b.testAllProps=A,z.addTest("flexbox",A("flexBasis","1px",!0)),z.addTest("flexboxlegacy",A("boxDirection","reverse",!0)),z.addTest("inlinesvg",function(){var e=l("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),r(),i(w),delete b.addTest,delete b.addAsyncTest;for(var $=0;$<z._q.length;$++)z._q[$]();e.Modernizr=z}(window,document),!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var t,n=document.createElement("source"),s=function(e){var t,s,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,s=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=s}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(e,t,n){function s(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function r(t,n){var s=new e.Image;return s.onerror=function(){S[t]=!1,ee()},s.onload=function(){S[t]=1===s.width,ee()},s.src=n,"pending"}function i(){I=!1,F=e.devicePixelRatio,W={},D={},y.DPR=F||1,U.width=Math.max(e.innerWidth||0,E.clientWidth),U.height=Math.max(e.innerHeight||0,E.clientHeight),U.vw=U.width/100,U.vh=U.height/100,v=[U.height,U.width,F].join("-"),U.em=y.getEmValue(),U.rem=U.em}function a(e,t,n,s){var r,i,a,o;return"saveData"===x.algorithm?e>2.7?o=n+1:(i=t-n,r=Math.pow(e-.6,1.5),a=i*r,s&&(a+=.1*r),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function o(e){var t,n=y.getSet(e),s=!1;"pending"!==n&&(s=v,n&&(t=y.setRes(n),y.applySetCandidate(t,e))),e[y.ns].evaled=s}function l(e,t){return e.res-t.res}function c(e,t,n){var s;return!n&&t&&(n=e[y.ns].sets,n=n&&n[n.length-1]),s=u(t,n),s&&(t=y.makeUrl(t),e[y.ns].curSrc=t,e[y.ns].curCan=s,s.res||Z(s,s.set.sizes)),s}function u(e,t){var n,s,r;if(e&&t)for(r=y.parseSet(t),e=y.makeUrl(e),n=0;n<r.length;n++)if(e===y.makeUrl(r[n].url)){s=r[n];break}return s}function d(e,t){var n,s,r,i,a=e.getElementsByTagName("source");for(n=0,s=a.length;s>n;n++)r=a[n],r[y.ns]=!0,i=r.getAttribute("srcset"),i&&t.push({srcset:i,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}function f(e,t){function n(t){var n,s=t.exec(e.substring(f));return s?(n=s[0],f+=n.length,n):void 0}function r(){var e,n,s,r,i,l,c,u,d,f=!1,p={};for(r=0;r<o.length;r++)i=o[r],l=i[i.length-1],c=i.substring(0,i.length-1),u=parseInt(c,10),d=parseFloat(c),V.test(c)&&"w"===l?((e||n)&&(f=!0),0===u?f=!0:e=u):J.test(c)&&"x"===l?((e||n||s)&&(f=!0),0>d?f=!0:n=d):V.test(c)&&"h"===l?((s||n)&&(f=!0),0===u?f=!0:s=u):f=!0;f||(p.url=a,e&&(p.w=e),n&&(p.d=n),s&&(p.h=s),s||n||e||(p.d=1),1===p.d&&(t.has1x=!0),p.set=t,m.push(p))}function i(){for(n(O),l="",c="in descriptor";;){if(u=e.charAt(f),"in descriptor"===c)if(s(u))l&&(o.push(l),l="",c="after descriptor");else{if(","===u)return f+=1,l&&o.push(l),void r();if("("===u)l+=u,c="in parens";else{if(""===u)return l&&o.push(l),void r();l+=u}}else if("in parens"===c)if(")"===u)l+=u,c="in descriptor";else{if(""===u)return o.push(l),void r();l+=u}else if("after descriptor"===c)if(s(u));else{if(""===u)return void r();c="in descriptor",f-=1}f+=1}}for(var a,o,l,c,u,d=e.length,f=0,m=[];;){if(n(q),f>=d)return m;a=n(Q),o=[],","===a.slice(-1)?(a=a.replace(G,""),r()):i()}}function m(e){function t(e){function t(){i&&(a.push(i),i="")}function n(){a[0]&&(o.push(a),a=[])}for(var r,i="",a=[],o=[],l=0,c=0,u=!1;;){if(r=e.charAt(c),""===r)return t(),n(),o;if(u){if("*"===r&&"/"===e[c+1]){u=!1,c+=2,t();continue}c+=1}else{if(s(r)){if(e.charAt(c-1)&&s(e.charAt(c-1))||!i){c+=1;continue}if(0===l){t(),c+=1;continue}r=" "}else if("("===r)l+=1;else if(")"===r)l-=1;else{if(","===r){t(),n(),c+=1;continue}if("/"===r&&"*"===e.charAt(c+1)){u=!0,c+=2;continue}}i+=r,c+=1}}}function n(e){return!!(u.test(e)&&parseFloat(e)>=0)||(!!d.test(e)||("0"===e||"-0"===e||"+0"===e))}var r,i,a,o,l,c,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,d=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=t(e),a=i.length,r=0;a>r;r++)if(o=i[r],l=o[o.length-1],n(l)){if(c=l,o.pop(),0===o.length)return c;if(o=o.join(" "),y.matchesMedia(o))return c}return"100vw"}t.createElement("picture");var p,h,g,v,y={},A=function(){},w=t.createElement("img"),C=w.getAttribute,b=w.setAttribute,z=w.removeAttribute,E=t.documentElement,S={},x={algorithm:""},T="data-pfsrc",L=T+"set",_=navigator.userAgent,M=/rident/.test(_)||/ecko/.test(_)&&_.match(/rv\:(\d+)/)&&RegExp.$1>35,R="currentSrc",$=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,P=e.picturefillCFG,B="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",k="font-size:100%!important;",I=!0,W={},D={},F=e.devicePixelRatio,U={px:1,"in":96},j=t.createElement("a"),H=!1,O=/^[ \t\n\r\u000c]+/,q=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,s){e.addEventListener?e.addEventListener(t,n,s||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,s){var r;if(!(t in W))if(W[t]=!1,s&&(r=t.match(e)))W[t]=r[1]*U[r[2]];else try{W[t]=new Function("e",n(t))(U)}catch(i){}return W[t]}}(),Z=function(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){var n,s,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=i.elements||y.qsa(i.context||t,i.reevaluate||i.reselect?y.sel:y.selShort),r=n.length){for(y.setupRun(i),H=!0,s=0;r>s;s++)y.fillImg(n[s],i);y.teardownRun(i)}};p=e.console&&console.warn?function(e){console.warn(e)}:A,R in w||(R="src"),S["image/jpeg"]=!0,S["image/gif"]=!0,S["image/png"]=!0,S["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in w,y.supSizes="sizes"in w,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&!function(e){w.srcset="data:,a",e.src="data:,a",y.supSrcset=w.complete===e.complete,y.supPicture=y.supSrcset&&y.supPicture}(t.createElement("img")),y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=x,y.supSrcset&&(y.sel+=",img["+L+"]"),y.DPR=F||1,y.u=U,y.types=S,g=y.supSrcset&&!y.supSizes,y.setSize=A,y.makeUrl=X(function(e){return j.href=e,j.href}),y.qsa=function(e,t){return e.querySelectorAll(t)},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return!e||Y(e)},y.calcLength=function(e){var t=Y(e,!0)||!1;return 0>t&&(t=!1),t},y.supportsType=function(e){return!e||S[e]},y.parseSize=X(function(e){var t=(e||"").match(N);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=f(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!h&&(e=t.body)){var n=t.createElement("div"),s=E.style.cssText,r=e.style.cssText;n.style.cssText=B,E.style.cssText=k,e.style.cssText=k,e.appendChild(n),h=n.offsetWidth,e.removeChild(n),h=parseFloat(h,10),E.style.cssText=s,e.style.cssText=r}return h||16},y.calcListLength=function(e){if(!(e in D)||x.uT){var t=y.calcLength(m(e));D[e]=t?t:U.width}return D[e]},y.setRes=function(e){var t;if(e){t=y.parseSet(e);for(var n=0,s=t.length;s>n;n++)Z(t[n],e.sizes)}return t},y.setRes.res=Z,y.applySetCandidate=function(e,t){if(e.length){var n,s,r,i,o,u,d,f,m,p=t[y.ns],h=y.DPR;if(u=p.curSrc||t[R],d=p.curCan||c(t,u,e[0].set),d&&d.set===e[0].set&&(m=M&&!t.complete&&d.res-.1>h,m||(d.cached=!0,d.res>=h&&(o=d))),!o)for(e.sort(l),i=e.length,o=e[i-1],s=0;i>s;s++)if(n=e[s],n.res>=h){r=s-1,o=e[r]&&(m||u!==y.makeUrl(n.url))&&a(e[r].res,n.res,h,e[r].cached)?e[r]:n;break}o&&(f=y.makeUrl(o.url),p.curSrc=f,p.curCan=o,f!==u&&y.setSrc(t,o),y.setSize(t))}},y.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},y.getSet=function(e){var t,n,s,r=!1,i=e[y.ns].sets;for(t=0;t<i.length&&!r;t++)if(n=i[t],n.srcset&&y.matchesMedia(n.media)&&(s=y.supportsType(n.type))){"pending"===s&&(n=s),r=n;break}return r},y.parseSets=function(e,t,s){var r,i,a,o,l=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[y.ns];(c.src===n||s.src)&&(c.src=C.call(e,"src"),c.src?b.call(e,T,c.src):z.call(e,T)),(c.srcset===n||s.srcset||!y.supSrcset||e.srcset)&&(r=C.call(e,"srcset"),c.srcset=r,o=!0),c.sets=[],l&&(c.pic=!0,d(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:C.call(e,"sizes")},c.sets.push(i),a=(g||c.src)&&$.test(c.srcset||""),a||!c.src||u(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=n,c.supported=!(l||i&&!y.supSrcset||a),o&&y.supSrcset&&!c.supported&&(r?(b.call(e,L,r),e.srcset=""):z.call(e,L)),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==y.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},y.fillImg=function(e,t){var n,s=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),n=e[y.ns],(s||n.evaled!==v)&&((!n.parsed||t.reevaluate)&&y.parseSets(e,e.parentNode,t),n.supported?n.evaled=v:o(e))},y.setupRun=function(){(!H||I||F!==e.devicePixelRatio)&&i()},y.supPicture?(ee=A,y.fillImg=A):!function(){var n,s=e.attachEvent?/d$|^c/:/d$|^c|^i/,r=function(){var e=t.readyState||"";i=setTimeout(r,"loading"===e?200:999),t.body&&(y.fillImgs(),n=n||s.test(e),n&&clearTimeout(i))},i=setTimeout(r,t.body?9:99),a=function(e,t){var n,s,r=function(){var i=new Date-s;t>i?n=setTimeout(r,t-i):(n=null,e())};return function(){s=new Date,n||(n=setTimeout(r,t))}},o=E.clientHeight,l=function(){I=Math.max(e.innerWidth||0,E.clientWidth)!==U.width||E.clientHeight!==o,o=E.clientHeight,I&&y.fillImgs()};K(e,"resize",a(l,99)),K(t,"readystatechange",r)}(),y.picturefill=ee,y.fillImgs=ee,y.teardownRun=A,ee._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(x[t]=e[0],H&&y.fillImgs({reselect:!0}))}};for(;P&&P.length;)e.picturefillCFG.push(P.shift());e.picturefill=ee,"object"==typeof module&&"object"==typeof module.exports?module.exports=ee:"function"==typeof define&&define.amd&&define("picturefill",function(){return ee}),y.supPicture||(S["image/webp"]=r("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(){return sessionStorage.fontsLoadedFoutWithClass?void(document.documentElement.className+=" fonts-loaded"):void("fonts"in document&&Promise.all([document.fonts.load("400 1em Roboto"),document.fonts.load("700 1em RobotoSlab")]).then(function(){document.documentElement.className+=" fonts-loaded",sessionStorage.fontsLoadedFoutWithClass=!0}))}();var $mainMenu=document.getElementById("menu-main"),$hamburger=document.getElementById("hamburger"),$header=document.getElementById("masthead"),$up=document.getElementById("js-top");addEvent($hamburger,"click",function(){console.log($hamburger),toggleClass($hamburger,"is-open"),toggleClass($hamburger,"is-closed"),toggleClass($mainMenu,"is-shown")}),addEvent(window,"scroll",function(){var e=window.scrollY;e>100?addClass($up,"shown"):removeClass($up,"shown")}),addEvent($up,"click",function(){var e=setInterval(function(){0==document.body.scrollTop&&(document.documentElement.scrollTop-=80,document.documentElement.scrollTop<=0&&clearInterval(e)),0==document.documentElement.scrollTop&&(document.body.scrollTop-=80,document.body.scrollTop<=0&&clearInterval(e))},10)});var $validForm=document.getElementsByClassName("invalid");if($validForm.length>0){var $screenReader=document.querySelector(".screen-reader-response[role=alert]");$screenReader.style.display="none"}