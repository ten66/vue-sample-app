(function(t){function e(e){for(var c,a,o=e[0],r=e[1],d=e[2],u=0,b=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);l&&l(e);while(b.length)b.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(c=!1)}c&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},s={app:0},i=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"37cf":function(t,e,n){},"38a9":function(t,e,n){"use strict";n("7d3c")},"44e6":function(t,e,n){},"4d6d":function(t,e,n){"use strict";n("7bf9")},6310:function(t,e,n){},"7bf9":function(t,e,n){},"7d3c":function(t,e,n){},9959:function(t,e,n){"use strict";n("37cf")},a74c:function(t,e,n){"use strict";n("44e6")},c3c0:function(t,e,n){"use strict";n("6310")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),s=Object(c["e"])("header",{class:"p-2"},[Object(c["e"])("h1",null,"Task Management App")],-1),i={class:"d-flex align-items-start p-2"};function a(t,e,n,a,o,r){var d=Object(c["l"])("task-section"),l=Object(c["l"])("add-section-btn");return Object(c["h"])(),Object(c["d"])(c["a"],null,[s,Object(c["e"])("div",i,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(t.sections,(function(e){return Object(c["h"])(),Object(c["c"])(d,{key:e.id,section:e,onDelete:t.deleteSection},null,8,["section","onDelete"])})),128)),Object(c["f"])(l,{onSend:e[0]||(e[0]=function(e){return t.addTaskSection()})})])],64)}n("4de4"),n("d3b7");var o=function(t){return Object(c["j"])("data-v-83c05548"),t=t(),Object(c["i"])(),t},r={class:"section-card m-1"},d={class:"p-2"},l={class:"fw-bold fs-3 d-flex pb-3"},u={class:"col-10"},b=o((function(){return Object(c["e"])("label",{for:"sectionTitle",class:""},null,-1)})),f={class:"col-2"},j=o((function(){return Object(c["e"])("i",{class:"fas fa-backspace"},null,-1)})),O=[j];function p(t,e,n,s,i,a){var o=this,j=Object(c["l"])("task"),p=Object(c["l"])("task-new");return Object(c["h"])(),Object(c["d"])("div",r,[Object(c["e"])("div",d,[Object(c["e"])("div",l,[Object(c["e"])("div",u,[b,Object(c["o"])(Object(c["e"])("input",{id:"sectionTitle",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.title=t}),class:"col-10"},null,512),[[c["n"],this.title]])]),Object(c["e"])("div",f,[Object(c["e"])("span",{class:"delete-btn p-1",onClick:e[1]||(e[1]=function(e){return t.deleteSection(t.section.id)})},O)])]),(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(t.tasks,(function(e){return Object(c["h"])(),Object(c["c"])(j,{key:e.id,task:e,onDelete:t.deleteTask},null,8,["task","onDelete"])})),128)),Object(c["f"])(p,{onAddTask:t.addTask},null,8,["onAddTask"])])])}var v=function(t){return Object(c["j"])("data-v-82fb895e"),t=t(),Object(c["i"])(),t},h={class:"py-2"},k={class:"pt-2 task-card"},m={class:"p-2"},y=v((function(){return Object(c["e"])("div",null,[Object(c["e"])("input",{type:"text",class:"col-12"})],-1)})),T=v((function(){return Object(c["e"])("div",{class:"pt-2"},[Object(c["e"])("p",{class:"mb-0"},"content:")],-1)})),g={class:"px-2"},S={class:"d-flex justify-content-end"},x=v((function(){return Object(c["e"])("div",{class:"px-1 icon"},[Object(c["e"])("i",{class:"fas fa-edit"})],-1)})),w=v((function(){return Object(c["e"])("i",{class:"fas fa-trash-alt"},null,-1)})),_=[w];function A(t,e,n,s,i,a){return Object(c["h"])(),Object(c["d"])("div",h,[Object(c["e"])("div",k,[Object(c["e"])("div",m,[y,Object(c["e"])("div",null,[T,Object(c["e"])("div",g,[Object(c["e"])("p",null,Object(c["m"])(t.task.content),1)]),Object(c["e"])("div",S,[x,Object(c["e"])("div",{class:"px-1 icon",onClick:e[0]||(e[0]=function(e){return t.deleteTask(t.task.id)})},_)])])])])])}var P=Object(c["g"])({name:"Task",props:{task:Object},methods:{deleteTask:function(t){this.$emit("delete",t)}}}),M=(n("4d6d"),n("6b0d")),C=n.n(M);const D=C()(P,[["render",A],["__scopeId","data-v-82fb895e"]]);var I=D,$=function(t){return Object(c["j"])("data-v-57a0516c"),t=t(),Object(c["i"])(),t},B={class:"pt-2"},J=$((function(){return Object(c["e"])("div",{class:"d-flex justify-content-start align-items-center"},[Object(c["e"])("div",null,[Object(c["e"])("i",{class:"fas fa-plus"})]),Object(c["e"])("div",null,[Object(c["e"])("p",{class:"mb-0"},"Add Task")])],-1)})),N=[J];function U(t,e,n,s,i,a){return Object(c["h"])(),Object(c["d"])("div",B,[Object(c["e"])("div",{class:"col-12 add-task-btn",onClick:e[0]||(e[0]=function(){return t.addTask&&t.addTask.apply(t,arguments)})},N)])}var V=Object(c["g"])({name:"TaskNew",methods:{addTask:function(){this.$emit("addTask")}}});n("9959");const q=C()(V,[["render",U],["__scopeId","data-v-57a0516c"]]);var z=q,E=Object(c["g"])({name:"TaskSection",components:{Task:I,TaskNew:z},props:{section:Object},data:function(){return{id:0,title:"",tasks:[]}},methods:{deleteSection:function(t){this.$emit("delete",t)},addTask:function(){this.tasks.push({id:this.id,title:"",content:"content content content"}),this.id+=1},deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t}))}}});n("c3c0");const F=C()(E,[["render",p],["__scopeId","data-v-83c05548"]]);var G=F,H={class:"m-1"};function K(t,e,n,s,i,a){return Object(c["h"])(),Object(c["d"])("div",H,[Object(c["e"])("div",null,[Object(c["e"])("button",{class:"btn-style",onClick:e[0]||(e[0]=function(e){return t.addSection()})},"Add Section")])])}var L=Object(c["g"])({name:"addSectionBtn",data:function(){return{count:0}},methods:{addSection:function(){this.$emit("send")}}});n("38a9");const Q=C()(L,[["render",K],["__scopeId","data-v-35bd2252"]]);var R=Q,W=Object(c["g"])({name:"App",components:{TaskSection:G,AddSectionBtn:R},data:function(){return{id:0,sections:[]}},methods:{addTaskSection:function(){this.sections.push({id:this.id,title:"section title"+this.id}),this.id+=1},deleteSection:function(t){this.sections=this.sections.filter((function(e){return e.id!==t}))}}});n("a74c");const X=C()(W,[["render",a]]);var Y=X;Object(c["b"])(Y).mount("#app")}});
//# sourceMappingURL=app.f13b5c1a.js.map