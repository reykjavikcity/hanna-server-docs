import{g as E}from"./getPageScrollElm-bb23cb91.js";var b={};(function(r){Object.defineProperty(r,"__esModule",{value:!0});var s=E,n=function(){return document.documentElement.scrollTop||document.body.scrollTop},a=function(o,e){o.tabIndex<0&&o.setAttribute("tabindex","-1");var l=s(),f=l.scrollTop;o.focus();var c=l.scrollTop-f;if(c){var i=o.getBoundingClientRect().top,v=l.clientHeight;if(c>0&&c+i<v-50)l.scrollTo(l.scrollLeft,f);else{var t=e.offset,d=typeof t=="function"?t(o):t||0,g=i+n();l.scrollTo(l.scrollLeft,g-d)}}},u=function(o,e){if(o){var l=e||{};if(l.delay==null)a(o,l);else return setTimeout(function(){a(o,l)},l.delay)}};r.default=u,r.focusElm=u,r.getYScroll=n})(b);export{b as f};
//# sourceMappingURL=focusElm-346ced9a.js.map