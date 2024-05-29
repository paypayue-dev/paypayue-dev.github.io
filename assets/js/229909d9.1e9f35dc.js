"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9281],{5920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=n(4848),r=n(8453),o=n(4660),i=n(1470),s=n(9365);const u={},l="Registar m\xe9todo de pagamento (tokeniza\xe7\xe3o)",c={id:"paymentMethods/tokenization",title:"Registar m\xe9todo de pagamento (tokeniza\xe7\xe3o)",description:"A tokeniza\xe7\xe3o \xe9 o processo que permite armazenar os dados de pagamento confidenciais dos clientes de forma segura por meio da cria\xe7\xe3o de um token.",source:"@site/docs/paymentMethods/tokenization.mdx",sourceDirName:"paymentMethods",slug:"/paymentMethods/tokenization",permalink:"/paymentMethods/tokenization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guardar MB WAY",permalink:"/paymentMethods/payment-mbway-registration"},next:{title:"Webhooks",permalink:"/category/webhooks"}},d={},m=[{value:"1. Obter o UUID do cliente",id:"1-obter-o-uuid-do-cliente",level:3},{value:"2. Concluir pagamento atrav\xe9s de checkout",id:"2-concluir-pagamento-atrav\xe9s-de-checkout",level:3},{value:"3. Consultar m\xe9todos de pagamento do cliente",id:"3-consultar-m\xe9todos-de-pagamento-do-cliente",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"registar-m\xe9todo-de-pagamento-tokeniza\xe7\xe3o",children:"Registar m\xe9todo de pagamento (tokeniza\xe7\xe3o)"}),"\n",(0,a.jsx)(t.p,{children:"A tokeniza\xe7\xe3o \xe9 o processo que permite armazenar os dados de pagamento confidenciais dos clientes de forma segura por meio da cria\xe7\xe3o de um token.\nPara criar um token devem ser seguidos os seguintes passos:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Obter o UUID do cliente;"}),"\n",(0,a.jsx)(t.li,{children:"Compra atrav\xe9s de checkout usando o id do cliente registado."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1-obter-o-uuid-do-cliente",children:"1. Obter o UUID do cliente"}),"\n",(0,a.jsx)(t.p,{children:"O primeiro passo \xe9 obter o UUID do cliente que pretende registar o seu m\xe9todo de pagamento. Isso pode ser feito atrav\xe9s de:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/customers/create",children:"Criar cliente"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/customers/get",children:"Consultar cliente"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"2-concluir-pagamento-atrav\xe9s-de-checkout",children:"2. Concluir pagamento atrav\xe9s de checkout"}),"\n",(0,a.jsx)(t.p,{children:"Para o m\xe9todo de pagamento ser disponibilizado \xe9 necess\xe1rio concluir um pagamento com sucesso."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n","\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,o.A)("checkouts","checkouts/post/checkouts"),children:(0,a.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"pedido",label:"Pedido",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 100,\n\t\t"recurring": {\n\t\t\t"amountQualifier": "ESTM" // <== Montante v\xe1ri\xe1vel\n\t\t},\n\t\t"customer": {\n\t\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2" // <== ID do customer registado\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC",\n\t\t\t"details": {\n\t\t\t\t"createRegistration": true // <== Indicar que \xe9 para criar token\n\t\t\t}\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT"\n\t}\n}\n'})})}),(0,a.jsx)(s.A,{value:"resposta",label:"Resposta",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-10-20T11:34:48+01:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "Qldt1DlonfiF4HthdiCfB1DRmgM31LzmVrFjU6jk",\n\t\t"createdAt": "2021-10-20 11:34:48",\n\t\t"checkoutUrl": "http://paypay.acin.pt/paypaybeta/checkout/v2/form/Qldt1DlonfiF4HthdiCfB1DRmgM31LzmVrFjU6jk",\n\t\t"paymentId": "42380",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2021-10-20T11:34:48+01:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"3-consultar-m\xe9todos-de-pagamento-do-cliente",children:"3. Consultar m\xe9todos de pagamento do cliente"}),"\n",(0,a.jsx)(t.p,{children:"Ap\xf3s o pagamento com sucesso o m\xe9todo de pagamento \xe9 adicionado aos m\xe9todos de pagamento do cliente."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"GET"})," \u200b/customers\u200b/{uuid}\u200b/paymentMethods"]}),"\n"]}),"\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right btn-api--move-top",onClick:()=>(0,o.A)("customer-payment-methods","customer-payment-methods/get/customers/{uuid}/paymentMethods"),children:(0,a.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-09-24T17:57:42+01:00",\n\t"success": true,\n\t"data": [\n\t\t{\n\t\t\t"type": "CC",\n\t\t\t"uuid": "90068f83-7623-4de5-91c7-ac447c504ebf",\n\t\t\t"brand": "VISA",\n\t\t\t"last4Digitis": "0809",\n\t\t\t"holder": "Lu\xeds Gon\xe7alves",\n\t\t\t"expireMonth": "05",\n\t\t\t"expireYear": "2026"\n\t\t},\n\t\t{\n\t\t\t"type": "MW",\n\t\t\t"uuid": "45668f83-7623-4de5-91c7-ac447c504ebf",\n\t\t\t"countryCode": "351",\n\t\t\t"last3Digitis": "263"\n\t\t}\n\t]\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),r=n(4164),o=n(3104),i=n(6347),s=n(205),u=n(7485),l=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.W6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,u.aZ)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function f(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,d=e.groupId,f=m(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),g=b[0],v=b[1],j=h({queryString:l,groupId:d}),x=j[0],y=j[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),I=k[0],w=k[1],A=function(){var e=null!=x?x:I;return p({value:e,tabValues:f})?e:null}();return(0,s.A)((function(){A&&v(A)}),[A]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function j(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],l=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==a&&(l(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,r.A)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,Object.assign({},t,e)),(0,v.jsx)(x,Object.assign({},t,e))]})}function k(e){var t=(0,b.A)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6321);const r=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),r=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");r.length>0&&r.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,a.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);