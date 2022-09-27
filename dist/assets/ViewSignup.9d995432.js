import{r as n,f as j,s as D,o as r,c as l,a as i,u as t,b as o,w as b,h as k,F as C,g as Y,i as z,j as x,e as m,l as G,v as H}from"./index.2098a330.js";import{_ as c,v as I}from"./validateEmail.ed5fea2f.js";import{_ as J}from"./BaseFormHeading.8c0d0d1d.js";import{_ as K}from"./BaseAlert.bad116cb.js";import{v as O}from"./validatePassword.1dd98178.js";import{v as Q}from"./validateName.9f9d9069.js";import{_ as U}from"./PasswordToggle.89e49c97.js";import{i as W}from"./index.min.e860ac2f.js";import{l as X}from"./logo.f5257f33.js";/* empty css                                                  */function Z(P,v){return v?P!==v?{isValid:!1,errorMessage:"Password did not match"}:{isValid:!0,errorMessage:""}:{isValid:!1,errorMessage:"Confirm Password is required."}}const ee=["src"],ae={class:"d-grid col-md-8 col-lg-5 mx-auto"},se={key:0,class:"alert alert-success",role:"alert"},oe=m(" Signup successfully! "),re=m("Login"),le=m(" to start using Ticker. "),te={key:1,class:"alert alert-success",role:"alert"},ie=m(" Password reset successfully! "),ne=m("Login"),de=m(" to start using Ticker. "),ue={key:2},me=["onSubmit"],ve={class:"mb-3"},ce={key:0},pe={key:1},fe={key:2},we={key:3},_e={class:"input_form"},ge={class:"input_form"},ye={class:"d-grid"},he=["disabled"],Ve={class:"mt-4"},be=m(" Already have an account? "),ke=i("u",null,"Login",-1),Le={setup(P){const v=G(),E=v.params.token,N=v.query.email,S=v.query.name;let d=n(!1),u=n(!1);const M=W.exports.useToast(),e=n({name:S,email:N,password:"",passwordConfirmation:""}),p=n(""),f=n(""),g=n(""),y=n(""),w=n([]),h=n(!1),T=j(()=>e.value.name===""||e.value.email===""||e.value.password===""||e.value.passwordConfirmation==="");async function $(){w.value=[],p.value="",f.value="",g.value="",y.value="",h.value=!1;const{isValid:V,errorMessage:a}=Q(e.value.name),{isValid:_,errorMessage:s}=I(e.value.email),{isValid:L,errorMessage:R}=O(e.value.password),{isValid:B,errorMessage:F}=Z(e.value.password,e.value.passwordConfirmation);if(V||(p.value=a,e.value.name=""),_||(f.value=s,e.value.email=""),L||(g.value=R,e.value.password=""),B||(y.value=F,e.value.passwordConfirmation=""),w.value.length===0&&!p.value&&!g.value&&!f.value&&!y.value){const q={name:e.value.name,email:e.value.email,password:e.value.password,password_confirmation:e.value.passwordConfirmation,token:E};try{await H(q),h.value=!0,e.value.name="",e.value.email="",e.value.password="",e.value.passwordConfirmation=""}catch(A){A.response.status===401?(w.value.push("Please enter an valid email."),e.value.email=""):(M.error("You have been revoked"),e.value.password="",e.value.passwordConfirmation="")}}}return(V,a)=>{const _=D("RouterLink");return r(),l(C,null,[i("img",{src:t(X),alt:"Ticker logo",class:"logo"},null,8,ee),i("div",ae,[o(J,{title:"Sign up",shortDesc:"Start using Ticker for free."}),h.value?(r(),l("div",se,[oe,o(_,{to:{name:"login"},class:"alert-link text-decoration-underline"},{default:b(()=>[re]),_:1}),le])):k("",!0),V.passwordResetSuccess?(r(),l("div",te,[ie,o(_,{to:{name:"login"},class:"alert-link text-decoration-underline"},{default:b(()=>[ne]),_:1}),de])):k("",!0),w.value.length?(r(),l("div",ue,[(r(!0),l(C,null,Y(w.value,s=>(r(),l("div",{key:s},[o(K,{message:s,"hex-font-color":"ff0000"},null,8,["message"])]))),128))])):k("",!0),i("form",{onSubmit:z($,["prevent"])},[i("div",ve,[e.value.name?(r(),l("div",pe,[o(c,{type:"text",name:"name",label:"Full Name",modelValue:e.value.name,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.name=s),error:p.value,disabled:!0,"data-cy":"signUpName"},null,8,["modelValue","error"])])):(r(),l("div",ce,[o(c,{type:"text",name:"name",label:"Full Name",modelValue:e.value.name,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.name=s),error:p.value,disabled:!1,"data-cy":"signUpName"},null,8,["modelValue","error"])])),e.value.email?(r(),l("div",we,[o(c,{type:"text",name:"email",label:"Email Address",modelValue:e.value.email,"onUpdate:modelValue":a[3]||(a[3]=s=>e.value.email=s),error:f.value,disabled:!0,"data-cy":"signUpEmail"},null,8,["modelValue","error"])])):(r(),l("div",fe,[o(c,{type:"text",name:"email",label:"Email Adress",modelValue:e.value.email,"onUpdate:modelValue":a[2]||(a[2]=s=>e.value.email=s),error:f.value,disabled:!1,"data-cy":"signUpEmail"},null,8,["modelValue","error"])])),i("div",_e,[o(c,{type:t(d)?"text":"password",name:"password",label:"Password",modelValue:e.value.password,"onUpdate:modelValue":a[4]||(a[4]=s=>e.value.password=s),error:g.value,"data-cy":"signUpPassword"},null,8,["type","modelValue","error"]),o(U,{showPassword:t(d),onTogglePassword:a[5]||(a[5]=s=>x(d)?d.value=!t(d):d=!t(d))},null,8,["showPassword"])]),i("div",ge,[o(c,{type:t(u)?"text":"password",name:"confirm-password",label:"Confirm password",modelValue:e.value.passwordConfirmation,"onUpdate:modelValue":a[6]||(a[6]=s=>e.value.passwordConfirmation=s),error:y.value,"data-cy":"signUpConfirmPassword"},null,8,["type","modelValue","error"]),o(U,{showPassword:t(u),onTogglePassword:a[7]||(a[7]=s=>x(u)?u.value=!t(u):u=!t(u))},null,8,["showPassword"])])]),i("div",ye,[i("button",{type:"submit",class:"btn btn-primary text-white",disabled:t(T),"data-cy":"signUpSubmit"}," Sign up ",8,he)]),i("p",Ve,[be,o(_,{to:{name:"login"},class:"text-secondary fw-normal"},{default:b(()=>[ke]),_:1})])],40,me)])],64)}}};export{Le as default};
