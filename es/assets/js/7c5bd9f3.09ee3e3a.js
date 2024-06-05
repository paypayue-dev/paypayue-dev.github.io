"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3716],{9480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),o=t(1470),s=t(9365);const i={sidebar_position:5},l="Checkout incorporado en una p\xe1gina web",c={id:"checkouts/embed",title:"Checkout incorporado en una p\xe1gina web",description:"Para obtener el enlace de la incorporaci\xf3n es necesario realizar una petici\xf3n POST /checkouts con los datos deseados.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/checkouts/embed.mdx",sourceDirName:"checkouts",slug:"/checkouts/embed",permalink:"/es/checkouts/embed",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Checkout con posibilidad de almacenar el m\xe9todo de pago",permalink:"/es/checkouts/allowRegistration"},next:{title:"Checkout Tarjeta de Cr\xe9dito/D\xe9bito",permalink:"/es/checkouts/cc"}},u={},d=[];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"checkout-incorporado-en-una-p\xe1gina-web",children:"Checkout incorporado en una p\xe1gina web"}),"\n",(0,r.jsx)(n.p,{children:"Para obtener el enlace de la incorporaci\xf3n es necesario realizar una petici\xf3n POST /checkouts con los datos deseados."}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.code,{children:"redirects"})," de tipo ",(0,r.jsx)(n.code,{children:"action"})," es obligatorio y debe contener la url a la que debe ser redirigido el cliente tras el procesamiento del pago.\nEl par\xe1metro id del checkout se concatena autom\xe1ticamente a la url en el momento de la redirecci\xf3n."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    {\n\t\t...\n\n\t\t"redirects": [\n\t\t\t{\n\t\t\t\t"type": "action", // <== Redireccionamento obrigat\xf3rio\n\t\t\t\t"url": "https://www.url-action.dominio"\n\t\t\t}\n\t\t]\n\t}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Creaci\xf3n del checkout con los siguientes datos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Idioma:"})," Portugu\xe9s"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dise\xf1o de p\xe1gina:"})," Incorporado"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Importe:"})," 5\u20ac"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"M\xe9todo de pago:"})," Tarjeta de cr\xe9dito (CC)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"C\xf3digo del producto:"})," REFPRODUCT_1"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Descripci\xf3n del producto:"})," Ordenador"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cliente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"N\xfamero de cliente:"})," 1,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Nombre:"})," Jos\xe9,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Apellido:"})," Silva,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tel\xe9fono:"})," 351#961234567,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Correo electr\xf3nico:"})," ",(0,r.jsx)(n.a,{href:"mailto:jose.silva@email.com",children:"jose.silva@email.com"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Direcci\xf3n de facturaci\xf3n:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pa\xeds:"})," Portugal,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ciudad:"})," Lisboa,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Direcci\xf3n:"})," Rua Domingos Monteiro n\xba 7 A,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"C\xf3digo Postal:"})," 1050-074"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Redirecciones:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Despu\xe9s del pago:"})," ",(0,r.jsx)(n.a,{href:"https://www.url-action.dominio",children:"https://www.url-action.dominio"})]}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(s.A,{value:"solicitud",label:"Solicitud",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"customer": {\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"email": "jose.silva@email.com"\n\t\t},\n\t\t"billingAddress": {\n\t\t\t"country": "PT",\n\t\t\t"city": "Lisboa",\n\t\t\t"street1": "Rua Domingos Monteiro n\xba 7 A",\n\t\t\t"postCode": "1050-074"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC" // <== M\xe9todo de pagamento\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "embed" // <== Incorporado\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "action", // <== Redireccionamento obrigat\xf3rio\n\t\t\t"url": "https://www.url-action.dominio"\n\t\t}\n\t]\n}\n'})})}),(0,r.jsx)(s.A,{value:"respuesta",label:"Respuesta",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/checkout/v2/embed/0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb?page_layout=embed",\n\t\t"paymentId": "42690",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Para criar o formul\xe1rio de pagamento basta adicionar as seguintes linhas HTML/JavaScript \xe0 sua p\xe1gina.\nEl ",(0,r.jsx)(n.code,{children:"{id}"})," debe ser sustituido por el id devuelto en la respuesta a la solicitud, en el ejemplo anterior ser\xeda 0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<form class="paymentWidgets"></form>\n\n<script src="https://paypay.pt/paypay/checkout/v2/embed/{id}?page_layout=embed"><\/script>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),o=t(3104),s=t(6347),i=t(205),l=t(7485),c=t(1682),u=t(9466);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,s.W6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function b(e){var n,t,a,o,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,b=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:b})})),f=g[0],x=g[1],j=m({queryString:c,groupId:d}),v=j[0],y=j[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Dv)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=k[0],C=k[1],I=function(){var e=null!=v?v:w;return p({value:e,tabValues:b})?e:null}();return(0,i.A)((function(){I&&x(I)}),[I]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),C(e)}),[y,C,b]),tabValues:b}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;t=null!=(o=l[s])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.A)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,Object.assign({},n,e)),(0,x.jsx)(v,Object.assign({},n,e))]})}function k(e){var n=(0,g.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);