"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5498],{2764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(4848),a=n(8453),i=n(1470),o=n(9365);const l={sidebar_position:3},u="Checkout embedded in mobile application",s={id:"checkouts/mobile",title:"Checkout embedded in mobile application",description:'Checkout can be embedded into mobile applications using the "Webview" component and the "Deep linking" engine available in Android and iOS.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/checkouts/mobile.mdx",sourceDirName:"checkouts",slug:"/checkouts/mobile",permalink:"/en/checkouts/mobile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Checkout through the PayPay page",permalink:"/en/checkouts/multiPayment"},next:{title:"Checkout with possibility to store payment method",permalink:"/en/checkouts/allowRegistration"}},c={},d=[{value:"Generation of the checkout link for Webview",id:"generation-of-the-checkout-link-for-webview",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"checkout-embedded-in-mobile-application",children:"Checkout embedded in mobile application"}),"\n",(0,r.jsx)(t.p,{children:'Checkout can be embedded into mobile applications using the "Webview" component and the "Deep linking" engine available in Android and iOS.'}),"\n",(0,r.jsx)(t.p,{children:"Useful references:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.android.com/training/app-links/deep-linking",children:"https://developer.android.com/training/app-links/deep-linking"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://blog.devgenius.io/deep-linking-in-ios-f5bfa2959d0a",children:"https://blog.devgenius.io/deep-linking-in-ios-f5bfa2959d0a"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.yeeply.com/blog/deep-linking-android-ios-apps/",children:"https://en.yeeply.com/blog/deep-linking-android-ios-apps/"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The process works as follows:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"(Back-end) Generate the checkout link through the /checkouts resource;"}),"\n",(0,r.jsx)(t.li,{children:"(Application) Open the link obtained previously in Android/iOS webview;"}),"\n",(0,r.jsx)(t.li,{children:"(Webview) Wait for the user to complete the payment;"}),"\n",(0,r.jsx)(t.li,{children:"(Application) User returned to the application;"}),"\n",(0,r.jsx)(t.li,{children:"(Back-end) View checkout status via API;"}),"\n",(0,r.jsx)(t.li,{children:"(Application) Display the application view according to the needs of the user."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"generation-of-the-checkout-link-for-webview",children:"Generation of the checkout link for Webview"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"redirects"})," parameter of the ",(0,r.jsx)(t.code,{children:"action"}),' type must contain the url "Deep link" will invoke the application after payment.']}),"\n","\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"request",label:"Request",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"customer": {\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"email": "jose.silva@email.com"\n\t\t},\n\t\t"billingAddress": {\n\t\t\t"country": "PT",\n\t\t\t"city": "Lisboa",\n\t\t\t"street1": "Rua Domingos Monteiro n\xba 7 A",\n\t\t\t"postCode": "1050-074"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC" // <== M\xe9todo de pagamento\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "default" // <== Incorporado\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "action",\n\t\t\t"url": "https://www.myapp.com" // <== URL deep Link\n\t\t}\n\t]\n}\n'})})}),(0,r.jsx)(o.A,{value:"response",label:"Response",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/checkout/v2/embed/0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb?page_layout=default",\n\t\t"paymentId": "42690",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),a=n(4164),i=n(3104),o=n(6347),l=n(205),u=n(7485),s=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,u.aZ)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,n,a,i,o=e.defaultValue,u=e.queryString,s=void 0!==u&&u,d=e.groupId,f=p(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),v=b[0],g=b[1],k=m({queryString:s,groupId:d}),y=k[0],x=k[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=j[0],A=j[1],C=function(){var e=null!=y?y:w;return h({value:e,tabValues:f})?e:null}();return(0,l.A)((function(){C&&g(C)}),[C]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),A(e)}),[x,A,f]),tabValues:f}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function k(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,l=e.tabValues,u=[],s=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==r&&(s(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;n=null!=(i=u[o])?i:u[u.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function x(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(k,Object.assign({},t,e)),(0,g.jsx)(y,Object.assign({},t,e))]})}function j(e){var t=(0,b.A)();return(0,g.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);