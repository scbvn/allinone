/*! targaryen v 2017-12-12 */

var sm_meta=sm_meta||{};sm_meta.sm_uber={name:"sm_uber",version:"",buildDate:"2017-12-12T09:20:10",env:"production"};var SM=void 0!==SM?SM:{};SM.Lib=function(){"use strict";var a={};return"undefined"==typeof console||void 0===console.log?a.console={log:function(){},warn:function(){},error:function(){},dir:function(){}}:a.console=console,a}();var smtrace=function(){"undefined"!=typeof console&&void 0!==console.log&&SM.Utils.each(arguments,function(a){console.log(a)})},sminfo=function(){"undefined"!=typeof console&&void 0!==console.info&&SM.Utils.each(arguments,function(a){console.info(a)})},smwarn=function(){"undefined"!=typeof console&&void 0!==console.warn&&SM.Utils.each(arguments,function(a){console.warn(a)})},smerror=function(){"undefined"!=typeof console&&void 0!==console.error&&SM.Utils.each(arguments,function(a){console.error(a)})};SM.Utils=function(){"use strict";var a={};return a.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)},a.inArray=function(a,b,c){for(var d=c||window,e=a.length,f=0;f<e;f++)if(b.call(d,a[f]))return!0;return!1},a.indexOf=function(a,b,c){if(Array.prototype.indexOf)return a.indexOf(b,c);for(var d=c||0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1},a.objLength=function(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b},a.each=function(b,c,d){var e=d||window;if(a.isArray(b))for(var f=b.length,g=0;g<f;g++)c.call(e,b[g],g,b);else for(var h in b)c.call(e,b[h],h,b)},a.find=function(b,c,d){var e=(d||window,null);if(a.isArray(b)){for(var f=b.length,g=0;g<f;g++)if(c.call(a,b[g],g,b)){e=b[g];break}}else for(var h in b)if(c.call(a,b[h],h,b)){e=b[h];break}return e},a.clone=function(b){var c;if(null===b||"object"!=typeof b)return b;if("date"===a.toType(b)&&(c=new Date,c.setTime(b.getTime())),"array"===a.toType(b)){c=[];for(var d=0,e=b.length;d<e;d++)c.push(a.clone(b[d]))}if("object"===a.toType(b)){c={};for(var f in b)b.hasOwnProperty(f)&&(c[f]=a.clone(b[f]))}return c},a.extract=function(a,b){if(a.hasOwnProperty(b)){var c=a[b];return a!==window&&delete a[b],c}},a.extend=function(b,c){b=b||{};for(var d in c)c.hasOwnProperty(d)&&(b[d]instanceof Object&&c[d]instanceof Object&&!SM.Utils.isHTMLNode(b[d])&&!SM.Utils.isHTMLNode(c[d])?b[d]=a.extend(b[d],c[d]):b[d]=c[d]);return b},a.isHTMLNode=function(a){return!!("object"==typeof a&&"nodeType"in a&&1===a.nodeType&&a.cloneNode)},a.inherits=function(b,c){function d(){a.constructor=b}b=a.extend(b,c),d.prototype=b._super=c.prototype,b.prototype=new d},a.randomize=function(a){for(var b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a},a.parseQueryString=function(){var b=window.location.search.substring(1);return a.queryStringToObj(b)},a.queryStringToObj=function(a){var b,c={},d=/\+/g,e=/([^&|\?=]+)=?([^&|\?]*)/g,f=function(a){return decodeURIComponent(a.replace(d," "))},g=unescape(a);if(-1===g.indexOf("?"))return c;b=g.substr(g.indexOf("?"),g.length);for(var h=e.exec(b);h;h=e.exec(b))c[f(h[1])]=f(h[2]);return c},a.objToQueryString=function(b,c){var d=[],e="&";return a.each(b,function(b,f){if("array"===a.toType(b)){var g=f+"[]=";a.each(b,function(a){e+=g+a+"&"})}else if("object"===a.toType(b))d.push(f+"="+JSON.stringify(b));else{var h=c?encodeURIComponent(f)+"="+encodeURIComponent(b):f+"="+b;d.push(h)}},a),d.join("&")+e},a.formatUrlForQueryString=function(a){return-1===a.indexOf("?")?a+="?":a.indexOf("?")!==a.length-1&&a.indexOf("&")!==a.length-1&&(a+="&"),a},a.isString=function(a){return"string"==typeof a||a instanceof String},a.parseMarkup=function(a,b){var c=a,d=/~\{[A-Z]*\}~/gi,e=a.match(d);if(e)for(var f in e){var g=String(e[f]),h=g.length,i=g.substring(2,h-2),j=b[i];j=void 0===j||null===j?g:j.toString(),c=c.replace(g,j)}return c},a.toType=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},a}(),Array.prototype.filter||(Array.prototype.filter=function(a){"use strict";if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=arguments.length>=2?arguments[1]:void 0,f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),SM.DeviceUtils=function(a){"use strict";function b(){var b={Android:/Android/i,iPhone:/iPhone/i,iPad:/iPad/i,iOS:/iOS/i,Macintosh:/Macintosh/i,Windows:/Windows/i,Linux:/Linux/i,WebOS:/webOS/i,Blackberry:/BlackBerry/i},f=!1,g="",h="";for(var i in b)if(b[i].test(c)){g=i.split(" ").join("_");break}""===g&&(g=navigator.platform),f="ontouchstart"in document.documentElement||null!==navigator.userAgent.match(/ipad|iphone|android/i),h=f?"touch":"mouse";var j=window.devicePixelRatio||1;e={sm_os:g,sm_plt:h,sm_brw:a.getBrowser(),sm_pr:j},d=!0}var c=navigator.userAgent.toLowerCase(),d=!1,e={};return a.browsers={IPHONE:"Iphone",ANDROID:"Android",CHROME:"Chrome",SAFARI:"Safari",FIREFOX:"Firefox",OPERA:"Opera",IE:"IE"},a.isMobile=function(){return c.match(/iphone|ipad|android/i)},a.isIphone=function(){return c.match(/iphone/i)},a.isIpad=function(){return c.match(/ipad/i)},a.isAndroid=function(){return c.match(/android/i)},a.isChrome=function(){return!!window.chrome&&!a.isOpera()},a.isSafari=function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0},a.isFirefox=function(){return"undefined"!=typeof InstallTrigger},a.isOpera=function(){return!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0},a.isIE=function(){var a=!1;return-1!==c.indexOf("msie")?a=parseInt(c.split("msie")[1]):navigator.appVersion.indexOf("Trident/")>0?a=11:c.indexOf("edge/")>0&&(a=parseInt(c.split("edge/")[1])),a},a.hasFlash=function(){var a=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){void 0!==navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a},a.getType=function(b){var c="is"+b;return!(!a[c]instanceof Function)&&a[c]()},a.getBrowser=function(){if(d)return e.sm_brw;var b="",c=a.browsers;for(var f in c)if(a.getType(c[f])){b=c[f];break}return b},a.getAndroidVersion=function(){var a=c.match(/Android\s([0-9\.]*)/i);return!!a&&a[1]},a.getOs=function(){return d||b(),e.sm_os},a.getPlatformInfo=function(){return d||b(),e},a.checkForDeviceMotion=function(){return void 0!==window.DeviceMotionEvent&&window.DeviceMotionEvent?1:0},a}(SM.DeviceUtils||{}),SM.Macros=function(a){"use strict";function b(c,d){return SM.Utils.each(c,function(a,e){var f=SM.Utils.toType(a);"string"===f?c[e]=d(a):"object"!==f&&"array"!==f||(c[e]=b(c[e],d))},a),c}function c(a,c){var d=SM.Utils.toType(a);return"string"!==d&&"object"!==d&&"array"!==d?a:a="string"===d?c(a):b(a,c)}var d={PROTOCOL:/\[sm_protocol\]:?/i,LOCATION:/\[location\]/i,REFERRER:/\[referrer\]/i,TIMESTAMP:/\[timestamp\]/i},e={PROTOCOL:function(a){return a.split(d.PROTOCOL).join(f)},LOCATION:function(a){return a.split(d.LOCATION).join(window.location.href)},REFERRER:function(a){return a.split(d.REFERRER).join(document.referrer)},TIMESTAMP:function(a){return a.split(d.TIMESTAMP).join(Date.now())}},f="https:"==document.location.protocol?"https:":"http:";return a.protocol=f,a.process=function(b){return c(b,a.processStr)},a.processList=function(c){return b(c,a.processStr)},a.processStr=function(b){return SM.Utils.each(d,function(a,c){b=e[c](b)},a),b},a.protocolize=function(b){return c(b,a.protocolizeStr)},a.protocolizeList=function(c){return b(c,a.protocolizeStr)},a.protocolizeStr=function(a){return e.PROTOCOL(a)},a}(SM.Macros||{}),SM.BrowserSize=function(){"use strict";function a(){var a=document.documentElement.clientWidth,b=document.documentElement.clientHeight;window.screen.width,window.screen.height;return{width:a,height:b}}var b={};return b.orientation="l",b.getDimensions=function(){return a()},b.getMinDimension=function(){var b=a();return b.width>b.height?b.height:b.width},b.getParams=function(){var a,b=(window.orientation,SM.BrowserSize.getOrientation()),c=SM.BrowserSize.getDimensions();if(c.height>c.width){var d=window.screen.height,e=d-c.height;a={sm_w:d,sm_h:c.width-e,sm_o:"l"}}else a={sm_w:c.width,sm_h:c.height,sm_o:b};return a},b.getOrientation=function(){var a=window.orientation,b=SM.BrowserSize.getDimensions();return void 0!==a?0===a||180===a?"p":"l":b.height>b.width?"p":"l"},b}(),SM.JsLoader=function(a){"use strict";function b(a,b,c,e,f,g,i,j,k){if(this.urls=a,this.id=b||(new Date).getTime(),this.completeCallback=c||null,this.batchComplete=e||null,this.timeoutCallback=f||null,this.callbackContext=i||window,this.max=j||h,this.async=k||!1,this.loaded=0,this.count=0,this.total=a.length,k)for(;this.urls.length>0;)new d(this.urls.shift(),this.id+this.loaded,this.onFileLoaded.bind(this),this.onTimeout.bind(this),this,this.max);else new d(this.urls.shift(),this.id+this.loaded,this.onFileLoaded.bind(this),this.onTimeout.bind(this),this,this.max);return this}function c(a,b,c,d,e,g,h,i){this.script=f(a,b,c,d,e,g,h,!0,i)}function d(a,b,c,d,e,g,h,i){this.script=f(a,b,c,d,e,g,h,!1)}function e(a){var b=a.replace(/\?\&/g,"?");return b=b.replace(/\?{2,}/g,"?"),b=b.replace(/\&{2,}/g,"&")}function f(a,b,c,d,f,g,j,k,l){var m,n=j||h,o=g||window,p=b||"",q=l||"sm_cb",r="sm"+p+String(Math.floor(99999999*Math.random())),s=c||function(){},t=d||function(){},u=f||function(){},v=window.setTimeout(function(){window[r]=function(){},t.call(o,null,!1,b)},n);return window[r]=function(a){window.clearTimeout(v),s.call(o,a,!0,b),window[r]=function(){}},m=document.createElement("script"),m.setAttribute("type","text/javascript"),m.setAttribute("id",p),m.async=!0,a=e(a),k?a+="&"+q+"="+r:m.readyState?m.onreadystatechange=function(){"loaded"!=m.readyState&&"complete"!=m.readyState||window[r](a)}:m.onload=function(){window[r](a)},m.src=a,m.onerror=u,i.appendChild(m),m}function g(a){a.loaded++,!a.async&&a.urls.length>0?new d(a.urls.shift(),a.id+a.loaded,a.onFileLoaded.bind(a),a.onTimeout.bind(a),a,a.max):a.loaded>=a.total&&a.batchComplete instanceof Function&&a.batchComplete.call(a.callbackContext)}var h=5e3,i=document.getElementsByTagName("head")[0];return b.prototype.onFileLoaded=function(a,b,c){this.completeCallback instanceof Function&&this.completeCallback.call(this.callbackContext,a,b,c),g(this)},b.prototype.onTimeout=function(a,b,c){this.timeoutCallback instanceof Function&&this.timeoutCallback.call(this.callbackContext,a,!1,c),g(this)},b.prototype.onError=function(a,b,c){this.errorCallback instanceof Function&&this.errorCallback.call(this.callbackContext,a,!1,c),g(this)},a.batchLoad=function(a,c,d,e,f,g,h,i,j){return new b(a,c,d,e,f,g,h,i,j)},a.load=function(a,b,c,e,f,g,h,i){return new d(a,b,c,e,f,g,h,i)},a.jsonp=function(a,b,d,e,f,g,h,i){return new c(a,b,d,e,f,g,h,i)},a}(SM.JsLoader||{}),SM.KarmaAdapter=function(a){return a.paramPrefx="ka_",a.getParams=a.getParams||function(b,c){function d(c){if(!c&&window.karma.config.targeting){var d=window.karma.config.targeting;SM.Utils.each(d,function(b,c){null!==b&&(e[a.paramPrefx+c]=b)})}return b&&b(e),e}var e={};return c=c||1,window.adService||window.karma?(window.karma=window.karma||{},window.karma.vars=window.karma.vars||{},window.karma.vars.targetingReady?d():"function"!=typeof window.dispatchEvent?c>5?d():(c++,a.getParams(b,c)):void window.addEventListener("karmaTargetingReady",function(){return d()})):d(!0)},a}(SM.KarmaAdapter||{}),function(a,b,c){b[a]=c()}("Fingerprint",SM,function(){"use strict";var a=function(a){var b,c;b=Array.prototype.forEach,c=Array.prototype.map,this.each=function(a,c,d){if(null!==a)if(b&&a.forEach===b)a.forEach(c,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(c.call(d,a[e],e,a)==={})return}else for(var g in a)if(a.hasOwnProperty(g)&&c.call(d,a[g],g,a)==={})return},this.map=function(a,b,d){var e=[];return null==a?e:c&&a.map===c?a.map(b,d):(this.each(a,function(a,c,f){e[e.length]=b.call(d,a,c,f)}),e)},"object"==typeof a?(this.hasher=a.hasher,this.screen_resolution=a.screen_resolution,this.screen_orientation=a.screen_orientation,this.canvas=a.canvas,this.ie_activex=a.ie_activex):"function"==typeof a&&(this.hasher=a)};return a.prototype={get:function(){var a=[];if(a.push(navigator.userAgent),a.push(navigator.language),a.push(screen.colorDepth),this.screen_resolution){void 0!==this.getScreenResolution()&&a.push(this.getScreenResolution().join("x"))}return a.push((new Date).getTimezoneOffset()),a.push(this.hasSessionStorage()),a.push(this.hasLocalStorage()),a.push(!!window.indexedDB),a.push(document.body?typeof document.body.addBehavior:"undefined"),a.push(typeof window.openDatabase),a.push(navigator.cpuClass),a.push(navigator.platform),a.push(navigator.doNotTrack),a.push(this.getPluginsString()),this.canvas&&this.isCanvasSupported()&&a.push(this.getCanvasFingerprint()),this.hasher?this.hasher(a.join("###"),31):this.murmurhash3_32_gc(a.join("###"),31)},murmurhash3_32_gc:function(a,b){var c,d,e,f,g,h,i,j;for(c=3&a.length,d=a.length-c,e=b,g=3432918353,h=461845907,j=0;d>j;)i=255&a.charCodeAt(j)|(255&a.charCodeAt(++j))<<8|(255&a.charCodeAt(++j))<<16|(255&a.charCodeAt(++j))<<24,++j,i=(65535&i)*g+(((i>>>16)*g&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(65535&i)*h+(((i>>>16)*h&65535)<<16)&4294967295,e^=i,e=e<<13|e>>>19,f=5*(65535&e)+((5*(e>>>16)&65535)<<16)&4294967295,e=27492+(65535&f)+((58964+(f>>>16)&65535)<<16);switch(i=0,c){case 3:i^=(255&a.charCodeAt(j+2))<<16;case 2:i^=(255&a.charCodeAt(j+1))<<8;case 1:i^=255&a.charCodeAt(j),i=(65535&i)*g+(((i>>>16)*g&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(65535&i)*h+(((i>>>16)*h&65535)<<16)&4294967295,e^=i}return e^=a.length,e^=e>>>16,e=2246822507*(65535&e)+((2246822507*(e>>>16)&65535)<<16)&4294967295,e^=e>>>13,e=3266489909*(65535&e)+((3266489909*(e>>>16)&65535)<<16)&4294967295,(e^=e>>>16)>>>0},hasLocalStorage:function(){try{return!!window.localStorage}catch(a){return!0}},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(a){return!0}},isCanvasSupported:function(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},getPluginsString:function(){return this.isIE()&&this.ie_activex?this.getIEPluginsString():this.getRegularPluginsString()},getRegularPluginsString:function(){return this.map(navigator.plugins,function(a){var b=this.map(a,function(a){return[a.type,a.suffixes].join("~")}).join(",");return[a.name,a.description,b].join("::")},this).join(";")},getIEPluginsString:function(){if(window.ActiveXObject){var a=["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"];return this.map(a,function(a){try{return new ActiveXObject(a),a}catch(a){return null}}).join(";")}return""},getScreenResolution:function(){return this.screen_orientation?screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height]:[screen.height,screen.width]},getCanvasFingerprint:function(){var a=document.createElement("canvas"),b=a.getContext("2d"),c="http://valve.github.io";return b.textBaseline="top",b.font="14px 'Arial'",b.textBaseline="alphabetic",b.fillStyle="#f60",b.fillRect(125,1,62,20),b.fillStyle="#069",b.fillText(c,2,15),b.fillStyle="rgba(102, 204, 0, 0.7)",b.fillText(c,4,17),a.toDataURL()}},a}),SM.UberTag=function(a){function b(b){var c,d,e;this.pubResponse={},this.config=SM.Utils.extend(SM.Utils.clone(a.config),b),this.id=this.config.sm_pb,this.url=this.config.w5,delete this.config.w5,this.config=h(this.config),this.url+=SM.Utils.objToQueryString(this.config,!0),this.url+="&utid="+String((new Date).getTime()),this.url+="&loc="+encodeURIComponent(window.location.href)+"&ref="+encodeURIComponent(document.referrer),this.onProductScriptLoaded=function(a){return function(b,c,d){d=parseInt(d.replace(A,"")),l(b,c,d,a)}}(this),c=function(a){return function(b){k(b,a)}}(this),d=function(){p({token:this.id,type:w.PRODUCT_ERROR,status:w.PUBLISHER_API_TIMEOUT})},e=function(){p({token:this.id,type:w.PRODUCT_ERROR,status:w.PUBLISHER_API_ERROR})},SM.JsLoader.jsonp(this.url,"pubApi"+this.config.sm_pb,c,d,e,this)}function c(a){var b=a.split("&"),c={};return b.forEach(function(a){var b=a.split("=");c[b[0].replace("?","")]=b[1]}),c}function d(){return SM.Fingerprint?new SM.Fingerprint({canvas:!0,screen_resolution:!0,ie_activex:!0}).get():null}function e(){for(var a,b,c,d=document.getElementsByTagName("script"),e=0,g=d.length;e<g;e++)c=d[e].src,c.match(t)&&(a=c.match(u),s("\tpathToken = "+a),a&&a.length>1&&(c+=c.indexOf("?")>-1?"&":"?",c+="sm_pb="+a[1]),b=j(SM.Utils.queryStringToObj(c)),b=SM.Utils.extend(b,G),b.hasOwnProperty("sm_pb")?f(b):"undefined"!=typeof smConfig&&smConfig.hasOwnProperty("sm_pb")&&(b.sm_pb=smConfig.sm_pb,delete smConfig.sm_pb,f(b)))}function f(c){s("SM.Uber/_createController, config = ",c),a.controllers.hasOwnProperty(c.sm_pb)||(a.controllers[c.sm_pb]=new b(c))}function g(a){s("SM.Uber/_processTestKeyValues");var b={};return a.split("-").forEach(function(a){var c=a.split(",");b["ka_"+c[0]]=c[1]}),b}function h(a){return a.sm_pcb&&(i(a.sm_pcb),delete a.sm_pcb),a}function i(a){var b;"function"===SM.Utils.toType(window[a])?b=window[a]:"function"===SM.Utils.toType(a)&&(b=a);for(var c=0,d=C.length;c<d;c++)if(C[c].toString()===b.toString())return void s("WARNING: callback already registered, halting add");C.push(b)}function j(b){return SM.Utils.each(x,function(a,c){b.hasOwnProperty(c)&&(b[a]=b[c],delete b[c])},a),b}function k(a,b){s("SM.Uber/_pubApiResponse["+b.id+"], response = ",a);var c=!(a.sync||B),d=[];b.pubResponse=a,a.hasOwnProperty("products")&&a.products.length>0?(SM.Utils.each(a.products,function(a,c){d.push(SM.Macros.protocolize(a.url)),a.windowVars&&SM.Utils.each(a.windowVars,function(a,b){window[b]=a},b)},b),SM.JsLoader.batchLoad(d,A,b.onProductScriptLoaded,null,null,null,b,v,c)):p({token:b.id,type:w.PRODUCT_ERROR,status:w.NO_PRODUCTS_AVAILABLE})}function l(a,b,c,d){var e=d.pubResponse.products[c];s("SM.Uber/_onProductScriptLoaded, success = "+b+" product = ",e),b?m(c,d,e):p({token:d.id,type:w.PRODUCT_ERROR,status:w.PRODUCT_LOAD_ERROR})}function m(a,b,c){_pubResponse=arguments[1];var d=SM[c.type]||window[c.type]||null;if(d&&d.init instanceof Function){var e=SM.Utils.clone(b.config),f=c.config||{};f.apis=f.apis||{},f.params=f.params||{},e&&(f=n(e,f),f=SM.Utils.extend(f,G)),f.callback=function(a,b){return function(c){o(c,a,b)}}(c.id,b),d.init(f),z.length>0&&r(d),SM.UberTag.__test__.currentProd=d,D.push(d)}}function n(a,b){return a.apis&&(b.apis=SM.Utils.extend(a.apis,b.apis),delete a.apis),b.params&&(b.params=SM.Utils.extend(a.params,b.params),delete a.params),b=SM.Utils.extend(a,b)}function o(a,b,c){switch(s("SM.Uber/_onEvent, event = ",a),a.type){case SM.Events.ADS_AVAILABLE_RESPONSE:if(!a.status){var d=a.pid?a.pid:b;c.pubResponse.passbacks&&c.pubResponse.passbacks[d]&&(p({type:w.LOADING_PASSBACK,pid:d}),SM.JsLoader.load(c.pubResponse.passbacks[d]))}break;case SM.Events.TAG_REDIRECT:a.isRedirect=!0,window.location.href=a.status;break;case SM.Events.USER_CLOSED:case SM.Events.BEHAVIOR_CLOSED:}a.token=a.token||c.id,p(a)}function p(b){SM.Utils.each(C,function(a){a(b)},a)}function q(a,b,c){void 0!==a?a[b]instanceof Function&&a[b](c):z.push({method:b,params:c})}function r(a){for(var b;z.length>0;)b=z.pop(),a[b.method]instanceof Function&&a[b.method](b.params)}function s(){E&&"undefined"!=typeof console&&void 0!==console.log&&SM.Utils.each(arguments,function(a){console.log(a)})}var t=/(sm_uber|sm_app_touch|sm_app_mouse|selectablemedia\.js|selectablemedia\.com\/ng\/pub)/gi,u=/selectablemedia.com\/tg\/p\/([a-zA-Z0-9]{0,})/,v=1e4,w={ERROR:"error",PRODUCT_ERROR:"productError",MISSING_PLACEMENT:"missingPlacementOrPlacementBucket",PUBLISHER_API_TIMEOUT:"publisherApiTimeout",PUBLISHER_API_ERROR:"publisherApiError",PRODUCT_LOAD_ERROR:"productLoadError",NO_PRODUCTS_AVAILABLE:"noProductsAvailable",LOADING_PASSBACK:"loadingPassback"},x={_sm_plcmnt:"sm_pb",_sm_uid:"uid",placement:"sm_pb",redirectURL:"sm_rdrct",ipAddress:"ipaddr",userAgent:"sm_ua",origin:"sm_or",callback:"sm_pcb"},y={w5:"//api.sele.co/ub/v1.jsonp?",debugLevel:5},z=[],A="sm_product_batch",B=!0,C=[],D=[],E=!1,F=document.location.search,G={};return a.controllers=a.controllers||{},a.init=function(){function b(b){k=SM.Utils.extend(b,k),k.hasOwnProperty("adTestKeyValues")&&(k=SM.Utils.extend(k,g(k.adTestKeyValues))),k=h(k),a.config=k,G=c(F),E="1"===G.sm_logs,s("SM.UberTag/init, _urlParams = ",G),e(),SM.UberTag.__test__._config=a.config,SM.UberTag.__test__._fingerprint=a.fingerprint,f=(new Date).getTime(),s("sm UT built:\n"+f+"\n"+i+"\nms: "+(f-i))}var f,i=(new Date).getTime(),k=j(window.smConfig||{});a.fingerprint=a.fingerprint||d(),k=SM.Utils.extend(y,k),k=SM.Utils.extend(k,SM.Utils.queryStringToObj(window.location.href)),k=SM.Utils.extend(k,SM.DeviceUtils.getPlatformInfo()),k=SM.Utils.extend(k,SM.BrowserSize.getParams()),a.fingerprint&&(k.sm_fp=a.fingerprint),SM.KarmaAdapter.getParams(b)},a.startContentUnlockSession=function(a){q(SM.VeApp,"startContentUnlockSession",a)},a.startPlayerSession=function(a){q(SM.VeApp,"startPlayerSession",a)},a.checkAdsAvailable=function(a){q(SM.VeApp,"checkAdsAvailable",a)},a.addCallback=function(a){i(a)},a.setCallback=a.addCallback,a.__test__={_config:a.config,_fingerprint:a.fingerprint,_pubResponse:{},_loadedProducts:D,_externalCallbacks:C,_init:a.init,_translateParams:j,_pubApiResponse:k,_onProductScriptLoaded:l,_initProduct:m,_extendProductConfig:n,_onEvent:o,_sendEventToCallbacks:p},a}(SM.UberTag||{}),function(){SM.UberTag.init()}();
//# sourceMappingURL=sm_uber.min.js.map