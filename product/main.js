/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={997:(t,r,e)=>{var n=e(252),o=e(577),a=e(96),i=e(637),s=n();s.use(n.json()),s.use(o()),s.use(a("dev")),s.use(n.urlencoded({extended:!0})),s.use(n.static("public")),s.use(n.static("views")),s.use("/",i),t.exports=s},515:(t,r,e)=>{var n=e(37);e(818).config(),n.connect("mongodb+srv://orange2009:8cyFJslNDi2NNE7Z@cluster0.fmbhq8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((function(){return console.log("MongoDB is connected")})).catch((function(t){return console.error("Error connecting to MongoDB\n",t)}))},530:(t,r,e)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return r};var t,r={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:O(t,e,s)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function w(){}function x(){}function b(){}var k={};l(k,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(G([])));L&&L!==e&&a.call(L,u)&&(k=L);var j=b.prototype=w.prototype=Object.create(k);function T(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,s,u){var c=h(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==n(l)&&a.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,s,u)}),(function(t){e("throw",t,s,u)})):r.resolve(l).then((function(t){f.value=t,s(f)}),(function(t){return e("throw",t,s,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function O(r,e,n){var o=v;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=_(s,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=h(r,e,n);if("normal"===c.type){if(o=n.done?m:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=m,n.method="throw",n.arg=c.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function I(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(a.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(n(r)+" is not iterable")}return x.prototype=b,i(j,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=l(b,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},T(S.prototype),l(S.prototype,c,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new S(p(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(j),l(j,f,"Generator"),l(j,u,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!r)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return s.type="throw",s.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;I(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function a(t,r,e,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void e(t)}s.done?r(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function s(t){a(i,n,o,s,u,"next",t)}function u(t){a(i,n,o,s,u,"throw",t)}s(void 0)}))}}var s=e(295),u=function(){var t=i(o().mark((function t(r,e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.find();case 3:n=t.sent,e.status(200).json({tasks:n}),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e.status(500).json({msg:"Internal Server Error\n",err:t.t0}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r,e){return t.apply(this,arguments)}}(),c=function(){var t=i(o().mark((function t(r,e){var n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.body,t.prev=1,t.next=4,s.create(n);case 4:a=t.sent,e.status(200).json({task:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.status(500).json({msg:"Internal Server Error\n",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(r,e){return t.apply(this,arguments)}}(),f=function(){var t=i(o().mark((function t(r,e){var n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.params.id,t.prev=1,t.next=4,s.findById(n);case 4:if(a=t.sent){t.next=7;break}return t.abrupt("return",e.status(404).json({msg:"This task does not exist"}));case 7:e.status(201).json({task:a}),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",e.status(500).json({msg:"Internal Server Error\n",err:t.t0}));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(r,e){return t.apply(this,arguments)}}(),l=function(){var t=i(o().mark((function t(r,e){var n,a,i,u,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.params.id,a=r.body,i=a.name,u=a.completed,t.prev=2,t.next=5,s.findByIdAndUpdate({_id:n},{name:i,completed:u},{new:!0,runValidators:!0});case 5:if(c=t.sent){t.next=8;break}return t.abrupt("return",e.status(404).json({msg:"This task does not exist"}));case 8:e.status(200).json({task:c}),t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",e.status(500).json({msg:"Internal Server Error\n",err:t.t0}));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(r,e){return t.apply(this,arguments)}}(),p=function(){var t=i(o().mark((function t(r,e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.params.id,t.prev=1,t.next=4,s.findByIdAndDelete(n);case 4:if(t.sent){t.next=7;break}return t.abrupt("return",e.status(404).json({msg:"This task does not exist"}));case 7:e.sendStatus(200),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",e.status(500).json({msg:"Internal Server Error\n",err:t.t0}));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(r,e){return t.apply(this,arguments)}}();t.exports={getAllTasks:u,createTask:c,getOneTask:f,UpdateTask:l,deleteTask:p}},295:(t,r,e)=>{var n=e(37),o=new(0,n.Schema)({name:{type:String,required:[!0,"must provide a name"],trim:!0,maxLength:[20,"name cannot be more than twenty characters"]},completed:{type:Boolean,default:!1},date:{type:Date,default:Date.now}});o.pre("save",(function(t){if(!this.isNew)return t();this.date=new Date,t()}));var a=n.model("Task",o,"task-collection");t.exports=a},637:(t,r,e)=>{var n=e(252).Router(),o=e(530),a=o.getAllTasks,i=o.createTask,s=o.getOneTask,u=o.UpdateTask,c=o.deleteTask;n.route("/").get(a).post(i),n.route("/:id").get(s).patch(u).delete(c),t.exports=n},577:t=>{t.exports=require("cors")},818:t=>{t.exports=require("dotenv")},252:t=>{t.exports=require("express")},37:t=>{t.exports=require("mongoose")},96:t=>{t.exports=require("morgan")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}(()=>{e(515);var t=e(997),r=(e(818),"8000");t.listen(r,(function(){console.log("task manager app is listning on port ".concat(r))}))})()})();