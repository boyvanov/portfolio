(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{401:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review"},[r("div",{staticClass:"review__user"},[r("div",{staticClass:"review__avatar"},[r("img",{staticClass:"review__pic",attrs:{src:e.remotePhotoPath,alt:"review-pic"}})]),r("div",{staticClass:"review__user-desc"},[r("div",{staticClass:"review__user-name"},[e._v(e._s(e.review.author))]),r("div",{staticClass:"review__user-position"},[e._v(e._s(e.review.occ))])])]),r("div",{staticClass:"review__text"},[e._v(e._s(e.review.text))]),r("div",{staticClass:"review__btns"},[r("button",{staticClass:"btns-edit",attrs:{type:"button"},on:{click:e.showFormAndTurnEditModeOn}},[e._v("Править")]),r("button",{staticClass:"btns-delete",attrs:{type:"button"},on:{click:e.removeExistedReview}},[e._v("Удалить")])])])};i._withStripped=!0;var n=r(139);function s(e,t,r,i,n,s,o){try{var c=e[s](o),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(i,n)}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={props:{review:Object},computed:{remotePhotoPath:function(){return"https://webdev-api.loftschool.com/".concat(this.review.photo)}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){o(e,t,r[t])})}return e}({},Object(n.b)("reviews",["removeReview"]),Object(n.c)("reviews",["SHOW_FORM","TURN_EDIT_MODE_ON"]),{removeExistedReview:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.removeReview(this.review.id);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}},e,this,[[0,5]])}),function(){var t=this,r=arguments;return new Promise(function(i,n){var o=e.apply(t,r);function c(e){s(o,i,n,c,a,"next",e)}function a(e){s(o,i,n,c,a,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}(),showFormAndTurnEditModeOn:function(){this.TURN_EDIT_MODE_ON(this.review),this.SHOW_FORM()}})},a=r(94),v=Object(a.a)(c,i,[],!1,null,null,null);v.options.__file="src/admin/components/reviewsBlock.vue";t.default=v.exports}}]);