!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}System.register([],(function(n,t){"use strict";return{execute:function(){var t,i,o,r,a,u,d,c,l,f,s,p,m,w,x,h=!1;function v(){if(!h){h=!0;var e=navigator.userAgent,n=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),v=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(p=/\b(iPhone|iP[ao]d)/.exec(e),m=/\b(iP[ao]d)/.exec(e),f=/Android/i.exec(e),w=/FBAN\/\w+;/i.exec(e),x=/Mobile/i.exec(e),s=!!/Win64/.exec(e),n){(t=n[1]?parseFloat(n[1]):n[5]?parseFloat(n[5]):NaN)&&document&&document.documentMode&&(t=document.documentMode);var y=/(?:Trident\/(\d+.\d+))/.exec(e);u=y?parseFloat(y[1])+4:t,i=n[2]?parseFloat(n[2]):NaN,o=n[3]?parseFloat(n[3]):NaN,(r=n[4]?parseFloat(n[4]):NaN)?(n=/(?:Chrome\/(\d+\.\d+))/.exec(e),a=n&&n[1]?parseFloat(n[1]):NaN):a=NaN}else t=i=o=a=r=NaN;if(v){if(v[1]){var b=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);d=!b||parseFloat(b[1].replace("_","."))}else d=!1;c=!!v[2],l=!!v[3]}else d=c=l=!1}}var y,b={ie:function(){return v()||t},ieCompatibilityMode:function(){return v()||u>t},ie64:function(){return b.ie()&&s},firefox:function(){return v()||i},opera:function(){return v()||o},webkit:function(){return v()||r},safari:function(){return b.webkit()},chrome:function(){return v()||a},windows:function(){return v()||c},osx:function(){return v()||d},linux:function(){return v()||l},iphone:function(){return v()||p},mobile:function(){return v()||p||m||f||x},nativeApp:function(){return v()||w},android:function(){return v()||f},ipad:function(){return v()||m}},N=b,M=!!(("undefined"==typeof window?"undefined":e(window))<"u"&&window.document&&window.document.createElement),F={canUseDOM:M,canUseWorkers:("undefined"==typeof Worker?"undefined":e(Worker))<"u",canUseEventListeners:M&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:M&&!!window.screen,isInWorker:!M};F.canUseDOM&&(y=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var S=function(e,n){if(!F.canUseDOM||n&&!("addEventListener"in document))return!1;var t="on"+e,i=t in document;if(!i){var o=document.createElement("div");o.setAttribute(t,"return;"),i="function"==typeof o[t]}return!i&&y&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i},D=10,E=40,O=800;function X(e){var n=0,t=0,i=0,o=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),i=n*D,o=t*D,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||o)&&e.deltaMode&&(1==e.deltaMode?(i*=E,o*=E):(i*=O,o*=O)),i&&!n&&(n=i<1?-1:1),o&&!t&&(t=o<1?-1:1),{spinX:n,spinY:t,pixelX:i,pixelY:o}}X.getEventType=function(){return N.firefox()?"DOMMouseScroll":S("wheel")?"wheel":"mousewheel"};n("Y",X);
/**
			 * Checks if an event is supported in the current execution environment.
			 *
			 * NOTE: This will not work correctly for non-generic events such as `change`,
			 * `reset`, `load`, `error`, and `select`.
			 *
			 * Borrows from Modernizr.
			 *
			 * @param {string} eventNameSuffix Event name, e.g. "click".
			 * @param {?boolean} capture Check if the capture phase is supported.
			 * @return {boolean} True if the event is supported.
			 * @internal
			 * @license Modernizr 3.0.0pre (Custom Build) | MIT
			 */}}}))}();
