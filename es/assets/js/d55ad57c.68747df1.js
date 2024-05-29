"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[411],{4247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(4848),a=n(8453),s=n(4660),l=n(1470),i=n(9365);const o={},u="Listado de clientes",c={id:"customers/list",title:"Listado de clientes",description:"GET /customers",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/customers/list.mdx",sourceDirName:"customers",slug:"/customers/list",permalink:"/es/customers/list",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Consultar las entidades asociadas al cliente",permalink:"/es/customers/getEntities"},next:{title:"Asociar el cliente a otras entidades",permalink:"/es/customers/postEntities"}},d={},m=[];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"listado-de-clientes",children:"Listado de clientes"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET"})," /customers"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"El listado de clientes se puede realizar utilizando los siguientes filtros:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Correo electr\xf3nico"})," (email)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Identificador del cliente"})," (customerId)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Limitar los resultados"})," (limit)"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"1."})," Obtener el cliente con el correo electr\xf3nico ",(0,r.jsx)(t.a,{href:"mailto:jose.silva@email.com",children:"jose.silva@email.com"}),"."]}),"\n","\n",(0,r.jsx)("button",{className:"btn-api btn-api--float-right",onClick:()=>(0,s.A)("customers","customers/get/customers"),children:(0,r.jsxs)("span",{children:["Consultar API \xa0\xa0\xa0",">"]})}),"\n","\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(i.A,{value:"solicitud",label:"Solicitud",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"GET /customers?email=jose.silva@email.com\n"})})}),(0,r.jsx)(i.A,{value:"respuesta",label:"Respuesta",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-12-07T18:01:19+01:00",\n\t"success": true,\n\t"data": [\n\t\t{\n\t\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2",\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"email": "jose.silva@email.com",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"createdAt": "2021-12-07T18:01:19+00:00"\n\t\t}\n\t]\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"2."})," Obtener los dos primeros clientes."]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(i.A,{value:"solicitud",label:"Solicitud",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"GET /customers?limit=2\n"})})}),(0,r.jsx)(i.A,{value:"respuesta",label:"Respuesta",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2021-12-07T18:01:19+05:00",\n\t"success": true,\n\t"data": [\n\t\t{\n\t\t\t"uuid": "e2343605-cf46-43de-b20b-9b7d1c95a9b2",\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"email": "jose.silva@email.com",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"createdAt": "2021-12-07T18:01:19+00:00"\n\t\t},\n\t\t{\n\t\t\t"uuid": "g2343605-cf46-43de-b20b-9b7d1c95a9b2",\n\t\t\t"customerId": "2",\n\t\t\t"firstName": "Maria",\n\t\t\t"lastName": "Jos\xe9",\n\t\t\t"email": "maria.jose@email.com",\n\t\t\t"phoneNumber": "351#917894584",\n\t\t\t"createdAt": "2021-12-07T18:01:19+01:00"\n\t\t}\n\t]\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),s=n(3104),l=n(6347),i=n(205),o=n(7485),u=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.W6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o.aZ)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function b(e){var t,n,a,s,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,d=e.groupId,b=m(e),p=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:b})})),v=p[0],g=p[1],j=h({queryString:u,groupId:d}),x=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),A=w[0],I=w[1],k=function(){var e=null!=x?x:A;return f({value:e,tabValues:b})?e:null}();return(0,i.A)((function(){k&&g(k)}),[k]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),I(e)}),[y,I,b]),tabValues:b}}var p=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],u=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;n=null!=(s=o[l])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(j,Object.assign({},t,e)),(0,g.jsx)(x,Object.assign({},t,e))]})}function w(e){var t=(0,p.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},4660:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6321);const a=function(e,t){void 0===t&&(t=null);var n=document.getElementById("iframePanel"),a=n.contentDocument.querySelectorAll("li.sidebar-group-item ul");a.length>0&&a.forEach((function(e){return e.parentNode.querySelector("button").click()})),window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+e).querySelector("button").click()}),700),n.contentWindow.location.hash="#tag/"+e,window.setTimeout((function(){n.contentDocument.getElementById("sidebar-tag/"+t).querySelector("a.sidebar-heading-link").click()}),1e3),n.contentWindow.location.hash="#tag/"+t,(0,r.A)()}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);