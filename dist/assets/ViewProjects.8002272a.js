import{r as s,E as B,o as n,c as u,a as e,B as w,G as U,F as h,g as P,t as m,A,i as R,z as D,h as k,b as f,C as L,q as z,I as q,e as M,D as F,H as G}from"./index.38b4b252.js";import{T as H,_ as J}from"./BaseHeading.f72df9f8.js";import{p as K,e as O,a as Q}from"./index.d9d11530.js";import{v as W}from"./validateName.6ce7ed4b.js";import{a as E,_ as X}from"./BaseAlert.275be700.js";import"./logo.5b10267d.js";import"./plugin-vue_export-helper.21dcd24c.js";const Y={class:"mt-3 border border-bottom-0 rounded"},Z={class:"topnav"},ee={class:"table table-hover"},te=e("thead",{class:"text-primary"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Project Name"),e("th",{scope:"col"},"Color"),e("th",{scope:"col"},"Client Id"),e("th",{scope:"col"},"Billable"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Action")])],-1),ae=["onClick","textContent"],le={setup(p){const c=s(!0),r=s([]),g=B(),v=s(r.value),d=s(!0);async function j(){try{const a=await K(g);a.status===200&&(r.value=a.data.users)}catch{alert("Something went wrong, please try again later")}}j();async function y(a){try{const l=await O(g,a);c.value=!1,l.status==200&&(alert("Project status changed successfully"),j())}catch{alert("Something went wrong, please try again later")}}function _(a){return a=="1"?"Disable":"Enable"}function C(a){return a==!0?"Billable":"Non Billable"}function x(a){v.value.splice(0,r.value.length),r.value.forEach(l=>{l.project_name.includes(a)&&v.value.push(l),d.value=!1})}return(a,l)=>(n(),u("div",Y,[e("div",Z,[w(e("input",{type:"text",placeholder:"Search..","onUpdate:modelValue":l[0]||(l[0]=i=>a.value=i),onInput:l[1]||(l[1]=i=>x(a.value)),"data-cy":"projectsSearchButton"},null,544),[[U,a.value]])]),e("table",ee,[te,e("tbody",null,[(n(!0),u(h,null,P(d.value?r.value:v.value,(i,N)=>(n(),u("tr",{key:i.id},[e("td",null,m(N+1),1),e("td",null,m(i.project_name),1),e("td",null,m(i.project_color_code),1),e("td",null,m(i.client_id),1),e("td",null,m(C(i.billable)),1),e("td",null,m(_(i.status)),1),e("td",null,[e("button",{class:"btn btn-light btn-sm",onClick:S=>y(i.id),textContent:m(_(i.status)==="Enable"?"Disable":"Enable")},null,8,ae)])]))),128))])])]))}},oe="/api/client";var se={CLIENT_LIST_URL:oe};const ne=async p=>await A.get(se.CLIENT_LIST_URL,{headers:{Authorization:p}});function re(p){return p?{isValid:!0,errorMessage:""}:{isValid:!1,errorMessage:"Color field is required."}}const ie=e("button",{type:"button",class:"btn btn-sm btn-primary text-white","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-cy":"addProjectButton"}," Add Project ",-1),ue={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ce={class:"modal-dialog"},de={class:"modal-content"},me=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"Create New Project"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close","data-cy":"createNewProjectModalCloseButton"})],-1),ve={class:"modal-body"},_e=["onSubmit"],pe={key:1},be={class:"mt-4"},he=e("label",{class:"form-label"},[M("Color"),e("span",{class:"text-danger"},"*")],-1),fe=["error"],ge=["value","textContent"],ye={class:"mt-4"},Ce=e("label",{class:"form-label",for:"client-id","data-cy":"addClientName"},[M("Client Name"),e("span",{class:"text-danger"},"*")],-1),xe=["error"],je=["value","textContent"],we={class:"mt-4"},Pe=e("label",{for:"billable"},"Billable",-1),Ne=e("div",{class:"mt-4 mb-2"},[e("button",{type:"submit",class:"btn btn-primary text-white","data-cy":"newProjectCreateButton"}," CREATE ")],-1),ke={setup(p){const c=s(""),r=s(""),g=s([{id:1,name:"Black",hex:"#000000"},{id:2,name:"Red",hex:"#ff0000"},{id:3,name:"Blue",hex:"#0000ff"},{id:3,name:"Green",hex:"#008000"}]),v=s(""),d=s("0"),j=s(1),y=s([]),_=s(""),C=s(""),x=s(""),a=s(!1),l=s([]),i=B();async function N(b){try{const o=await ne(b);o.status===200&&(y.value=o.data.users)}catch{alert("Something went wrong, please try again later")}}N(i);async function S(){_.value="",C.value="",x.value="",l.value=[],a.value=!1;const{isValid:b,errorMessage:o}=W(c.value),{isValid:t,errorMessage:T}=re(r.value);if(b||(C.value=T,r.value=""),t||(_.value=o,c.value=""),_.value===""&&x.value===""&&l.value.length===0)try{const{user:{id:V}}=F();d.value=d.value===!0?"1":"0";const $={project_name:c.value,client_id:v.value,billable:d.value,status:j.value,project_color_code:r.value,user_id:V},I=B();(await Q($,I)).status===200&&(a.value=!0,location.reload(),setTimeout(()=>{a.value=!1},3e3),c.value="",v.value="",d.value="",r.value="")}catch{l.value.push("Something went wrong, please try again later.")}}return(b,o)=>(n(),u(h,null,[ie,e("div",ue,[e("div",ce,[e("div",de,[me,e("div",ve,[e("form",{onSubmit:R(S,["prevent"])},[a.value?(n(),D(E,{key:0,message:"Project add successfully!","hex-font-color":"198754"})):k("",!0),l.value.length?(n(),u("div",pe,[(n(!0),u(h,null,P(l.value,t=>(n(),u("div",{key:t},[f(E,{message:t,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):k("",!0),f(X,{type:"text",name:"project_name",label:"Project name",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=t=>c.value=t),error:_.value,"data-cy":"addProjectName"},null,8,["modelValue","error"]),e("div",be,[he,w(e("select",{id:"color","onUpdate:modelValue":o[1]||(o[1]=t=>r.value=t),onChange:o[2]||(o[2]=(...t)=>b.onChangeRole&&b.onChangeRole(...t)),class:"form-select",error:C.value},[(n(!0),u(h,null,P(g.value,t=>(n(),u("option",{key:t.id,value:t.name,style:z({color:t.hex}),textContent:m(t.name)},null,12,ge))),128))],40,fe),[[L,r.value]])]),e("div",ye,[Ce,y.value.length?w((n(),u("select",{key:0,id:"client-id","onUpdate:modelValue":o[3]||(o[3]=t=>v.value=t),class:"form-select",error:x.value},[(n(!0),u(h,null,P(y.value,t=>(n(),u("option",{key:t.id,value:t.id,textContent:m(t.client_name)},null,8,je))),128))],8,xe)),[[L,v.value]]):k("",!0)]),e("div",we,[Pe,w(e("input",{type:"radio",value:"true","onUpdate:modelValue":o[4]||(o[4]=t=>d.value=t),name:"billable","data-cy":"billableRadioButton"},null,512),[[q,d.value]])]),Ne],40,_e)])])])])],64))}},Ie={setup(p){const c=G();return c.userStatus=!1,(r,g)=>(n(),u(h,null,[f(H),e("main",null,[f(J,{title:"Projects"}),f(ke),f(le)])],64))}};export{Ie as default};
