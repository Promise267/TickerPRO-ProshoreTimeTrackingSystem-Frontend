import{bz as E,r as n,o as l,c as i,a as t,i as D,b as R,b9 as N,br as O,F as S,g as A,t as m,h as $,e as M,bA as F,bB as k,bs as G,p as K,d as q,bC as P}from"./index.2098a330.js";import{v as W}from"./validateName.9f9d9069.js";import{_ as V,v as Y}from"./validateEmail.ed5fea2f.js";/* empty css                                                  */import{i as T}from"./index.min.e860ac2f.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import{T as H,_ as J}from"./BaseHeading.5e8b4cb0.js";import"./logo.f5257f33.js";const Q="/api/all-roles",X="/api/admin/invite",Z="/api/invite/invited-users",tt="/api/invite/resend",et="/api/invite/revoke/",st="/api/admin/users",at="/api/admin/user",ot="/api/admin/user-status";var L={ALL_ROLES_URL:Q,INVITE_MEMBER_URL:X,INVITED_MEMBERS_LIST_URL:Z,REINVITE_URL:tt,REINVOKE_URL:et,REGISTER_USER_LIST_URL:st,DELETE_USER_URL:at,ENABLE_USER_URL:ot};const nt=async()=>await E.get(L.ALL_ROLES_URL),lt=async(a,r)=>await E.post(L.INVITE_MEMBER_URL,a,{headers:{Authorization:r}}),it=async a=>await E.get(L.INVITED_MEMBERS_LIST_URL,{headers:{Authorization:a}}),rt=async(a,r)=>await E.post(L.REINVITE_URL,r,{headers:{Authorization:a}}),dt=async(a,r)=>await E.delete(`${L.REINVOKE_URL}${r}`,{headers:{Authorization:a}}),ct=async a=>await E.get(L.REGISTER_USER_LIST_URL,{headers:{Authorization:a}}),ut=async(a,r)=>await E.delete(`${L.DELETE_USER_URL}/${r}`,{headers:{Authorization:a}}),_t=async(a,r)=>await E.patch(`${L.ENABLE_USER_URL}/${r}`,null,{headers:{Authorization:a}});const ht=t("button",{type:"button",class:"btn btn-sm btn-primary text-white","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Add New Member ",-1),mt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},vt={class:"modal-dialog"},bt={class:"modal-content"},pt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"Add New Member"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gt={class:"modal-body"},yt=["onSubmit"],ft={class:"mt-4"},wt=t("label",{for:"roles"},[M("Roles "),t("span",{class:"text-danger"},"*")],-1),xt=["value","textContent"],Ct=["textContent"],$t=t("div",{class:"mt-4 mb-2"},[t("button",{type:"submit",class:"btn btn-primary text-white"}," Send Invite ")],-1),Et={props:{handleInvitedMembers:Function},setup(a){const r=a,d=n(""),v=n(""),_=n(""),f=n(""),b=n(""),x=n(""),g=n(!1),u=n([]),h=n([]),c=T.exports.useToast(),{handleInvitedMembers:y}=r;async function U(){try{const C=await nt();u.value=C.data.UserRoles}catch{h.value.push("Something went wrong, please try again later.")}}U();async function B(){f.value="",b.value="",x.value="",h.value=[],g.value=!1;const{isValid:C,errorMessage:e}=W(d.value),{isValid:s,errorMessage:o}=Y(v.value);if(C||(f.value=e,d.value=""),s||(b.value=o,v.value=""),f.value===""&&b.value===""&&h.value.length===0)try{const{user:{id:p}}=F(),I={name:d.value,email:v.value,role_id:_.value,user_id:p},z=k();(await lt(I,z)).status===200&&(g.value=!0,y(),c.success("Invite is sent successfully!!!"),setTimeout(()=>{g.value=!1},1500),d.value="",v.value="",_.value="")}catch{c.error("Something went wrong, please try again later.")}}return(C,e)=>(l(),i(S,null,[ht,t("div",mt,[t("div",vt,[t("div",bt,[pt,t("div",gt,[t("form",{onSubmit:D(B,["prevent"])},[R(V,{type:"text",name:"name",label:"Full name",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=s=>d.value=s),error:f.value},null,8,["modelValue","error"]),R(V,{type:"email",name:"email",label:"Email address",modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=s=>v.value=s),error:b.value},null,8,["modelValue","error"]),t("div",ft,[wt,u.value.length?N((l(),i("select",{key:0,class:"form-select mt-2","aria-label":"roles select menu","onUpdate:modelValue":e[2]||(e[2]=s=>_.value=s),required:""},[(l(!0),i(S,null,A(u.value,s=>(l(),i("option",{key:s.id,value:s.id,textContent:m(`${s.role.toUpperCase()}`)},null,8,xt))),128))],512)),[[O,_.value]]):$("",!0),x.value?(l(),i("div",{key:1,class:"form-text text-danger",textContent:m(x.value)},null,8,Ct)):$("",!0)]),$t],40,yt)])])])])],64))}},Lt={class:"mt-2 fs-5"},Rt=M(" Invited Members "),kt=["textContent"],St={key:0,class:"alert alert-success alert-dismissible fade show mt-2",role:"alert"},Mt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Ut={class:"mt-3 border border-bottom-0 rounded"},It={class:"table table-hover"},Bt=t("thead",{class:"text-primary"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"Role"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Action"),t("th",{scope:"col"})])],-1),At={key:0},Vt={key:1},Nt=["textContent"],Tt=["textContent"],zt=["textContent"],Dt=["textContent"],Ot=["textContent"],Ft=["onClick"],Gt=t("button",{class:"btn btn-light dropdown-toggle btn-sm",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"true"},null,-1),Kt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},qt=["onClick"],Pt={setup(a){const r=n(0),d=n([]),v=n(!0);n([]);const _=n(""),f=u=>u===!1?"Wait":"Active";async function b(u,h){_.value="";try{const c=k(),y=await rt(c,{email:u,name:h});y.status==200&&g(),_.value=y.data.message}catch(c){console.log(c)}}async function x(u){_.value="";try{const h=k(),c=await dt(h,u);_.value=c.data.message,c.status==200&&g()}catch(h){console.log(h)}}async function g(){try{const u=k(),h=await it(u);d.value=h.data.invitedUsers,r.value=h.data.total,v.value=!1}catch(u){console.log(u)}}return g(),(u,h)=>(l(),i(S,null,[t("div",Lt,[Rt,r.value?(l(),i("span",{key:0,textContent:m(`(${r.value})`)},null,8,kt)):$("",!0)]),_.value?(l(),i("div",St,[M(m(_.value)+" ",1),Mt])):$("",!0),R(Et,{handleInvitedMembers:g}),t("div",Ut,[t("table",It,[Bt,v.value?(l(),i("p",At,"Loading...")):$("",!0),d.value.length?(l(),i("tbody",Vt,[(l(!0),i(S,null,A(d.value,(c,y)=>(l(),i("tr",{key:y},[t("th",{scope:"row",textContent:m(`${y+1}`)},null,8,Nt),t("td",{textContent:m(c.name)},null,8,Tt),t("td",{class:"gray-color",textContent:m(c.email)},null,8,zt),t("td",{textContent:m(c.role.role.toUpperCase())},null,8,Dt),t("td",{class:"gray-color",textContent:m(f(c.inviteAccepted))},null,8,Ot),t("td",null,[t("button",{class:"btn btn-light btn-sm",onClick:U=>b(c.email,c.name)}," Reinvite ",8,Ft)]),t("td",null,[Gt,t("ul",Kt,[t("li",null,[t("a",{class:"dropdown-item",onClick:U=>x(c.id)}," Revoke ",8,qt)])])])]))),128))])):$("",!0)])])],64))}};const w=a=>(K("data-v-5f789751"),a=a(),q(),a),Wt={class:"mt-5 fs-5"},Yt=M(" All Members "),jt=["textContent"],Ht={class:"mt-3 border border-bottom-0 rounded"},Jt={class:"topnav"},Qt={class:"table table-hover"},Xt={class:"text-primary"},Zt=w(()=>t("th",{scope:"col"},[M("# "),t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filter",viewBox:"0 0 16 16"},[t("path",{d:"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})])],-1)),te=M(" Name "),ee=w(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filter",viewBox:"0 0 16 16"},[t("path",{d:"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})],-1)),se=[te,ee],ae=M(" Email "),oe=w(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filter",viewBox:"0 0 16 16"},[t("path",{d:"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})],-1)),ne=[ae,oe],le=w(()=>t("th",{scope:"col"},"Status",-1)),ie=w(()=>t("th",{scope:"col"},"Action",-1)),re={key:0},de=["textContent"],ce=["textContent"],ue=["textContent"],_e={key:0,class:"btn btn-light btn-sm"},he=["onClick","textContent"],me={class:"dropdown"},ve=w(()=>t("button",{class:"btn btn-light dropdown-toggle btn-sm",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"true"},null,-1)),be={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},pe={key:0},ge=w(()=>t("span",null,"Sorry, You can't delete Admin user!!!",-1)),ye=[ge],fe={key:1},we=["onClick"],xe={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},Ce={class:"modal-dialog modal-dialog-centered"},$e={class:"modal-content"},Ee=w(()=>t("div",{class:"modal-header text-center border-0"},[t("h5",{class:"modal-title w-100",id:"staticBackdropLabel"}," Are you sure you want to delete? ")],-1)),Le={class:"modal-footer pull-right justify-content-center border-0"},Re=w(()=>t("button",{type:"button",class:"btn btn-secondary-outline","data-bs-dismiss":"modal","data-cy":"cancelDeleteRegisteredMember"}," Cancel ",-1)),ke={setup(a){const r=n(0),d=n([]),v=n(d.value),_=n(!0),f=n(!0),b=T.exports.useToast();n("desc"),n("desc");const x=n(null);function g(e){x.value=e}async function u(){try{const e=k(),s=await ct(e);d.value=s.data.users,r.value=s.data.total,_.value=!1}catch{alert("Something went wrong, please try again later")}}async function h(){try{const e=k(),s=await ut(e,d.value[x.value].id);_.value=!1,s.status==200&&(u(),b.success(s.data.message))}catch{b.error("Something went wrong, please try again later")}}async function c(e){try{const s=k(),o=await _t(s,d.value[e].id);_.value=!1,o.status==200&&(u(),b.success(o.data.message))}catch{b.error("Something went wrong, please try again later.")}}function y(e){return e=="1"?"Disable":"Enable"}function U(e){v.value.splice(0,d.value.length),d.value.forEach(s=>{s.name.includes(e)&&v.value.push(s),f.value=!1})}function B(e,s){return function(o,p){if(s==="asc")return o[e].toLowerCase()<p[e].toLowerCase()?1:o[e].toLowerCase()>p[e].toLowerCase()?-1:0;if(s==="desc")return o[e].toLowerCase()>p[e].toLowerCase()?1:o[e].toLowerCase()<p[e].toLowerCase()?-1:0}}function C(e){e==="email"&&(this.emailSortBy==="desc"?this.emailSortBy="asc":this.emailSortBy="desc"),e==="name"&&(this.nameSortBy==="desc"?this.nameSortBy="asc":this.nameSortBy="desc");let s=null;e==="email"&&(s=this.emailSortBy),e==="name"&&(s=this.nameSortBy),d.value.sort(B(e,s))}return u(),(e,s)=>(l(),i(S,null,[t("div",Wt,[Yt,r.value?(l(),i("span",{key:0,textContent:m(`(${r.value})`)},null,8,jt)):$("",!0)]),t("div",Ht,[t("div",Jt,[N(t("input",{type:"text",placeholder:"Search..","onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),onInput:s[1]||(s[1]=o=>U(e.value))},null,544),[[G,e.value]])]),t("table",Qt,[t("thead",Xt,[t("tr",null,[Zt,t("th",{onClick:s[2]||(s[2]=o=>C("name")),scope:"col"},se),t("th",{onClick:s[3]||(s[3]=o=>C("email")),scope:"col"},ne),le,ie])]),_.value?(l(),i("p",re,"Loading...")):$("",!0),t("tbody",null,[(l(!0),i(S,null,A(f.value?d.value:v.value,(o,p)=>(l(),i("tr",{key:o.id},[t("th",{scope:"row",textContent:m(p+1)},null,8,de),t("td",{textContent:m(o.name)},null,8,ce),t("td",{textContent:m(o.email)},null,8,ue),t("td",null,m(y(o.active_status)==="Enable"?"Disabled":"Enabled"),1),t("td",null,[o.id===1?(l(),i("span",_e,"Admin")):(l(),i("button",{key:1,class:"btn btn-light btn-sm",onClick:I=>c(p),textContent:m(y(o.active_status))},null,8,he))]),t("td",me,[ve,t("ul",be,[o.id===1?(l(),i("li",pe,ye)):(l(),i("li",fe,[t("button",{type:"button",class:"btn btn-light btn-sm mx-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop","data-cy":"deleteRegisteredMember",onClick:I=>g(p)}," Delete ",8,we)]))]),t("div",xe,[t("div",Ce,[t("div",$e,[Ee,t("div",Le,[Re,t("button",{type:"button",class:"btn btn-primary-outline text-primary",onClick:s[4]||(s[4]=I=>h()),"data-bs-dismiss":"modal","data-cy":"deleteRegisteredUserSuccessfully"}," Delete ")])])])])])]))),128))])])])],64))}};var Se=j(ke,[["__scopeId","data-v-5f789751"]]);const Me={class:"teams__container"},Oe={setup(a){const r=P();return r.userStatus=!1,(d,v)=>(l(),i(S,null,[R(H),t("main",null,[R(J,{title:"Teams"}),t("div",Me,[R(Pt),R(Se)])])],64))}};export{Oe as default};
