var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},$={};S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},O={};O=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;j=O?F.bind(F):function(){return F.apply(F,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},H={},I=Function.prototype,q=I.call,N=O&&I.bind.bind(q,q),A={},C=(H=O?N:function(e){return function(){return q.apply(e,arguments)}})({}.toString),R=H("".slice);A=function(e){return R(C(e),8,-1)};var W=Object,z=H("".split);T=$(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?z(e,""):W(e)}:W;var D={},G={};G=function(e){return null==e};var U=TypeError;D=function(e){if(G(e))throw new U("Can't call method on "+e);return e},x=function(e){return T(D(e))};var B={},J={},Y={},Q={},V="object"==typeof document&&document.all;Q=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:Q(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=H({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,eo=k.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&(s=(a=es.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Q(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},ef=String;ep=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;ed=function(e){if(Q(e))return e;throw new eh(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return G(r)?void 0:ed(r)};var ev={},eg=TypeError;ev=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=j(r,e))||Q(r=e.valueOf)&&!Y(n=j(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=j(r,e)))return n;throw new eg("Can't convert object to primitive value")};var em={},ey={},eb={};eb=!1;var e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__",eE=ey=k[ek]||e_(ek,{});(eE.versions||(eE.versions=[])).push({version:"3.36.1",mode:eb?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"}),em=function(e,t){return ey[e]||(ey[e]=t||{})};var eS={},e$={},ej=Object;e$=function(e){return ej(D(e))};var eO=H({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return eO(e$(e),t)};var eF={},eL=0,eM=Math.random(),eP=H(1..toString);eF=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eL+eM,36)};var ex=k.Symbol,eT=em("wks"),eH=ee?ex.for||ex:ex&&ex.withoutSetter||eF,eI=TypeError,eq=(eS(eT,e="toPrimitive")||(eT[e]=et&&eS(ex,e)?ex[e]:eH("Symbol."+e)),eT[e]);J=function(e,t){if(!Y(e)||K(e))return e;var r,n=el(e,eq);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!Y(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},B=function(e){var t=J(e,"string");return K(t)?t:t+""};var eN={},eA={},eC=k.document,eR=Y(eC)&&Y(eC.createElement);eA=function(e){return eR?eC.createElement(e):{}},eN=!S&&!$(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;i=S?eW:function(e,t){if(e=x(e),t=B(t),eN)try{return eW(e,t)}catch(e){}if(eS(e,t))return P(!j(o,e,t),e[t])};var ez={},eD={};eD=S&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eU=String,eB=TypeError;eG=function(e){if(Y(e))return e;throw new eB(eU(e)+" is not an object")};var eJ=TypeError,eY=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eV="enumerable",eK="configurable",eX="writable";c=S?eD?function(e,t,r){if(eG(e),t=B(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eQ(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eG(e),t=B(t),eG(r),eN)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eJ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1=Function.prototype,e2=S&&Object.getOwnPropertyDescriptor,e4=eS(e1,"name")&&(!S||S&&e2(e1,"name").configurable),e3={},e9=H(Function.toString);Q(ey.inspectSource)||(ey.inspectSource=function(e){return e9(e)}),e3=ey.inspectSource;var e7={},e6={},e8=k.WeakMap;e6=Q(e8)&&/native code/.test(String(e8));var e5={},te=em("keys");e5=function(e){return te[e]||(te[e]=eF(e))};var tt={};tt={};var tr="Object already initialized",tn=k.TypeError,ti=k.WeakMap;if(e6||ey.state){var to=ey.state||(ey.state=new ti);to.get=to.get,to.has=to.has,to.set=to.set,u=function(e,t){if(to.has(e))throw new tn(tr);return t.facade=e,to.set(e,t),t},l=function(e){return to.get(e)||{}},d=function(e){return to.has(e)}}else{var ta=e5("state");tt[ta]=!0,u=function(e,t){if(eS(e,ta))throw new tn(tr);return t.facade=e,ez(e,ta,t),t},l=function(e){return eS(e,ta)?e[ta]:{}},d=function(e){return eS(e,ta)}}var ts=(e7={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,tc=e7.get,tu=String,tl=Object.defineProperty,tp=H("".slice),tf=H("".replace),th=H([].join),tv=S&&!$(function(){return 8!==tl(function(){},"length",{value:8}).length}),tg=String(String).split("String"),tm=e0=function(e,t,r){"Symbol("===tp(tu(t),0,7)&&(t="["+tf(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e4&&e.name!==t)&&(S?tl(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&eS(r,"arity")&&e.length!==r.arity&&tl(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?S&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ts(e);return eS(n,"source")||(n.source=th(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return Q(this)&&tc(this).source||e3(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e0(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS=Math.ceil,t$=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?t$:tS)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var tj=Math.max,tO=Math.min;tw=function(e,t){var r=tk(e);return r<0?tj(r+t,0):tO(r,t)};var tF={},tL={},tM=Math.min;tL=function(e){var t=tk(e);return t>0?tM(t,9007199254740991):0},tF=function(e){return tL(e.length)};var tP=function(e){return function(t,r,n){var i,o=x(t),a=tF(o);if(0===a)return!e&&-1;var s=tw(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tx={includes:tP(!0),indexOf:tP(!1)}.indexOf,tT=H([].push);t_=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eS(tt,r)&&eS(n,r)&&tT(o,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tx(o,r)||tT(o,r));return o};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return t_(e,tH)},f=Object.getOwnPropertySymbols;var tI=H([].concat);tb=X("Reflect","ownKeys")||function(e){var t=p(eG(e));return f?tI(t,f(e)):t},ty=function(e,t,r){for(var n=tb(t),o=0;o<n.length;o++){var a=n[o];eS(e,a)||r&&eS(r,a)||c(e,a,i(t,a))}};var tq={},tN=/#|\.prototype\./,tA=function(e,t){var r=tR[tC(e)];return r===tz||r!==tW&&(Q(t)?$(t):!!t)},tC=tA.normalize=function(e){return String(e).replace(tN,".").toLowerCase()},tR=tA.data={},tW=tA.NATIVE="N",tz=tA.POLYFILL="P";tq=tA,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tq(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ty(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),eZ(r,n,a,e)}};var tD={},tG={},tU=Function.prototype,tB=tU.apply,tJ=tU.call;tG="object"==typeof Reflect&&Reflect.apply||(O?tJ.bind(tB):function(){return tJ.apply(tB,arguments)});var tY={},tQ={},tV=(tQ=function(e){if("Function"===A(e))return H(e)})(tQ.bind);tY=function(e,t){return ed(e),void 0===t?e:O?tV(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=X("document","documentElement");var tX={};tX=H([].slice);var tZ={},t0=TypeError;tZ=function(e,t){if(e<t)throw new t0("Not enough arguments");return e};var t1={};t1=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t2={};t2="process"===A(k.process);var t4=k.setImmediate,t3=k.clearImmediate,t9=k.process,t7=k.Dispatch,t6=k.Function,t8=k.MessageChannel,t5=k.String,re=0,rt={},rr="onreadystatechange";$(function(){h=k.location});var rn=function(e){if(eS(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){k.postMessage(t5(e),h.protocol+"//"+h.host)};t4&&t3||(t4=function(e){tZ(arguments.length,1);var t=Q(e)?e:t6(e),r=tX(arguments,1);return rt[++re]=function(){tG(t,void 0,r)},v(re),re},t3=function(e){delete rt[e]},t2?v=function(e){t9.nextTick(ri(e))}:t7&&t7.now?v=function(e){t7.now(ri(e))}:t8&&!t1?(m=(g=new t8).port2,g.port1.onmessage=ro,v=tY(m.postMessage,m)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!$(ra)?(v=ra,k.addEventListener("message",ro,!1)):v=rr in eA("script")?function(e){tK.appendChild(eA("script"))[rr]=function(){tK.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tD={set:t4,clear:t3}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rs},{clearImmediate:rs});var rc=tD.set,ru={},rl={};rl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rd=k.Function,rp=/MSIE .\./.test(en)||rl&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ru=function(e,t){var r=t?2:1;return rp?function(n,i){var o=tZ(arguments.length,1)>r,a=Q(n)?n:rd(n),s=o?tX(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rf=k.setImmediate?ru(rc,!1):rc;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rf},{setImmediate:rf});var rh=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function F(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=F,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rh}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rh:Function("r","regeneratorRuntime = r")(rh)}const rv="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="68062454-6a39-4a03-91b6-4de12ac1b5c7",rm=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},ry={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rb=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},r_=async function(e){try{let t=await rm(`${rv}${e}?key=${rg}`);ry.recipe=rb(t),ry.bookmarks.some(t=>t.id===e)?ry.recipe.bookmarked=!0:ry.recipe.bookmarked=!1,console.log(ry.recipe)}catch(e){throw console.error(`${e}`),e}},rw=async function(e){try{ry.search.query=e;let t=await rm(`${rv}?search=${e}&key=${rg}`);console.log(t),ry.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),ry.search.page=1}catch(e){throw console.error(`${e}`),e}},rk=function(e=ry.search.page){ry.search.page=e;let t=(e-1)*ry.search.resultsPerPage,r=e*ry.search.resultsPerPage;return ry.search.results.slice(t,r)},rE=function(e){ry.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/ry.recipe.servings}),ry.recipe.servings=e},rS=function(){localStorage.setItem("bookmarks",JSON.stringify(ry.bookmarks))},r$=function(e){ry.bookmarks.push(e),e.id===ry.recipe.id&&(ry.recipe.bookmarked=!0),rS()},rj=function(e){let t=ry.bookmarks.findIndex(t=>t.id===e);ry.bookmarks.splice(t,1),e===ry.recipe.id&&(ry.recipe.bookmarked=!1),rS()};!function(){let e=localStorage.getItem("bookmarks");e&&(ry.bookmarks=JSON.parse(e))}();const rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rm(`${rv}?key=${rg}`,r);ry.recipe=rb(n),r$(ry.recipe)}catch(e){throw e}};var rF={};rF=new URL("icons.c14567a0.svg",import.meta.url).toString();class rL{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
              <div class="spinner">
                      <svg>
                        <use href="${_(rF)}#icon-loader"></use>
                      </svg>
                    </div>
                    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
            <div class="error">
                    <div>
                      <svg>
                        <use href="${_(rF)}#icon-alert-triangle"></use>
                      </svg>
                    </div>
                    <p>${e}</p>
                  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
            <div class="message">
                    <div>
                      <svg>
                        <use href="${_(rF)}#icon-smile"></use>
                      </svg>
                    </div>
                    <p>${e}</p>
                  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rM extends rL{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find the recipe. please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
          <figure class="recipe__fig">
                    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
                    <h1 class="recipe__title">
                      <span>${this._data.title}</span>
                    </h1>
                  </figure>

                  <div class="recipe__details">
                    <div class="recipe__info">
                      <svg class="recipe__info-icon">
                        <use href="${_(rF)}#icon-clock"></use>
                      </svg>
                      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                      <span class="recipe__info-text">minutes</span>
                    </div>
                    <div class="recipe__info">
                      <svg class="recipe__info-icon">
                        <use href="${_(rF)}#icon-users"></use>
                      </svg>
                      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                      <span class="recipe__info-text">servings</span>

                      <div class="recipe__info-buttons">
                        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                          <svg>
                            <use href="${_(rF)}#icon-minus-circle"></use>
                          </svg>
                        </button>
                        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                          <svg>
                            <use href="${_(rF)}#icon-plus-circle"></use>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                      <svg>
                        <use href="${_(rF)}#icon-user"></use>
                      </svg>
                    </div>
                    <button class="btn--round btn--bookmark">
                      <svg class="">
                        <use href="${_(rF)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                      </svg>
                    </button>
                  </div>

                  <div class="recipe__ingredients">
                    <h2 class="heading--2">Recipe ingredients</h2>
                    <ul class="recipe__ingredient-list">
                    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
                    </ul>
                  </div>

                  <div class="recipe__directions">
                    <h2 class="heading--2">How to cook it</h2>
                    <p class="recipe__directions-text">
                      This recipe was carefully designed and tested by
                      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                      directions at their website.
                    </p>
                    <a
                      class="btn--small recipe__btn"
                      href="${this._data.sourceUrl}"
                      target="_blank"
                    >
                      <span>Directions</span>
                      <svg class="search__icon">
                        <use href="${_(rF)}#icon-arrow-right"></use>
                      </svg>
                    </a>
                  </div>`}_generateMarkupIngredient(e){return` 
            <li class="recipe__ingredient">
                <svg class="recipe__icon">
                    <use href="${_(rF)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
                <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                    ${e.description}
                </div>
            </li>`}}var rP=new rM;class rx{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rT=new rx,rH=new class extends rL{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
            <li class="preview">
                <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
                <figure class="preview__fig">
                    <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">${this._data.publisher}</p>
                    <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                      <svg>
                        <use href="${_(rF)}#icon-user"></use>
                      </svg>
                    </div>
                </div>
                </a>
            </li>`}};class rI extends rL{_parentElement=document.querySelector(".results");_errorMessage="No recipes found. please try again! :)";_message="";_generateMarkup(){return this._data.map(e=>rH.render(e,!1)).join("")}}var rq=new rI;class rN extends rL{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
                <button data-goto ="${e+1}" class="btn--inline pagination__btn--next">
                    <span>Page ${e+1}</span>
                    <svg class="search__icon">
                       <use href="${_(rF)}#icon-arrow-right"></use>
                    </svg>
                <button>`:e===t&&t>1?`
                <button data-goto ="${e-1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                       <use href="${_(rF)}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${e-1}</span>
                <button>`:e<t?`
                <button data-goto ="${e-1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                       <use href="${_(rF)}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${e-1}</span>
                <button>
                <button data-goto ="${e+1}" class="btn--inline pagination__btn--next">
                    <span>Page ${e+1}</span>
                    <svg class="search__icon">
                       <use href="${_(rF)}#icon-arrow-right"></use>
                    </svg>
                <button>`:""}}var rA=new rN;class rC extends rL{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe!";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rH.render(e,!1)).join("")}}var rR=new rC;class rW extends rL{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rz=new rW;const rD=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rP.renderSpinner(),rq.update(rk()),rR.update(ry.bookmarks),await r_(e),rP.render(ry.recipe)}catch(e){rP.renderError()}},rG=async function(){try{rq.renderSpinner();let e=rT.getQuery();if(!e)return;await rw(e),rq.render(rk()),rA.render(ry.search)}catch(e){console.log(e)}},rU=async function(e){try{rz.renderSpinner(),await rO(e),console.log(ry.recipe),rP.render(ry.recipe),rz.renderMessage(),rR.render(ry.bookmarks),window.history.pushState(null,"",`#${ry.recipe.id}`),setTimeout(function(){rz.toggleWindow()},2500)}catch(e){console.error(e),rz.renderError(e.message)}};rR.addHandlerRender(function(){rR.render(ry.bookmarks)}),rP.addHandlerRender(rD),rP.addHandlerUpdateServings(function(e){rE(e),rP.update(ry.recipe)}),rP.addHandlerAddBookmark(function(){ry.recipe.bookmarked?rj(ry.recipe.id):r$(ry.recipe),rP.update(ry.recipe),rR.render(ry.bookmarks)}),rT.addHandlerSearch(rG),rA.addHandlerClick(function(e){rq.render(rk(e)),rA.render(ry.search)}),rz.addHandlerUpload(rU);
//# sourceMappingURL=index.98042f59.js.map
