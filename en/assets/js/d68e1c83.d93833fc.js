"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5091],{8446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),a=n(8453),s=n(1470),u=n(9365);const o={sidebar_position:8},l="Checkout MB WAY",c={id:"checkouts/mw",title:"Checkout MB WAY",description:"POST /checkouts",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/checkouts/mw.mdx",sourceDirName:"checkouts",slug:"/checkouts/mw",permalink:"/en/checkouts/mw",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"Checkout ATM",permalink:"/en/checkouts/mb"},next:{title:"Pagamentos",permalink:"/en/category/pagamentos"}},i={},d=[];function h(e){const t={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"checkout-mb-way",children:"Checkout MB WAY"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Creation of the checkout with the following data:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Language:"})," Portuguese"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Page Layout:"})," web"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Amount:"})," 5 euros"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment method:"})," MBWay (MW)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Product code:"})," REFPRODUCT_1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Description of product:"})," Computer"]}),"\n"]}),"\n","\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(u.A,{value:"request",label:"Request",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"paymentMethod": {\n\t\t\t"code": "MW" // <== M\xe9todo de pagamento\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "web"\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "success",\n\t\t\t"url": "https://www.url-apos-sucesso.dominio"\n\t\t},\n\t\t{\n\t\t\t"type": "cancel",\n\t\t\t"url": "https://www.url-apos-cancelamento.dominio"\n\t\t},\n\t\t{\n\t\t\t"type": "back",\n\t\t\t"url": "https://www.url-voltar.dominio"\n\t\t}\n\t]\n}\n'})})}),(0,r.jsx)(u.A,{value:"response",label:"Response",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "nD5IxuqS40xZgPDRra5RqGelWmbVY5hOFnI3QfJc",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/referencia/referencia_c/pay/a04120574e15134a6352f9619ea6cfbf051c18e9/paypay/nD5IxuqS40xZgPDRra5RqGelWmbVY5hOFnI3QfJc",\n\t\t"paymentId": "42697",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The response returns the ",(0,r.jsx)(t.code,{children:"id"})," which identifies the checkout to the API.\nThe ",(0,r.jsx)(t.code,{children:"checkoutUrl"})," is the link to access the page and make the payment.\nThe ",(0,r.jsx)(t.code,{children:"paymentId"})," is the id that identifies the payment."]}),"\n",(0,r.jsxs)(t.p,{children:["Accessing the ",(0,r.jsx)(t.code,{children:"checkoutUrl"})," displays the following page:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Checkout MW",src:n(1263).A+"",width:"1422",height:"1113"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),s=n(3104),u=n(6347),o=n(205),l=n(7485),c=n(1682),i=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,u.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function m(e){var t,n,a,s,u=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),v=b[0],g=b[1],x=f({queryString:c,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,i.Dv)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],A=w[1],I=function(){var e=null!=j?j:k;return p({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){I&&g(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),A(e)}),[y,A,m]),tabValues:m}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,o=e.tabValues,l=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,i=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,u=l.indexOf(e.currentTarget)-1;n=null!=(s=l[u])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:i},s,{className:(0,a.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=s.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,b.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},1263:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/checkout-mw-dbc00c1c251c49bc189069a3a3e53f3c.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function u(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);