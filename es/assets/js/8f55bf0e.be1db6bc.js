"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4846],{796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(4848),r=n(8453),o=n(4660),s=n(1470),i=n(9365);const l={sidebar_position:2},c="Checkout a trav\xe9s de la p\xe1gina PayPay",u={id:"checkouts/multiPayment",title:"Checkout a trav\xe9s de la p\xe1gina PayPay",description:"POST /checkouts",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/checkouts/multiPayment.mdx",sourceDirName:"checkouts",slug:"/checkouts/multiPayment",permalink:"/es/checkouts/multiPayment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Iniciaci\xf3n",permalink:"/es/checkouts/"},next:{title:"Checkout incorporado en la aplicaci\xf3n m\xf3vil",permalink:"/es/checkouts/mobile"}},d={},p=[];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"checkout-a-trav\xe9s-de-la-p\xe1gina-paypay",children:"Checkout a trav\xe9s de la p\xe1gina PayPay"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Creaci\xf3n del checkout con los siguientes datos:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Idioma:"})," Portugu\xe9s"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Dise\xf1o de p\xe1gina:"})," web"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Importe:"})," 5\u20ac"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"M\xe9todo de pago:"})," Tarjeta de Cr\xe9dito/D\xe9bito (CC), Cajero Autom\xe1tico (MB) y MBWay (MW)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"C\xf3digo del producto:"})," REFPRODUTO_1"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Descripci\xf3n del producto:"})," Ordenador"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Redirecciones:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Despu\xe9s de un pago con \xe9xito:"})," ",(0,a.jsx)(t.a,{href:"https://www.url-apos-sucesso.dominio",children:"https://www.url-apos-sucesso.dominio"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Despu\xe9s de la cancelaci\xf3n del pago:"})," ",(0,a.jsx)(t.a,{href:"https://www.url-apos-cancelamento.dominio",children:"https://www.url-apos-cancelamento.dominio"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Bot\xf3n regresar:"})," ",(0,a.jsx)(t.a,{href:"https://www.url-voltar.dominio",children:"https://www.url-voltar.dominio"})]}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,a.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,o.A)("checkouts","checkouts/post/checkouts"),children:(0,a.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"solicitud",label:"Solicitud",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"availableMethods": [\n\t\t\t// <== M\xe9todos de pagamento a serem disponibilizados para realizar o pagamento\n\t\t\t{\n\t\t\t\t"code": "CC"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"code": "MB"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"code": "MW"\n\t\t\t}\n\t\t]\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "web"\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "success",\n\t\t\t"url": "https://www.url-apos-sucesso.dominio"\n\t\t},\n\t\t{\n\t\t\t"type": "cancel",\n\t\t\t"url": "https://www.url-apos-cancelamento.dominio"\n\t\t},\n\t\t{\n\t\t\t"type": "back",\n\t\t\t"url": "https://www.url-voltar.dominio"\n\t\t}\n\t]\n}\n'})})}),(0,a.jsx)(i.A,{value:"respuesta",label:"Respuesta",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "pyKP1B9IaK9J47wTSNB4mUnv2h4DJW8HzomddMp1",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/referencia/referencia_c/pay/4d0757e6d4db52fae248e1a2e9f10a1e8cdb0a25/paypay/pyKP1B9IaK9J47wTSNB4mUnv2h4DJW8HzomddMp1",\n\t\t"paymentId": "42690",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["La respuesta devuelve el ",(0,a.jsx)(t.code,{children:"id"})," que identifica el checkout ante la API.\nEl ",(0,a.jsx)(t.code,{children:"checkoutUrl"})," es el enlace para acceder a la p\xe1gina y realizar el pago.\nEl ",(0,a.jsx)(t.code,{children:"paymentId"})," es el id que identifica el pago."]}),"\n",(0,a.jsxs)(t.p,{children:["Al acceder a ",(0,a.jsx)(t.code,{children:"checkoutUrl"})," aparece la siguiente p\xe1gina:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Checkout CC",src:n(4797).A+"",width:"722",height:"648"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),o=n(3104),s=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(9466);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.W6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,r,o,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=p(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:f})})),b=v[0],g=v[1],x=m({queryString:c,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],I=w[1],C=function(){var e=null!=j?j:k;return h({value:e,tabValues:f})?e:null}();return(0,i.A)((function(){C&&g(C)}),[C]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),I(e)}),[y,I,f]),tabValues:f}}var v=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;n=null!=(o=l[s])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,v.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6321);const r=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),r=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");r.length>0&&r.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,a.A)()}},4797:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/checkout-multi-payment-1e4a9faa59e6a423048f6e9a4d0e2fc5.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);