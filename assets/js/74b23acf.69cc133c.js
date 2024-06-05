"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7769],{323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=n(4848),o=n(8453),r=n(4660),i=n(1470),l=n(9365);const u={},s="Pagamento com MB WAY registado",c={id:"payments/payment-method-mbway",title:"Pagamento com MB WAY registado",description:"Ao disp\xf4r de um telem\xf3vel MB WAY registado j\xe1 \xe9 poss\xedvel solicitar de imediato o pagamento.",source:"@site/docs/payments/payment-method-mbway.mdx",sourceDirName:"payments",slug:"/payments/payment-method-mbway",permalink:"/payments/payment-method-mbway",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Pagamento com MB WAY usando o n\xfamero de telem\xf3vel",permalink:"/payments/payment-mbway"},next:{title:"Pagamento com cart\xe3o registado",permalink:"/payments/payment-method-token"}},d={},m=[{value:"1. Obter UUID do m\xe9todo de pagamento registado",id:"1-obter-uuid-do-m\xe9todo-de-pagamento-registado",level:3},{value:"2. Pagamento com envio do m\xe9todo de pagamento",id:"2-pagamento-com-envio-do-m\xe9todo-de-pagamento",level:3}];function p(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"pagamento-com-mb-way-registado",children:"Pagamento com MB WAY registado"}),"\n",(0,a.jsx)(t.p,{children:"Ao disp\xf4r de um telem\xf3vel MB WAY registado j\xe1 \xe9 poss\xedvel solicitar de imediato o pagamento."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Obter UUID do m\xe9todo de pagamento registado;"}),"\n",(0,a.jsx)(t.li,{children:"Pagamento com envio do m\xe9todo de pagamento."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1-obter-uuid-do-m\xe9todo-de-pagamento-registado",children:"1. Obter UUID do m\xe9todo de pagamento registado"}),"\n",(0,a.jsx)(t.p,{children:"A obten\xe7\xe3o do UUID do m\xe9todo de pagamento pode ser feito atrav\xe9s da Consulta dos m\xe9todos de pagamento guardados pelo cliente"}),"\n",(0,a.jsx)(t.h3,{id:"2-pagamento-com-envio-do-m\xe9todo-de-pagamento",children:"2. Pagamento com envio do m\xe9todo de pagamento"}),"\n",(0,a.jsx)(t.p,{children:"Realizar pedido de pagamento enviando o UUID do cliente e o UUID do m\xe9todo de pagamento."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"No caso do MB WAY requer sempre valida\xe7\xe3o na aplica\xe7\xe3o."}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"POST"})," /payments"]}),"\n"]}),"\n","\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,r.A)("payments","payments/post/payments"),children:(0,a.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"pedido",label:"Pedido",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"type": "payment",\n\t"amount": 100,\n\t"customer": {\n\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2"\n\t},\n\t"paymentMethod": {\n\t\t"uuid": "90068f83-7623-4de5-91c7-ac447c504ebf"\n\t}\n}\n'})})}),(0,a.jsx)(l.A,{value:"resposta",label:"Resposta",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.4.0",\n\t"date": "2022-01-10T13:04:22+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "42786",\n\t\t"type": "payment",\n\t\t"referenceDetails": {\n\t\t\t"reference": "A0000A722"\n\t\t},\n\t\t"stateDetails": {\n\t\t\t"state": "pending_confirmation",\n\t\t\t"createdAt": "2022-01-10T10:29:13+00:00"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"uuid": "90068f83-7623-4de5-91c7-ac447c504ebf",\n\t\t\t"code": "MW",\n\t\t\t"type": "DEFAULT",\n\t\t\t"details": {\n\t\t\t\t"phoneNumber": "351#961879263",\n\t\t\t\t"createRegistration": true\n\t\t\t}\n\t\t},\n\t\t"amount": 10,\n\t\t"createdAt": "2022-01-10T10:28:14+00:00",\n\t\t"updatedAt": "2022-01-10T11:39:39+00:00",\n\t\t"validDate": {\n\t\t\t"start": "2022-01-10T10:28:14+00:00",\n\t\t\t"end": "2022-07-10T23:59:59+01:00"\n\t\t},\n\t\t"availableMethods": [],\n\t\t"paymentFee": {\n\t\t\t"netAmount": "0.00095000",\n\t\t\t"taxAmount": "0.00017100"\n\t\t},\n\t\t"customer": {\n\t\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2",\n\t\t\t"customerId": "agashf123",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"email": "email@mail.com",\n\t\t\t"createdAt": "2022-01-10T10:28:14+00:00"\n\t\t}\n\t}\n}\n'})})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164);const o={tabItem:"tabItem_Ymn6"};var r=n(4848);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(6540),o=n(4164),r=n(3104),i=n(6347),l=n(205),u=n(7485),s=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,r=(0,i.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:o});return[(0,u.aZ)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function b(e){var t,n,o,r,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,d=e.groupId,b=m(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:b})})),v=h[0],g=h[1],y=f({queryString:s,groupId:d}),x=y[0],j=y[1],A=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),o=n[0],r=n[1],[o,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=A[0],I=A[1],k=function(){var e=null!=x?x:w;return p({value:e,tabValues:b})?e:null}();return(0,l.A)((function(){k&&g(k)}),[k]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),I(e)}),[j,I,b]),tabValues:b}}var h=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function y(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],s=(0,r.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),o=l[n].value;o!==a&&(s(t),i(o))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,o=u.indexOf(e.currentTarget)+1;n=null!=(a=u[o])?a:u[0];break;case"ArrowLeft":var r,i=u.indexOf(e.currentTarget)-1;n=null!=(r=u[i])?r:u[u.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},r,{className:(0,o.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,o=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===o}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function j(e){var t=b(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,Object.assign({},t,e)),(0,g.jsx)(x,Object.assign({},t,e))]})}function A(e){var t=(0,h.A)();return(0,g.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6321);const o=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),o=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");o.length>0&&o.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,a.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(6540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);