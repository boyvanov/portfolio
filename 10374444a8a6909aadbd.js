(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{391:function(e,t,r){},407:function(e,t,r){"use strict";var o=r(391);r.n(o).a},428:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"works__edit",class:{blocked:e.formIsBlocked}},[e._m(0),r("div",{staticClass:"works__edit-content"},[r("form",{staticClass:"works__form"},[r("div",{staticClass:"works__load"},[r("label",{staticClass:"works__load-pic",class:{filled:this.renderedPhotoUrl.length,error:e.validation.hasError("renderedPhotoUrl")},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}},[r("input",{staticClass:"works__load-file-input",attrs:{type:"file"},on:{change:e.appendFileAndRenderPhoto}}),r("div",{staticClass:"works__load-text",class:{filled:this.renderedPhotoUrl.length}},[r("p",[e._v("Перетащите или загрузите для загрузки изображения")])]),r("div",{staticClass:"btn",class:{filled:this.renderedPhotoUrl.length}},[e._v("Загрузить")]),r("errorTooltip",{attrs:{errorText:e.validation.firstError("renderedPhotoUrl")}})],1)]),r("div",{staticClass:"works__desc"},[r("div",{staticClass:"works__desc-row"},[r("label",{staticClass:"works__desc-block",class:{error:e.validation.hasError("workNew.title")}},[r("div",{staticClass:"works__desc-block-title"},[e._v("Название")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.workNew.title,expression:"workNew.title"}],staticClass:"works__field",attrs:{type:"text",name:"name",placeholder:"Название"},domProps:{value:e.workNew.title},on:{input:function(t){t.target.composing||e.$set(e.workNew,"title",t.target.value)}}}),r("errorTooltip",{attrs:{errorText:e.validation.firstError("workNew.title")}})],1)]),r("div",{staticClass:"works__desc-row"},[r("label",{staticClass:"works__desc-block",class:{error:e.validation.hasError("workNew.link")}},[r("div",{staticClass:"works__desc-block-title"},[e._v("Ссылка")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.workNew.link,expression:"workNew.link"}],staticClass:"works__field",attrs:{type:"text",name:"link",placeholder:"Ссылка"},domProps:{value:e.workNew.link},on:{input:function(t){t.target.composing||e.$set(e.workNew,"link",t.target.value)}}}),r("errorTooltip",{attrs:{errorText:e.validation.firstError("workNew.link")}})],1)]),r("div",{staticClass:"works__desc-row"},[r("label",{staticClass:"works__desc-block",class:{error:e.validation.hasError("workNew.description")}},[r("div",{staticClass:"works__desc-block-title"},[e._v("Описание")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.workNew.description,expression:"workNew.description"}],staticClass:"works__textarea",attrs:{name:"message",placeholder:"Описание"},domProps:{value:e.workNew.description},on:{input:function(t){t.target.composing||e.$set(e.workNew,"description",t.target.value)}}}),r("errorTooltip",{attrs:{errorText:e.validation.firstError("workNew.description")}})],1)]),e.workForm.editMode?e._e():r("div",{staticClass:"works__desc-row"},[r("label",{staticClass:"works__desc-block",class:{error:e.validation.hasError("workNew.techs")}},[r("div",{staticClass:"works__desc-block-title"},[e._v("Добавление тэга")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.workNew.techs,expression:"workNew.techs"}],staticClass:"works__field",attrs:{type:"text",name:"tags",placeholder:"Тэги"},domProps:{value:e.workNew.techs},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ADD_NEWTAGS(e.workNew.techs)},input:function(t){t.target.composing||e.$set(e.workNew,"techs",t.target.value)}}}),r("errorTooltip",{attrs:{errorText:e.validation.firstError("workNew.techs")}})],1)]),e.workForm.editMode?r("div",{staticClass:"works__desc-row"},[r("label",{staticClass:"works__desc-block",class:{error:e.validation.hasError("workNew.techs")}},[r("div",{staticClass:"works__desc-block-title"},[e._v("Добавление тэга")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.workNew.techs,expression:"workNew.techs"}],staticClass:"works__field",attrs:{type:"text",name:"tags",placeholder:"Тэги"},domProps:{value:e.workNew.techs},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.EDIT_EDITEDTAGS(e.workNew.techs)},input:function(t){t.target.composing||e.$set(e.workNew,"techs",t.target.value)}}}),r("errorTooltip",{attrs:{errorText:e.validation.firstError("workNew.techs")}})],1)]):e._e(),r("tagsForm"),r("div",{staticClass:"works__buttons"},[r("button",{staticClass:"btn-cancel",attrs:{type:"button"},on:{click:e.CLOSE_FORM}},[e._v("Отмена    ")]),e.workForm.editMode?e._e():r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.addNewWork}},[e._v("Сохранить")]),e.workForm.editMode?r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.saveEditedWork}},[e._v("Сохранить  ")]):e._e()])],1)])])])};o._withStripped=!0;var s=r(96),i=r(348);function n(e,t,r,o,s,i,n){try{var a=e[i](n),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(o,s)}function a(e){return function(){var t=this,r=arguments;return new Promise(function(o,s){var i=e.apply(t,r);function a(e){n(i,o,s,a,l,"next",e)}function l(e){n(i,o,s,a,l,"throw",e)}a(void 0)})}}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={mixins:[r(348).mixin],validators:{"workNew.title":function(e){return i.Validator.value(e).required("Введите название")},"workNew.techs":function(e){return i.Validator.value(e).required("Введите теги")},renderedPhotoUrl:function(e){return i.Validator.value(e).required("Загрузите изображение")},"workNew.link":function(e){return i.Validator.value(e).required("Введите ссылку")},"workNew.description":function(e){return i.Validator.value(e).required("Введите описание")}},data:function(){return{renderedPhotoUrl:"",workNew:{title:"",techs:"",photo:"",link:"",description:""},formIsBlocked:!1}},components:{errorTooltip:function(){return r.e(0).then(r.bind(null,422))},tagsForm:function(){return r.e(19).then(r.bind(null,430))}},computed:l({},Object(s.e)("works",{workForm:function(e){return e.workForm},editedWork:function(e){return e.editedWork},editedTags:function(e){return e.editedTags}}),{remotePhotoPath:function(){return"https://webdev-api.loftschool.com/".concat(this.workNew.photo)}}),methods:l({},Object(s.b)("works",["addWork","editWork"]),Object(s.d)("works",["CLOSE_FORM","ADD_NEWTAGS","ADD_EDITEDTAGS","EDIT_EDITEDTAGS"]),Object(s.d)("tooltip",["SHOW_TOOLTIP"]),{appendFileAndRenderPhoto:function(e){var t=this,r=e.target.files[0];this.workNew.photo=r;var o=new FileReader;try{o.readAsDataURL(r),o.onload=function(){t.renderedPhotoUrl=o.result}}catch(e){alert(e.message)}},createWorkFormData:function(){var e=new FormData;return e.append("title",this.workNew.title),e.append("techs",this.workNew.techs),e.append("photo",this.workNew.photo),e.append("link",this.workNew.link),e.append("description",this.workNew.description),e},addNewWork:function(){var e=a(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return this.formIsBlocked=!0,e.prev=6,t=this.createWorkFormData(),e.next=10,this.addWork(t);case 10:this.SHOW_TOOLTIP({type:"success",text:"Работа добавлена"}),this.workNew.title="",this.workNew.techs="",this.workNew.link="",this.workNew.description="",this.renderedPhotoUrl="",this.validation.reset(),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(6),this.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 22:return e.prev=22,this.formIsBlocked=!1,e.finish(22);case 25:case"end":return e.stop()}},e,this,[[6,19,22,25]])}));return function(){return e.apply(this,arguments)}}(),setEditedWork:function(){this.workNew=l({},this.editedWork),this.renderedPhotoUrl=this.remotePhotoPath},saveEditedWork:function(){var e=a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,this.editWork(this.workNew);case 8:this.SHOW_TOOLTIP({type:"success",text:"Работа изменена"}),this.CLOSE_FORM(),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(5),this.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(){return e.apply(this,arguments)}}()}),created:function(){this.workForm.editMode&&(this.setEditedWork(),this.ADD_EDITEDTAGS(this.workNew))}},w=(r(407),r(95)),u=Object(w.a)(d,o,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"works__edit-title"},[t("div",{staticClass:"works__edit-name"},[this._v("Редактирование работы")])])}],!1,null,null,null);u.options.__file="src/admin/components/worksForm.vue";t.default=u.exports}}]);