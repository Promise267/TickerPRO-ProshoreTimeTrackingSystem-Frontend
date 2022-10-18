import{r as u,f as E,o as p,c as f,a as l,u as i,b as n,F as h,g as L,h as N,i as B,j as F,w as M,R,e as S,k as $,l as U,m as C}from"./index.50e0bec2.js";import{_ as y,v as T}from"./validateEmail.70d09725.js";import{_ as j}from"./BaseFormHeading.66c89bc1.js";import{_ as q}from"./BaseAlert.58fa7630.js";import{l as O}from"./logo.5b10267d.js";import{_ as A}from"./PasswordToggle.a9b50806.js";/* empty css                                                  */function D(d){const o={isValid:!0,errorMessage:""};return d||(o.isValid=!1,o.errorMessage="Password field is required"),o}function I(d){localStorage.setItem("user",JSON.stringify(d))}const J=["src"],W={class:"d-grid col-md-8 col-lg-5 mx-auto"},z={key:0},G=["onSubmit"],H={class:"mb-3"},K={class:"input_form"},Q=S("Forgot password?"),X={class:"d-grid"},Y=["disabled"],ie={setup(d){const o=$(),g=U().query.next,e=u({email:"",password:""}),m=u(""),c=u(""),r=u([]);let t=u(!1);const b=E(()=>e.value.email===""||e.value.password==="");async function V(){r.value=[],m.value="",c.value="";const{isValid:w,errorMessage:a}=T(e.value.email),{isValid:s,errorMessage:P}=D(e.value.password);if(w||(m.value=a,e.value.email=""),s||(c.value=P,e.value.password=""),r.value.length===0&&!c.value&&!m.value){const x={email:e.value.email,password:e.value.password};try{const v=await C(x),{data:_,status:k}=v;_&&k===200&&(I(_),g?o.push(g):o.push({name:"tracker"}))}catch(v){v.message==="Network Error"?r.value.push("Server is currently under maintainance"):v.response.status===401?(r.value.push("Please enter valid email or password."),e.value.email="",e.value.password=""):(r.value.push("Could not login right now. Please try again later."),e.value.email="",e.value.password="")}}}return(w,a)=>(p(),f(h,null,[l("img",{src:i(O),alt:"Proshore Ticker logo",class:"logo"},null,8,J),l("div",W,[n(j,{title:"Log in",shortDesc:"Welcome back!"}),r.value.length?(p(),f("div",z,[(p(!0),f(h,null,L(r.value,s=>(p(),f("div",{key:s},[n(q,{message:s,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):N("",!0),l("form",{onSubmit:B(V,["prevent"])},[l("div",H,[n(y,{type:"email",name:"email",label:"Email address",modelValue:e.value.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.email=s),error:m.value,"data-cy":"loginEmailAddress"},null,8,["modelValue","error"]),l("div",K,[n(y,{type:i(t)?"text":"password",name:"password",label:"Password",modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.password=s),error:c.value,"data-cy":"loginPassword"},null,8,["type","modelValue","error"]),n(A,{showPassword:i(t),onTogglePassword:a[2]||(a[2]=s=>F(t)?t.value=!i(t):t=!i(t))},null,8,["showPassword"])])]),n(i(R),{to:{name:"passwordForgot"},class:"forgot-password","data-cy":"loginForgetPassword"},{default:M(()=>[Q]),_:1}),l("div",X,[l("button",{type:"submit",class:"btn btn-primary text-white",disabled:i(b),"data-cy":"loginButton"}," Log in ",8,Y)])],40,G)])],64))}};export{ie as default};
