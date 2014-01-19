// ==UserScript==
// @id             banki.ru_plus_beta
// @name           Банки.ру + BETA
// @version        0.91.7.0
// @namespace      
// @author         rebelion76
// @description    Расширение возможностей сайта banki.ru. Дальше - больше!
// @include        http://*.banki.ru/*
// @include        https://*.banki.ru/*
// @include        http://banki.ru/*
// @include        https://banki.ru/*
// @match          *://banki.ru/*   
// @match          *://*.banki.ru/*   
// ==/UserScript==

//---------------------- Библиотеки ----------------------------------------------
// ! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
// --------------------- Основные переменные --------------------------------------
/** префикс для переменных */
var prefix = "banki_ru_plus_"; 
/** версия  */
var version = "0.91.7.0";
/** новая версия */
var new_version = getParam('new_version');
/** адрес обновления */
var UPDATE_URL = "http://rawgithub.com/rebelion76/bankiru_plus/master/bankiru_plus_beta.user.js";
/** адрес скрипта с версией */
var VERSION_URL = "http://rawgithub.com/rebelion76/bankiru_plus/master/version.js";
/** класс-страница */
var page = new bankiruPage; 
/** иконка */
var favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkI2OTZCMzIzQzlFMTFFM0E5QUNCMTYzQkQ4NUQxNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkI2OTZCMzMzQzlFMTFFM0E5QUNCMTYzQkQ4NUQxNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjY5NkIzMDNDOUUxMUUzQTlBQ0IxNjNCRDg1RDE3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjY5NkIzMTNDOUUxMUUzQTlBQ0IxNjNCRDg1RDE3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrUsCVIAAAAMUExURf///zSY22y0TfOcErQw86oAAAABdFJOUwBA5thmAAAAIUlEQVQI12NgYAgNdWAAAfLoVWDQQDHNwPD//wGwuWTRAFefRZ32+6jbAAAAAElFTkSuQmCC";
/** иконка ожидания */
var waiticon = "data:image/gif;base64,R0lGODlhEAAQAMQAAP///+7u7t3d3bu7u6qqqpmZmYiIiHd3d2ZmZlVVVURERDMzMyIiIhEREQARAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAQACwAAAAAEAAQAAAFdyAkQgGJJOWoQgIjBM8jkKsoPEzgyMGsCjPDw7ADpkQBxRDmSCRetpRA6Rj4kFBkgLC4IlUGhbNQIwXOYYWCXDufzYPDMaoKGBoKb886OjAKdgZAAgQkfCwzAgsDBAUCgl8jAQkHEAVkAoA1AgczlyIDczUDA2UhACH5BAUHABAALAAAAAAPABAAAAVjICSO0IGIATkqIiMKDaGKC8Q49jPMYsE0hQdrlABCGgvT45FKiRKQhWA0mPKGPAgBcTjsspBCAoH4gl+FmXNEUEBVAYHToJAVZK/XWoQQDAgBZioHaX8igigFKYYQVlkCjiMhACH5BAUHABAALAAAAAAQAA8AAAVgICSOUGGQqIiIChMESyo6CdQGdRqUENESI8FAdFgAFwqDISYwPB4CVSMnEhSej+FogNhtHyfRQFmIol5owmEta/fcKITB6y4choMBmk7yGgSAEAJ8JAVDgQFmKUCCZnwhACH5BAUHABAALAAAAAAQABAAAAViICSOYkGe4hFAiSImAwotB+si6Co2QxvjAYHIgBAqDoWCK2Bq6A40iA4yYMggNZKwGFgVCAQZotFwwJIF4QnxaC9IsZNgLtAJDKbraJCGzPVSIgEDXVNXA0JdgH6ChoCKKCEAIfkEBQcAEAAsAAAAABAADgAABUkgJI7QcZComIjPw6bs2kINLB5uW9Bo0gyQx8LkKgVHiccKVdyRlqjFSAApOKOtR810StVeU9RAmLqOxi0qRG3LptikAVQEh4UAACH5BAUHABAALAAAAAAQABAAAAVxICSO0DCQKBQQonGIh5AGB2sYkMHIqYAIN0EDRxoQZIaC6bAoMRSiwMAwCIwCggRkwRMJWKSAomBVCc5lUiGRUBjO6FSBwWggwijBooDCdiFfIlBRAlYBZQ0PWRANaSkED1oQYHgjDA8nM3kPfCmejiEAIfkEBQcAEAAsAAAAABAAEAAABWAgJI6QIJCoOIhFwabsSbiFAotGMEMKgZoB3cBUQIgURpFgmEI0EqjACYXwiYJBGAGBgGIDWsVicbiNEgSsGbKCIMCwA4IBCRgXt8bDACkvYQF6U1OADg8mDlaACQtwJCEAIfkEBQcAEAAsAAABABAADwAABV4gJEKCOAwiMa4Q2qIDwq4wiriBmItCCREHUsIwCgh2q8MiyEKODK7ZbHCoqqSjWGKI1d2kRp+RAWGyHg+DQUEmKliGx4HBKECIMwG61AgssAQPKA19EAxRKz4QCVIhACH5BAUHABAALAAAAAAQABAAAAVjICSOUBCQqHhCgiAOKyqcLVvEZOC2geGiK5NpQBAZCilgAYFMogo/J0lgqEpHgoO2+GIMUL6p4vFojhQNg8rxWLgYBQJCASkwEKLC17hYFJtRIwwBfRAJDk4ObwsidEkrWkkhACH5BAUHABAALAAAAQAQAA8AAAVcICSOUGAGAqmKpjis6vmuqSrUxQyPhDEEtpUOgmgYETCCcrB4OBWwQsGHEhQatVFhB/mNAojFVsQgBhgKpSHRTRxEhGwhoRg0CCXYAkKHHPZCZRAKUERZMAYGMCEAIfkEBQcAEAAsAAABABAADwAABV0gJI4kFJToGAilwKLCST6PUcrB8A70844CXenwILRkIoYyBRk4BQlHo3FIOQmvAEGBMpYSop/IgPBCFpCqIuEsIESHgkgoJxwQAjSzwb1DClwwgQhgAVVMIgVyKCEAIfkECQcAEAAsAAAAABAAEAAABWQgJI5kSQ6NYK7Dw6xr8hCw+ELC85hCIAq3Am0U6JUKjkHJNzIsFAqDqShQHRhY6bKqgvgGCZOSFDhAUiWCYQwJSxGHKqGAE/5EqIHBjOgyRQELCBB7EAQHfySDhGYQdDWGQyUhADs=";
/** Список адресов страниц и функций, которые должны быть выполены на этих страницах
 *  { address: '<регулярка адреса, \ нужен двойной!>', functions: '<список функций через пробел запятая>', isLast: <true, если после выполнения закончить> }
 */
var functionsSequence = [
       /* Все страницы */  
       { address : 'banki\\.ru\\/', functions : 'updateUserScript, addUserScriptMenu, addOptionsWindow, addLinkInMainMenu, deleteAutoSave, removeRedirect, addSelectToSearchInTop, addToUserMenu', isLast : false },
       /* НР */
       { address: 'banki\\.ru\\/services\\/responses\\/$', functions: 'addRSSToListOfBanks', isLast: true },
       { address: 'banki\\.ru\\/services\\/responses\\/bank\\/.*responseID.*', functions: 'deleteHRRigthBlock, recollapseResponses, addForumFormToHP, addHrefsToHP', isLast: true },
       { address: 'banki\\.ru\\/services\\/responses\\/bank\\/.*?', functions: 'deleteHRRigthBlock, addRSSToResponces, recollapseResponses, hiddenResponse, addAdditionalSearchToResponces', isLast: true },
       { address: 'banki\\.ru\\/services\\/responses\\/bank\\/#add', functions: 'deleteHRRigthBlock', isLast: true },
       /* ВИО */ 
       { address: 'banki\\.ru\\/services\\/questions-answers', functions: 'addRSSToQA', isLast: true },
       /* Новости */
       { address: 'banki\\.ru(\\/.*?)*\\/news\\/.*?id=.*', functions: 'changeNewsCommentsHref, repairNewsCommentsAuthorAndCitateHrefs', isLast: false },
       { address: 'banki\\.ru\\/news\\/lenta\\/.+\\/', functions: 'addRSSToLenta', isLast: true },
       { address: 'banki\\.ru\\/banks\\/bank\\/.*?\\/news\\/', functions: 'addRSSToBankNews', isLast: true },
       /* Профиль */
       { address: 'banki\\.ru\/profile\/\\?UID=\\d+#\\d', functions: 'filterThanksByUserId', isLast: false },
       { address: 'banki\\.ru\/profile\/\\?UID=\\d+', functions: 'addUserCoeffToProfile, addHrefsToProfile, change10ThanksToAll', isLast: true },
       /* Форум */
       { address: 'banki\\.ru\\/forum\\/', functions : 'forumPage', isLast : false },
       { address: 'banki\\.ru\\/forum\\/(#|$|.*?'+prefix+'theme_search.*|.*?PAGE_NAME=(list|forum).*)', functions: 'addThemeSearchToForum', isLast : true },
       { address: 'banki\\.ru\\/forum\\/.*?TOPIC_SUBSCRIBE=Y&.*', functions: 'repairPageHrefsIfSubscribe', isLast : false },
       { address: 'banki\\.ru\\/forum\\/.*?PAGE_NAME=read&FID=10&TID=100712&banki_ru_plus_hidden_rid=.*', functions: 'addUrlToRecovery', isLast: false },
       { address: 'banki\\.ru\\/forum\\/.*?PAGE_NAME=(read|message).*', functions: 'addUserCoeffToForum, addLinksToHiddenUserInfo, addHotKeysToForum, addGotoPage, addSpacesToSmallThank, addAditionalSearchToForum, addUserPostSearch, addHrefToQuotes', isLast: true }, 
       { address: 'banki\\.ru\\/forum\\/.*?PAGE_NAME=pm_edit.*', functions: 'enableSmilesInPM', isLast: true },
       /* Перегрузка друзей, не понятно работает ли */
       // { address: 'banki\\.ru\\/friends\\/group\\/.*?\\/forum\\/.*', functions: 'reloadFriendsToForum', isLast: true },
       // { address: 'banki\\.ru\\/(.*)FID=72', functions: 'addCommentFormToForum', isLast: true },
    ];
// ------------------- Вспомогательные функции ------------------------------------

// Сохранить параметр
function saveParam(name, value) {
   if (typeof(localStorage)=='undefined') { document.cookie = prefix+name+'='+value+';'+'expires=Tue, 19 Jan 2038 00:00:00 GMT'; }
   else { localStorage.setItem(prefix+name, value); }
}

// Прочитать параметр
function getParam(name) {
    if (typeof(localStorage)=='undefined') { return getCookie(prefix+name); }
    else { return localStorage.getItem(prefix+name); }
}

// Получить cookie
function getCookie(cookie_name)
{
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
    if (results) return (unescape(results[2]));
    else return null;
}

// Подгрузить css или js файл 
function loadJsOrCssFile(filename, filetype)
{
    if (filetype==="js") { 
        $('body').append('<script type="text/javascript" src="'+filename+'"></script>');
    }
    else if (filetype==="css") {
        $('body').append('<link href="'+filename+'" type="text/css" rel="stylesheet" />')
    }
}

// win-1251 в escape-последовательность
function escape1251(str)
{
    var ret = '';

    for (i=0; i<str.length; i++)
    {
        var n = str.charCodeAt(i);
        if (n >= 0x410 && n <= 0x44F) n -= 0x350;
        else if (n == 0x451) n = 0xB8;
        else if (n == 0x401) n = 0xA8;
        if ((n < 65 || n > 90) && (n < 97 || n > 122) && n < 256) {
            if (n < 16) ret += '%0'+n.toString(16);
            else ret += '%'+n.toString(16);
        }
        else ret += String.fromCharCode(n);
    }

    return ret;
}


// Выполнить код скрипта  
function contentEval(source) 
{
    if ('function' == typeof source) { source = '(' + source + ')();' }
  
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.textContent = source;
    document.getElementsByTagName("body")[0].appendChild(script);
//  document.body.removeChild(script);
}

// Целое случайное число в промежутке от min до max
function random(min, max) {
    var rand = min - 0.5 + Math.random()*(max-min+1);
    return Math.round(rand);
}

// --------------------- Основные функции ----------------------------------------------

function frame(string, type, string_extra, url)
{
    switch (type) {
    case "form_b" : string="[B]"+string+"[/B]"; break;
    case "form_i" : string="[I]"+string+"[/I]"; break;
    case "form_u" : string="[U]"+string+"[/U]"; break;
    case "form_s" : string="[S]"+string+"[/S]"; break;
    case "form_quote" : string="[QUOTE]"+string+"[/QUOTE]"; break;
    case "name": string="[B]"+string_extra+", [/B]"; break;;
    case "name_quote": if (url) { string="[QUOTE]"+string_extra+" [URL="+url+"]написал(а)[/URL]: \n"+string+"[/QUOTE]"; } 
                       else { string="[QUOTE]"+string_extra+" написал(а): \n"+string+"[/QUOTE]"; }
                       break;
    case "smiles": string=" "+string_extra+" "; break;
    case "form_url": string="[URL="+url+"]"+string+"[/URL]"; break;  
    case "form_img": string="[IMG]"+url+"[/IMG]"; break;
    case "form_video": string="[VIDEO]"+url+"[/VIDEO]"; break;
    }
    return string;
}

function do_it (type, string_extra, area_name, url)
{ 
    var area = document.getElementsByName(area_name).item(0);

    // if ((area.selectionStart)||(area.selectionStart=='0'))
    var pos_start = area.selectionStart;
    var pos_end = area.selectionEnd;
    var selection = (pos_start==pos_end) ? document.getSelection() : area.value.substring(pos_start,pos_end);
    
    if ((type==="form_url") || (type==="form_img") || (type==="form_video"))
    {
        url=prompt("Введите полный адрес (URL)","");
        if (!url) { return; }
      
        if (type==="form_url") 
        { 
            selection = prompt("Введите название сайта",selection);
            if (!selection) { return; }
        }
    }
    
    var string_to_ins = frame(selection, type, string_extra, url); 
  
    area.value = area.value.substring(0,pos_start)+string_to_ins+area.value.substring(pos_end,area.value.legth);
    saveHref(location.href);
    saveComment(area);
}
     





// добавление ссылок на RSS каналы на разных страницах banki.ru
function addRSS(typeOfRSS)
{
    var bankId;
    var filter;
    if (page.oldDisign) { filter = ".b-breadCrumbs"; }
    else filter = "ul.bread-crumbs";
    $(filter).html(function (index, oldhtml) {
        switch (typeOfRSS) {
            // ВИО конретного банка
            case 'qa' : bankId = getBankIdFromUrl(window.location.href); oldhtml += "&nbsp;<a title=\"Горячая линия\" href=\"http://pipes.yahoo.com/pipes/pipe.run?_id=c0131f2941e66ba399e563b7202d33f1&_render=rss&textinput2="+bankId+"\"><img src=\"/com/rss.gif\" alt=\"Горячая линия\" style=\"position: relative; top: 1px; z-index: 1;\"></a>&nbsp;"; break;
            // отзывы к конкретному банку в НР
            case 'responces' :  bankId = getBankIdFromUrlResponces(window.location.href); 
            oldhtml += "&nbsp;<a title=\"Отзывы клиентов\" href=\"http://pipes.yahoo.com/pipes/pipe.run?_id=6717699aabb56f168884843eab60fb9d&_render=rss&numberinput1="+bankId+"\"><img src=\"/com/rss.gif\" alt=\"Отзывы клиентов\" style=\"position: relative; top: 1px; z-index: 1;\"></a>&nbsp;"+"<a title=\"Ответы представителей банка\" href=\"http://pipes.yahoo.com/pipes/pipe.run?_id=fb400833eda6b01d31a36ad5c5c6da83&_render=rss&numberinput1="+bankId+"\"><img src=\"/com/rss.gif\" alt=\"Ответы представителей банка\" style=\"position: relative; top: 1px; z-index: 1;\"></a>";   break;       
            // ленты новостей
            case 'lenta':
            case 'banknews':
            oldhtml += "&nbsp;<a title=\"RSS\" href=\"http://pipes.yahoo.com/pipes/pipe.run?_id=e69930df2b71407745d3c8b4cbe2e4dd&_render=rss&urlinput1="+window.location.href+"\"><img src=\"/com/rss.gif\" alt=\"RSS\" style=\"position: relative; top: 1px; z-index: 1;\"></a>&nbsp;"; break;
        }
        return oldhtml;
    });    
}

function reloadFriendsToForum()
{
    var tid;
    var mid;
    var page;
    var location = page.href;
     
    if (/\/forum\/message\/(\d+)\//.test(location)) { tid = /\/forum\/message\/(\d+)\//.exec(location)[1] ; }
    else if (/\/forum\/(\d+)\//.test(location)) { tid = /\/forum\/(\d+)\//.exec(location)[1] ; }
    else return false;

    var groupName;
    
    if (/\/group\/(.*?)\//.test(location)) { groupName = /\/group\/(.*?)\//.exec(location)[1]; }
    else return false;
    
    var isFriend = "no";
    if (document.getElementsByClassName("b-notation").length > 0) { isFriend ="no"; }
    else { isFriend = "yes"; }
    
    var bankName = encodeURI($(".b-fr-bank-header__name").text());
    
    var sessionId = document.getElementById("sessid").value;
    if (!sessionId) return false; 
    
    var newLocation = "http://www.banki.ru/forum/index.php?PAGE_NAME=message"+"&bankname="+bankName+"&sessid="+sessionId+"&isfr="+isFriend+"&group="+groupName+"&FID=72&TID="+tid;
    
    if (/\/message\/(\d+)\/(\d+)\/.*/.test(location)) { mid = /.*message\/(\d+)\/(\d+)\/.*/.exec(location)[2]; }
    else if (/PAGEN_1=(\d+)&#(\d+)/.test(location)) { mid = /PAGEN_1=(\d+)&#(\d+)/.exec(location)[2]; }  
    else if (/#(.*)$/.test(location)) { mid = /#(.*)$/.exec(location)[1]; }
    if (mid)  { newLocation = newLocation+"&MID="+mid+"#message"+mid; } 
    else if (/PAGEN_1=(\d+?)/.test(location)) { page = /PAGEN_1=(\d+?)/.exec(location)[1]; newLocation = newLocation +"&PAGEN_1="+page; }
        
    window.location.href = newLocation;
}

function fromForumToFriends(href,group)
{
    href = "/friends/group/"+group+"/forum/";
    
    var tid;
    if (/TID=(\d+)/.test(location)) { tid = /TID=(\d+)/.exec(location)[1] ; href = href + tid+ "/";}
    href = href + "#postform";
    return href;
}

function fromForumToFriendsMess(href,group)
{
    newHref = "/friends/group/"+group+"/forum/message/";
        
    var tid, mid;
    
    if (/TID=(\d+)/.test(href)) { tid = /TID=(\d+)/.exec(href)[1] ; newHref = newHref + tid+ "/";}

    if (/MID=(\d+)/.test(href)) { mid = /MID=(\d+)/.exec(href)[1] ; newHref = newHref + mid+ "/#"+mid;}
   
    return newHref;
}

function addCommentFormToForum()
{
    var href = location.href; 
    if (location.hash) { href = href.replace(/#(.*)$/,"#postform"); }
    else { href= href + "#postform"; }
    href = href.replace(/http:\/\/.*banki\.ru/,"");
   
    var groupName, isFriend, nonMember = "", bankName = "неизвестного сообщества", sessid;
   
    var tid;   
    if (/TID=(\d+)/.test(location)) { tid = /TID=(\d+)/.exec(location)[1]; } 
    
    var noImportantData = false;
    
    if (/group=(.*?)&/.test(href)) { groupName = /group=(.*?)&/.exec(href)[1]; href = href.replace(/group=(.*?)&/,""); }
    else { noImportantData = true; }
    if (/isfr=(.*?)&/.test(href)) { isFriend = /isfr=(.*?)&/.exec(href)[1]; href = href.replace(/isfr=(.*?)&/,""); }
    if (/bankname=(.*?)&/.test(href)) {
        bankName = decodeURI(/bankname=(.*?)&/.exec(href)[1]);
        bankName = bankName.replace(/\+/g," ");
        href = href.replace(/bankname=(.*?)&/,""); 
    }
   
    
    if (/sessid=(.*?)&/.test(href)) { sessid = /sessid=(.*?)&/.exec(href)[1]; href = href.replace(/sessid=(.*?)&/,""); }
    else { noImportantData = true; };
    
    if (noImportantData) {
        if (tid == localStorage.getItem("banki.ru.plus_tid")) {
            groupName = localStorage.getItem("banki.ru.plus_groupName");
            isFriend = localStorage.getItem("banki.ru.plus_isFriend");
            bankName = localStorage.getItem("banki.ru.plus_bankName");
            sessid = localStorage.getItem("banki.ru.plus_sessid");
            if ((!groupName) && (!sessid)) return;
        }
        else return;
    }
    else {   
        localStorage.setItem("banki.ru.plus_groupName", groupName);
        localStorage.setItem("banki.ru.plus_isFriend", isFriend);
        localStorage.setItem("banki.ru.plus_bankName", bankName);
        localStorage.setItem("banki.ru.plus_sessid", sessid);
        localStorage.setItem("banki.ru.plus_tid", tid);
    }
    
    var areaValue="";
    if ( document.getElementsByClassName("forum-info-box forum-post-preview").length>0) {
        areaValue = localStorage.getItem("banki.ru.plus_preview");
    }
    
       
    if (isFriend === "yes") { isFriend = "";  }
    else { isFriend = "disabled"; nonMember = '<span><b>Комментирование доступно только участникам сообщества.</b> <a href="http://www.banki.ru/friends/">Вступить?</a></span>'; }
  
   var script = 'var smallEngLettersReg = new Array(/e\'/g, /ch/g, /sh/g, /yo/g, /jo/g, /zh/g, /yu/g, /ju/g, /ya/g, /ja/g, /a/g, /b/g, /v/g, /g/g, /d/g, /e/g, /z/g, /i/g, /j/g, /k/g, /l/g, /m/g, /n/g, /o/g, /p/g, /r/g, /s/g, /t/g, /u/g, /f/g, /h/g, /c/g, /w/g, /~/g, /y/g, /\'/g); var smallRusLetters = new Array("э", "ч", "ш", "ё", "ё", "ж", "ю", "ю", "я", "я", "а", "б", "в", "г", "д", "е", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "щ", "ъ", "ы", "ь");  var capitEngLettersReg = new Array(  /Ch/g, /Sh/g,   /Yo/g, /Zh/g,   /Yu/g, /Ya/g,   /E\'/g, /CH/g, /SH/g, /YO/g, /JO/g, /ZH/g, /YU/g, /JU/g, /YA/g, /JA/g, /A/g, /B/g, /V/g, /G/g, /D/g, /E/g, /Z/g, /I/g, /J/g, /K/g, /L/g, /M/g, /N/g, /O/g, /P/g, /R/g, /S/g, /T/g, /U/g, /F/g, /H/g, /C/g, /W/g, /Y/g); var capitRusLetters = new Array(  "Ч", "Ш",  "Ё", "Ж",  "Ю", "Я",  "Э", "Ч", "Ш", "Ё", "Ё", "Ж", "Ю", "Ю", "\Я", "\Я", "А", "Б", "В", "Г", "Д", "Е", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Щ", "Ы");  var smallRusLettersReg = new Array(/э/g, /ч/g, /ш/g, /ё/g, /ё/g,/ж/g, /ю/g, /ю/g, /я/g, /я/g, /а/g, /б/g, /в/g, /г/g, /д/g, /е/g, /з/g, /и/g, /й/g, /к/g, /л/g, /м/g, /н/g, /о/g, /п/g, /р/g, /с/g, /т/g, /у/g, /ф/g, /х/g, /ц/g, /щ/g, /ъ/g, /ы/g, /ь/g ); var smallEngLetters = new Array("e", "ch", "sh", "yo", "jo", "zh", "yu", "ju", "ya", "ja", "a", "b", "v", "g", "d", "e", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "w", "~", "y", "\'");  var capitRusLettersReg = new Array(  /Ч(?=[^А-Я])/g, /Ш(?=[^А-Я])/g,   /Ё(?=[^А-Я])/g, /Ж(?=[^А-Я])/g,   /Ю(?=[^А-Я])/g, /Я(?=[^А-Я])/g,   /Э/g, /Ч/g, /Ш/g, /Ё/g, /Ё/g, /Ж/g, /Ю/g, /Ю/g, /Я/g, /Я/g, /А/g, /Б/g, /В/g, /Г/g, /Д/g, /Е/g, /З/g, /И/g, /Й/g, /К/g, /Л/g, /М/g, /Н/g, /О/g, /П/g, /Р/g, /С/g, /Т/g, /У/g, /Ф/g, /Х/g, /Ц/g, /Щ/g, /Ъ/g, /Ы/g, /Ь/g); var capitEngLetters = new Array(  "Ch", "Sh",  "Yo", "Zh",  "Yu", "Ya",  "E", "CH", "SH", "YO", "JO", "ZH", "YU", "JU", "YA", "JA", "A", "B", "V", "G", "D", "E", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "W", "~", "Y", "\'"); function AttachFile(iNumber, iCount, sIndex, oObj) { var element = null;  var bFined = false;  iNumber = parseInt(iNumber);  iCount = parseInt(iCount);  document.getElementById("upload_files_info_" + sIndex).style.display = "block";  for (var ii = iNumber; ii < (iNumber + iCount); ii++)  {  element = document.getElementById("upload_files_" + ii + "_" + sIndex);  if (!element || typeof(element) == null)    break;   if (element.style.display == "none")   {    bFined = true;    element.style.display = "block";    break;   }   }  var bHide = (!bFined ? true : (ii >= (iNumber + iCount - 1)));  if (bHide == true)   oObj.style.display = "none"; } function AddTags(a) {  if (a != null)  {   var div = a.parentNode.previousSibling;  div.style.display = "block";    a.parentNode.style.display = "none";  var inputs = div.getElementsByTagName("INPUT");    for (var i = 0 ; i < inputs.length ; i++ )        {    if (inputs[i].type.toUpperCase() == "TEXT")    {     CorrectTags(inputs[i]);     inputs[i].focus();     break;    }   }        if (a.parentNode.lastChild && a.parentNode.lastChild.name == "from_tag")       {    a.parentNode.lastChild.style.display = "none";          if (document.getElementById("vote_switcher"))        {     document.getElementById("vote_switcher").style.display = "";}        }       }  return false; }  function CorrectTags(oObj) {  if (document.getElementById("TAGS_div_frame"))   document.getElementById("TAGS_div_frame").id = oObj.id + "_div_frame"; }  var bSendForm = false;  if (typeof oText != "object")  var oText = {}; oText["author"] = " пишет:\\n"; oText["enter_url"] = "Введите полный адрес (URL)"; oText["enter_url_name"] = "Введите название сайта";  oText["enter_image"] = "Введите полный адрес (URL) изображения";     oText["list_prompt"] = "Введите пункт списка. Нажмите Отмена или оставьте пробел для завершения списка";        oText["video"] = "Видео";        oText["path"] = "Путь (http://):";       oText["preview"] = "Картинка (http://):";       oText["width"] = "Ширина:";        oText["height"] = "Высота:";        oText["vote_drop_answer_confirm"] = "Вы действительно хотите удалить вариант ответа?:";        oText["vote_drop_question_confirm"] = "Вы действительно хотите удалить вопрос?:";       oText["BUTTON_OK"] = "Вставить";        oText["BUTTON_CANCEL"] = "Отмена";       oText["smile_hide"] = "Скрыть"; if (typeof oErrors != "object")  var oErrors = {}; oErrors["no_topic_name"] = "Вы должны ввести название темы. "; oErrors["no_message"] = "Вы должны ввести сообщение. "; oErrors["max_len"] = "Максимальная длина сообщения #MAX_LENGTH# символов. Всего символов: #LENGTH#."; oErrors["no_url"] = "Вы должны ввести адрес (URL)";  oErrors["no_title"] = "Ведите название."; oErrors["no_path"] = "Укажите путь к видео."; ';
   
   // клизму пока уберем <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/klizma.gif" class="smiles" alt=":klizma:" title="и тебя вылечат" width="42" border="0" height="25"></a></span>     
   var html = '<a name="postform"></a> <div class="forum-header-box">  <div class="forum-header-options">   <span class="forum-option-bbcode"><a href="/forum/index.php?PAGE_NAME=help#bbcode">BBCode</a></span>&nbsp;&nbsp;   <span class="forum-option-rules"><a href="/forum/index.php?PAGE_NAME=rules">Правила</a></span>  </div>  <div class="forum-header-title"><span>Форма ответов</span></div> </div> <div class="forum-reply-form"> <form name="REPLIER" id="REPLIER" action="@banki.ru.plus_action@" method="POST" enctype="multipart/form-data" onsubmit="return ValidateForm(this, \'N\');" onkeydown="if(null != init_form){init_form(this)}" onmouseover="if(init_form){init_form(this)}" class="forum-form">  <input name="PAGE_NAME" value="read" type="hidden">  <input name="FID" value="14" type="hidden">  <input name="TID" value="4272" type="hidden">  <input name="MID" value="0" type="hidden">  <input name="MESSAGE_TYPE" value="REPLY" type="hidden">  <input name="AUTHOR_ID" value="" type="hidden">  <input name="forum_post_action" value="save" type="hidden">  <input name="MESSAGE_MODE" value="NORMAL" type="hidden">  <input name="sessid" id="sessid" value="@banki.ru.plus_sessid@" type="hidden">  <div class="forum-reply-header">Текст сообщения<span class="forum-required-field">*</span></div>   <div class="forum-reply-fields">    <div class="forum-reply-field forum-reply-field-bbcode">     <div class="forum-bbcode-line" id="forum_bbcode_line">     <a href="#postform" class="forum-bbcode-button forum-bbcode-bold" id="form_b" title="Полужирный (alt+b)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-italic" id="form_i" title="Курсив (alt+i)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-underline" id="form_u" title="Подчеркнутый (alt+u)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-strike" id="form_s" title="Перечеркнутый (alt+s)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-quote" id="form_quote" title="Оформление текста в виде цитаты (alt+q)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-code" id="form_code" title="Оформление текста в виде кода (alt+p)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-url" id="form_url" title="Ввод гиперссылки (alt+h)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-img" id="form_img" title="Подключение изображения (alt+g)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-video" id="form_video" title="Подключение видео (alt+v)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-list" id="form_list" title="Оформление текста в виде списка (alt+l)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-color" id="form_palette" title="Цвет">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <a href="#postform" class="forum-bbcode-button forum-bbcode-translit" id="form_translit" title="Перекодировка транслит/латиница (alt+t)">      <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a>     <select name="FONT" class="forum-bbcode-font" id="form_font" title="Шрифт">      <option value="none">Шрифт</option>      <option value="Arial" style="font-family: Arial;">Arial</option>      <option value="Times" style="font-family: Times;">Times</option>      <option value="Courier" style="font-family: Courier;">Courier</option>      <option value="Impact" style="font-family: Impact;">Impact</option>      <option value="Geneva" style="font-family: Geneva;">Geneva</option>      <option value="Optima" style="font-family: Optima;">Optima</option>      <option value="Verdana" style="font-family: Verdana;">Verdana</option>     </select>    </div>    <div class="forum-clear-float"></div>    <div class="forum-smiles-line" id="forum_smiles_showed" style="display: none;">     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ab.gif" class="smiles" alt=":)" title="улыбка" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ad.gif" class="smiles" alt=";)" title="шутливо" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/ag.gif" class="smiles" alt=":D" title="широкая улыбка" width="20" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/ai.gif" class="smiles" alt=":o" title="удивленно" width="20" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/bl.gif" class="smiles" alt=":|" title="скептически" width="36" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/af.gif" class="smiles" alt="8)" title="круто" width="21" border="0" height="21"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ac.gif" class="smiles" alt=":(" title="печально" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/evil.gif" class="smiles" alt=":evil:" title="злюсь" width="35" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/qr.gif" class="smiles" alt=":wall:" title="бешусь" width="31" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ah.gif" class="smiles" alt=":oops:" title="смущенно" width="25" border="0" height="25"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/aj.gif" class="smiles" alt=":{}" title="поцелуй" width="34" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/ak.gif" class="smiles" alt=":cry:" title="очень грустно" width="31" border="0" height="22"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/facepalm.gif" class="smiles" alt=":omg:" title="только не это" width="28" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/inlove.gif" class="smiles" alt=":inlove:" title="влюбленный" width="22" border="0" height="29"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/23247378e1dac5dd917b2695aad1baa8.gif" class="smiles" alt=":notiam:" title="я?! нет." width="42" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/197.gif" class="smiles" alt=":shuffle:" title="а чего я?" width="18" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/bp.gif" class="smiles" alt=":ura:" title="ура!" width="42" border="0" height="27"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/am.gif" class="smiles" alt=":nunu:" title="ну-ну" width="36" border="0" height="27"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/aa.gif" class="smiles" alt=":angel:" title="просто ангел!" width="27" border="0" height="23"></a></span>     <div class="forum-smiles-item" style="height: 46px;">      <a href="#postform" id="form_smiles_static" name="smile_show" style="margin-top: 15px;">       Еще</a>     </div>    </div><div class="forum-smiles-line" id="forum_smiles_hidden" style="display: block;">     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ab.gif" class="smiles" alt=":)" title="улыбка" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ad.gif" class="smiles" alt=";)" title="шутливо" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/ag.gif" class="smiles" alt=":D" title="широкая улыбка" width="20" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/ai.gif" class="smiles" alt=":o" title="удивленно" width="20" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/bl.gif" class="smiles" alt=":|" title="скептически" width="36" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/af.gif" class="smiles" alt="8)" title="круто" width="21" border="0" height="21"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ac.gif" class="smiles" alt=":(" title="печально" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/evil.gif" class="smiles" alt=":evil:" title="злюсь" width="35" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/qr.gif" class="smiles" alt=":wall:" title="бешусь" width="31" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ah.gif" class="smiles" alt=":oops:" title="смущенно" width="25" border="0" height="25"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/aj.gif" class="smiles" alt=":{}" title="поцелуй" width="34" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/ak.gif" class="smiles" alt=":cry:" title="очень грустно" width="31" border="0" height="22"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/facepalm.gif" class="smiles" alt=":omg:" title="только не это" width="28" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/inlove.gif" class="smiles" alt=":inlove:" title="влюбленный" width="22" border="0" height="29"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/23247378e1dac5dd917b2695aad1baa8.gif" class="smiles" alt=":notiam:" title="я?! нет." width="42" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/197.gif" class="smiles" alt=":shuffle:" title="а чего я?" width="18" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/bp.gif" class="smiles" alt=":ura:" title="ура!" width="42" border="0" height="27"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/am.gif" class="smiles" alt=":nunu:" title="ну-ну" width="36" border="0" height="27"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/aa.gif" class="smiles" alt=":angel:" title="просто ангел!" width="27" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ae.gif" class="smiles" alt=":-p" title="дразнится" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/secret.gif" class="smiles" alt=":-X" title="секрет" width="22" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/fool.gif" class="smiles" alt=":fool:" title="ты чё, дурак?!" width="29" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/boredom.gif" class="smiles" alt=":tired:" title="скучно" width="26" border="0" height="22"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/good.gif" class="smiles" alt=":thumbsup:" title="отлично!" width="26" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/ok.gif" class="smiles" alt=":ок:" title="Ок!" width="40" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 8px;"><img src="/bitrix/images/forum/smile/bx.gif" class="smiles" alt=":yes!!!:" title="Yes!!!" width="42" border="0" height="30"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/cg.gif" class="smiles" alt=":painful:" title="больно!" width="23" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/yep.gif" class="smiles" alt=":yep:" title="угу" width="20" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/dj.gif" class="smiles" alt=":zzz:" title="сплю" width="29" border="0" height="29"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 8px;"><img src="/bitrix/images/forum/smile/dl.gif" class="smiles" alt=":bonk:" title="подзатыльник" width="48" border="0" height="30"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/mosking.gif" class="smiles" alt=":jokingly:" title="хи-хи" width="25" border="0" height="25"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/crazy.gif" class="smiles" alt=":crazy:" title="crazy!" width="20" border="0" height="27"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/scratch_one-s_head.gif" class="smiles" alt=":scratch:" title="Хмм..." width="27" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/pardon.gif" class="smiles" alt=":pardon:" title="пардон!" width="36" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/beee.gif" class="smiles" alt=":fi:" title="зазнался" width="28" border="0" height="28"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/ponty.gif" class="smiles" alt=":vnature:" title="чистА-кАнкретнА" width="35" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 1px;"><img src="/bitrix/images/forum/smile/d_daisy.gif" class="smiles" alt=":flowers:" title="вам букет!" width="43" border="0" height="44"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 8px;"><img src="/bitrix/images/forum/smile/dm.gif" class="smiles" alt=":magic:" title="колдунство!" width="42" border="0" height="31"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/stop.gif" class="smiles" alt=":stop:" title="стоп!" width="36" border="0" height="23"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 7px;"><img src="/bitrix/images/forum/smile/help.gif" class="smiles" alt=":help:" title="помогите!" width="30" border="0" height="33"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/rofl.gif" class="smiles" alt=":rofl:" title="я валяюсь!" width="29" border="0" height="25"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/cd.gif" class="smiles" alt=":quotes:" title="кавычки" width="36" border="0" height="26"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 7px;"><img src="/bitrix/images/forum/smile/cj.gif" class="smiles" alt=":relax:" title="relax" width="34" border="0" height="33"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/dh.gif" class="smiles" alt=":gramercy:" title="благодарю" width="36" border="0" height="29"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 4px;"><img src="/bitrix/images/forum/smile/cl.gif" class="smiles" alt=":achtung:" title="ахтунг!" width="48" border="0" height="38"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 6px;"><img src="/bitrix/images/forum/smile/dr.gif" class="smiles" alt=":nightmare:" title="а-а-а, кошмар!" width="42" border="0" height="34"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/drinks.gif" class="smiles" alt=":drink:" title="выпьем!" width="51" border="0" height="28"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/bt.gif" class="smiles" alt=":uncap:" title="здрасти!" width="42" border="0" height="28"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/cm.gif" class="smiles" alt=":dramatics:" title="я в истерике" width="38" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/bad.gif" class="smiles" alt=":puke:" title="тошнит" width="21" border="0" height="21"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ar.gif" class="smiles" alt=":music:" title="тын-тыдын, парам-пам-пам" width="28" border="0" height="25"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/2.gif" class="smiles" alt=":?:" title="Вопрос" width="20" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/1.gif" class="smiles" alt=":!:" title="восклицание" width="20" border="0" height="20"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 14px;"><img src="/bitrix/images/forum/smile/idea.gif" class="smiles" alt=":idea:" title="идея" width="18" border="0" height="18"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/bomb.gif" class="smiles" alt="@=" title="бомба" width="28" border="0" height="24"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/wiki_go.gif" class="smiles" alt=":wikigo:" title="Пиши в словарь!" width="72" border="0" height="25"></a></span>     <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 0px;"><img src="/bitrix/images/forum/smile/nr_table.gif" class="smiles" alt=":write_nr:" title="Пиши в народный рейтинг!" width="48" border="0" height="46"></a></span>     <div class="forum-smiles-item" style="height: 46px;">      <a href="#postform" id="form_smiles_static" name="smile_hide" style="margin-top: 15px;">Скрыть</a>     </div>    </div>    <div class="forum-clear-float"></div>   </div>   <div class="forum-reply-field forum-reply-field-text">    <textarea name="POST_MESSAGE" class="post_message" cols="55" rows="14" tabindex="10" @banki.ru.plus_isfr@>@banki.ru.plus_areavalue@</textarea>   </div>   <div class="forum-reply-field forum-reply-field-upload">    <div class="forum-upload-info" style="display: none;" id="upload_files_info_">     <span>Разрешенные расширения файлов: gif, jpg, jpeg, png, doc, rtf, xls, ppt, pps.</span>     <span>Размер файла не должен превышать 512 КБ.</span>    </div>     <div class="forum-upload-file" style="display: none;" id="upload_files_0_">     <input name="FILE_NEW_0" value="" size="30" type="file">    </div>     <div class="forum-upload-file" style="display: none;" id="upload_files_1_">     <input name="FILE_NEW_1" value="" size="30" type="file">    </div>     <div class="forum-upload-file" style="display: none;" id="upload_files_2_">     <input name="FILE_NEW_2" value="" size="30" type="file">    </div>     <div class="forum-upload-file" style="display: none;" id="upload_files_3_">     <input name="FILE_NEW_3" value="" size="30" type="file">    </div>     <div class="forum-upload-file" style="display: none;" id="upload_files_4_">     <input name="FILE_NEW_4" value="" size="30" type="file">    </div>  @banki.ru.plus_nonmember@ <!-- <a href="javascript:void(0);" onclick="AttachFile(\’0\’, \’5\’, \’\’, this); return false;">     <span>Прикрепить файл</span>    </a> -->  </div>   <div class="forum-reply-field forum-reply-field-settings">    <div class="forum-reply-field-setting">     <input name="USE_SMILES" id="USE_SMILES" value="Y" checked="checked" tabindex="11" type="checkbox">&nbsp;<label for="USE_SMILES">Показывать графические смайлы в этом сообщении</label></div>    <div class="forum-reply-field-setting">     <input name="TOPIC_SUBSCRIBE" id="TOPIC_SUBSCRIBE" value="Y" disabled="disabled" tabindex="12" type="checkbox">&nbsp;<label for="TOPIC_SUBSCRIBE">Подписаться на новые сообщения этой темы</label></div>    <div class="forum-reply-field-setting">     <input name="FORUM_SUBSCRIBE" id="FORUM_SUBSCRIBE" value="Y" tabindex="13" type="checkbox" disabled="disabled">&nbsp;<label for="FORUM_SUBSCRIBE">Подписаться на новые сообщения этого форума</label></div>   </div>   <div class="forum-reply-buttons">    <input name="send_button" value="Ответить" tabindex="14" onclick="this.form.MESSAGE_MODE.value = \'NORMAL\';" type="submit" @banki.ru.plus_isfr@>    <input name="view_button" value="Просмотр" tabindex="15" onclick="localStorage.setItem(\'banki.ru.plus_preview\',this.form.POST_MESSAGE.value); this.form.action=\'@banki.ru.plus_action_view@\'; this.form.MESSAGE_MODE.value = \'VIEW\'; " type="submit">   </div>   </div> </form></div>';
   
   html = html.replace("@banki.ru.plus_action_view@",href); 
   href = fromForumToFriends(href,groupName);
   html = html.replace("@banki.ru.plus_action@",href);
   html = html.replace("@banki.ru.plus_sessid@",sessid);
   html = html.replace(/@banki.ru.plus_isfr@/g,isFriend);
   html = html.replace("@banki.ru.plus_nonmember@",nonMember);
   html = html.replace("@banki.ru.plus_areavalue@",areaValue);

   tempSPAN = document.createElement("span");
   tempSPAN.innerHTML = html;
  
   loadjscssfile("/bitrix/templates/.default/components/bitrix/forum.post_form/.default/script.js","js");

   var tempDIV = document.getElementsByClassName("forum-info-box forum-users-online")[0];
   tempDIV.parentNode.insertBefore(tempSPAN,tempDIV.nextSibling);
   contentEval(script);
   
   if (document.getElementsByClassName("forum-action-edit").length>0)
   {
        var tempA = document.getElementsByClassName("forum-action-edit")[0].firstChild.firstChild;
        tempA.href = tempA.href.replace(/forum\/index\.php\?PAGE_NAME=topic_new&FID=72&TID=(\d+)&/,"friends/group/"+groupName+"/forum/edit/$1/?"); 
    }
   var tempArrayDIV = document.getElementsByClassName("forum-breadcrumb forum-breadcrumb-top");
   var i; var length = tempArrayDIV.length; var bankSPAN; 
   for  (i=0;i<length;i++)
   {
        
        bankSPAN = document.createElement("span");
        bankSPAN.className= "forum-crumb-item";
        bankSPAN.innerHTML = '&nbsp;<span>&raquo;&nbsp;</span><a href="/friends/group/'+groupName+'/#nav_start" title="Форум '+bankName+'">Форум '+bankName+'</a>';
        tempArrayDIV[i].appendChild(bankSPAN);
   }
  
   tempArrayDIV =  document.getElementsByClassName("forum-post-number");
  
   length = tempArrayDIV.length; var tempNOINDEX; 
   
   for  (i=0;i<length;i++)   
   {
        tempNOINDEX = tempArrayDIV[i].getElementsByTagName("noindex")[0];
        tempNOINDEX.children[0].href = fromForumToFriendsMess(tempNOINDEX.children[0].href, groupName);
   }
  
   tempArrayDIV =  document.getElementsByClassName("forum-action-links");
  
   length = tempArrayDIV.length; var linksSPAN; 
   
   for  (i=0;i<length;i++)
   {
        //tempArrayDIV[i].innerHTML="";
        var messageId = tempArrayDIV[i].parentNode.parentNode.parentNode.parentNode.parentNode.id.replace("message","");
        
        var userName = tempArrayDIV[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[2].children[0].children[0].innerHTML;
              
        linksSPAN = document.createElement("span");
        linksSPAN.className = "forum-action-quote";
        linksSPAN.innerHTML = "<a href=\"#postform\" onmousedown=\"if (window['quoteMessageEx']){quoteMessageEx('"+userName+"', 'message_text_"+messageId+"')}\">Цитировать</a>&nbsp;&nbsp;";
        tempArrayDIV[i].appendChild(linksSPAN);
        linksSPAN = document.createElement("span");
        linksSPAN.className = "forum-action-reply";
        linksSPAN.innerHTML = "<a href=\"#postform\" title=\"Вставить в ответ имя\" onmousedown=\"reply2author('"+userName+",', 'message_text_"+messageId+"')\">Имя</a>";
        tempArrayDIV[i].appendChild(linksSPAN);
  }
  
  
  if (!page.isLogged) return false;
   
  document.getElementsByName("AUTHOR_ID")[0].value = page.userId;
  document.getElementsByName("PAGE_NAME")[0].value = "group_forum_message";
  
  // http://www.banki.ru/forum/index.php?PAGE_NAME=topic_new&FID=72&TID=87239&MID=1690602&MESSAGE_TYPE=EDIT&sessid=f14eb8268689ddbd83adea4784c02440
  // http://www.banki.ru/friends/group/avangard/forum/edit/87239/?MID=1690602&ACTION=EDIT&MESSAGE_TYPE=EDIT&sessid=f14eb8268689ddbd83adea4784c02440
   
}

// автодобавление просьбы восстановить отзыв с responseID таким-то TODO
function addUrlToRecovery()
{
    var responseId = /&banki_ru_plus_hidden_rid=(\d*)#/.exec(page.href)[1]; // заменить на выбор параметра
    $("textarea.post_message").val("Прошу восстановить скрытый отзыв http://www.banki.ru/services/responses/bank/?responseID="+responseId);
}


function getUserIdFromUrl(url)
{
    if  (/.*UID=(\d+).*/.test(url)) return /.*UID=(\d+).*/.exec(url)[1];
    else return null;
}

function getBankIdFromUrl(url) {
    if (/id=(\d*)[^\d]*$/.test(url)) return /id=(\d*)[^\d]*$/.exec(url)[1]
    else return null;
}

function getBankIdFromUrlResponces(url) {
    if (/\/bank\/(.*)\/$/.test(url))  return /\/bank\/(.*)\/$/.exec(url)[1]
    else return null;
}

function getSearchInUserCommentsHref(name, id)
{
    return  "http://www.banki.ru/forum/index.php?PAGE_NAME=user_post&UID="+id+"&mode=all&fid=0&date_create=&date_create1=&topic=&message="+name+"&sort=message";
}

function getUserProfileHref(id1, id2, name)
{
    return "http://www.banki.ru/profile/?UID="+id1+"#"+id2+"&"+name;    
} 

function getUserNameAndIdFromProfile(url)
{
    var userA = document.getElementsByClassName("nickName");
    if (userA.length == 0) return false;
    var userName = userA[0].innerHTML;       
    var userId = getUserIdFromUrl(url);
    return {id:userId, name:userName};
}


// дополнительный поиск по теме форума и НР
function addAditionalSearch (type)
{

    var searchQuery = 'http://google.ru/search?hl=ru&output=search&filter=1&pws=0&sclient=psy-ab&as_q=site:banki.ru ';
    var googleWindow;
    var titlePiece=page.title;
    switch (type) { 
        case 'forum_search': 
            var searchElemsHTML = "<input name='bankiruplus_input_search' placeholder='Поиск по теме' type='text' style='height: 24px;' class='input--search' size=30>&nbsp;&nbsp;&nbsp;&nbsp;"; 
            $(".forum-header-options").first().prepend(searchElemsHTML);
            searchQuery = searchQuery + 'inurl:TID=' + page.params['TID']+' '; 
            break;
        case 'responces' : 
            var searchElemsHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type= 'text' name='bankiruplus_input_search' placeholder='Поиск по отзывам' size=30>"; 
            $("DIV.bank-responses-review > a.bank-button-add").before(searchElemsHTML);
            //("div.b-customFilter").
            $("[name='bankiruplus_input_search']").addClass('input--search');
            if (/(Отзывы.*?),/.test(titlePiece)) { titlePiece =/(Отзывы.*?),/.exec(titlePiece)[1]; }
            searchQuery = searchQuery + 'intitle:"' + titlePiece + '"' + ' inurl:"responseID" ';
            break;    
        /* case 'qa' : 
            $("[name='nav_start']").first().prev().append(searchElemsHTML); 
            if (/:(.*):/.test(titlePiece)) { titlePiece =/:(.*):/.exec(titlePiece)[1]; }
            searchQuery = searchQuery + 'intitle:"' + titlePiece + '"' + ' inurl:"questions-answers" ';
            break; */
    }
    function additionalSearchSubmit(e) {
        if ((e.type=='keydown') && (e.keyCode!=13)) return;
        googleWindow = window.open(searchQuery+$("[name='bankiruplus_input_search']").val());
        googleWindow.focus();
    }
    
    $("[name='bankiruplus_button_search']").bind("click", additionalSearchSubmit);
    $("[name='bankiruplus_input_search']").bind("keydown", additionalSearchSubmit);
}

// переход по страницам форума
function changePage(href, oldpageRegexp, messageRegexp, newPage, currentPage)
// запутанно, надо переделать

// href - текущий url
// oldpageRegexp - параметр номера страницы (с номером)
// messageRegexp - параметр номера конретного сообщения (с номером)
// newPage - параметр номера страницы (без номера)
// currentPage - номер страницы, на которую надо переключить
{
    temp = href;
    temp = temp.replace(/#.*/,"");
    newPage = newPage + currentPage;
    if (oldpageRegexp.test(temp)) { temp = temp.replace(oldpageRegexp,newPage); }
    else { temp = temp + newPage; }
    if (messageRegexp.test(temp)) {temp = temp.replace(messageRegexp,""); }
    window.location.href = temp;
}

// Обработка сркытзх отзывов 
page.hiddenResponse = function() {
    // может быть мы попали на эту страницу, потому  что отзыв скрыт? 
    $("div.b-errors").html(function(index, oldhtml) {
        // если мы можем определить, о каком отзыве идет речь, добавим ссылку на тему, где просят отзывы восстановить и передадим id скрытого отзыва
        if (/\(ID (\d*)\)/.test(oldhtml)) {
            oldhtml += "  Вы можете <a style='color: rgb(204, 51, 51);' href='http://www.banki.ru/forum/index.php?PAGE_NAME=read&FID=10&TID=100712&banki_ru_plus_hidden_rid="+/\(ID (\d*)\)/.exec(oldhtml)[1]+"#postform'>сделать запрос</a> на восстановление отзыва.";
        }
        return oldhtml;
    });
}

// дополнительные параметры для страниц форума
page.forumPage = function() {
    this.gid = this.params['GID'];
    this.fid = this.params['FID']; 
    this.tid = this.params['TID'];
    this.mid = this.params['MID'];
}

// Считает коэфициент полезности пользователя, null если не удовлетворяет условиям (больше 100 сообщений, положительное число спасибо)
function userCoeff (messages, thanks) {
    messages = +messages; thanks = +thanks; 
    if ((messages<100) || (thanks<=0)) return null
    else return (thanks/messages*100).toFixed(2);
} 

// вырезает лишнее из ответа тем поиска по форуму
function themeSearchAfterLoadParce(responce) {
    responce = /<body.*?>([\s\S]*?)<\/body>/.exec(responce)[1];
    responce = responce.replace(/([\s\S]*?)<script>[\s\S]*?<\/script>([\s\S]*)/,'$1$2');
    responce = responce.replace(/<\\*form.*?>/,'');
    responce = responce.replace(/<div class="forum-filter-field clearfix">[\s\S]*?for="user_city"[\s\S]*?<div class="forum-filter-field clearfix search-input">/,'<div class="forum-filter-field clearfix search-input">');
    return responce;
}

// Исправляет ошибку с ссылками в коментариях к некоторым новостным колонкам http://www.banki.ru/forum/index.php?PAGE_NAME=message&FID=10&TID=12&MID=2427451#message2427451
page.repairNewsCommentsAuthorAndCitateHrefs = function() { 
    $(".control").css({"background-image" : "none", "width":"auto"});
}

// --------------------------- Функции, доступные для отключения пользователю ----------------------- 

// принудительная установка галочки "разрешить смайлы" в личных сообщениях
page.enableSmilesInPM = function()
{
    $("#USE_SMILES:not(:checked)").click();
}
page.enableSmilesInPM.nameForUser = 'Принудительно разрешить смайлы в ЛС';


// В новостях меняет ссылку на комментарии на форумскую и исправляет недоработку с #comments http://www.banki.ru/forum/index.php?PAGE_NAME=message&FID=10&TID=51734&MID=2451541#message2451541
page.changeNewsCommentsHref = function() {
    // исправляет недобработку
    $(".b-pagination__list>li>a, .nav_page>span>a").attr('href', 
        function(index, attr) {
            return attr+'#comments';
        });
    // менят и добаляет ссылку на комментарии в форуме                
    var needLoadTheme = true; 
    var themeHref = '';
    var messageString = $(".date>a[href*='message']:first").attr('href');
    if (/.*message(\d+)/.test(messageString))  {
        needLoadTheme = false;
        themeHref = '/forum/?PAGE_NAME=read&MID='+/.*message(\d+)/.exec(messageString)[1];
    }
    
    function addLinks(themeHref) { 
        var $commentsHref = $(".b-el-link[href*='comments'], .b-el-link[href*='reviewArea']");
        if ($commentsHref.length === 0) { 
            $commentsHref = $("<a class='b-el-link' title='Комментарии' href='#comments'><i class='comments'></i>Комментарии</a><span class='delimiter'></span>")
                            .insertBefore("span.b-el-link"); 
            $commentsHref = $(".b-el-link[href*='comments']");        
        }
        $commentsHref.attr('href', function(index, attr) { 
            $(this).html(function (index, html) { return html+' в форуме'; }); 
            return themeHref;
        });
        $("h2.comment").html(function(i, old) {
            if (/\d+.*?<a/.test(old)) return old.replace(/(\d+.*?)<a/,'<a class="goForm" href="'+themeHref+'">$1 в форуме</a> • <a');
            else return old;
        });
    }
    
    
    if (needLoadTheme) {
        var searchUrl = '/forum/?PAGE_NAME=topic_search&do_search=Y&FID=35&search_template='+escape1251($(".b-el-h1, .b-el-article__h1").first().text()); //вызываемому скрипту обязательно нужна win-1251 escape 
        $.get(searchUrl, function(responce) {
            responce = themeSearchAfterLoadParce(responce);   
            $("<div class='"+prefix+"search_temp' style='display:none'>").appendTo('body').html(responce);
            var themeA = $('.'+prefix+'search_temp').find('.forum-info-box-inner>ol>li>a:first');
            if (themeA.length !== 0) {
                var themeHref = '/forum/'+themeA.attr('href');
                $('.'+prefix+'search_temp').remove();
                addLinks(themeHref);
            }
        });       
    }
    else addLinks(themeHref); 
  
  
   /*$(".b-el-link[href*='comments'], .b-el-link[href*='reviewArea']").attr('href', function(index, attr)  {
        $(this).html(function (index, html) { return html+' в форуме'; }); 
        return themeHref;
   });*/
    
}
page.changeNewsCommentsHref.nameForUser = "В новостях менять ссылку на комментарии на форум";

page.addRSSToLenta = function() {
    addRSS('lenta');
}
page.addRSSToLenta.nameForUser = "RSS на разделы новостей в 'хлебных крошках'";

page.addRSSToBankNews = function() {
    addRSS('banknews');
}
page.addRSSToBankNews.nameForUser = "RSS новостей банка в 'хлебных крошках'";

page.addRSSToQA = function() {
    addRSS('qa');
}
page.addRSSToQA.nameForUser = "RSS на ответы в 'хлебных крошках' ВИО";

// показывает спасибо от пользователя с uid и именем в hash TODO ERR
page.filterThanksByUserId = function()
{
    hash = page.afterHash;
    
    var userId = /(.*)&(.*)/.exec(hash)[1];
    var userName = /(.*)&(.*)/.exec(hash)[2];

    // сначала скрываем все - и штрафы, и спасибо
    $("tr.event-ban, tr.event-thank").hide();
    // теперь открываем только тех, у кого в ссылке соотв. uid
    $('a.name[href*="UID='+userId+'"]').parents("tr.event-thank").show();
    // теперь меняем слово Репутация на Спасибо от ...
    $("#user-reputation ~ h2").html(function (index, oldhtml) {
        return oldhtml.replace("Репутация", "Спасибо от " + userName+" (всего "+$('a.name[href*="UID='+userId+'"]').length+")");
    });
    // когда нажимаем "показать все записи", надо вернуть слово "Репутация" обратно 
    $("div.switch_page.linck > a.pseudo_link").bind("click", function () {
        $("#user-reputation ~ h2").html(function (index, oldhtml) {
            return oldhtml.replace(/(.*?)(<span)/,"Репутация $2"); 
        });
    });
    // меняем обратно хэш - убрать после перевода 
    window.location.hash = "user-reputation";
}

// Добавляет коэффициент полезности сообщений в профиле
page.addUserCoeffToProfile = function() {
    $(".aboutUser").append(function(){
        var coeff = userCoeff($("a[title='Посмотреть на сообщения пользователя']").text(), $("a#user-reputation-btn").text());
        if (coeff === null) return;
        return "<div class='reputation'>полезность: <b>"+coeff+"%</b></div>";
    });
}
page.addUserCoeffToProfile.nameForUser = 'Коэффициент полезности сообщений в профиле';

// заменяем вывод +10 спасибо на вывод всех спасибо TODO ERR
page.change10ThanksToAll = function()
{
    $("div.switch_page.linck > a.pseudo_link").attr("onclick","$('tr.event-ban, tr.event-thank').show();").attr("href","#user-reputation").html(function (i, old) {
        return old.replace("еще 10", "все записи");
    }); 
    
    //<div class="b-array__paginator load-more-events">
    //<div class="switch_page linck"><a 
    //class="pseudo_link" href="#" onclick="return LoadMoreUserDetails()">Показать еще 10</a></div>
}
page.change10ThanksToAll.nameForUser = 'Замена в профиле "еще 10 спасибо" на "все записи"';

page.addHrefsToProfile = function()
{
    if (!page.isLogged) return false;

    var userNameAndId = { 'id': page.userId, 'name' : page.userName };
   
    var oppNameAndId = getUserNameAndIdFromProfile(page.href);
    if (!oppNameAndId) return false;
    
    if (userNameAndId.id == oppNameAndId.id) return false; 
       
    var forumInfoDIV = document.getElementsByClassName("forumInfo");
    if (forumInfoDIV.length == 0) return false;
    
    oppAboutUserA = document.createElement("span");
    oppAboutUserA.innerHTML = '<a href="'+getSearchInUserCommentsHref(userNameAndId.name, oppNameAndId.id)+'" class="b-el-button b-el-button_icon">'+'<i style="background: url(/favicon.ico)"></i>Комментарии тебе</a> ';

    userAboutOppA = document.createElement("span");
    userAboutOppA.innerHTML = '<a href="'+getSearchInUserCommentsHref(oppNameAndId.name, userNameAndId.id)+'" class="b-el-button b-el-button_icon">'+'<i style="background: url(/favicon.ico)"></i>Комментарии ему(ей)</a> ';
    
    oppThanksUserA = document.createElement("span");
    oppThanksUserA.innerHTML = '<a href="'+getUserProfileHref(userNameAndId.id, oppNameAndId.id, oppNameAndId.name)+'" class="b-el-button b-el-button_icon">'+'<i style="background: url(/bitrix/components/custom/user.thank.forum/templates/.default/images/f_icon.png) -118px 0"></i>Спасибо тебе</a> ';

    userThanksOppA = document.createElement("span");
    userThanksOppA.innerHTML = '<a href="'+getUserProfileHref(oppNameAndId.id, userNameAndId.id, userNameAndId.name)+'" id="banki.ru.plus.reloadPage" class="b-el-button b-el-button_icon">'+'<i style="background: url(/bitrix/components/custom/user.thank.forum/templates/.default/images/f_icon.png) -118px 0"></i>Спасибо ему(ей)</a> ';
        
    forumInfoDIV[0].appendChild(oppAboutUserA);
    forumInfoDIV[0].appendChild(userAboutOppA);
    forumInfoDIV[0].appendChild(oppThanksUserA);
    forumInfoDIV[0].appendChild(userThanksOppA);
    
    document.getElementById("banki.ru.plus.reloadPage").onclick =  function (e)
    {  
        location.href = getUserProfileHref(oppNameAndId.id, userNameAndId.id, userNameAndId.name); 
        location.reload();
    }
}
page.addHrefsToProfile.nameForUser = 'Дополнительные кнопки в профиле';

page.addRSSToResponces = function() {
    addRSS('responces'); 
}
page.addRSSToResponces.nameForUser = "RSS на отзывы и ответы ПБ в 'хлебных крошках' НР";

// переносим правый блок в НР наверх
page.deleteHRRigthBlock = function() {
    if (!page.oldDisign) return;
    $("div.b-deposit__wrap__header")
    .after($("div.b-pr-phone"))
    .after($("div.b-BankShortRating"))
    .after($("div.b-BankShortInfo"))
    .after($("div.b-outer-card-adv"));
    $("div.l-r-column").remove();
    $("div.l-c-column").css("width","95%");
}
page.deleteHRRigthBlock.nameForUser = 'Перенос правого блока в НР на верх (только для старого дизайна)';

page.addForumFormToHP = function() {
    loadJsOrCssFile("/bitrix/templates/.default/components/bitrix/forum/banki/style.css","css");
    // подгрузка файлы выше 'портит' некоторые стили, вернем как было 
    $(".productList li span.count").css({'color' : '#939393', 'font-size': '11px','display' : 'inline', 'top' :'auto', 'left': 'auto', 'position': 'static', 'width' :'auto', 'height':'auto'});

    var responce_comment_div = document.getElementById("response_comment_form");
    var edit_comment_div = document.getElementById("edit_comment_form"); 
   
    if ((!responce_comment_div)&&(!edit_comment_div)) { return;}
    
    // клизму пока уберем <span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/klizma.gif" class="smiles" alt=":klizma:" title="и тебя вылечат" width="42" border="0" height="25"></a></span>     
    var bbcodes='<div class="forum-bbcode-line" id="forum_bbcode_line"><a href="#postform" class="forum-bbcode-button forum-bbcode-bold" id="form_b" title="Жирный (alt+b)"> <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></a> <a href="#postform" class="forum-bbcode-button forum-bbcode-italic" id="form_i" title="Курсив (alt+i)"> <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></a> <a href="#postform" class="forum-bbcode-button forum-bbcode-underline" id="form_u" title="Подчеркнутый (alt+u)"> <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></a> <a href="#postform" class="forum-bbcode-button forum-bbcode-strike" id="form_s" title="Перечеркнутый (alt+s)"> <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></a> <a href="#postform" class="forum-bbcode-button forum-bbcode-quote" id="form_quote" title="Оформление текста в виде цитаты (alt+q)"> <img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></a>		<a href="#postform" class="forum-bbcode-button forum-bbcode-url" id="form_url" title="Ввод гиперссылки (alt+h)"><img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></a><a href="#postform" class="forum-bbcode-button forum-bbcode-img " id="form_img" title="Подключение изображения (alt+g)"><img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a><a href="#postform" class="forum-bbcode-button forum-bbcode-video " id="form_video" title="Подключение видео (alt+v)"><img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif"></a></div><div class="forum-smiles-line" id="forum_smiles_hidden" style="display: block; padding-top: 20px;"><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ab.gif" class="smiles" alt=":)" title="улыбка" height="24" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ad.gif" class="smiles" alt=";)" title="шутливо" height="24" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/ag.gif" class="smiles" alt=":D" title="широкая улыбка" height="20" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/ai.gif" class="smiles" alt=":o" title="удивленно" height="20" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/bl.gif" class="smiles" alt=":|" title="скептически" height="26" width="36" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/af.gif" class="smiles" alt="8)" title="круто" height="21" width="21" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ac.gif" class="smiles" alt=":(" title="печально" height="24" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/evil.gif" class="smiles" alt=":evil:" title="злюсь" height="24" width="35" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/qr.gif" class="smiles" alt=":wall:" title="бешусь" height="26" width="31" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ah.gif" class="smiles" alt=":oops:" title="смущенно" height="25" width="25" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/aj.gif" class="smiles" alt=":{}" title="поцелуй" height="23" width="34" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/ak.gif" class="smiles" alt=":cry:" title="очень грустно" height="22" width="31" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/facepalm.gif" class="smiles" alt=":omg:" title="только не это" height="24" width="28" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/inlove.gif" class="smiles" alt=":inlove:" title="влюбленный" height="29" width="22" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/23247378e1dac5dd917b2695aad1baa8.gif" class="smiles" alt=":notiam:" title="я?! нет." height="26" width="42" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/197.gif" class="smiles" alt=":shuffle:" title="а чего я?" height="23" width="18" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/bp.gif" class="smiles" alt=":ura:" title="ура!" height="27" width="42" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/am.gif" class="smiles" alt=":nunu:" title="ну-ну" height="27" width="36" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/aa.gif" class="smiles" alt=":angel:" title="просто ангел!" height="23" width="27" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ae.gif" class="smiles" alt=":-p" title="дразнится" height="24" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/secret.gif" class="smiles" alt=":-X" title="секрет" height="26" width="22" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/fool.gif" class="smiles" alt=":fool:" title="ты чё, дурак?!" height="23" width="29" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/boredom.gif" class="smiles" alt=":tired:" title="скучно" height="22" width="26" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/good.gif" class="smiles" alt=":thumbsup:" title="отлично!" height="23" width="26" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/ok.gif" class="smiles" alt=":ок:" title="Ок!" height="26" width="40" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 8px;"><img src="/bitrix/images/forum/smile/bx.gif" class="smiles" alt=":yes!!!:" title="Yes!!!" height="30" width="42" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/cg.gif" class="smiles" alt=":painful:" title="больно!" height="20" width="23" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/yep.gif" class="smiles" alt=":yep:" title="угу" height="24" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/dj.gif" class="smiles" alt=":zzz:" title="сплю" height="29" width="29" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 8px;"><img src="/bitrix/images/forum/smile/dl.gif" class="smiles" alt=":bonk:" title="подзатыльник" height="30" width="48" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/mosking.gif" class="smiles" alt=":jokingly:" title="хи-хи" height="25" width="25" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/crazy.gif" class="smiles" alt=":crazy:" title="crazy!" height="27" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/scratch_one-s_head.gif" class="smiles" alt=":scratch:" title="Хмм..." height="24" width="27" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/pardon.gif" class="smiles" alt=":pardon:" title="пардон!" height="26" width="36" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/beee.gif" class="smiles" alt=":fi:" title="зазнался" height="28" width="28" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/ponty.gif" class="smiles" alt=":vnature:" title="чистА-кАнкретнА" height="26" width="35" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 1px;"><img src="/bitrix/images/forum/smile/d_daisy.gif" class="smiles" alt=":flowers:" title="вам букет!" height="44" width="43" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 8px;"><img src="/bitrix/images/forum/smile/dm.gif" class="smiles" alt=":magic:" title="колдунство!" height="31" width="42" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 12px;"><img src="/bitrix/images/forum/smile/stop.gif" class="smiles" alt=":stop:" title="стоп!" height="23" width="36" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 7px;"><img src="/bitrix/images/forum/smile/help.gif" class="smiles" alt=":help:" title="помогите!" height="33" width="30" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/rofl.gif" class="smiles" alt=":rofl:" title="я валяюсь!" height="25" width="29" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 10px;"><img src="/bitrix/images/forum/smile/cd.gif" class="smiles" alt=":quotes:" title="кавычки" height="26" width="36" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 7px;"><img src="/bitrix/images/forum/smile/cj.gif" class="smiles" alt=":relax:" title="relax" height="33" width="34" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/dh.gif" class="smiles" alt=":gramercy:" title="благодарю" height="29" width="36" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 4px;"><img src="/bitrix/images/forum/smile/cl.gif" class="smiles" alt=":achtung:" title="ахтунг!" height="38" width="48" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 6px;"><img src="/bitrix/images/forum/smile/dr.gif" class="smiles" alt=":nightmare:" title="а-а-а, кошмар!" height="34" width="42" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/drinks.gif" class="smiles" alt=":drink:" title="выпьем!" height="28" width="51" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 9px;"><img src="/bitrix/images/forum/smile/bt.gif" class="smiles" alt=":uncap:" title="здрасти!" height="28" width="42" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/cm.gif" class="smiles" alt=":dramatics:" title="я в истерике" height="24" width="38" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/bad.gif" class="smiles" alt=":puke:" title="тошнит" height="21" width="21" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/ar.gif" class="smiles" alt=":music:" title="тын-тыдын, парам-пам-пам" height="25" width="28" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/2.gif" class="smiles" alt=":?:" title="Вопрос" height="20" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 13px;"><img src="/bitrix/images/forum/smile/1.gif" class="smiles" alt=":!:" title="восклицание" height="20" width="20" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 14px;"><img src="/bitrix/images/forum/smile/idea.gif" class="smiles" alt=":idea:" title="идея" height="18" width="18" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/bomb.gif" class="smiles" alt="@=" title="бомба" height="24" width="28" border="0"></a></span><span class="forum-smiles-item" style="height: 46px;"><a href="#postform" name="smiles" style="margin-top: 11px;"><img src="/bitrix/images/forum/smile/wiki_go.gif" class="smiles" alt=":wikigo:" title="Пиши в словарь!" height="25" width="72" border="0"></a></span></div></div>'; 
 
    if (responce_comment_div)
    {
        var form_table=responce_comment_div.children[0];
             
        var post_form = document.createElement("a");
        post_form.setAttribute("name","postform");
        responce_comment_div.insertBefore(post_form, form_table);

        var forum_bbcode_line = document.createElement("div");
        forum_bbcode_line.innerHTML = bbcodes;

        form_table.children[1].children[0].insertBefore(forum_bbcode_line,form_table.children[1].children[0].children[3]);
        form_table.children[1].children[0].children[4].removeChild(form_table.children[1].children[0].children[4].children[0]);
      
        forum_bbcode_line.onclick =
        function (e)
        {  
            e = e || event;
            target = e.target || e.src;
            do_it(target.id || target.className , target.alt, "REVIEW_TEXT",""); 
         };
    } 
    if (edit_comment_div)
    { 
        var div_edit = edit_comment_div.children[0].children[0];
   
        var edit_bbcode_line = document.createElement("div");

        edit_bbcode_line.innerHTML = bbcodes;

        div_edit.insertBefore(edit_bbcode_line,div_edit.childNodes[0]); 
      
        edit_bbcode_line.onclick =
        function (e)
        {  
            e = e || event;
            target = e.target || e.src;
            do_it(target.id || target.className , target.alt, "edit_comment_editing_text", ""); 
        };
    } 
    
    // исправление ошибки http://www.banki.ru/forum/index.php?PAGE_NAME=message&FID=10&TID=191017&MID=2341244#message2341244
    $("#REVIEW_TEXT").on('keydown', function(e){
        if ((e.ctrlKey) && ((e.keyCode == 37) || (e.keyCode == 39))) {
            e.stopImmediatePropagation();
        }
    });
}
page.addForumFormToHP.nameForUser = 'Замена формы ответа в комментариях НР на "как в форуме"';

page.addHrefsToHP = function() {
    
    if (!page.isLogged) return;
    var i;
    var area_name;
    var url;

    var comments = document.getElementsByClassName("respcomment");
    var responce_comment_div = document.getElementById("response_comment_form");
    var edit_comment_div = document.getElementById("edit_comment_form"); 
      
    for (i=0;i<=comments.length;i++)
    {
        url = "";
        var nick = comments[i].children[0].children[0].children[0].children[0].innerHTML;
        
        
        
        var comment = comments[i].children[0].children[0].children[1];
        
        var comment_link_arr = comment.getElementsByClassName("warn-link");
        var comment_id = "";
        if (comment_link_arr[0])
        {
            if (/.*(#.*)$/.test(location.href)) { location_href = location.href.replace(/(.*)(#.*)$/,"$1"); }
            else { location_href=location.href; }
            comment_id = comment_link_arr[0].id.substring(5);
            url = location_href+'#respcomment'+comment_id; 
        }
        div_action_links = document.createElement("div"); 
        div_action_links.setAttribute("class","forum-action-links"); 
        div_action_links.innerHTML = '<span class="forum-action-quote"><a href="#postform" id="name_quote" comment="'+comment_id+'" name="'+nick+'">Цитировать</a></span>&nbsp;&nbsp;<span class="forum-action-reply"><a href="#postform" title="Вставить в ответ имя" id="name" name="'+nick+'">Имя</a></span>';    
        if (comment_link_arr[0]) { div_action_links.innerHTML = div_action_links.innerHTML + '&nbsp;&nbsp;<span class="forum-action-reply"><a href='+url+' title="Ссылка на комментарий">#'+comment_id+'</a></span>'; }
        comment.appendChild(div_action_links);
        
        div_action_links.onclick =
        function (e)
        {  
            e = e || event;
            target = e.target || e.src;
            url= "";
            comment_id = target.getAttribute("comment");
            if (comment_id)
            {
                if (/.*(#.*)$/.test(location.href)) { location_href = location.href.replace(/(.*)(#.*)$/,"$1"); }
                else { location_href=location.href; }
                url = location_href+'#respcomment'+comment_id; 
            }    
            if (responce_comment_div && (responce_comment_div.style.display!='none')) { do_it(target.id || target.className , target.getAttribute("name"), "REVIEW_TEXT", ""); } 
            if (edit_comment_div && (edit_comment_div.style.display!='none')) { do_it(target.id || target.className , target.getAttribute("name"), "edit_comment_editing_text", ""); }    
        };
    }
}
page.addHrefsToHP.nameForUser = 'Цитата, имя и ссылка на сообщения в комментариях HP';

// раскрытие "свернутых" отзывов и ответов ПБ
page.recollapseResponses = function() {
    $(".response_collapse").removeClass("response_collapse").addClass("response_collapse minus");
    $(".no_credited").removeClass("no_credited");
    $("tr.bankComment div.text-block").toggle();
    $("tr[id*='resp_text'] div.text-block").toggle();
    $(".b-el-toggle").toggleClass("b-el-toggle_opened");
}
page.recollapseResponses.nameForUser = 'Разворачивать отзывы и ответы ПБ в НР';

page.addAdditionalSearchToResponces = function() {
    addAditionalSearch('responces');
}
page.addAdditionalSearchToResponces.nameForUser="Поиск по отзывам в НР";

// добавление ссылок на rss-каналы на отзывы и ответы ПБ в списке банков в НР
page.addRSSToListOfBanks = function() {
    // ориентируясь по имеющимся классам, выходим на поля в столбце название банка
    $("td.solves").parent().find("td:first-child + td").html(function(index, oldhtml) {
        // если это не последняя строка с итогами
        if (/(.*)<a(.*)/.test(oldhtml)) {
            // добавляем 2 ссылки на rss
            bankId = getBankIdFromUrlResponces($(oldhtml).attr('href'));
            oldhtml += "<a title=\"Отзывы клиентов\" href=\"http://pipes.yahoo.com/pipes/pipe.run?_id=6717699aabb56f168884843eab60fb9d&_render=rss&numberinput1="+bankId+"\"><img src=\"/com/rss.gif\" alt=\"Отзывы клиентов\" style=\"position: relative; top: 1px; z-index: 1;\"></a>&nbsp;";        
            oldhtml += "<a title=\"Ответы представителей банка\" href=\"http://pipes.yahoo.com/pipes/pipe.run?_id=fb400833eda6b01d31a36ad5c5c6da83&_render=rss&numberinput1="+bankId+"\"><img src=\"/com/rss.gif\" alt=\"Ответы представителей банка\" style=\"position: relative; top: 1px; z-index: 1;\"></a>";
        }
        return oldhtml;
    });
}
page.addRSSToListOfBanks.nameForUser = 'RSS на отзывы и ответы ПБ в списке банков НР';

/** Исправление ошибки в ссылках в случае подписки http://www.banki.ru/forum/index.php?PAGE_NAME=message&FID=10&TID=51734&MID=2501456#message2501456  */
page.repairPageHrefsIfSubscribe = function() {
    $(".forum-page-navigation>a").attr('href', function(i, val) {
        if (/TOPIC_SUBSCRIBE=Y&/.test(val)) val = val.replace('TOPIC_SUBSCRIBE=Y&','');    
        return val;
    });
}
page.repairPageHrefsIfSubscribe.nameForUser = 'Исправление ошибки в ссылках на страницы форума при подписке';

// добавление пробелов в текст "Спасибо", чтобы достичь необходимых 20 символов 
page.addSpacesToSmallThank = function() {
    // для всех соотв. input делаем inline-хак в onclick 
    $("input.user-thank-change-button").attr("onclick", function (i, val) {
        return "$(this.parentNode).find('textarea.user-thank-change-reason').val(function (count, val) { for (i=20-val.length; i>0; i--) val=val+' '; return val;});" + val;
    });    
}
page.addSpacesToSmallThank.nameForUser="Спасибо в форуме с любым числом знаков";

// Добавляет в функцию вызова цитаты ссылку на сообщение
page.addHrefToQuotes = function() {
    $(".forum-action-quote a").clone().text('Цитировать с ссылкой').each(function(){
        var val = $(this).attr('onmousedown');
        if (/message_text_(\d+)/.test(val)) {
            var messageID = /message_text_(\d+)/.exec(val)[1];
            $(this).insertBefore(".forum-action-quote:has(a[onmousedown*='"+messageID+"'])");
            $(this).after("&nbsp;&nbsp;&nbsp;");
            var messageHref = $(".forum-post-number>noindex>a[href*='"+messageID+"']").attr('href');
            var messagePostID = $(".forum-post-number>noindex>a[href*='"+messageID+"']").text();
            $(this).attr('onmousedown', val.replace(/quoteMessageEx\('(.*?)',/,"quoteMessageEx('$1 в сообщении [URL="+messageHref+"]"+messagePostID+"[/URL]',")); 
    }});
}
page.addHrefToQuotes.nameForUser = 'Цитата с ссылкой на сообщение в форуме'; 

// Добавляет ссылку на комментарии пользователя в теме
page.addUserPostSearch = function() {
    
    $("div.forum-user-additional :first-child:has(span a)").after(function(){
        var user = getUserIdFromUrl($(this).find('a').attr('href'));
        var topic= $("div.forum-header-title:first").text();
        topic = topic.replace(/,(.*)$/,'');
        topic = $.trim(topic);
        return "<span>Сообщения в теме: <span><a href='http://www.banki.ru/forum/?PAGE_NAME=user_post&UID="+user+"&topic="+topic+"'>&gt;&gt;&gt;</a></span></span>";
    });
}
page.addUserPostSearch.nameForUser = 'Ссылка на поиск по сообщениям пользователя в теме форума';


// Добавляет коэффициент полезности сообщений в теме форума
page.addUserCoeffToForum = function() {
    
    $("div.forum-user-additional").append(function(){
        var coeff = userCoeff($(this).find("span:contains('Сообщений') span a").text(), $(this).find("span:contains('Репутация') span a").text());
        if (coeff === null) return;
        return "<span>Полезность: <span style='color:black'>"+coeff+"%</span></span>";
    });
}
page.addUserCoeffToForum.nameForUser = 'Коэффициент полезности сообщений в теме форума';



page.addLinksToHiddenUserInfo = function() {
    if (!page.isLogged)  return false;
    $(".b-el-dropDown>ul").css('width', 180);
  
    var tempUl;
    var oppId;
   
    var oppName;
    $(".b-el-dropDown ul").each(function(index, element){
        oppId = getUserIdFromUrl($(element).find(".mail").attr('href'));
        oppAboutUserA = document.createElement("li");
        oppAboutUserA.class="first";
        oppName = $(".forum-user-name>a[href*='UID="+oppId+"']").attr('title');
        oppAboutUserA.innerHTML = '<a href="'+getSearchInUserCommentsHref(page.userName, oppId)+'"><i style="background: url(/favicon.ico)"></i>Комментарии тебе</a>';
        userAboutOppA = document.createElement("li");
        userAboutOppA.class="first";
        userAboutOppA.innerHTML = '<a href="'+getSearchInUserCommentsHref(oppName, page.userId)+'"><i style="background: url(/favicon.ico)"></i>Комментарии ему(ей)</a>';
        userThanksOppA = document.createElement("li");
        userThanksOppA.class="first";
        userThanksOppA.innerHTML = '<a href="'+getUserProfileHref(page.userId, oppId, oppName)+'"><i style="background: url(/bitrix/components/custom/user.thank.forum/templates/.default/images/f_icon.png) -118px 0"></i>Спасибо тебе</a>';
        oppThanksUserA = document.createElement("li");
        oppThanksUserA.class="first";
        oppThanksUserA.innerHTML = '<a href="'+getUserProfileHref(oppId, page.userId, page.userName)+'"><i style="background: url(/bitrix/components/custom/user.thank.forum/templates/.default/images/f_icon.png) -118px 0"></i>Спасибо ему(ей)</a>';
        element.insertBefore(oppAboutUserA, element.children[1]);
        element.insertBefore(userAboutOppA, element.children[1]);
        element.insertBefore(userThanksOppA, element.children[1]);
        element.insertBefore(oppThanksUserA, element.children[1]);
    });
}
page.addLinksToHiddenUserInfo.nameForUser = 'Дополнительные пункты в меню пользователя в форуме';

page.addHotKeysToForum = function()
{
    var currentPageArr;
    var currentPage;
    var oldpageRegexp;
    var messageRegexp;
    var newPage;
    var temp;
    
    currentPageArr = document.getElementsByClassName("forum-page-current"); 
    if (currentPageArr.length == 0) return false; 
    else currentPage = currentPageArr[0].innerHTML;  
    oldpageRegexp = new RegExp("&PAGEN_1=\\d+");
    messageRegexp = new RegExp("&MID=\\d+");
    newPage = "&PAGEN_1=";
    lastPage = (document.getElementsByClassName("forum-page-next").length > 0);
    
    document.onkeydown = function(e) 
    {
        e = e || event;
        if (!$("textarea.post_message:focus").length>0) {
            if (e.ctrlKey && e.keyCode == 37 && currentPage>1) { 
                currentPage--;
                changePage(page.href, oldpageRegexp, messageRegexp, newPage, currentPage);
            }
            else if (e.ctrlKey && e.keyCode == 39 && lastPage) { 
                currentPage++;
                changePage(page.href, oldpageRegexp, messageRegexp, newPage, currentPage);        
            }
        }
    }    
}
page.addHotKeysToForum.nameForUser = 'Перемещение по страницам темы форума при помощи Ctrl <- ->';

page.addGotoPage = function()
{
    var forumPageNavDIVArr = document.getElementsByClassName("forum-page-navigation");
    if (forumPageNavDIVArr.length == 0) return false;
    gotoPageA = document.createElement("a");
    gotoPageA.href="#";
    gotoPageA.className = "forum-page-next";
    gotoPageA.innerHTML = "Перейти:"
    forumPageNavDIVArr[0].appendChild(gotoPageA);
    pageNumberINPUT = document.createElement("input");
    pageNumberINPUT.type="text";
    pageNumberINPUT.name="pageNumber";
    pageNumberINPUT.size=4;
    forumPageNavDIVArr[0].appendChild(pageNumberINPUT);
    
    gotoPageA2 = document.createElement("a");
    gotoPageA2.href="#";
    gotoPageA2.className = "forum-page-next";
    gotoPageA2.innerHTML = "Перейти:"
    forumPageNavDIVArr[1].appendChild(gotoPageA2);
    pageNumberINPUT2 = document.createElement("input");
    pageNumberINPUT2.type="text";
    pageNumberINPUT2.name="pageNumber2";
    pageNumberINPUT2.size=4
    forumPageNavDIVArr[1].appendChild(pageNumberINPUT2);    

    function prepareToChange(cP)
    {
        if (isNaN(currentPage)) { return false; }
        oldpageRegexp = new RegExp("&PAGEN_1=\\d+");
        messageRegexp = new RegExp("&MID=\\d+");
        newPage = "&PAGEN_1=";
        if (cP>0) { changePage(window.location.href, oldpageRegexp, messageRegexp, newPage, cP); }
    
    }
    gotoPageA.onclick = function(e) 
    {
        e = e || event;
        currentPage =  pageNumberINPUT.value;
        prepareToChange(currentPage);
    }
    pageNumberINPUT.onkeydown = function(e)
    {
        e = e || event;
        if (e.keyCode == 13)
        {
            currentPage =  pageNumberINPUT.value;
            prepareToChange(currentPage);
        }
    }
    gotoPageA2.onclick = function(e) 
    {
        e = e || event;
        currentPage =  pageNumberINPUT2.value;
        prepareToChange(currentPage);
    }
    pageNumberINPUT2.onkeydown = function(e)
    {
        e = e || event;
        if (e.keyCode == 13)
        {
            currentPage =  pageNumberINPUT2.value;
            prepareToChange(currentPage);
        }
    }
}
page.addGotoPage.nameForUser = 'Поле для перехода на любую страницу в форуме';

// Поиск по названиям тем форума
page.addThemeSearchToForum = function() {
    var searchHTML = "<input name='"+prefix+"_input_search' placeholder='Поиск по названиям тем' type='text' class='input--search' style='height: 24px;' size=30>&nbsp;&nbsp;&nbsp;&nbsp;";
    $(".forum-header-box:not(:has(.forum-header-options)) .forum-header-title, .forum-category-name>tr>td:first").append("<div class='forum-header-options'></div>");
    $(".forum-header-options").first().prepend(searchHTML);
    var fid = this.fid; 
    $(".bread-crumbs").append("<img src='"+waiticon+"' class="+prefix+"wait style='display:none;'>");
    searchFunction = function(searchUrl, fid, template, field, noescape) {
        if (searchUrl === null) {
            var searchAdditional = '';
            if ((fid !== undefined) && (fid !== 0))  { searchAdditional = '&FID='+ fid; }
            if ((field !== null) && (field !== ''))  { searchAdditional = searchAdditional+ '&search_field=' + field; }
            if (noescape !== true) template = escape1251(template); //вызываемому скрипту обязательно нужна win-1251 escape 
            var searchUrl = '/forum/?PAGE_NAME=topic_search&do_search=Y'+searchAdditional+'&search_template='+template; 
        } 
        $("."+prefix+"wait").show();
        $.ajax({
            url: searchUrl,
            dataType:'text'})
            .done(function(responce) {
                $('.forum-navigation-box, .forum-header-box').remove();
                
                $('.forum-block-container').html(themeSearchAfterLoadParce(responce));
                
                $('.forum-block-container a.tableheadtext').attr('href', function() {
                    var href = $(this).prev().attr('href');
                    $(this).prev().remove();
                    return href;
                });
                
                // если ничего не нашли
                $("div.forum-block-container:not(:has(div.forum-info-box.forum-topics))").append('<div class="forum-info-box forum-topics"><div class="forum-info-box-inner">Ничего не найдено. Попробуйте другую фразу для поиска.</div></div>');
                
                $("div.forum-page-navigation a").each(function(){$(this).attr('data-href',$(this).attr('href'));}).on('click', function(e) { 
                    e.stopPropagation();
                    searchFunction($(this).attr('data-href'), null, null, null); 
                }).attr('href','#');  
                
                $('.forum-filter-first>input').attr('type','button').on('click', function (e) {
                    e.stopPropagation();
                    searchFunction(null, $('select.forums-selector-single').val(), $('input.search-input').val(), $("select[name*='search_field']").val()); 
                });
                $('input.search-input').off().on('keydown', function(e) {
                    if (e.keyCode!=13) return;
                    e.stopPropagation();
                    searchFunction(null, $('select.forums-selector-single').val(), $('input.search-input').val(), $("select[name*='search_field']").val()); 
                });
            })
            .complete(function() {$("."+prefix+"wait").hide();});
    };
    var template = this.params[prefix+'theme_search']; 
    if (template !== undefined) searchFunction(null, null, template, null, true);
    
    $("[name*='"+prefix+"_input_search']").on('keydown', function(e) {
       if (e.keyCode!=13) return; 
       searchFunction(null, fid, $(this).val(), null); 
    });
}
page.addThemeSearchToForum.nameForUser="Поиск по названию тем форума";

page.addAditionalSearchToForum = function() {
    addAditionalSearch('forum_search'); 
}
page.addAditionalSearchToForum.nameForUser="Поиск сообщений в темах форума";

page.removeRedirect = function() {
    $('a[href*="banki.ru/redirect.php"]').attr('href', function(index, attr) {
        var regexp = /.*?banki\.ru\/redirect\.php\?link=(.*?)&hash(.*)/;
        if (regexp.test(attr)) {
            url = attr.replace(regexp,'$1');
            try { 
                url = decodeURIComponent(url);
            }
            catch(err) {
                return attr;
            } 
        }
        return url;
    });
}
page.removeRedirect.nameForUser="Удаление редиректа из ссылок";

/** Выбор раздела для поиске в шапке */
page.addSelectToSearchInTop = function() {
    function changeSearchForm(action, inputName) {
        $("form.item__node.js-search-input-form").attr('action',action);
        $("form.item__node.js-search-input-form .input-search__field").attr('name',inputName);
    }
    $('.branded-search__link').remove();
    var searchOption = getParam('top_search_option');
    if (searchOption === null) {
        saveParam('top_search_option', 0);
        searchOption = 0;
    }
    
    $("form.item__node.js-search-input-form").prepend("<input type='hidden' name='search[type]' value='name'>");
    $("form.item__node.js-search-input-form").prepend("<input type='hidden' name='PAGE_NAME' value='user_list'>");
    $("form.item__node.js-search-input-form").prepend("<input type='hidden' name='set_filter' value='Фильтровать'>");
        
    $('<select name="where" style="margin-top:12px"><option value="0">по всему сайту</option><option value="'+prefix+'banks">в банках России</option><option value="iblock_banks">в банках</option><option value="iblock_news">в новостях</option><option value="iblock_responses">в народном рейтинге</option><option value="'+prefix+'theme_search">в темах форума</option><option value="forum">в форуме</option><option value="'+prefix+'users">в пользователях</option><option value="iblock_wiki">в банковском словаре</option><option value="iblock_vacancy">в вакансиях</option><option value="iblock_resumes">в резюме</option></select>')
    .prependTo("form.item__node.js-search-input-form")
    .on("change", function() {
        var value = $(this).find('option:selected').attr('value');
        saveParam('top_search_option', value);
        switch (value) {
            case prefix+'users': changeSearchForm('/forum/','user_name'); break;
            case prefix+'banks': changeSearchForm('/banks/search/','search[text]'); break;
            case prefix+'theme_search':  changeSearchForm('/forum/',prefix+'theme_search'); $("input[name*='PAGE_NAME']").remove(); break;
            default : changeSearchForm('/search/','q');
        }
    })
    .find("option[value='"+searchOption+"']").attr('selected','true')
    .trigger("change");
    
   
    // на случай, если нет брендового поиска, так уже однажды случалось
    $('li.menu__item--last:not(.branded-search-wrapper) form.item__node.js-search-input-form').wrap('<div class="branded-search branded-search--color-90be19" />');
    $('li.menu__item--last:not(.branded-search-wrapper)').addClass('branded-search-wrapper');
}    
page.addSelectToSearchInTop.nameForUser="Выбор раздела для поиске в шапке";

// удаление "автосохранения" комментария, если текущая страница != странице, где последний раз был сохранен комментарий       
page.deleteAutoSave = function () {
    
    // не помню зачем такое исключение
    if (/banki\.ru\/friends\/group\/.*?\/forum\/edit\/.*/.test(page.href)) return;
    
    var href = page.href;
    if (typeof(localStorage)!='undefined') {
    // сохраняем адрес текущей страницы
    var autoSaveHref = localStorage.getItem('banki.ru.plus_autoSaveHref');
            
    $("textarea[role*='rich-textarea']").each(function (index, Element) {
        if (autoSaveHref != href) { 
            localStorage.setItem('autoSaveComment',"");
            Element.value = ""; 
        }
        // если браузер поддерживает событие oniput, повесим на него запись комментария и адреса текущей страницы
        if ("oninput" in Element) {
            $(Element).bind("input", function () {
            localStorage.setItem('autoSaveComment',Element.value);
            localStorage.setItem('banki.ru.plus_autoSaveHref',href);
            });
        }
        // на все осталыьне события, связаныне с изменением textarea добавим запись адреса текущей страницы
        $(Element).bind("click select keyup", function (){
            localStorage.setItem('banki.ru.plus_autoSaveHref',href);
            });
        });
    }          
}
page.deleteAutoSave.nameForUser = 'Отключить навязчивое автосохранение';


/** Добавляет пункты в "меню пользователя" */
page.addToUserMenu = function() {
    $(".item__spoiler.item__spoiler--user").css({"width":"170", "padding-left":"20px"});
    $(".spoiler__item>a:contains('Сообщения')")
    .text("ЛС (входящие)")
    .parent().after('<li class="spoiler__item"><a href="/forum/?PAGE_NAME=pm_list&amp;FID=2">ЛС (отправленные)</a></li>')
    .next().after('<li class="spoiler__item"><a href="http://www.banki.ru/forum/index.php?PAGE_NAME=user_post&UID='+this.userId+'&mode=all">Мои сообщения в форуме</a></li>')
    .next().after('<li class="spoiler__item"><a href="http://www.banki.ru/forum/index.php?PAGE_NAME=user_post&UID='+this.userId+'&mode=lta">Мои темы в форуме</a></li>')
    .next().after('<li class="spoiler__item"><a href="http://www.banki.ru/forum/?PAGE_NAME=subscr_list">Подписки</a></li>');                  
    $(".spoiler__item>a:contains('Моя лента')")
    .parent().after('<li class="spoiler__item"><a href="http://www.banki.ru/profile/index.php?UID='+this.userId+'&action=activity">Моя активность</a></li>');
}
page.addToUserMenu.nameForUser='Дополнительные ссылки в меню пользователя'
        
/** Удаляет кнопку наверх                                
page.removeUpButton = function() {
    alert('!!');
    $(document).on('ready', function() { 
        
    });
    $.when($("#scrollToTop").appendTo('body'), function(){ alert('!!!!!'); });
}    
page.removeUpButton.nameForUser = 'Отключить кнопку наверх';
page.removeUpButton.firstRunIsFalse = false; */

/** Вешает ссылки на разделы */                               
page.addLinkInMainMenu = function() {
       $("span.section__title").wrap( function() {
            return "<a style='text-decoration:none' href='"+$(this).parent().find("a.list__link").first().attr('href')+"'>";
    });
}    
page.addLinkInMainMenu.nameForUser = 'Заголовки главного меню - ссылки на разделы';

// ------------------------------ Предварительные функции ----------------------------------------------
/** Добавляем меню скрипта в шапку */
page.addUserScriptMenu = function() {
    if (!page.oldDisign) {
        $("li.menu__item.js-menu__item:has(div i[class*='facebook'])").clone(true).addClass(prefix+'menu menu__item--right')
        .find("div").addClass(prefix+'menu_div').attr('isOpened',false)
        // меняем иконку
        .find('i').attr('class','icon-16x16').css({"background-image":'url('+favicon+')','width':25, 'height':25,'margin-top':12})  
        .end().end().find("li.spoiler__item").remove() //удаляем ссылки
        .end().find("ul.item__spoiler") // добавляем ссылки
            .append("<li class='spoiler__item'><a href='#' id="+prefix+"options_popup_show>Настройки</a></li>")
            .append("<li class='spoiler__item'><a href='http://bankiforum.ru/showthread.php/232-%D0%91%D0%B0%D0%BD%D0%BA%D0%B8-%D1%80%D1%83'>Поддержка</a></li>")
            .append("<li class='spoiler__item "+prefix+"getlastversion'><a href="+UPDATE_URL+">Последняя версия</a></li>")
            .append("<li class='spoiler__item'>-----------------------</li>")
            .append("<li class='spoiler__item'><a href='http://bankiforum.ru/showthread.php/290-RSS-ленты-на-banki-ru'>RSS-ленты</a></li>")
            .append("<li class='spoiler__item'><a href='http://bankiforum.ru/showthread.php/255-%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-Adblock-Plus'>Подписка AdBlock+</a></li>")
    
        .end().insertAfter(".menu__item.menu__item--right:not(."+prefix+"menu):last");
        if ((new_version!==null)&&(new_version>version)) { 
            $("."+prefix+"getlastversion").after("<li class='spoiler__item "+prefix+"getlastversion'><a href="+UPDATE_URL+" style='color:red'>Новая версия ("+new_version+")</a></li>").remove();
        }    
        
        $('.'+prefix+'menu').on('click', function (e) {
            var div = $(this).find('div'); 
            if (div.attr('isOpened') == 'false')  { div.addClass('item__node--expanded').attr('isOpened', true); }
            else { div.removeClass('item__node--expanded').attr('isOpened', false); }
            e.stopPropagation();
        });
        $('body').on('click', function () {
            $('.'+prefix+'menu_div.item__node--expanded').removeClass('item__node--expanded').attr('isOpened', false); 
        });
    }
}

/** Обновление скрипта */
page.updateUserScript = function() {

    var today = new Date;
    
    var dayCheckUpdate = getParam('dayCheckUpdate');
    if (dayCheckUpdate === null) { 
        dayCheckUpdate = today;
        saveParam('dayCheckUpdate', today.toString()); 
    }
    else dayCheckUpdate = new Date(dayCheckUpdate);
    
    if (dayCheckUpdate.getTime()>today.getTime()) return;  
    dayCheckUpdate.setDate(today.getDate()+1);
    saveParam('dayCheckUpdate', dayCheckUpdate.toString()); 

    loadJsOrCssFile(VERSION_URL+'?'+random(100001, 999999),'js');
    
    chanceToUpdate();
    
    function chanceToUpdate() {
    
        var new_version_online = $("div."+prefix+"version").text();
        
        if (new_version_online!='') {
            new_version = new_version_online; saveParam('new_version', new_version);
            
            var dayX = getParam('dayX');
            if (dayX === null) { 
                dayX = today;
                saveParam('dayX', today.toString()); 
            }
            else dayX = new Date(dayX);
    
            if (new_version>version) {
               
                $("."+prefix+"getlastversion").after("<li class='spoiler__item'><a href="+UPDATE_URL+" style='color:red'>Новая версия ("+new_version+")</a></li>").remove();
                
                if (dayX.getTime()<=today.getTime()) {
                    dayX = today;
                    confirmed = window.confirm('Вышла новая версия Банки.ру+ '+new_version+'(у вас установлена '+version+'). Хотите скачать и установить?');
                    if (confirmed) {
                        window.open(UPDATE_URL, prefix+'_update');
                        dayX.setDate(dayX.getDate()+1); 
                    }
                    else dayX.setDate(dayX.getDate()+7); 
                    saveParam('dayX', dayX.toString());
                }   
            }
        }
        else { setTimeout(chanceToUpdate, 100); }
    }
} 

/** Опции скрипта */
page.addOptionsWindow = function() {
    loadJsOrCssFile('/_lib/jquery/plugins/popup/popup.css','css');
    loadJsOrCssFile('/bitrix/templates/.default/components/bitrix/system.auth.form/redesign/style.css','css');
    $('body')
    .prepend('<div class="'+prefix+'options'+' b-popup b-popup_white" style="padding: 20px 27px 20px 22px; left: '+(page.center-250)+'px; top: 150px; opacity: 1; margin-top: 0px; display:none"><span class="b-el-link b-el-link_popup"><i class="b-el-link__icon b-el-link__icon_close '+prefix+'options_close"></i></span><h6 class="b-loginPopup__title">Настройки</h6><div class="'+prefix+'func_list"></div><div class="'+prefix+'options_reload" style="display:none"><br/><br/>Изменения будут применены только после перезагрузки страницы. <a href="javascript:window.location.reload();">Перегрузить?</a></div></div>')
    .prepend('<div class="b-popup__overlay" style="display: none;"></div>');
    for (var key in page) {
        if ((typeof page[key] == 'function') && ('nameForUser' in page[key])) {
            $('<div>'+page[key].nameForUser+' <input type=checkbox id='+key+' class="'+prefix+'func_check"></div>').prependTo('.'+prefix+'func_list');
            var isAllowed = getParam(key);
            if (isAllowed === null) {
                isAllowed = (typeof(page[key].firstRunIsFalse)==='undefined')? 1 : 0;
                saveParam(key, isAllowed); 
            }
            if (+isAllowed === 1) { $('#'+key).click(); }
            $('#'+key).on('click', function() { saveParam(this.id, +this.checked); $('.'+prefix+'options_reload').show(); });
        }
    }
    
    var openOptions = function() {
        $('.b-popup__overlay').addClass('b-popup__overlay_black').show();
        $('.'+prefix+'options').addClass('b-popup_show').show(); 
     }
    $('#'+prefix+'options_popup_show').on('click', openOptions);
    $('body').on('keydown', function(e){
        if ((e.ctrlKey) && (e.shiftKey) && ((e.keyCode == 191) || (e.keyCode == 190))) {
           openOptions();
        }
    });
    $('.'+prefix+'options_close').click(function() {
        $('.b-popup__overlay').removeClass('b-popup__overlay_black').hide();
        $('.banki_ru_plus_options').removeClass('b-popup_show').hide();
    })
}

// общий конструктор для любой страницы
function bankiruPage() {
    
    //определяем какой дизайн
    if  ($(".b-to-new-design>a").length!=0) { this.oldDisign = true; }
    else { this.oldDisign = false; }
    
    // ищем имя пользователя и его id, на основании найденного решаем залогирован ли пользователь или нет
    if (this.oldDisign) {
        this.userName = $("a.b-userbar__name").html();
        this.userId = getUserIdFromUrl($("a.b-userbar__name").attr("href")); 
    }
    else {        
        this.userName = $("span.link-with-icon__text").html();
        this.userId = getUserIdFromUrl($("a.link-with-icon").attr("href"));
    }    
    this.isLogged = (this.userName!="")&&(this.userId!==null);
   
    this.title=$("title").text(); 
      
    // делаем разбор строки get-параметров и сохраняем их в свойстве-массиве params
    // TODO добавить проверки ? 
    this.href = window.location.href;
    this.center = $(window).width()/2 ;
    this.params = {};   
    var getParams = window.location.search.substring(1).split("&");
    for (var i=0; i<getParams.length; i++) {
        var keyVal = getParams[i].split("=");
        this.params[keyVal[0]] = keyVal[1];
    }
    this.afterHash = window.location.hash.substring(1);
} 

(function() {
    
    for (var i=0; i<functionsSequence.length; i++) {
        var addressPattern = new RegExp(functionsSequence[i].address);
        if (addressPattern.test(page.href)) {
            var functions = functionsSequence[i].functions.split(', ');
            for (var j=0; j<functions.length; j++) {
                var canRun = getParam(functions[j]);
                if ( ((canRun === null) && (typeof(page[functions[j]].firstRunIsFalse)==='undefined')) || (+canRun === 1)) page[functions[j]]();
            }
            if (functionsSequence[i].isLast) break;
        }
    }
})(); 
