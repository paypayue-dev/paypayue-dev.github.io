"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9331],{1651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),o=t(8453),a=t(1470),s=t(9365);const i={sidebar_position:5},l="Checkout incorporado numa p\xe1gina web",c={id:"checkouts/embed",title:"Checkout incorporado numa p\xe1gina web",description:"Para obter o link da incorpora\xe7\xe3o \xe9 necess\xe1rio realizar um pedido POST /checkouts com os dados pretendidos.",source:"@site/docs/checkouts/embed.mdx",sourceDirName:"checkouts",slug:"/checkouts/embed",permalink:"/checkouts/embed",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Checkout com possibilidade de armazenar m\xe9todo de pagamento",permalink:"/checkouts/allowRegistration"},next:{title:"Checkout Cart\xe3o de Cr\xe9dito/D\xe9bito",permalink:"/checkouts/cc"}},u={},d=[];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"checkout-incorporado-numa-p\xe1gina-web",children:"Checkout incorporado numa p\xe1gina web"}),"\n",(0,r.jsx)(n.p,{children:"Para obter o link da incorpora\xe7\xe3o \xe9 necess\xe1rio realizar um pedido POST /checkouts com os dados pretendidos."}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.code,{children:"redirects"})," do tipo ",(0,r.jsx)(n.code,{children:"action"})," \xe9 obrigat\xf3rio e dever\xe1 conter o url para onde o cliente deve ser redireccionado ap\xf3s o processamento do pagamento.\nO par\xe2metro id do checkout \xe9 automaticamente concatenado ao url no momento do redireccionamento."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    {\n\t\t...\n\n\t\t"redirects": [\n\t\t\t{\n\t\t\t\t"type": "action", // <== Redireccionamento obrigat\xf3rio\n\t\t\t\t"url": "https://www.url-action.dominio"\n\t\t\t}\n\t\t]\n\t}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Cria\xe7\xe3o do checkout com os seguintes dados:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Idioma:"})," Portugu\xeas"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Layout da p\xe1gina:"})," Incorporado"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Montante:"})," 5\u20ac"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"M\xe9todo de pagamento:"})," Cart\xe3o de Cr\xe9dito/D\xe9bito (CC)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"C\xf3digo do produto:"})," REFPRODUTO_1"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o do produto:"})," Computador"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cliente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"N\xfamero de cliente:"})," 1,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Primeiro nome:"})," Jos\xe9,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\xdaltimo nome:"})," Silva,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Telefone:"})," 351#961234567,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Email:"})," ",(0,r.jsx)(n.a,{href:"mailto:jose.silva@email.com",children:"jose.silva@email.com"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Morada de cobran\xe7a:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pa\xeds:"})," Portugal,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cidade:"})," Lisboa,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Morada:"})," Rua Domingos Monteiro n\xba 7 A,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"C\xf3digo Postal:"})," 1050-074"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Redirecionamentos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ap\xf3s o pagamento:"})," ",(0,r.jsx)(n.a,{href:"https://www.url-action.dominio",children:"https://www.url-action.dominio"})]}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"pedido",label:"Pedido",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"customer": {\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"email": "jose.silva@email.com"\n\t\t},\n\t\t"billingAddress": {\n\t\t\t"country": "PT",\n\t\t\t"city": "Lisboa",\n\t\t\t"street1": "Rua Domingos Monteiro n\xba 7 A",\n\t\t\t"postCode": "1050-074"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC" // <== M\xe9todo de pagamento\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "embed" // <== Incorporado\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "action", // <== Redireccionamento obrigat\xf3rio\n\t\t\t"url": "https://www.url-action.dominio"\n\t\t}\n\t]\n}\n'})})}),(0,r.jsx)(s.A,{value:"resposta",label:"Resposta",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/checkout/v2/embed/0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb?page_layout=embed",\n\t\t"paymentId": "42690",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Para criar o formul\xe1rio de pagamento basta adicionar as seguintes linhas HTML/JavaScript \xe0 sua p\xe1gina.\nO ",(0,r.jsx)(n.code,{children:"{id}"})," deve ser substitu\xeddo pelo id retornado na resposta do pedido,no exemplo anterior seria o 0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<form class="paymentWidgets"></form>\n\n<script src="https://paypay.pt/paypay/checkout/v2/embed/{id}?page_layout=embed"><\/script>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),o=t(4164),a=t(3104),s=t(6347),i=t(205),l=t(7485),c=t(1682),u=t(9466);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,a=(0,s.W6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:o});return[(0,l.aZ)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(a.location.search);n.set(i,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[i,a])]}function b(e){var n,t,o,a,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,b=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:b})})),f=g[0],x=g[1],v=m({queryString:c,groupId:d}),j=v[0],y=v[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Dv)(n),o=t[0],a=t[1],[o,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),w=k[0],C=k[1],I=function(){var e=null!=j?j:w;return p({value:e,tabValues:b})?e:null}();return(0,i.A)((function(){I&&x(I)}),[I]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),C(e)}),[y,C,b]),tabValues:b}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,a.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(c(n),s(o))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,o=l.indexOf(e.currentTarget)+1;t=null!=(r=l[o])?r:l[0];break;case"ArrowLeft":var a,s=l.indexOf(e.currentTarget)-1;t=null!=(a=l[s])?a:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},a,{className:(0,o.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,o=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=a.find((function(e){return e.props.value===o}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function y(e){var n=b(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function k(e){var n=(0,g.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);