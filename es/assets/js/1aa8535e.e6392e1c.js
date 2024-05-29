"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5948],{4870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var r=n(4848),a=n(8453),s=n(4660),u=n(1470),l=n(9365);const o={},i="Consultar las entidades asociadas al cliente",c={id:"customers/getEntities",title:"Consultar las entidades asociadas al cliente",description:"GET /customers/\\/entities",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/customers/getEntities.mdx",sourceDirName:"customers",slug:"/customers/getEntities",permalink:"/es/customers/getEntities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Consultar cliente",permalink:"/es/customers/get"},next:{title:"Listado de clientes",permalink:"/es/customers/list"}},d={},f=[];function m(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"consultar-las-entidades-asociadas-al-cliente",children:"Consultar las entidades asociadas al cliente"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET"})," /customers/",(0,r.jsx)(t.em,{children:"{uuid}"}),"/entities"]}),"\n"]}),"\n","\n",(0,r.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,s.A)("customer-entities","customer-entities/get/customers/{uuid}/entities"),children:(0,r.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,r.jsxs)(u.A,{children:[(0,r.jsx)(l.A,{value:"solicitud",label:"Solicitud",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"GET /customers/_e2343605-cf46-43de-b20b-9b7d1c95a9b2_/entities\n"})})}),(0,r.jsx)(l.A,{value:"respuesta",label:"Respuesta",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-12-09T12:57:56+00:00",\n\t"success": true,\n\t"data": [\n\t\t{\n\t\t\t"clientId": "501438670",\n\t\t\t"createdAt": "2021-12-06T09:40:31+00:00"\n\t\t}\n\t]\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Nota:"})," Solo la entidad que cre\xf3 el cliente puede consultar las entidades asociadas al mismo."]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),s=n(3104),u=n(6347),l=n(205),o=n(7485),i=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function f(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,i.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,u.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function h(e){var t,n,a,s,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,d=e.groupId,h=f(e),p=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:h})})),v=p[0],g=p[1],x=b({queryString:i,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],E=w[1],I=function(){var e=null!=j?j:k;return m({value:e,tabValues:h})?e:null}();return(0,l.A)((function(){I&&g(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),E(e)}),[y,E,h]),tabValues:h}}var p=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,l=e.tabValues,o=[],i=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(i(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,u=o.indexOf(e.currentTarget)-1;n=null!=(s=o[u])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=s.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},t,e)),(0,g.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,p.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6321);const a=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),a=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");a.length>0&&a.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,r.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function u(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);