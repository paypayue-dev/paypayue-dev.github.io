"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3420],{814:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(4848),r=n(8453),l=n(4660),i=n(1470),o=n(9365);const s={},u="Pago con MB WAY utilizando el n\xfamero de tel\xe9fono m\xf3vil",c={id:"payments/payment-mbway",title:"Pago con MB WAY utilizando el n\xfamero de tel\xe9fono m\xf3vil",description:"Para iniciar un pago a trav\xe9s de MB WAY \xfanicamente se necesita el n\xfamero de tel\xe9fono m\xf3vil asociado a la cuenta de MB WAY.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/payments/payment-mbway.mdx",sourceDirName:"payments",slug:"/payments/payment-mbway",permalink:"/es/payments/payment-mbway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Cambiar el monto de un pago preautorizado",permalink:"/es/payments/payment-adjust-amount"},next:{title:"Pago con MB WAY registrado",permalink:"/es/payments/payment-method-mbway"}},d={},p=[{value:"1. Env\xedo de la notificaci\xf3n de pago MB WAY",id:"1-env\xedo-de-la-notificaci\xf3n-de-pago-mb-way",level:3},{value:"POST /payments",id:"post-payments",level:4},{value:"2. El usuario valida el pago en la aplicaci\xf3n MB WAY",id:"2-el-usuario-valida-el-pago-en-la-aplicaci\xf3n-mb-way",level:3},{value:"3. Consulta del estado del pago",id:"3-consulta-del-estado-del-pago",level:3},{value:"GET \u200b/payments/{id}",id:"get-paymentsid",level:4}];function m(t){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"pago-con-mb-way-utilizando-el-n\xfamero-de-tel\xe9fono-m\xf3vil",children:"Pago con MB WAY utilizando el n\xfamero de tel\xe9fono m\xf3vil"}),"\n",(0,a.jsx)(e.p,{children:"Para iniciar un pago a trav\xe9s de MB WAY \xfanicamente se necesita el n\xfamero de tel\xe9fono m\xf3vil asociado a la cuenta de MB WAY."}),"\n",(0,a.jsx)(e.p,{children:"El proceso funciona como sigue:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Env\xedo de la notificaci\xf3n de pago a la aplicaci\xf3n MB WAY (la notificaci\xf3n expira despu\xe9s de 5-10 minutos);"}),"\n",(0,a.jsx)(e.li,{children:"El usuario confirma el pago en la aplicaci\xf3n;"}),"\n",(0,a.jsx)(e.li,{children:"Consulta del estado del pago (opcional si tiene una suscripci\xf3n a un webhook)."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"El siguiente flujo ilustra el funcionamiento del pago por MB WAY:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"MB WAY flow",src:n(5965).A+"",width:"689",height:"750"})}),"\n",(0,a.jsx)(e.h3,{id:"1-env\xedo-de-la-notificaci\xf3n-de-pago-mb-way",children:"1. Env\xedo de la notificaci\xf3n de pago MB WAY"}),"\n",(0,a.jsx)(e.h4,{id:"post-payments",children:"POST /payments"}),"\n","\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,l.A)("payments","payments/post/payments"),children:(0,a.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{value:"solicitud",label:"Solicitud",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"type": "payment",\n\t"amount": 100,\n\t"callbackUrl": "https://teste.pt", // Opcional se usar webhooks\n\t"paymentMethod": {\n\t\t"code": "MW",\n\t\t"details": {\n\t\t\t"phoneNumber": "351#123456789"\n\t\t}\n\t}\n}\n'})})}),(0,a.jsx)(o.A,{value:"respuesta",label:"Respuesta",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-10-07T18:09:41+01:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "42373",\n\t\t"referenceDetails": {\n\t\t\t"reference": "A0000A585"\n\t\t},\n\t\t"stateDetails": {\n\t\t\t"state": "pending_confirmation"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "MW",\n\t\t\t"type": "DEFAULT",\n\t\t\t"details": {\n\t\t\t\t"phoneNumber": "351#123456789",\n\t\t\t\t"countryCode": "351",\n\t\t\t\t"last3Digits": "263"\n\t\t\t}\n\t\t},\n\t\t"amount": 10,\n\t\t"createdAt": "2021-10-07T18:06:46+01:00",\n\t\t"updatedAt": "2021-10-07T18:06:46+01:00",\n\t\t"validDate": {\n\t\t\t"start": "2021-10-07T18:06:46+01:00",\n\t\t\t"end": "2021-10-07T18:36:46+01:00"\n\t\t},\n\t\t"availableMethods": [\n\t\t\t{\n\t\t\t\t"code": "MW",\n\t\t\t\t"type": "DEFAULT",\n\t\t\t\t"name": "MB WAY"\n\t\t\t}\n\t\t]\n\t}\n}\n'})})})]}),"\n",(0,a.jsx)(e.h3,{id:"2-el-usuario-valida-el-pago-en-la-aplicaci\xf3n-mb-way",children:"2. El usuario valida el pago en la aplicaci\xf3n MB WAY"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"MB WAY confirmed",src:n(6220).A+"",width:"384",height:"682"})}),"\n",(0,a.jsx)(e.h3,{id:"3-consulta-del-estado-del-pago",children:"3. Consulta del estado del pago"}),"\n",(0,a.jsx)(e.h4,{id:"get-paymentsid",children:"GET \u200b/payments/{id}"}),"\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right btn-api--move-top",onClick:()=>(0,l.A)("payments","payments/get/payments/{id}"),children:(0,a.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-10-18T11:45:12+01:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "42373",\n\t\t"referenceDetails": {\n\t\t\t"reference": "A0000A585"\n\t\t},\n\t\t"stateDetails": {\n\t\t\t"state": "confirmed",\n\t\t\t"createdAt": "2021-10-07T18:07:46+01:00"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "MW",\n\t\t\t"type": "DEFAULT",\n\t\t\t"details": {\n\t\t\t\t"countryCode": "351",\n\t\t\t\t"last3Digits": "263"\n\t\t\t}\n\t\t},\n\t\t"amount": 100,\n\t\t"createdAt": "2021-10-07T18:06:46+01:00",\n\t\t"updatedAt": "2021-10-07T18:06:46+01:00",\n\t\t"validDate": {\n\t\t\t"start": "2021-10-07T18:06:46+01:00",\n\t\t\t"end": "2021-10-07T18:36:46+01:00"\n\t\t},\n\t\t"availableMethods": [\n\t\t\t{\n\t\t\t\t"code": "MW",\n\t\t\t\t"type": "DEFAULT",\n\t\t\t\t"name": "MB WAY"\n\t\t\t}\n\t\t],\n\t\t"paymentFee": {\n\t\t\t"netAmount": "0.27750000",\n\t\t\t"taxAmount": "0.04995000",\n\t\t\t"invoiceDetails": null\n\t\t}\n\t}\n}\n'})})]})}function f(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(m,{...t})}):m(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>i});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function i(t){var e=t.children,n=t.hidden,i=t.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>x});var a=n(6540),r=n(4164),l=n(3104),i=n(6347),o=n(205),s=n(7485),u=n(1682),c=n(9466);function d(t){var e,n;return null!=(e=null==(n=a.Children.toArray(t).filter((function(t){return"\n"!==t})).map((function(t){if(!t||(0,a.isValidElement)(t)&&((e=t.props)&&"object"==typeof e&&"value"in e))return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?e:[]}function p(t){var e=t.values,n=t.children;return(0,a.useMemo)((function(){var t=null!=e?e:function(t){return d(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(n);return function(t){var e=(0,u.X)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function m(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function f(t){var e=t.queryString,n=void 0!==e&&e,r=t.groupId,l=(0,i.W6)(),o=function(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,s.aZ)(o),(0,a.useCallback)((function(t){if(o){var e=new URLSearchParams(l.location.search);e.set(o,t),l.replace(Object.assign({},l.location,{search:e.toString()}))}}),[o,l])]}function h(t){var e,n,r,l,i=t.defaultValue,s=t.queryString,u=void 0!==s&&s,d=t.groupId,h=p(t),v=(0,a.useState)((function(){return function(t){var e,n=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:h})})),b=v[0],g=v[1],y=f({queryString:u,groupId:d}),A=y[0],j=y[1],x=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:d}.groupId),n=(0,c.Dv)(e),r=n[0],l=n[1],[r,(0,a.useCallback)((function(t){e&&l.set(t)}),[e,l])]),w=x[0],T=x[1],E=function(){var t=null!=A?A:w;return m({value:t,tabValues:h})?t:null}();return(0,o.A)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(t){if(!m({value:t,tabValues:h}))throw new Error("Can't select invalid tab value="+t);g(t),j(t),T(t)}),[j,T,h]),tabValues:h}}var v=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function y(t){var e=t.className,n=t.block,a=t.selectedValue,i=t.selectValue,o=t.tabValues,s=[],u=(0,l.a_)().blockElementScrollPositionUntilNextRender,c=function(t){var e=t.currentTarget,n=s.indexOf(e),r=o[n].value;r!==a&&(u(e),i(r))},d=function(t){var e,n=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":var a,r=s.indexOf(t.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var l,i=s.indexOf(t.currentTarget)-1;n=null!=(l=s[i])?l:s[s.length-1]}null==(e=n)||e.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e),children:o.map((function(t){var e=t.value,n=t.label,l=t.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:function(t){return s.push(t)},onKeyDown:d,onClick:c},l,{className:(0,r.A)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===e}),children:null!=n?n:e}),e)}))})}function A(t){var e=t.lazy,n=t.children,r=t.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){var i=l.find((function(t){return t.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==r})}))})}function j(t){var e=h(t);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(y,Object.assign({},e,t)),(0,g.jsx)(A,Object.assign({},e,t))]})}function x(t){var e=(0,v.A)();return(0,g.jsx)(j,Object.assign({},t,{children:d(t.children)}),String(e))}},4660:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(6321);const r=function(t,e){void 0===e&&(e=null);var n=document.getElementById("iframePanel"),r=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");r.length>0&&r.forEach((function(t){return t.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+t,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+e,(0,a.A)()}},6220:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/mbway-confirmed-718efdfad5fb6ec82180a6d929742507.jpg"},5965:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/mbway_flow-90cc08d2ca1fc46d43ab7db38028ccc8.jpg"},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var a=n(6540);const r={},l=a.createContext(r);function i(t){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(l.Provider,{value:e},t.children)}}}]);