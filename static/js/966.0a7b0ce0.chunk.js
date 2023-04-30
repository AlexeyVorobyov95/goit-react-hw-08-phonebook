"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[966],{7966:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,i,o,a,u,c=t(2791),l=t(9434),s=t(9439),d=t(168),p=t(225),f=p.Z.form(r||(r=(0,d.Z)(["\n  display: block;\n  width: 400px;\n  height: auto;\n  padding: 20px;\n  outline: 3px solid #1c2f50;\n  border-radius: 5px;\n  background: #1c2f50;\n"]))),x=p.Z.input(i||(i=(0,d.Z)(["\n  width: 380px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  outline: none;\n  border: none;\n  background: rgba(129, 225, 247, 1);\n  color: #1c2f50;\n  padding: 10px;\n  font-size: 18px;\n"]))),h=p.Z.label(o||(o=(0,d.Z)(["\n  text-align: initial;\n  display: block;\n  margin-bottom: 30px;\n"]))),g=p.Z.button(a||(a=(0,d.Z)(["\n  margin-top: 80px;\n  width: 250px;\n  color: #1c2f50;\n  background: rgba(129, 225, 247, 1);\n  padding: 15px;\n  border-radius: 20px;\n  font-size: 24px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  :focus {\n    color: yellow;\n  }\n"]))),m=p.Z.span(u||(u=(0,d.Z)(["\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 24px;\n  display: block;\n  margin-bottom: 5px;\n  color: rgba(129, 225, 247, 1);\n"]))),v="NOT_FOUND";var b=function(n,e){return n===e};function y(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?b:r,o=t.maxSize,a=void 0===o?1:o,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:v},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return v}return{get:r,put:function(e,i){r(e)===v&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function s(){var e=l.get(arguments);if(e===v){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function Z(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function j(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,d=void 0===s?t:s,p=Array.isArray(d)?d:[d],f=Z(r),x=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return o=x.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:x,dependencies:f,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return i}var w=j(y),k=function(n){return n.contacts.items},C=function(n){return n.contacts.isLoading},z=function(n){return n.contacts.error},A=w([k,function(n){return n.filter.filter}],(function(n,e){return e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n})),F=t(3634),E=t(184);function S(){var n=(0,c.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,c.useState)(""),o=(0,s.Z)(i,2),a=o[0],u=o[1],d=(0,l.I0)(),p=(0,l.v9)(k),v=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":u(n.target.value);break;default:return}},b=function(){r(""),u("")},y=function(){r("")};return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(f,{children:[(0,E.jsxs)(h,{htmlFor:"",children:[(0,E.jsx)(m,{children:"Name"}),(0,E.jsx)(x,{value:t,onChange:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. \nFor example Adrian, Jacob Mercer, Charles de Batz de Castelmore \nd'Artagnan",required:!0})]}),(0,E.jsxs)(h,{htmlFor:"",children:[(0,E.jsx)(m,{children:"Number"}),(0,E.jsx)(x,{value:a,onChange:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can \nstart with +",required:!0})]}),(0,E.jsx)(g,{type:"button",onClick:function(n){n.preventDefault();var e=n.target.form.elements.name.value,t={name:e,number:n.target.form.elements.number.value},r=e.toLowerCase();if(p.find((function(n){return n.name.toLowerCase()===r})))return y(),alert("".concat(e," is already in contacts."));d((0,F.v6)(t)),b()},children:"Add contact"})]})})}var q,_,I,L,N,O,R,D,U,P,T,B,J,M,V=p.Z.ul(q||(q=(0,d.Z)(["\n  gap: 10px;\n  display: flex;\n  width: 850px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  flex-wrap: wrap;\n  color: rgba(129, 225, 247, 1);\n"]))),$=p.Z.li(_||(_=(0,d.Z)(["\n  width: 400px;\n  padding: 5px 10px;\n  background-color: #1c2f50;\n  border-radius: 4px;\n"]))),G=p.Z.span(I||(I=(0,d.Z)(["\n  margin-right: auto;\n"]))),H=p.Z.button(L||(L=(0,d.Z)(["\n  font-weight: 700;\n  margin-left: auto;\n  background-color: rgba(129, 225, 247, 1);\n  border-radius: 4px;\n  padding: 3px;\n  color: #1c2f50;\n"]))),K=p.Z.div(N||(N=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Q=p.Z.h2(O||(O=(0,d.Z)(["\n  display: flex;\n  width: auto;\n  height: auto;\n  font-size: 32px;\n  color: rgba(129, 225, 247, 1);\n  background: #1c2f50;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n"]))),W=p.Z.div(R||(R=(0,d.Z)(["\n  outline: 3px solid #1c2f50;\n  border-radius: 5px;\n"]))),X=p.Z.p(D||(D=(0,d.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  color: #1c2f50;\n"]))),Y=p.Z.div(U||(U=(0,d.Z)(["\n  padding: 0px 20px 20px 20px;\n"]))),nn=function(n){var e=n.name,t=n.number,r=n.id,i=n.onClick;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)($,{id:r,children:(0,E.jsxs)(K,{children:[(0,E.jsx)(G,{children:e}),t,(0,E.jsx)(H,{onClick:function(){return i(r)},type:"button",children:"Delete contact"})]})})})},en=p.Z.div(P||(P=(0,d.Z)(["\n  padding-left: 20px;\n"]))),tn=p.Z.input(T||(T=(0,d.Z)(["\n  width: 221px;\n  height: 30px;\n  font-size: 24px;\n  border-color: inherit;\n  border-style: none;\n  background: rgba(129, 225, 247, 1);\n  padding: 10px;\n  border-radius: 0px 5px 5px 0px;\n  border: 2px solid #1c2f50;\n  color: #1c2f50;\n  outline: none;\n"]))),rn=p.Z.label(B||(B=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 20px;\n  border-radius: 5px;\n"]))),on=p.Z.span(J||(J=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  background: #1c2f50;\n  padding: 9px;\n  color: rgba(129, 225, 247, 1);\n  border-radius: 5px 0px 0px 5px;\n"]))),an=t(3165),un=function(){var n=(0,l.I0)();return(0,E.jsx)(en,{children:(0,E.jsxs)(rn,{htmlFor:"",children:[(0,E.jsx)(on,{children:" Finde contact"}),(0,E.jsx)(tn,{type:"text",onChange:function(e){n((0,an.b)(e.target.value))}})]})})},cn=function(){var n=(0,l.v9)(A),e=(0,l.v9)(k),t=(0,l.v9)(C),r=(0,l.v9)(z),i=(0,l.I0)(),o=function(n){i((0,F.in)(n))};return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(W,{children:[(0,E.jsx)(Q,{children:"Contacts"}),(0,E.jsx)(un,{}),(0,E.jsx)(Y,{children:r?(0,E.jsx)(X,{children:r}):t&&!r?(0,E.jsx)(X,{children:"Request in progress..."}):0===e.length?(0,E.jsx)(X,{children:"The phonebook is empty. Please add a contact."}):0===n.length&&(0,E.jsx)(X,{children:"Contact not found"})}),e.length>0&&(0,E.jsx)(V,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,E.jsx)(nn,{name:e,number:t,id:r,onClick:o},function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}())}))})]})})},ln=p.Z.div(M||(M=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  padding: 16vh 14vw;\n"])));function sn(){var n=(0,l.I0)();return(0,c.useEffect)((function(){n((0,F.yF)())}),[n]),(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(ln,{children:[(0,E.jsx)(S,{}),(0,E.jsx)(cn,{})]})})}}}]);
//# sourceMappingURL=966.0a7b0ce0.chunk.js.map