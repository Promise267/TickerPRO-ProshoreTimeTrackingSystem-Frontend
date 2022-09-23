import{r as n,f as E,o as c,c as v,a as t,u as l,b as i,F as h,g as L,h as N,i as B,j as F,w as R,R as S,e as $,k as U,l as C,m as M}from"./index.bff4561a.js";import{_ as y}from"./BaseAlert.vue_vue_type_style_index_0_lang.11a88c78.js";import{_ as T}from"./BaseFormHeading.6b12e78e.js";import{_ as j}from"./BaseAlert.38e43c22.js";import{v as O}from"./validateEmail.6be92a2d.js";import{v as q}from"./validatePassword.1dd98178.js";import{l as A}from"./logo.f5257f33.js";import{_ as D}from"./PasswordToggle.47b6b6ed.js";function I(p){localStorage.setItem("user",JSON.stringify(p))}const J=["src"],W={class:"d-grid col-md-8 col-lg-5 mx-auto"},z={key:0},G=["onSubmit"],H={class:"mb-3"},K={class:"input_form"},Q=$("Forgot password?"),X={class:"d-grid"},Y=["disabled"],ne={setup(p){const g=U(),f=C().query.next,e=n({email:"",password:""}),u=n(""),d=n(""),o=n([]);let r=n(!1);const b=E(()=>e.value.email===""||e.value.password==="");async function P(){o.value=[],u.value="",d.value="";const{isValid:w,errorMessage:a}=O(e.value.email),{isValid:s,errorMessage:V}=q(e.value.password);if(w||(u.value=a,e.value.email=""),s||(d.value=V,e.value.password=""),o.value.length===0&&!d.value&&!u.value){const x={email:e.value.email,password:e.value.password};try{const m=await M(x),{data:_,status:k}=m;_&&k===200&&(I(_),f?g.push(f):g.push({name:"tracker"}))}catch(m){m.message==="Network Error"?o.value.push("Something went wrong, please try again later."):m.response.status===401?(o.value.push("Please enter valid email or password."),e.value.email="",e.value.password=""):(o.value.push("Could not login right now. Please try again later."),e.value.email="",e.value.password="")}}}return(w,a)=>(c(),v(h,null,[t("img",{src:l(A),alt:"Proshore Ticker logo",class:"logo"},null,8,J),t("div",W,[i(T,{title:"Log in",shortDesc:"Welcome back!"}),o.value.length?(c(),v("div",z,[(c(!0),v(h,null,L(o.value,s=>(c(),v("div",{key:s},[i(j,{message:s,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):N("",!0),t("form",{onSubmit:B(P,["prevent"])},[t("div",H,[i(y,{type:"email",name:"email",label:"Email address",modelValue:e.value.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.email=s),error:u.value,"data-cy":"loginEmailAddress"},null,8,["modelValue","error"]),t("div",K,[i(y,{type:l(r)?"text":"password",name:"password",label:"Password",modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.password=s),error:d.value,"data-cy":"loginPassword"},null,8,["type","modelValue","error"]),i(D,{showPassword:l(r),onTogglePassword:a[2]||(a[2]=s=>F(r)?r.value=!l(r):r=!l(r))},null,8,["showPassword"])])]),i(l(S),{to:{name:"passwordForgot"},class:"forgot-password","data-cy":"loginForgetPassword"},{default:R(()=>[Q]),_:1}),t("div",X,[t("button",{type:"submit",class:"btn btn-primary text-white",disabled:l(b),"data-cy":"loginButton"}," Log in ",8,Y)])],40,G)])],64))}};export{ne as default};
