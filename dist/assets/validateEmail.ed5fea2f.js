/* empty css                                                  */import{o as l,c as i,a,e as d,t as s,h as o,F as u}from"./index.2098a330.js";const m=["for"],c=a("span",{class:"required-asterisk"},"*",-1),f=["type","id","name","value","disabled"],g=["textContent"],V={props:{type:{type:String,required:!0},name:{type:String,required:!0},label:{type:String,required:!0},modelValue:{type:String,required:!0},error:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},setup(e){return(t,r)=>(l(),i(u,null,[a("label",{for:e.name,class:"form-label mt-4"},[d(s(e.label)+" ",1),c],8,m),a("input",{type:e.type,class:"form-control mt-1",id:e.name,name:e.name,value:e.modelValue,disabled:e.disabled,onInput:r[0]||(r[0]=n=>t.$emit("update:modelValue",n.target.value)),required:"","data-cy":"emailInputField"},null,40,f),e.error?(l(),i("div",{key:0,class:"form-text text-danger",textContent:s(e.error)},null,8,g)):o("",!0)],64))}};function b(e){const t={isValid:!0,errorMessage:""},r=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;if(e){if(!r.test(e))return t.isValid=!1,t.errorMessage="Please enter an valid email.",t}else return t.isValid=!1,t.errorMessage="Email field is required.",t;return t}export{V as _,b as v};
