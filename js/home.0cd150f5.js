(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0e8f":function(t,e,a){"use strict";a("20f6");var r=a("e8f2");e["a"]=Object(r["a"])("flex")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),s=a("5899"),i="["+s+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),n=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:n(1),end:n(2),trim:n(3)}},7156:function(t,e,a){var r=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var i,o;return s&&"function"==typeof(i=e.constructor)&&i!==a&&r(o=i.prototype)&&o!==a.prototype&&s(t,o),t}},a722:function(t,e,a){"use strict";a("20f6");var r=a("e8f2");e["a"]=Object(r["a"])("layout")},a9e3:function(t,e,a){"use strict";var r=a("83ab"),s=a("da84"),i=a("94ca"),o=a("6eeb"),c=a("5135"),n=a("c6b6"),l=a("7156"),d=a("c04e"),u=a("d039"),v=a("7c73"),f=a("241c").f,p=a("06cf").f,m=a("9bf2").f,_=a("58a8").trim,h="Number",g=s[h],x=g.prototype,w=n(v(x))==h,b=function(t){var e,a,r,s,i,o,c,n,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=_(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(i=l.slice(2),o=i.length,c=0;c<o;c++)if(n=i.charCodeAt(c),n<48||n>s)return NaN;return parseInt(i,r)}return+l};if(i(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,D=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof D&&(w?u((function(){x.valueOf.call(a)})):n(a)!=h)?l(new g(b(e)),a,D):b(e)},I=r?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)c(g,y=I[C])&&!c(D,y)&&m(D,y,p(g,y));D.prototype=x,x.constructor=D,o(s,h,D)}},bc13:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"container-content"},[a("v-card-text",[a("h2",[t._v(t._s(t.locData.welcome))]),a("p",[t._v(t._s(t.locData.homepagewelcome))]),t.userSignedIn?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg3:"",md4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"mt-2 mr-2 card-list"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.locData.authenticatedcontent))]),a("v-card-text",[t._v(" "+t._s(t.locData.authenticatedcontentdescription)+" ")])],1)],1)],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg3:"",md4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"mt-2 mr-2 card-list"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.locData.notifications))]),a("v-card-text",[t._v(" "+t._s(t.locData.notificationsdescription)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.showSuccessNotification()}}},[t._v(" "+t._s(t.locData.success)+" ")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.showErrorNotification()}}},[t._v(" "+t._s(t.locData.error)+" ")])],1)],1)],1),a("v-flex",{attrs:{lg3:"",md4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"mt-2 mr-2 card-list"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.locData.modals))]),a("v-card-text",[t._v(" "+t._s(t.locData.modalsdescription)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.toggleModalDialog()}}},[t._v(" "+t._s(t.locData.view)+" ")]),a("modal",{attrs:{title:t.locData.welcome,open:t.dialogOpen,"on-close":t.toggleModalDialog}},[a("p",[t._v(t._s(t.locData.homepagewelcome))])])],1)],1)],1),a("v-flex",{attrs:{lg3:"",md4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"mt-2 mr-2 card-list"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.locData.services))]),a("v-card-text",[t._v(" "+t._s(t.locData.serviceexampledescription)+" "),t.ipAddressMessage?a("v-alert",{staticClass:"mt-2",attrs:{outlined:"",type:"info"}},[t._v(" "+t._s(t.ipAddressMessage)+" ")]):t._e()],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.showIpAddressUsingHttpClient()}}},[t._v(" "+t._s(t.locData.serviceexampletitle)+" ")])],1)],1)],1),a("v-flex",{attrs:{lg3:"",md4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"mt-2 mr-2 card-list"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.locData.forms))]),a("v-card-text",[t._v(" "+t._s(t.locData.formsexampledescription)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",to:"/contact"}},[t._v(" "+t._s(t.locData.formsexample)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)},s=[],i=(a("96cf"),a("1da1")),o=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"width",fullscreen:t.$vuetify.breakpoint.mobile},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[a("v-card",[a("v-card-title",{staticClass:"d-flex flex-row"},[t.title?a("span",{staticClass:"d-flex justify-start"},[t._v(" "+t._s(t.title)+" ")]):t._e(),a("v-btn",{staticClass:"d-flex ml-auto",attrs:{icon:"",color:"primary",dark:""},on:{click:t.onClose}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[t._t("default")],2)],1)],1)},n=[],l=(a("a9e3"),{name:"modal",props:{open:Boolean,title:String,width:Number,onClose:Function}}),d=l,u=a("2877"),v=a("6544"),f=a.n(v),p=a("8336"),m=a("b0af"),_=a("99d9"),h=a("169a"),g=a("132d"),x=Object(u["a"])(d,c,n,!1,null,null,null),w=x.exports;f()(x,{VBtn:p["a"],VCard:m["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:h["a"],VIcon:g["a"]}),o["default"].component("modal",w);var b={name:"Home",components:{Modal:w},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$services.AuthService(),a=this.$services.LocalizationService(),r=a.getUserLocale(),t.next=5,a.getLocalizedTextSet(["welcome","homepagewelcome","getstartedmessage","notifications","notificationsdescription","modals","modalsdescription","error","success","view","close","authenticatedcontent","authenticatedcontentdescription","services","serviceexampletitle","serviceexampledescription","forms","formsexample","formsexampledescription"],r);case 5:s=t.sent,this.$data.userSignedIn=e.userHasSignedIn(),this.$data.locData=s;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{showSuccessNotification:function(){this.$services.NotificationsService.success(this,this.$data.locData.success)},showErrorNotification:function(){this.$services.NotificationsService.error(this,this.$data.locData.error)},toggleModalDialog:function(){this.$data.dialogOpen=!this.$data.dialogOpen},showIpAddressUsingHttpClient:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$services.GeoService().getCurrentIPAddress().then((function(t){t&&(e.$data.ipAddressMessage=t.message)}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{locData:{},ipAddressMessage:"",dialogOpen:!1,userSignedIn:!1}}},y=b,D=a("0798"),I=a("0e8f"),C=a("a722"),N=Object(u["a"])(y,r,s,!1,null,null,null);e["default"]=N.exports;f()(N,{VAlert:D["a"],VBtn:p["a"],VCard:m["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VFlex:I["a"],VLayout:C["a"]})}}]);
//# sourceMappingURL=home.0cd150f5.js.map