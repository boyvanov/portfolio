(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{386:function(t,r,e){},402:function(t,r,e){"use strict";var n=e(386);e.n(n).a},415:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"works"},[e("div",{staticClass:"container works__container"},[e("h2",{staticClass:"title works__title"},[t._v('Блок "Работы"')]),e("div",{staticClass:"works__content"},[e("div",{staticClass:"works__add"},[t.workForm.show?e("worksForm"):t._e()],1),e("ul",{staticClass:"works__list"},[t.workForm.show?t._e():e("li",{staticClass:"works__item add",on:{click:t.showFormAndTurnEditModeOff}},[e("worksAdd")],1),t._l(t.works,function(t){return e("li",{staticClass:"works__item work"},[e("worksBlock",{attrs:{work:t}})],1)})],2)])])])};n._withStripped=!0;var o=e(96);function s(t,r,e,n,o,s,i){try{var c=t[s](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(r){c(t,r,e[r])})}return t}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var u={components:{worksForm:function(){return e.e(16).then(e.bind(null,428))},worksAdd:function(){return e.e(20).then(e.bind(null,427))},worksBlock:function(){return e.e(15).then(e.bind(null,420))}},data:function(){return{}},computed:i({},Object(o.e)("works",{works:function(t){return t.works},workForm:function(t){return t.workForm}})),methods:i({},Object(o.b)("works",["fetchWorks"]),Object(o.d)("works",["SHOW_FORM","TURN_EDIT_MODE_OFF"]),Object(o.d)("tooltip",["SHOW_TOOLTIP"]),{showFormAndTurnEditModeOff:function(){this.TURN_EDIT_MODE_OFF(),this.SHOW_FORM()}}),created:function(){var t,r=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchWorks();case 3:this.SHOW_TOOLTIP({type:"success",text:"Работы загружены"}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 9:case"end":return t.stop()}},t,this,[[0,6]])}),function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function c(t){s(i,n,o,c,u,"next",t)}function u(t){s(i,n,o,c,u,"throw",t)}c(void 0)})});return function(){return r.apply(this,arguments)}}()},a=(e(402),e(95)),l=Object(a.a)(u,n,[],!1,null,null,null);l.options.__file="src/admin/components/pages/works.vue";r.default=l.exports}}]);