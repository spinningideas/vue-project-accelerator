import{d as M,u as O,r as s,o as k,c as N,w as t,a as e,b as G,t as l,e as z,f as r,g as L,h as n,i as R,j as U,k as S,l as F,m as J,n as $}from"./index-V2IxqB-g.js";import{u as Y}from"./notificationsStore-5cYta7b3.js";const q=()=>{const p=o=>o.ok?o.json().then(i=>Promise.resolve({data:i,code:o.status,response:o})).catch(i=>Promise.resolve({data:o,code:o.status,response:o})):o.json().catch(i=>Promise.resolve({data:o.statusText,code:o.status,response:o})).then(i=>Promise.resolve({data:i.error.message,code:o.status,response:o}));return{getData:async o=>await fetch(o,{method:"GET",headers:{Accept:"application/json"}}).then(i=>p(i)),getDataAuthenticated:async(o,i)=>await fetch(o,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+i}}).then(d=>p(d)),postDataAuthenticated:async(o,i={},d)=>{let a={Accept:"application/json","Content-Type":"application/json"};return d&&d.length&&(a.Authorization="Bearer "+d),await fetch(o,{method:"POST",headers:a,body:JSON.stringify(i)}).then(f=>p(f))}}},K=()=>({getCurrentIPAddress:async()=>{const m=q();let _="https://ipwho.is/";return await m.getData(_).then(c=>{let o=c.data;return{ip:c.data.ip,city:o.city,region:o.region,country:o.country,latitude:o.latitude,longitude:o.longitude,message:`Your ip is ${o.ip} and your location: ${o.latitude}, ${o.longitude} which is in ${o.city}, ${o.region} ${o.country}`}})}}),Q={key:0,class:"d-flex justify-start"},H=M({__name:"Modal",props:{open:{type:Boolean},title:{},width:{},onClose:{type:Function}},setup(p){const{mobile:m}=O(),_=m.value,c=p;return(o,i)=>{const d=s("v-icon"),a=s("v-btn"),f=s("v-card-title"),v=s("v-card-text"),h=s("v-card"),b=s("v-dialog");return k(),N(b,{modelValue:c.open,"onUpdate:modelValue":i[0]||(i[0]=P=>c.open=P),transition:"dialog-bottom-transition","overlay-color":"transparent","overlay-opacity":"0",width:c.width,fullscreen:n(_)},{default:t(()=>[e(h,null,{default:t(()=>[e(f,{class:"d-flex flex-row"},{default:t(()=>[c.title?(k(),G("span",Q,l(c.title),1)):z("",!0),e(a,{class:"d-flex ml-auto",color:"primary",onClick:c.onClose},{default:t(()=>[e(d,null,{default:t(()=>[r("mdi-close")]),_:1})]),_:1},8,["onClick"])]),_:1}),e(v,null,{default:t(()=>[L(o.$slots,"default")]),_:3})]),_:3})]),_:3},8,["modelValue","width","fullscreen"])}}}),Z=M({__name:"Home",setup(p){const m=R(),_=Y(),c=J(),o=K(),i=U();let d=S(!1),a=S({}),f=S(""),v=S(!1),h=S(!1);F(async()=>{d.value=m.userHasSignedIn();const g=c.getUserLocale(),u=await c.getLocalizedTextSet(["welcome","homepagewelcome","getstartedmessage","notifications","notificationsdescription","modals","modalsdescription","error","success","view","close","authenticatedcontent","authenticatedcontentdescription","services","serviceexampletitle","serviceexampledescription","forms","formsexample","formsexampledescription"],g);a.value=u,d.value===!0&&i.push({path:"/summary"})});const b=()=>{_.success(a.value.success)},P=()=>{_.error(a.value.error)},B=()=>{h.value=!h.value},I=()=>{v.value=!v.value},E=async()=>{await o.getCurrentIPAddress().then(g=>{g&&(f.value=g.message,I())})};return(g,u)=>{const y=s("v-card-title"),w=s("v-card-text"),x=s("v-card"),T=s("v-container"),C=s("v-col"),V=s("v-row"),A=s("v-btn"),D=s("v-card-actions");return k(),N(T,{fluid:"","fill-height":""},{default:t(()=>[e(V,{"no-gutters":""},{default:t(()=>[e(C,{cols:"12",class:"p-2"},{default:t(()=>[$("h2",null,l(n(a).welcome),1),$("p",null,l(n(a).homepagewelcome),1),n(d)?(k(),N(T,{key:0,fluid:""},{default:t(()=>[e(x,null,{default:t(()=>[e(y,{"primary-title":""},{default:t(()=>[r(l(n(a).authenticatedcontent),1)]),_:1}),e(w,null,{default:t(()=>[r(l(n(a).authenticatedcontentdescription),1)]),_:1})]),_:1})]),_:1})):z("",!0)]),_:1})]),_:1}),e(V,{dense:""},{default:t(()=>[e(C,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(x,{height:"175"},{default:t(()=>[e(y,{"primary-title":""},{default:t(()=>[r(l(n(a).notifications),1)]),_:1}),e(w,{height:"65"},{default:t(()=>[r(l(n(a).notificationsdescription),1)]),_:1}),e(D,null,{default:t(()=>[e(A,{variant:"elevated",color:"primary",onClick:u[0]||(u[0]=j=>b())},{default:t(()=>[r(l(n(a).success),1)]),_:1}),e(A,{variant:"elevated",color:"primary",onClick:u[1]||(u[1]=j=>P())},{default:t(()=>[r(l(n(a).error),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(C,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(x,{height:"175"},{default:t(()=>[e(y,{"primary-title":""},{default:t(()=>[r(l(n(a).modals),1)]),_:1}),e(w,{height:"65"},{default:t(()=>[r(l(n(a).modalsdescription),1)]),_:1}),e(D,null,{default:t(()=>[e(A,{variant:"elevated",color:"primary",onClick:u[2]||(u[2]=j=>B())},{default:t(()=>[r(l(n(a).view),1)]),_:1}),e(H,{title:n(a).welcome,open:n(h),"on-close":B,width:"500"},{default:t(()=>[$("p",null,l(n(a).homepagewelcome),1)]),_:1},8,["title","open"])]),_:1})]),_:1})]),_:1}),e(C,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(x,{height:"175"},{default:t(()=>[e(y,{"primary-title":""},{default:t(()=>[r(l(n(a).services),1)]),_:1}),e(w,{height:"65"},{default:t(()=>[r(l(n(a).serviceexampledescription),1)]),_:1}),e(D,null,{default:t(()=>[e(A,{variant:"elevated",color:"primary",onClick:u[3]||(u[3]=j=>E())},{default:t(()=>[r(l(n(a).serviceexampletitle),1)]),_:1})]),_:1})]),_:1}),e(H,{title:n(a).serviceexampletitle,open:n(v),"on-close":I,width:"500"},{default:t(()=>[$("p",null,l(n(f)),1)]),_:1},8,["title","open"])]),_:1}),e(C,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(x,{height:"175"},{default:t(()=>[e(y,{"primary-title":""},{default:t(()=>[r(l(n(a).forms),1)]),_:1}),e(w,{height:"65"},{default:t(()=>[r(l(n(a).formsexampledescription),1)]),_:1}),e(D,null,{default:t(()=>[e(A,{variant:"elevated",color:"primary",to:"/contact"},{default:t(()=>[r(l(n(a).formsexample),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Z as default};