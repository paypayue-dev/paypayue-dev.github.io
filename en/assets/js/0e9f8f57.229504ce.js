"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9073],{6480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var r=n(4848),a=n(8453),o=n(4660),s=n(1470),i=n(9365);const u={},l="Register payment method (tokenization)",c={id:"paymentMethods/tokenization",title:"Register payment method (tokenization)",description:"Tokenization is the process by which confidential payment data of customers can be securely stored by creating a token.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/paymentMethods/tokenization.mdx",sourceDirName:"paymentMethods",slug:"/paymentMethods/tokenization",permalink:"/en/paymentMethods/tokenization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Save MB WAY",permalink:"/en/paymentMethods/payment-mbway-registration"},next:{title:"Webhooks",permalink:"/en/category/webhooks"}},d={},h=[{value:"1. Obtain the UUID of the customer",id:"1-obtain-the-uuid-of-the-customer",level:3},{value:"2. Complete payment through checkout",id:"2-complete-payment-through-checkout",level:3},{value:"3. View customer payment methods",id:"3-view-customer-payment-methods",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"register-payment-method-tokenization",children:"Register payment method (tokenization)"}),"\n",(0,r.jsx)(t.p,{children:"Tokenization is the process by which confidential payment data of customers can be securely stored by creating a token.\nTo create a token, the following steps must be followed:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Obtain the UUID of the customer;"}),"\n",(0,r.jsx)(t.li,{children:"Purchase through checkout using the registered customer id."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"1-obtain-the-uuid-of-the-customer",children:"1. Obtain the UUID of the customer"}),"\n",(0,r.jsx)(t.p,{children:"The first step is to obtain the UUID of the customer who wants to register his/her payment method. This can be done through:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/en/customers/create",children:"Create customer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/en/customers/get",children:"View customer"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"2-complete-payment-through-checkout",children:"2. Complete payment through checkout"}),"\n",(0,r.jsx)(t.p,{children:"For the payment method to be available a successful payment must be completed."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n","\n",(0,r.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,o.A)("checkouts","checkouts/post/checkouts"),children:(0,r.jsxs)("span",{children:["View API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"request",label:"Request",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 100,\n\t\t"recurring": {\n\t\t\t"amountQualifier": "ESTM" // <== Montante v\xe1ri\xe1vel\n\t\t},\n\t\t"customer": {\n\t\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2" // <== ID do customer registado\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC",\n\t\t\t"details": {\n\t\t\t\t"createRegistration": true // <== Indicar que \xe9 para criar token\n\t\t\t}\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT"\n\t}\n}\n'})})}),(0,r.jsx)(i.A,{value:"response",label:"Response",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-10-20T11:34:48+01:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "Qldt1DlonfiF4HthdiCfB1DRmgM31LzmVrFjU6jk",\n\t\t"createdAt": "2021-10-20 11:34:48",\n\t\t"checkoutUrl": "http://paypay.acin.pt/paypaybeta/checkout/v2/form/Qldt1DlonfiF4HthdiCfB1DRmgM31LzmVrFjU6jk",\n\t\t"paymentId": "42380",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2021-10-20T11:34:48+01:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,r.jsx)(t.h3,{id:"3-view-customer-payment-methods",children:"3. View customer payment methods"}),"\n",(0,r.jsx)(t.p,{children:"Once the payment has been successfully completed, the payment method is added to the payment methods of the customer."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET"})," \u200b/customers\u200b/{uuid}\u200b/paymentMethods"]}),"\n"]}),"\n",(0,r.jsx)("button",{className:"btn-api btn-api--float-right btn-api--move-top",onClick:()=>(0,o.A)("customer-payment-methods","customer-payment-methods/get/customers/{uuid}/paymentMethods"),children:(0,r.jsxs)("span",{children:["View API \xa0\xa0\xa0",">"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-09-24T17:57:42+01:00",\n\t"success": true,\n\t"data": [\n\t\t{\n\t\t\t"type": "CC",\n\t\t\t"uuid": "90068f83-7623-4de5-91c7-ac447c504ebf",\n\t\t\t"brand": "VISA",\n\t\t\t"last4Digitis": "0809",\n\t\t\t"holder": "Lu\xeds Gon\xe7alves",\n\t\t\t"expireMonth": "05",\n\t\t\t"expireYear": "2026"\n\t\t},\n\t\t{\n\t\t\t"type": "MW",\n\t\t\t"uuid": "45668f83-7623-4de5-91c7-ac447c504ebf",\n\t\t\t"countryCode": "351",\n\t\t\t"last3Digitis": "263"\n\t\t}\n\t]\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),o=n(3104),s=n(6347),i=n(205),u=n(7485),l=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.W6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,u.aZ)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,s=e.defaultValue,u=e.queryString,l=void 0!==u&&u,d=e.groupId,f=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=b[0],g=b[1],y=p({queryString:l,groupId:d}),j=y[0],x=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=k[0],I=k[1],V=function(){var e=null!=j?j:w;return m({value:e,tabValues:f})?e:null}();return(0,i.A)((function(){V&&g(V)}),[V]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),I(e)}),[x,I,f]),tabValues:f}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function y(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,u=[],l=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==r&&(l(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,s=u.indexOf(e.currentTarget)-1;n=null!=(o=u[s])?o:u[u.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,a.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function x(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function k(e){var t=(0,b.A)();return(0,g.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6321);const a=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),a=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");a.length>0&&a.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,r.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);