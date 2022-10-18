import{bz as J,r as l,bB as S,s as O,o as n,c,a as e,b9 as f,bs as T,F as L,g as $,t as B,bu as G,br as U,h as P,b as y,a9 as Q,i as W,bA as X,bC as Y}from"./index.50e0bec2.js";import{T as e1,_ as t1}from"./BaseHeading.4911cc42.js";import{p as a1,s as s1,d as l1,e as n1,a as o1,b as i1}from"./index.4ed72402.js";import{i as c1}from"./index.min.67a22005.js";import{v as r1}from"./validateName.6ce7ed4b.js";/* empty css                                                  */import{_ as I}from"./BaseAlert.58fa7630.js";import"./logo.5b10267d.js";import"./plugin-vue_export-helper.21dcd24c.js";const d1="/api/client";var u1={CLIENT_LIST_URL:d1};const j=async w=>await J.get(u1.CLIENT_LIST_URL,{headers:{Authorization:w}});const C1={class:"mt-3 border border-bottom-0 rounded"},_1={class:"topnav"},m1={class:"table table-hover"},b1=e("thead",{class:"text-primary"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Project Name"),e("th",{scope:"col"},"Client"),e("th",{scope:"col"},"Billable"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Action")])],-1),h1=["onUpdate:modelValue","onChange","onKeyup"],p1=["onUpdate:modelValue","error","onChange"],v1=["value","text"],y1=["title","onClick"],L1=["onClick"],g1=e("svg",{width:"25",height:"25",title:"Billable",viewBox:"0 0 25 25",fill:"red",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.0425435 15.8391C0.0845944 15.9979 0.157671 16.1467 0.257557 16.2771C0.357444 16.4075 0.482162 16.5168 0.624515 16.5988L3.01498 17.9804V20.7324C3.01498 21.0643 3.14684 21.3827 3.38155 21.6174C3.61626 21.8521 3.9346 21.9839 4.26653 21.9839H7.01869L8.4004 24.3743C8.5112 24.5637 8.6694 24.721 8.85944 24.8307C9.04948 24.9404 9.26481 24.9987 9.48424 25C9.70201 25 9.91853 24.9424 10.1113 24.831L12.4992 23.4507L14.8897 24.8323C15.1771 24.998 15.5185 25.043 15.839 24.9574C16.1594 24.8717 16.4329 24.6625 16.5993 24.3755L17.9798 21.9852H20.7319C21.0639 21.9852 21.3822 21.8533 21.6169 21.6186C21.8516 21.3839 21.9835 21.0656 21.9835 20.7337V17.9817L24.3739 16.6C24.5163 16.5177 24.6411 16.4082 24.7411 16.2777C24.8412 16.1471 24.9145 15.9982 24.9569 15.8393C24.9993 15.6804 25.01 15.5147 24.9884 15.3517C24.9667 15.1887 24.9132 15.0315 24.8308 14.8892L23.4503 12.5001L24.832 10.1123C24.9981 9.82501 25.0432 9.48354 24.9576 9.16296C24.8719 8.84238 24.6624 8.56894 24.3752 8.40277L21.9847 7.02113V4.26785C21.9847 3.93594 21.8529 3.61762 21.6182 3.38292C21.3835 3.14822 21.0651 3.01636 20.7332 3.01636H17.981L16.6006 0.627274C16.4338 0.340579 16.1609 0.131066 15.8409 0.0440808C15.6821 0.00104953 15.5164 -0.0100463 15.3534 0.0114365C15.1903 0.0329193 15.0331 0.0865535 14.8909 0.16923L12.4992 1.54962L10.11 0.167978C9.82272 0.00192378 9.48122 -0.0432384 9.16063 0.0424215C8.84003 0.128081 8.56658 0.337551 8.4004 0.624771L7.01869 3.01511H4.26653C3.9346 3.01511 3.61626 3.14697 3.38155 3.38167C3.14684 3.61636 3.01498 3.93469 3.01498 4.2666V7.01862L0.624515 8.40026C0.337362 8.56715 0.128054 8.84103 0.0424328 9.16192C-0.0431888 9.48281 0.00185488 9.82455 0.167699 10.1123L1.54941 12.5001L0.167699 14.888C0.00247818 15.1762 -0.0424891 15.5179 0.0425435 15.8391ZM12.4992 13.7516C8.14383 13.7516 7.49303 11.4001 7.49303 9.99716C7.49303 8.3865 8.78087 6.76457 11.2477 6.34908V5.00623H13.7508V6.39413C15.921 6.90724 16.7545 8.71314 16.7545 9.99716H15.503L14.2514 10.0197C14.2339 9.54412 13.9823 8.74568 12.4992 8.74568C10.8735 8.74568 9.99613 9.39019 9.99613 9.99716C9.99613 10.4652 9.99613 11.2487 12.4992 11.2487C16.8546 11.2487 17.5054 13.6002 17.5054 15.0031C17.5054 16.6138 16.2176 18.2357 13.7508 18.6512V20.0091H11.2477V18.6575C8.3203 18.1982 7.49303 16.1507 7.49303 15.0031H9.99613C10.0099 15.1821 10.1951 16.2546 12.4992 16.2546C14.2264 16.2546 15.0023 15.5225 15.0023 15.0031C15.0023 14.5964 15.0023 13.7516 12.4992 13.7516Z",fill:"#FA602D"})],-1),f1=[g1],w1=["onClick"],V1=e("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.0425435 15.8391C0.0845944 15.9979 0.157671 16.1467 0.257557 16.2771C0.357444 16.4075 0.482162 16.5168 0.624515 16.5988L3.01498 17.9804V20.7324C3.01498 21.0643 3.14684 21.3827 3.38155 21.6174C3.61626 21.8521 3.9346 21.9839 4.26653 21.9839H7.01869L8.4004 24.3743C8.5112 24.5637 8.6694 24.721 8.85944 24.8307C9.04948 24.9404 9.26481 24.9987 9.48424 25C9.70201 25 9.91853 24.9424 10.1113 24.831L12.4992 23.4507L14.8897 24.8323C15.1771 24.998 15.5185 25.043 15.839 24.9574C16.1594 24.8717 16.4329 24.6625 16.5993 24.3755L17.9798 21.9852H20.7319C21.0639 21.9852 21.3822 21.8533 21.6169 21.6186C21.8516 21.3839 21.9835 21.0656 21.9835 20.7337V17.9817L24.3739 16.6C24.5163 16.5177 24.6411 16.4082 24.7411 16.2777C24.8412 16.1471 24.9145 15.9982 24.9569 15.8393C24.9993 15.6804 25.01 15.5147 24.9884 15.3517C24.9667 15.1887 24.9132 15.0315 24.8308 14.8892L23.4503 12.5001L24.832 10.1123C24.9981 9.82501 25.0432 9.48354 24.9576 9.16296C24.8719 8.84238 24.6624 8.56894 24.3752 8.40277L21.9847 7.02113V4.26785C21.9847 3.93594 21.8529 3.61762 21.6182 3.38292C21.3835 3.14822 21.0651 3.01636 20.7332 3.01636H17.981L16.6006 0.627274C16.4338 0.340579 16.1609 0.131066 15.8409 0.0440808C15.6821 0.00104953 15.5164 -0.0100463 15.3534 0.0114365C15.1903 0.0329193 15.0331 0.0865535 14.8909 0.16923L12.4992 1.54962L10.11 0.167978C9.82272 0.00192378 9.48122 -0.0432384 9.16063 0.0424215C8.84003 0.128081 8.56658 0.337551 8.4004 0.624771L7.01869 3.01511H4.26653C3.9346 3.01511 3.61626 3.14697 3.38155 3.38167C3.14684 3.61636 3.01498 3.93469 3.01498 4.2666V7.01862L0.624515 8.40026C0.337362 8.56715 0.128054 8.84103 0.0424328 9.16192C-0.0431888 9.48281 0.00185488 9.82455 0.167699 10.1123L1.54941 12.5001L0.167699 14.888C0.00247818 15.1762 -0.0424891 15.5179 0.0425435 15.8391ZM12.4992 13.7516C8.14383 13.7516 7.49303 11.4001 7.49303 9.99716C7.49303 8.3865 8.78087 6.76457 11.2477 6.34908V5.00623H13.7508V6.39413C15.921 6.90724 16.7545 8.71314 16.7545 9.99716H15.503L14.2514 10.0197C14.2339 9.54412 13.9823 8.74568 12.4992 8.74568C10.8735 8.74568 9.99613 9.39019 9.99613 9.99716C9.99613 10.4652 9.99613 11.2487 12.4992 11.2487C16.8546 11.2487 17.5054 13.6002 17.5054 15.0031C17.5054 16.6138 16.2176 18.2357 13.7508 18.6512V20.0091H11.2477V18.6575C8.3203 18.1982 7.49303 16.1507 7.49303 15.0031H9.99613C10.0099 15.1821 10.1951 16.2546 12.4992 16.2546C14.2264 16.2546 15.0023 15.5225 15.0023 15.0031C15.0023 14.5964 15.0023 13.7516 12.4992 13.7516Z",fill:"#E1E1E1"})],-1),k1=[V1],x1=["onClick","textContent"],H1=e("button",{class:"btn btn-sm bg-transparent rounded",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"true","data-cy":"deletedropdown"},[e("i",{class:"bi bi-three-dots-vertical"})],-1),B1=e("div",null,null,-1),P1={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},$1={class:"d-flex gap-4"},E1=["onClick"],N1={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},S1={class:"modal-dialog modal-dialog-centered"},T1={class:"modal-content"},D1=e("div",{class:"modal-header text-center border-0"},[e("h5",{class:"modal-title w-100",id:"staticBackdropLabel"}," Are you sure you want to delete? ")],-1),M1={class:"modal-footer pull-right justify-content-center border-0"},A1=e("button",{type:"button",class:"btn btn-secondary-outline","data-bs-dismiss":"modal","data-cy":"cancelProjectListdelete"}," Cancel ",-1),I1={class:"d-flex"},U1={setup(w){const C=l(!0),_=l([]),r=S(),V=l(!0),p=l([]),k=l(""),u=c1.exports.useToast(),v=l(),h=l(50),m=l(1),x=l(null),g=l(""),b=l([]);async function o(){try{const a=await a1(r,m==null?void 0:m._rawValue);a.status===200&&(_.value=a.data.data)}catch{u.error(response.data.message)}}o();async function d(){try{const a=await s1(r,g.value,m.value);a.status===200&&(V.value=!1,b.value=a.data.data)}catch{u.error("Something went wrong, please try again later")}}async function D(a){try{const i=await l1(r,a);i.status===204&&(o(),u.success(i.data.message),_.value.length===1&&location.reload())}catch{u.error(response.data.message)}}async function Z(a){try{const i=await j(a);i.status===200&&(p.value=i.data.clients)}catch{u.error(response.data.message)}}Z(r);async function H(a,i,E,t,N,s,q){try{const A=await n1({project_name:i,client_id:E,client_name:t,billable:N,status:s},r,q);A.status==200&&(o(),u.success(A.data.message))}catch{u.error(response.data.message)}finally{a.target.blur()}}async function F(a){try{const i=await o1(r,a);C.value=!1,i.status==200&&(alert(i.data.message),o())}catch{u.error(response.data.message)}}function M(a){return a=="1"?"Disabled":"Enabled"}function K(a){return a==!0?"Billable":"Non Billable"}const R=a=>{m.value=a,o()};return(a,i)=>{const E=O("vue-awesome-paginate");return n(),c(L,null,[e("div",C1,[e("div",_1,[f(e("input",{type:"text",placeholder:"Search..","onUpdate:modelValue":i[0]||(i[0]=t=>g.value=t),onInput:d,"data-cy":"projectsSearchButton"},null,544),[[T,g.value]])])]),e("table",m1,[b1,e("tbody",null,[(n(!0),c(L,null,$(V.value?_.value:b.value,(t,N)=>(n(),c("tr",{key:t.id},[e("td",null,B(N+1),1),e("td",null,[f(e("input",{class:"edit",type:"text","onUpdate:modelValue":s=>t.project_name=s,style:{width:"fit-content"},"data-cy":"projectNameEdit",onChange:s=>H(s,t.project_name,t.client.id,t.client.client_name,t.billable,t.status,t.project_id),onKeyup:G(s=>H(s,t.project_name,t.client.id,t.client.client_name,t.billable,t.status,t.project_id),["enter"])},null,40,h1),[[T,t.project_name]])]),e("td",null,[t.client.client_name?f((n(),c("select",{key:0,id:"client-id",class:"clientSelect","onUpdate:modelValue":s=>t.client.id=s,error:k.value,"data-cy":"clientSelectList",onChange:s=>H(s,t.project_name,t.client.id,t.client.client_name,t.billable,t.status,t.project_id)},[(n(!0),c(L,null,$(p.value,s=>(n(),c("option",{key:s.id,value:s.id,text:s.client_name,"data-cy":"clientSelectList"},null,8,v1))),128))],40,p1)),[[U,t.client.id]]):P("",!0)]),e("td",null,[e("span",{style:{cursor:"pointer"},title:t.billable?"Billable":"Non billable","data-cy":"toggleBillablility",onClick:s=>H(s,t.project_name,t.client.id,t.client.client_name,t.billable,t.status,t.project_id)},[K(t.billable)==="Billable"?(n(),c("p",{key:0,"data-cy":"toggleBillable",class:"my-1",onClick:()=>t.billable=!1},f1,8,L1)):(n(),c("p",{key:1,class:"my-1","data-cy":"toggleNonBillable",onClick:()=>t.billable=!0},k1,8,w1))],8,y1)]),e("td",null,B(M(t.status)),1),e("td",null,[e("button",{class:"btn btn-light btn-sm",onClick:s=>F(t.project_id),textContent:B(M(t.status)==="Enabled"?"Disable":"Enable"),"data-cy":"toggleStatus"},null,8,x1)]),e("td",null,[H1,B1,e("ul",P1,[e("div",$1,[e("li",null,[e("button",{type:"button",class:"btn btn-light btn-sm mx-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop","data-cy":"deleteTimeLog",onClick:s=>x.value=t.project_id}," Delete ",8,E1)])])]),e("div",N1,[e("div",S1,[e("div",T1,[D1,e("div",M1,[A1,e("button",{type:"button",class:"btn btn-primary-outline text-primary",onClick:i[1]||(i[1]=s=>D(x.value)),"data-bs-dismiss":"modal","data-cy":"deleteProjectList"}," Delete ")])])])])])]))),128))])]),e("div",I1,[y(E,{"data-cy":"paginateProjectList","total-items":v.value,"items-per-page":Number(h.value),"max-pages-shown":2,"current-page":m.value,"on-click":R},null,8,["total-items","items-per-page","current-page"])])],64)}}};const j1=["onSubmit"],Z1={class:"border rounded shadow-sm"},F1={key:1},K1={class:"my-2 mx-2 d-flex justify-content-between gap-4"},R1=["error"],q1=e("option",{value:"",disabled:""},"Select Client",-1),z1=["value","textContent"],J1=["title"],O1={key:0,class:"my-1"},G1=e("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.0425435 15.8391C0.0845944 15.9979 0.157671 16.1467 0.257557 16.2771C0.357444 16.4075 0.482162 16.5168 0.624515 16.5988L3.01498 17.9804V20.7324C3.01498 21.0643 3.14684 21.3827 3.38155 21.6174C3.61626 21.8521 3.9346 21.9839 4.26653 21.9839H7.01869L8.4004 24.3743C8.5112 24.5637 8.6694 24.721 8.85944 24.8307C9.04948 24.9404 9.26481 24.9987 9.48424 25C9.70201 25 9.91853 24.9424 10.1113 24.831L12.4992 23.4507L14.8897 24.8323C15.1771 24.998 15.5185 25.043 15.839 24.9574C16.1594 24.8717 16.4329 24.6625 16.5993 24.3755L17.9798 21.9852H20.7319C21.0639 21.9852 21.3822 21.8533 21.6169 21.6186C21.8516 21.3839 21.9835 21.0656 21.9835 20.7337V17.9817L24.3739 16.6C24.5163 16.5177 24.6411 16.4082 24.7411 16.2777C24.8412 16.1471 24.9145 15.9982 24.9569 15.8393C24.9993 15.6804 25.01 15.5147 24.9884 15.3517C24.9667 15.1887 24.9132 15.0315 24.8308 14.8892L23.4503 12.5001L24.832 10.1123C24.9981 9.82501 25.0432 9.48354 24.9576 9.16296C24.8719 8.84238 24.6624 8.56894 24.3752 8.40277L21.9847 7.02113V4.26785C21.9847 3.93594 21.8529 3.61762 21.6182 3.38292C21.3835 3.14822 21.0651 3.01636 20.7332 3.01636H17.981L16.6006 0.627274C16.4338 0.340579 16.1609 0.131066 15.8409 0.0440808C15.6821 0.00104953 15.5164 -0.0100463 15.3534 0.0114365C15.1903 0.0329193 15.0331 0.0865535 14.8909 0.16923L12.4992 1.54962L10.11 0.167978C9.82272 0.00192378 9.48122 -0.0432384 9.16063 0.0424215C8.84003 0.128081 8.56658 0.337551 8.4004 0.624771L7.01869 3.01511H4.26653C3.9346 3.01511 3.61626 3.14697 3.38155 3.38167C3.14684 3.61636 3.01498 3.93469 3.01498 4.2666V7.01862L0.624515 8.40026C0.337362 8.56715 0.128054 8.84103 0.0424328 9.16192C-0.0431888 9.48281 0.00185488 9.82455 0.167699 10.1123L1.54941 12.5001L0.167699 14.888C0.00247818 15.1762 -0.0424891 15.5179 0.0425435 15.8391ZM12.4992 13.7516C8.14383 13.7516 7.49303 11.4001 7.49303 9.99716C7.49303 8.3865 8.78087 6.76457 11.2477 6.34908V5.00623H13.7508V6.39413C15.921 6.90724 16.7545 8.71314 16.7545 9.99716H15.503L14.2514 10.0197C14.2339 9.54412 13.9823 8.74568 12.4992 8.74568C10.8735 8.74568 9.99613 9.39019 9.99613 9.99716C9.99613 10.4652 9.99613 11.2487 12.4992 11.2487C16.8546 11.2487 17.5054 13.6002 17.5054 15.0031C17.5054 16.6138 16.2176 18.2357 13.7508 18.6512V20.0091H11.2477V18.6575C8.3203 18.1982 7.49303 16.1507 7.49303 15.0031H9.99613C10.0099 15.1821 10.1951 16.2546 12.4992 16.2546C14.2264 16.2546 15.0023 15.5225 15.0023 15.0031C15.0023 14.5964 15.0023 13.7516 12.4992 13.7516Z",fill:"#E1E1E1"})],-1),Q1=[G1],W1={key:1,class:"my-1"},X1=e("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"red",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.0425435 15.8391C0.0845944 15.9979 0.157671 16.1467 0.257557 16.2771C0.357444 16.4075 0.482162 16.5168 0.624515 16.5988L3.01498 17.9804V20.7324C3.01498 21.0643 3.14684 21.3827 3.38155 21.6174C3.61626 21.8521 3.9346 21.9839 4.26653 21.9839H7.01869L8.4004 24.3743C8.5112 24.5637 8.6694 24.721 8.85944 24.8307C9.04948 24.9404 9.26481 24.9987 9.48424 25C9.70201 25 9.91853 24.9424 10.1113 24.831L12.4992 23.4507L14.8897 24.8323C15.1771 24.998 15.5185 25.043 15.839 24.9574C16.1594 24.8717 16.4329 24.6625 16.5993 24.3755L17.9798 21.9852H20.7319C21.0639 21.9852 21.3822 21.8533 21.6169 21.6186C21.8516 21.3839 21.9835 21.0656 21.9835 20.7337V17.9817L24.3739 16.6C24.5163 16.5177 24.6411 16.4082 24.7411 16.2777C24.8412 16.1471 24.9145 15.9982 24.9569 15.8393C24.9993 15.6804 25.01 15.5147 24.9884 15.3517C24.9667 15.1887 24.9132 15.0315 24.8308 14.8892L23.4503 12.5001L24.832 10.1123C24.9981 9.82501 25.0432 9.48354 24.9576 9.16296C24.8719 8.84238 24.6624 8.56894 24.3752 8.40277L21.9847 7.02113V4.26785C21.9847 3.93594 21.8529 3.61762 21.6182 3.38292C21.3835 3.14822 21.0651 3.01636 20.7332 3.01636H17.981L16.6006 0.627274C16.4338 0.340579 16.1609 0.131066 15.8409 0.0440808C15.6821 0.00104953 15.5164 -0.0100463 15.3534 0.0114365C15.1903 0.0329193 15.0331 0.0865535 14.8909 0.16923L12.4992 1.54962L10.11 0.167978C9.82272 0.00192378 9.48122 -0.0432384 9.16063 0.0424215C8.84003 0.128081 8.56658 0.337551 8.4004 0.624771L7.01869 3.01511H4.26653C3.9346 3.01511 3.61626 3.14697 3.38155 3.38167C3.14684 3.61636 3.01498 3.93469 3.01498 4.2666V7.01862L0.624515 8.40026C0.337362 8.56715 0.128054 8.84103 0.0424328 9.16192C-0.0431888 9.48281 0.00185488 9.82455 0.167699 10.1123L1.54941 12.5001L0.167699 14.888C0.00247818 15.1762 -0.0424891 15.5179 0.0425435 15.8391ZM12.4992 13.7516C8.14383 13.7516 7.49303 11.4001 7.49303 9.99716C7.49303 8.3865 8.78087 6.76457 11.2477 6.34908V5.00623H13.7508V6.39413C15.921 6.90724 16.7545 8.71314 16.7545 9.99716H15.503L14.2514 10.0197C14.2339 9.54412 13.9823 8.74568 12.4992 8.74568C10.8735 8.74568 9.99613 9.39019 9.99613 9.99716C9.99613 10.4652 9.99613 11.2487 12.4992 11.2487C16.8546 11.2487 17.5054 13.6002 17.5054 15.0031C17.5054 16.6138 16.2176 18.2357 13.7508 18.6512V20.0091H11.2477V18.6575C8.3203 18.1982 7.49303 16.1507 7.49303 15.0031H9.99613C10.0099 15.1821 10.1951 16.2546 12.4992 16.2546C14.2264 16.2546 15.0023 15.5225 15.0023 15.0031C15.0023 14.5964 15.0023 13.7516 12.4992 13.7516Z",fill:"#FA602D"})],-1),Y1=[X1],e2=e("button",{type:"submit",class:"btn btn-secondary",style:{width:"15%"},"data-cy":"newProjectCreateButton"}," ADD PROJECT ",-1),t2={setup(w){const C=l(""),_=l(""),r=l("0"),V=l(1),p=l([]),k=l(""),u=l(""),v=l(!1),h=l([]),m=S();async function x(b){try{const o=await j(b);o.status===200&&(p.value=o.data.clients)}catch{alert(response.data.message)}}x(m);async function g(){if(k.value="",u.value="",h.value=[],v.value=!1,r1(C.value),k.value===""&&u.value===""&&h.value.length===0)try{const{user:{id:b}}=X();r.value=r.value===!0?"1":"0";const o={project_name:C.value,client_id:_.value,billable:r.value,status:V.value,user_id:b},d=S();(await i1(o,d)).status===200&&(v.value=!0,location.reload(),setTimeout(()=>{v.value=!1},3e3),C.value="",_.value="",r.value="")}catch{h.value.push(response.data.message)}}return(b,o)=>(n(),c("form",{onSubmit:W(g,["prevent"])},[e("div",Z1,[v.value?(n(),Q(I,{key:0,message:"Project added successfully!","hex-font-color":"198754"})):P("",!0),h.value.length?(n(),c("div",F1,[(n(!0),c(L,null,$(h.value,d=>(n(),c("div",{key:d},[y(I,{message:d,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):P("",!0),e("div",K1,[f(e("input",{type:"text",class:"form-control",id:"project_name","aria-describedby":"project_name",placeholder:"Please enter name for your project.","onUpdate:modelValue":o[0]||(o[0]=d=>C.value=d),"data-cy":"addProjectname",required:""},null,512),[[T,C.value]]),p.value.length?f((n(),c("select",{key:0,id:"client-id",class:"form-select","onUpdate:modelValue":o[1]||(o[1]=d=>_.value=d),"aria-label":"clients","data-cy":"selectClient",error:u.value,required:"",style:{border:"0",width:"fit-content"}},[q1,(n(!0),c(L,null,$(p.value,d=>(n(),c("option",{key:d.id,value:d.id,textContent:B(d.client_name),"data-cy":"selectClientName"},null,8,z1))),128))],8,R1)),[[U,_.value]]):P("",!0),e("span",{class:"dollar",title:r.value?"Billable":"Non billable",onClick:o[2]||(o[2]=d=>r.value=!r.value),"data-cy":"toggleBillable"},[r.value===!1?(n(),c("p",O1,Q1)):(n(),c("p",W1,Y1))],8,J1),e2])])],40,j1))}},u2={setup(w){const C=Y();return C.userStatus=!1,(_,r)=>(n(),c(L,null,[y(e1),e("main",null,[y(t1,{title:"Projects"}),y(t2),y(U1)])],64))}};export{u2 as default};
