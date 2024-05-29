"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3507],{4512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453),a=n(1470),i=n(9365);const o={sidebar_position:6},l="Checkout Credit/Debit Card",c={id:"checkouts/cc",title:"Checkout Credit/Debit Card",description:"product description, customer details and invoicing address",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/checkouts/cc.mdx",sourceDirName:"checkouts",slug:"/checkouts/cc",permalink:"/en/checkouts/cc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Checkout embedded in a web page",permalink:"/en/checkouts/embed"},next:{title:"Checkout ATM",permalink:"/en/checkouts/mb"}},u={},d=[];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"checkout-creditdebit-card",children:"Checkout Credit/Debit Card"}),"\n",(0,r.jsx)(t.p,{children:"product description, customer details and invoicing address"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Checkout creation with the following data:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Language:"})," Portuguese"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Page Layout:"})," web"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Amount:"})," 5\u20ac"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment method:"})," Credit Card (CC)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Product code:"})," REFPRODUCT_1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Description of product:"})," Computer"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Customer:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Customer number:"})," 1,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"First name:"})," Jose,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Last name:"})," Silva,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Phone number:"})," 351#961234567,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Email:"})," ",(0,r.jsx)(t.a,{href:"mailto:jose.silva@email.com",children:"jose.silva@email.com"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Invoicing address:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Country:"})," Portugal,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"City:"})," Lisboa,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Address:"})," Rua Domingos Monteiro n\xba 7 A,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Postal Code:"})," 1050-074"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Redirections:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"After successful payment:"})," ",(0,r.jsx)(t.a,{href:"https://www.url-apos-sucesso.dominio",children:"https://www.url-apos-sucesso.dominio"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"After cancellation of payment:"})," ",(0,r.jsx)(t.a,{href:"https://www.url-apos-cancelamento.dominio",children:"https://www.url-apos-cancelamento.dominio"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Back button:"})," ",(0,r.jsx)(t.a,{href:"https://www.url-voltar.dominio",children:"https://www.url-voltar.dominio"})]}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"request",label:"Request",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"customer": {\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"email": "jose.silva@email.com"\n\t\t},\n\t\t"billingAddress": {\n\t\t\t"country": "PT",\n\t\t\t"city": "Lisboa",\n\t\t\t"street1": "Rua Domingos Monteiro n\xba 7 A",\n\t\t\t"postCode": "1050-074"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC" // <== M\xe9todo de pagamento\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "web"\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "success",\n\t\t\t"url": "https://www.url-apos-sucesso.dominio"\n\t\t},\n\t\t{\n\t\t\t"type": "cancel",\n\t\t\t"url": "https://www.url-apos-cancelamento.dominio"\n\t\t},\n\t\t{\n\t\t\t"type": "back",\n\t\t\t"url": "https://www.url-voltar.dominio"\n\t\t}\n\t]\n}\n'})})}),(0,r.jsx)(i.A,{value:"response",label:"Response",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "pyKP1B9IaK9J47wTSNB4mUnv2h4DJW8HzomddMp1",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/referencia/referencia_c/pay/4d0757e6d4db52fae248e1a2e9f10a1e8cdb0a25/paypay/pyKP1B9IaK9J47wTSNB4mUnv2h4DJW8HzomddMp1",\n\t\t"paymentId": "42690",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The response returns the ",(0,r.jsx)(t.code,{children:"id"})," which identifies the checkout to the API.\nThe ",(0,r.jsx)(t.code,{children:"checkoutUrl"})," is the link to access the page and make the payment.\nThe ",(0,r.jsx)(t.code,{children:"paymentId"})," is the id that identifies the payment."]}),"\n",(0,r.jsxs)(t.p,{children:["Accessing the ",(0,r.jsx)(t.code,{children:"checkoutUrl"})," displays the following page:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Checkout CC",src:n(2373).A+"",width:"1223",height:"1864"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),s=n(4164),a=n(3104),i=n(6347),o=n(205),l=n(7485),c=n(1682),u=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,a=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function f(e){var t,n,s,a,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:f})})),j=b[0],x=b[1],g=m({queryString:c,groupId:d}),v=g[0],w=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Dv)(t),s=n[0],a=n[1],[s,(0,r.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=y[0],C=y[1],A=function(){var e=null!=v?v:k;return p({value:e,tabValues:f})?e:null}();return(0,o.A)((function(){A&&x(A)}),[A]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),C(e)}),[w,C,f]),tabValues:f}}var b=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,a.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,s=l.indexOf(e.currentTarget)+1;n=null!=(r=l[s])?r:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!=(a=l[i])?a:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.A)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,s=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===s}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function w(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(g,Object.assign({},t,e)),(0,x.jsx)(v,Object.assign({},t,e))]})}function y(e){var t=(0,b.A)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},2373:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/checkout-cc-781d41fe1810754bbf4d74adb24997a3.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);