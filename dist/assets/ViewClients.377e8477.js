import{r as n,o as i,c,a as e,i as $,b as d,h as k,F as x,p as w,d as g,bB as N,g as A,t as b,e as v,bC as B}from"./index.ff077a63.js";import{T as E,_ as I}from"./BaseHeading.45ac20f9.js";import{_ as C}from"./BaseInput.00c8f694.js";import{a as T,c as F}from"./index.4a0be80c.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{i as L}from"./index.min.7b565170.js";import"./logo.5b10267d.js";const y=t=>(w("data-v-a3cbb55c"),t=t(),g(),t),D={class:"d-flex gap-2 justify-content-end my-5"},M=y(()=>e("input",{type:"text",name:"",id:"",class:"form-control","data-cy":"searchClientName",placeholder:"Search Client"},null,-1)),U=y(()=>e("button",{class:"btn btn-primary","data-cy":"searchClientsButton"},[e("i",{class:"bi bi-search text-white"})],-1)),j={key:0,class:"popup"},P={class:"popup-inner"},W=y(()=>e("div",{class:"d-flex gap-3 text-secondary"},[e("i",{class:"bi bi-person-fill h4"}),e("p",{class:"h5"},"Add New Client")],-1)),q=y(()=>e("p",null,"Add a new client to Proshore",-1)),z=["onSubmit"],G=y(()=>e("button",{class:"btn btn-outline-primary mx-2","data-cy":"confirmAddingMember",form:"myForm",type:"submit"}," Add ",-1)),H={setup(t){const s=n(""),u=n(""),m=n(""),f=n(""),h=n("");n(""),n([]),n(!1);const l=n(!1);function o(){l.value=!1}async function _(){const p=N(),a={client_name:s.value,client_email:u.value,client_number:m.value,status:1};(await T(a,p)).status===200&&location.reload()}return(p,a)=>(i(),c(x,null,[e("div",D,[e("button",{class:"btn btn-outline-primary d-flex","data-cy":"addNewClients",onClick:a[0]||(a[0]=r=>l.value=!0)}," Add New Client "),M,U]),l.value?(i(),c("div",j,[e("div",P,[e("div",{class:"d-flex justify-content-between"},[W,e("button",{onClick:o,type:"button",class:"btn-close","data-cy":"clearFieldWhenClose"})]),q,e("form",{id:"myForm",onSubmit:$(_,["prevent"])},[d(C,{type:"text",name:"name",label:"Client name","data-cy":"clientNameBox",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=r=>s.value=r),error:f.value},null,8,["modelValue","error"]),d(C,{type:"email",name:"name",label:"Client Email","data-cy":"clientEmailBox",modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=r=>u.value=r),error:h.value},null,8,["modelValue","error"]),d(C,{type:"text",name:"name",label:"Client Number","data-cy":"clientNumberBox",modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=r=>m.value=r),error:p.Error},null,8,["modelValue","error"])],40,z),e("div",{class:"my-3 p-2"},[e("button",{class:"btn btn-outline-secondary","data-cy":"cancelAddingMember",onClick:o}," Cancel "),G])])])):k("",!0)],64))}};var J=S(H,[["__scopeId","data-v-a3cbb55c"]]);const V=t=>(w("data-v-733ca093"),t=t(),g(),t),K={key:0},O=V(()=>e("thead",{class:"hey"},[e("tr",{class:"border text-primary"},[e("th",null,"S.N"),e("th",null,[v("Client Name"),e("i",{class:"bi bi-arrow-down-up mx-1"})]),e("th",null,[v("Email"),e("i",{class:"bi bi-arrow-down-up mx-1"})]),e("th",null,[v("Contact Number"),e("i",{class:"bi bi-arrow-down-up mx-1"})]),e("th",null,[v("Status"),e("i",{class:"bi bi-arrow-down-up mx-1"})])])],-1)),Q=["textContent"],R={key:1,class:"mt-5 text-primary mx-1"},X=V(()=>e("span",null,"No clients yet. Let's get some clients.",-1)),Y=[X],Z={setup(t){const s=n([]),u=N(),m=L.exports.useToast();async function f(l){try{const o=await F(l);o.status===200&&(s.value=o.data.clients)}catch{m.error(response.data.message)}}f(u);const h=l=>l===1?"Active":"Done";return(l,o)=>s.value.length?(i(),c("div",K,[e("table",null,[O,(i(!0),c(x,null,A(s.value,(_,p)=>(i(),c("tr",{class:"border",key:p},[e("td",null,b(p+1),1),e("td",null,b(_.client_name),1),e("td",null,b(_.client_email),1),e("td",null,b(_.client_number),1),e("td",{textContent:b(h(_.status))},null,8,Q)]))),128))])])):(i(),c("p",R,Y))}};var ee=S(Z,[["__scopeId","data-v-733ca093"]]);const ie={setup(t){const s=B();return s.userStatus=!1,(u,m)=>(i(),c(x,null,[d(E),e("main",null,[d(I,{title:"Clients"}),d(J),d(ee)])],64))}};export{ie as default};
