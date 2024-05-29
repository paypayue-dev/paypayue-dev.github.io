"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4993],{3413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var r=n(4848),a=n(8453),i=n(4660),u=n(1470),l=n(9365);const s={},o="Consultar entidad",c={id:"entities/get",title:"Consultar entidad",description:"GET /entities/\\",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/entities/get.mdx",sourceDirName:"entities",slug:"/entities/get",permalink:"/es/entities/get",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Entidades",permalink:"/es/category/entidades"},next:{title:"Entidades",permalink:"/es/entities/"}},d={},f=[];function p(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"consultar-entidad",children:"Consultar entidad"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET"})," /entities/",(0,r.jsx)(t.em,{children:"{clientId}"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["El par\xe1metro ",(0,r.jsx)(t.strong,{children:"clientId"})," es el NIF de la entidad."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Nota:"})," Para acceder a esta operaci\xf3n no es necesario autenticarse con el ",(0,r.jsx)(t.em,{children:"PayPay-ClientId"}),"."]}),"\n","\n",(0,r.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,i.A)("entities","entities/get/entities/{clientId}"),children:(0,r.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,r.jsxs)(u.A,{children:[(0,r.jsx)(l.A,{value:"pedido",label:"Pedido",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"    GET /entities/_123456789_\n"})})}),(0,r.jsx)(l.A,{value:"respuesta",label:"Respuesta",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-12-07T18:01:19+00:00",\n\t"success": true,\n\t"data": {\n\t\t"clientId": "123456789",\n\t\t"name": "Entidade PayPay",\n\t\t"stateDetails": {\n\t\t\t"state": "approved",\n\t\t\t"createdAt": "2021-10-07T17:01:19+00:00"\n\t\t}\n\t}\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),i=n(3104),u=n(6347),l=n(205),s=n(7485),o=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function v(e){var t,n,a,i,u=e.defaultValue,s=e.queryString,o=void 0!==s&&s,d=e.groupId,v=f(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:v})})),m=b[0],g=b[1],x=h({queryString:o,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),I=w[0],k=w[1],E=function(){var e=null!=j?j:I;return p({value:e,tabValues:v})?e:null}();return(0,l.A)((function(){E&&g(E)}),[E]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,v]),tabValues:v}}var b=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,l=e.tabValues,s=[],o=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(o(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,u=s.indexOf(e.currentTarget)-1;n=null!=(i=s[u])?i:s[s.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=i.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=v(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,b.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6321);const a=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),a=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");a.length>0&&a.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,r.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>l});var r=n(6540);const a={},i=r.createContext(a);function u(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);