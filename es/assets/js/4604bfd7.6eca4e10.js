"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2830],{9143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=t(4848),a=t(8453),i=t(4660),l=t(1470),u=t(9365);const s={},o="Eliminar una entidad asociada al cliente",c={id:"customers/deleteEntities",title:"Eliminar una entidad asociada al cliente",description:"DELETE /customers/\\/entities/\\{clientId}",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/customers/deleteEntities.mdx",sourceDirName:"customers",slug:"/customers/deleteEntities",permalink:"/es/customers/deleteEntities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Eliminar cliente",permalink:"/es/customers/delete"},next:{title:"Consultar cliente",permalink:"/es/customers/get"}},d={},m=[];function f(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"eliminar-una-entidad-asociada-al-cliente",children:"Eliminar una entidad asociada al cliente"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE"})," /customers/",(0,r.jsx)(n.em,{children:"{uuid}"}),"/entities/",(0,r.jsx)(n.em,{children:"{clientId}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Para eliminar la asociaci\xf3n del cliente con una entidad es necesario conocer el ",(0,r.jsx)(n.em,{children:"uuid"})," del cliente y el ",(0,r.jsx)(n.em,{children:"clientId"})," de la entidad."]}),"\n","\n",(0,r.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,i.A)("customer-entities","customer-entities/delete/customers/{uuid}/entities/{clientId}"),children:(0,r.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(u.A,{value:"solicitud",label:"Solicitud",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"DELETE /customers/_e2343605-cf46-43de-b20b-9b7d1c95a9b2_/entities/_523308191_\n"})})}),(0,r.jsx)(u.A,{value:"respuesta",label:"Respuesta",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"HTTP Code: 204\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," Solo la entidad que cre\xf3 el cliente puede desvincularlo de otra entidad."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),a=t(4164),i=t(3104),l=t(6347),u=t(205),s=t(7485),o=t(1682),c=t(9466);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,l.W6)(),u=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s.aZ)(u),(0,r.useCallback)((function(e){if(u){var n=new URLSearchParams(i.location.search);n.set(u,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[u,i])]}function b(e){var n,t,a,i,l=e.defaultValue,s=e.queryString,o=void 0!==s&&s,d=e.groupId,b=m(e),p=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:b})})),v=p[0],g=p[1],x=h({queryString:o,groupId:d}),j=x[0],E=x[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Dv)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=y[0],I=y[1],k=function(){var e=null!=j?j:w;return f({value:e,tabValues:b})?e:null}();return(0,u.A)((function(){k&&g(k)}),[k]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),E(e),I(e)}),[E,I,b]),tabValues:b}}var p=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,u=e.tabValues,s=[],o=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=s.indexOf(n),a=u[t].value;a!==r&&(o(n),l(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,l=s.indexOf(e.currentTarget)-1;t=null!=(i=s[l])?i:s[s.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:u.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function E(e){var n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},n,e)),(0,g.jsx)(j,Object.assign({},n,e))]})}function y(e){var n=(0,p.A)();return(0,g.jsx)(E,Object.assign({},e,{children:d(e.children)}),String(n))}},4660:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(6321);const a=function(e,n){void 0===n&&(n=null);var t=document.getElementById("iframePanel"),a=t.contentDocument.querySelectorAll("li.sidebar-group-item ul");a.length>0&&a.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){t.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),t.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){t.contentDocument.getElementById("sidebar-tag/"+n).querySelector("a.sidebar-heading-link").click()}),1e3),t.contentWindow.location.hash="#tag/"+n,(0,r.A)()}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>u});var r=t(6540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);