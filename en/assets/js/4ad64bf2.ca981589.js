"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4726],{5779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=n(4848),r=n(8453),i=n(4660),o=n(1470),s=n(9365);const u={},l="Payment with registered MB WAY",c={id:"payments/payment-method-mbway",title:"Payment with registered MB WAY",description:"With a registered MB WAY mobile phone it is now possible to immediately request payment.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/payments/payment-method-mbway.mdx",sourceDirName:"payments",slug:"/payments/payment-method-mbway",permalink:"/en/payments/payment-method-mbway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Payment with MB WAY using mobile phone number",permalink:"/en/payments/payment-mbway"},next:{title:"Registered card payment",permalink:"/en/payments/payment-method-token"}},d={},m=[{value:"1. OObtain UUID of registered payment method",id:"1-oobtain-uuid-of-registered-payment-method",level:3},{value:"2. Payment with sending payment method",id:"2-payment-with-sending-payment-method",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"payment-with-registered-mb-way",children:"Payment with registered MB WAY"}),"\n",(0,a.jsx)(t.p,{children:"With a registered MB WAY mobile phone it is now possible to immediately request payment."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Obtain UUID of registered payment method;"}),"\n",(0,a.jsx)(t.li,{children:"Payment with sending payment method."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1-oobtain-uuid-of-registered-payment-method",children:"1. OObtain UUID of registered payment method"}),"\n",(0,a.jsxs)(t.p,{children:["Obtaining the UUID of the payment method can be done via ",(0,a.jsx)(t.a,{href:"/en/paymentMethods/getPaymentMethods",children:"View payment methods saved by the customer"})]}),"\n",(0,a.jsx)(t.h3,{id:"2-payment-with-sending-payment-method",children:"2. Payment with sending payment method"}),"\n",(0,a.jsx)(t.p,{children:"Make a payment request by sending the UUID of the customer and the UUID of the payment method."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"In the case of MB WAY it always requires validation in the application."}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"POST"})," /payments"]}),"\n"]}),"\n","\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,i.A)("payments","payments/post/payments"),children:(0,a.jsxs)("span",{children:["View API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"request",label:"Request",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"type": "payment",\n\t"amount": 100,\n\t"customer": {\n\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2"\n\t},\n\t"paymentMethod": {\n\t\t"uuid": "90068f83-7623-4de5-91c7-ac447c504ebf"\n\t}\n}\n'})})}),(0,a.jsx)(s.A,{value:"response",label:"Response",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.4.0",\n\t"date": "2022-01-10T13:04:22+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "42786",\n\t\t"type": "payment",\n\t\t"referenceDetails": {\n\t\t\t"reference": "A0000A722"\n\t\t},\n\t\t"stateDetails": {\n\t\t\t"state": "pending_confirmation",\n\t\t\t"createdAt": "2022-01-10T10:29:13+00:00"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"uuid": "90068f83-7623-4de5-91c7-ac447c504ebf",\n\t\t\t"code": "MW",\n\t\t\t"type": "DEFAULT",\n\t\t\t"details": {\n\t\t\t\t"phoneNumber": "351#961879263",\n\t\t\t\t"createRegistration": true\n\t\t\t}\n\t\t},\n\t\t"amount": 10,\n\t\t"createdAt": "2022-01-10T10:28:14+00:00",\n\t\t"updatedAt": "2022-01-10T11:39:39+00:00",\n\t\t"validDate": {\n\t\t\t"start": "2022-01-10T10:28:14+00:00",\n\t\t\t"end": "2022-07-10T23:59:59+01:00"\n\t\t},\n\t\t"availableMethods": [],\n\t\t"paymentFee": {\n\t\t\t"netAmount": "0.00095000",\n\t\t\t"taxAmount": "0.00017100"\n\t\t},\n\t\t"customer": {\n\t\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2",\n\t\t\t"customerId": "agashf123",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"email": "email@mail.com",\n\t\t\t"createdAt": "2022-01-10T10:28:14+00:00"\n\t\t}\n\t}\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),r=n(4164),i=n(3104),o=n(6347),s=n(205),u=n(7485),l=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.W6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,u.aZ)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function f(e){var t,n,r,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,d=e.groupId,f=m(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:f})})),y=b[0],v=b[1],g=p({queryString:l,groupId:d}),w=g[0],x=g[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),A=j[0],I=j[1],k=function(){var e=null!=w?w:A;return h({value:e,tabValues:f})?e:null}();return(0,s.A)((function(){k&&v(k)}),[k]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),x(e),I(e)}),[x,I,f]),tabValues:f}}var b=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,u=[],l=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==a&&(l(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;n=null!=(i=u[o])?i:u[u.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},i,{className:(0,r.A)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,v.jsx)(g,Object.assign({},t,e)),(0,v.jsx)(w,Object.assign({},t,e))]})}function j(e){var t=(0,b.A)();return(0,v.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6321);const r=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),r=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");r.length>0&&r.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,a.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(6540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);