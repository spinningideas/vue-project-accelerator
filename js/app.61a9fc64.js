(function(t){function e(e){for(var o,r,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a=[];function r(t){return c.p+"js/"+({about:"about",contact:"contact",home:"home"}[t]||t)+"."+{about:"440ce457",contact:"0937ce64",home:"0cd150f5"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-project-accelerator/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"appshell"}},[n("navigation"),n("v-content",{staticClass:"content-container"},[n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1),n("notifications",{ref:"notificationsRef"})],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/"},on:{click:function(e){return t.toggleDrawer(!0)}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.locData.home))])],1)],1),n("v-list-item",{attrs:{to:"/contact"},on:{click:function(e){return t.toggleDrawer(!0)}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-email")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.locData.contact))])],1)],1),n("v-list-item",{attrs:{to:"/about"},on:{click:function(e){return t.toggleDrawer(!0)}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-help")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.locData.about))])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",dense:"",color:"white"}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(!1)}}}),n("v-toolbar-title",[t._v(t._s(t.locData.apptitle))]),n("v-spacer"),n("language-selection",{staticClass:"mr-2"}),n("auth-button",{attrs:{"loc-data":t.locData,"user-signed-in":t.userSignedIn,"on-sign-in":t.onSignIn,"on-sign-out":t.onSignOut}}),n("auth-dialog",{attrs:{"loc-data":t.locData,"user-signed-in":t.userSignedIn,"dialog-open":t.userSignInDialogOpen,"on-sign-in-complete":t.onSignComplete,"on-sign-in-cancel":t.onSignOut}})],1)],1)},c=[],s=(n("96cf"),n("1da1")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.userSignedIn?n("v-btn",{on:{click:t.onSignOut}},[t._v(" "+t._s(t.locData.signout)+" ")]):t._e(),t.userSignedIn?t._e():n("v-btn",{attrs:{color:"primary"},on:{click:t.onSignIn}},[t._v(" "+t._s(t.locData.signin)+" ")])],1)},l=[],d={name:"auth-button",props:{locData:Object,userSignedIn:Boolean,onSignIn:Function,onSignOut:Function}},f=d,p=n("2877"),v=n("6544"),h=n.n(v),g=n("8336"),m=Object(p["a"])(f,u,l,!1,null,null,null),b=m.exports;h()(m,{VBtn:g["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialogOpen,callback:function(e){t.dialogOpen=e},expression:"dialogOpen"}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.locData.signindescription)+" ")]),n("v-divider"),n("v-card-actions",[n("v-btn",{on:{click:t.onSignInCancel}},[t._v(" "+t._s(t.locData.cancel)+" ")]),n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:t.onSignInComplete}},[t._v(" "+t._s(t.locData.signin)+" ")])],1)],1)],1)],1)},y=[],S={name:"auth-dialog",props:{locData:Object,dialogOpen:Boolean,userSignedIn:Boolean,onSignInComplete:Function,onSignInCancel:Function}},O=S,j=n("b0af"),_=n("99d9"),C=n("169a"),$=n("ce7e"),I=n("2fa4"),D=Object(p["a"])(O,w,y,!1,null,null,null),V=D.exports;h()(D,{VBtn:g["a"],VCard:j["a"],VCardActions:_["a"],VCardTitle:_["c"],VDialog:C["a"],VDivider:$["a"],VSpacer:I["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),o),[n("v-icon",[t._v("mdi-translate")])],1)]}}])},[n("v-list",{attrs:{"active-class":"primary-text"},model:{value:t.selectedLocaleCode,callback:function(e){t.selectedLocaleCode=e},expression:"selectedLocaleCode"}},t._l(t.languages,(function(e){return n("v-list-item",{key:e.localeCode,class:e.localeCode===t.selectedLocaleCode?"primary-text":"",on:{click:function(n){return t.onLanguageSelect(e.localeCode)}}},[n("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)},k=[],L={name:"language-selection",mounted:function(){var t=this.$services.LocalizationService();this.$services.NavigationService();this.$data.languages=t.getLocales(),this.$data.selectedLocaleCode=t.getUserLocale()},methods:{onLanguageSelect:function(t){var e=this.$services.LocalizationService();e.setUserLocale(t),navigationService.reloadWindow()}},data:function(){return{selectedLocaleCode:"",languages:[]}}},T=L,R=n("132d"),P=n("8860"),A=n("da13"),M=n("5d23"),N=n("e449"),E=Object(p["a"])(T,x,k,!1,null,null,null),B=E.exports;h()(E,{VBtn:g["a"],VIcon:R["a"],VList:P["a"],VListItem:A["a"],VListItemTitle:M["b"],VMenu:N["a"]});var H={name:"navigation",components:{AuthButton:b,AuthDialog:V,LanguageSelection:B},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$services.AuthService(),n=this.$services.LocalizationService(),o=n.getUserLocale(),t.next=5,n.getLocalizedTextSet(["apptitle","signin","signindescription","signout","home","contact","about","cancel"],o);case 5:i=t.sent,this.$data.userSignedIn=e.userHasSignedIn(),this.$data.locData=i;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{onSignIn:function(){this.$data.userSignInDialogOpen=!0},onSignComplete:function(){var t=this.$services.AuthService();t.signIn(),this.$data.userSignedIn=!0,this.$data.userSignInDialogOpen=!1},onSignOut:function(){var t=this.$services.AuthService();t.signOut(),this.$data.userSignedIn&&(this.$data.userSignedIn=!1,window.location.reload()),this.$data.userSignInDialogOpen=!1},toggleDrawer:function(t){var e=this;this.$data.drawer=!this.$data.drawer,t&&setTimeout((function(){e.$data.drawer=!1}),0)}},data:function(){return{drawer:!1,userSignedIn:!1,userSignInDialogOpen:!1,locData:{}}}},z=H,U=n("40dc"),F=n("5bc1"),G=n("1800"),J=n("f774"),W=n("2a7f"),Y=Object(p["a"])(z,r,c,!1,null,null,null),q=Y.exports;h()(Y,{VAppBar:U["a"],VAppBarNavIcon:F["a"],VIcon:R["a"],VList:P["a"],VListItem:A["a"],VListItemAction:G["a"],VListItemContent:M["a"],VListItemTitle:M["b"],VNavigationDrawer:J["a"],VSpacer:I["a"],VToolbarTitle:W["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.notificationList,(function(e,o){return n("div",{key:e.id,class:"notification-container "+o},t._l(e,(function(t){return n("notification",{key:t.id,attrs:{data:t}})})),1)})),0)},Q=[],X=(n("c975"),n("a434"),n("d3b7"),n("25f0"),n("53ca")),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"notification notification-"+t.data.type,staticStyle:{display:"block"},on:{click:function(e){return t.clicked()},mouseover:t.onMouseOver,mouseout:t.onMouseOut}},[n("div",{staticClass:"notification-message",domProps:{innerHTML:t._s(t.data.msg)}})])},tt=[],et={name:"notification",props:["data"],mounted:function(){},created:function(){"undefined"!==typeof this.data.timeout&&0!==this.data.timeout&&this.setTimeout()},methods:{onMouseOver:function(){"undefined"!==typeof this.data.onMouseOver&&this.data.onMouseOver(),this.data.closeOnHover||clearInterval(this.data.intervalId)},onMouseOut:function(){"undefined"!==typeof this.data.onMouseOut&&this.data.onMouseOut(),this.data.closeOnHover||this.setTimeout()},setTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.data.intervalId=setTimeout(function(){this.close()}.bind(this),this.data.timeout)})),clicked:function(){"undefined"!==typeof this.data.onClicked&&this.data.onClicked(),this.closeClick()},closeClick:function(){"undefined"!==typeof this.data.clickClose&&!1===this.data.clickClose||this.close()},close:function(){null!=this.$parent&&this.$parent.close(this.data)}}},nt=et,ot=Object(p["a"])(nt,Z,tt,!1,null,null,null),it=ot.exports,at={name:"notifications",components:{Notification:it},data:function(){for(var t=["notification-top-right","notification-bottom-right","notification-bottom-left","notification-top-left","notification-top-full-width","notification-bottom-full-width","notification-top-center","notification-bottom-center"],e={},n=0;n<=t.length-1;n++)e[t[n]]=[];return{positions:t,defaultPosition:"notification-top-right",defaultType:"success",defaultCloseOnHover:!0,defaultTimeout:5e3,notificationList:e}},created:function(){},mounted:function(){},methods:{addNotification:function(t){this.notificationList[t.position].push(t),"undefined"!==typeof t.onCreated&&this.$nextTick((function(){t.onCreated()}))},removeNotification:function(t){"undefined"!==typeof t.onClosed&&t.onClosed(),this.notificationList[t.position].splice(this.notificationList[t.position].indexOf(t),1)},addNotificationNOTUSED:function(t){return this.addData(this.processObjectData(t))},addData:function(t){return"object"===Object(X["a"])(t)&&(this.addNotification(t),t)},processObjectData:function(t){return"object"===Object(X["a"])(t)&&"undefined"!==typeof t.msg?("undefined"===typeof t.position&&(t.position=this.defaultPosition),"undefined"===typeof t.type&&(t.type=this.defaultType),"undefined"===typeof t.timeout&&(t.timeout=this.defaultTimeout),"undefined"===typeof t.closeOnHover&&(t.closeOnHover=this.defaultCloseOnHover),"undefined"===typeof t.id&&(t.id=this.generateId),t):{msg:t.toString(),position:this.defaultPosition,type:this.defaultType,timeout:this.defaultTimeout,closeOnHover:this.defaultCloseOnHover}},error:function(t){var e=this.processObjectData(t);return e["type"]="error",this.addData(e)},success:function(t){var e=this.processObjectData(t);return e["type"]="success",this.addData(e)},warning:function(t){var e=this.processObjectData(t);return e["type"]="warning",this.addData(e)},info:function(t){var e=this.processObjectData(t);return e["type"]="info",this.addData(e)},close:function(t){this.removeNotification(t)},generateId:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}},rt=at,ct=Object(p["a"])(rt,K,Q,!1,null,null,null),st=ct.exports,ut={components:{Navigation:q,Notifications:st},data:function(){return{}}},lt=ut,dt=n("7496"),ft=n("a523"),pt=n("a75b"),vt=n("0789"),ht=Object(p["a"])(lt,i,a,!1,null,null,null),gt=ht.exports;h()(ht,{VApp:dt["a"],VContainer:ft["a"],VContent:pt["a"],VSlideYTransition:vt["e"]});var mt=n("ce5b"),bt=n.n(mt),wt=n("8212"),yt=n("0798"),St=n("cc20"),Ot=n("2e4b"),jt=n("490a"),_t=n("adda"),Ct=n("b974"),$t=n("e0c7"),It=n("8654"),Dt=n("a844"),Vt=n("71d9"),xt=n("fe57"),kt={components:{VApp:dt["a"],VAvatar:wt["a"],VAlert:yt["a"],VChip:St["a"],VDialog:C["a"],VDatePicker:Ot["a"],VNavigationDrawer:J["a"],VCard:j["a"],VList:P["a"],VBtn:g["a"],VProgressCircular:jt["a"],VIcon:R["a"],VImg:_t["a"],VMenu:N["a"],VSelect:Ct["a"],VSubheader:$t["a"],VTextField:It["a"],VTextarea:Dt["a"],VToolbar:Vt["a"],VTabs:xt["a"],transitions:mt["transitions"]},theme:{primary:"#1976d2",secondary:"#1565c0",accent:"#1565c0",error:"#e53935",success:"#43a047",warning:"#ffd54f"},customProperties:!1,iconfont:"md"};o["default"].use(bt.a,kt);var Lt=new bt.a(kt),Tt=(n("95ed"),n("a1a3"),n("8c4f"));o["default"].use(Tt["a"]);var Rt=new Tt["a"]({mode:"history",base:"/vue-project-accelerator//",routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bc13"))}},{path:"/contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"c3df"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"a1d1"))}},{path:"*",name:"wildcard",component:function(){return n.e("home").then(n.bind(null,"bc13"))}}]});function Pt(t,e){Pt.installed||(Object.defineProperty(t.prototype,"$services",{get:function(){return e}}),t.mixin({beforeCreate:function(){At(this)}}))}function At(t){var e=t.$options.services;"undefined"===typeof e&&(e={}),t.$options.services=e}var Mt=Pt,Nt=function(){var t=function(){var t=window.localStorage.getItem("usersignedin");return!!t&&"true"===t},e=function(t){window.localStorage.setItem("usersignedin",Boolean(t))},n=function(){e(!0)},o=function(){e(!1)};return{userHasSignedIn:t,setUserHasSignedIn:e,signIn:n,signOut:o}},Et=Nt,Bt={success:function(t,e){var n=this.getRef(t);n.success(e)},error:function(t,e){var n=this.getRef(t);n.error(e)},info:function(t,e){var n=this.getRef(t);n.info(e)},getRef:function(t){return t.$parent.$refs.notificationsRef?t.$parent.$refs.notificationsRef:t.$parent.$parent.$refs.notificationsRef?t.$parent.$parent.$refs.notificationsRef:t.$parent.$parent.$parent.$refs.notificationsRef?t.$parent.$parent.$parent.$refs.notificationsRef:null}},Ht=Bt,zt="vue-project-accelerator",Ut={reloadWindow:function(){window.location=window.location.origin?window.location.origin+"/"+zt:window.location.protocol+"/"+window.location.host+"/"+zt}},Ft=Ut,Gt=(n("b64b"),n("b85c")),Jt=[{localeCode:"enUS",text:"English"},{localeCode:"zhCN",text:"Chinese"},{localeCode:"esES",text:"Spanish"}],Wt=function(){var t="enUS",e=function(){return Jt},n=function(){var e=window.localStorage.getItem("locale");return e||t},o=function(t){window.localStorage.setItem("locale",t)},i=function(){var t=[];return 0===t.length?n():t[0]},a=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){var o,i,a,c,s,u,l,d,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o={},t.next=3,r(n);case 3:if(i=t.sent,i){a=i,c=Object.keys(a),s=Object(Gt["a"])(e);try{for(s.s();!(u=s.n()).done;){l=u.value,d=Object(Gt["a"])(c);try{for(d.s();!(f=d.n()).done;)p=f.value,l===p&&(o[p]=a[p])}catch(v){d.e(v)}finally{d.f()}}}catch(v){s.e(v)}finally{s.f()}}return t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),r=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="/vue-project-accelerator/"+"/i18n/".concat(e,".json"),t.abrupt("return",fetch(n).then((function(t){return t.json()})).catch((function(t){var e="Error Reading data "+t;return{message:e}})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{setUserLocale:o,getUserLocale:n,getLocales:e,getCurrentLocale:i,getLocalizedTextSet:a}},Yt=Wt,qt=(n("99af"),function(){var t=function(t){return t.ok?t.json().then((function(e){return Promise.resolve({data:e,code:t.status,response:t})})).catch((function(e){return Promise.resolve({data:t,code:t.status,response:t})})):t.json().catch((function(e){return Promise.resolve({data:t.statusText,code:t.status,response:t})})).then((function(e){return Promise.resolve({data:e.error.message,code:t.status,response:t})}))},e=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n,o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+o}}).then((function(e){return t(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return t(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var o,i,a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=r.length>1&&void 0!==r[1]?r[1]:{},i=r.length>2?r[2]:void 0,a={Accept:"application/json","Content-Type":"application/json"},i&&i.length&&(a["Authorization"]="Bearer "+i),e.next=6,fetch(n,{method:"POST",headers:a,body:JSON.stringify(o)}).then((function(e){return t(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{getData:n,getDataAuthenticated:e,postData:o}}),Kt=qt,Qt=function(){var t=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=Kt(),n="https://freegeoip.app/json/",t.next=4,e.getData(n).then((function(t){return{ip:t.data.ip,message:"Your ip is ".concat(t.data.ip," and your location: ").concat(t.data.city,", ").concat(t.data.region_name," ")}}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{getCurrentIPAddress:t}},Xt=Qt,Zt={AuthService:Et,NotificationsService:Ht,NavigationService:Ft,LocalizationService:Yt,GeoService:Xt};o["default"].use(Mt,Zt),o["default"].config.productionTip=!1,new o["default"]({router:Rt,vuetify:Lt,services:Zt,render:function(t){return t(gt)}}).$mount("#app")},a1a3:function(t,e,n){}});
//# sourceMappingURL=app.61a9fc64.js.map