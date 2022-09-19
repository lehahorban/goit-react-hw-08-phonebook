(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[972],{9972:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j}});var r=n(885),a=n(2791),o="ContactForm_form__dhl+T",s="ContactForm_btn__wll+u",u=n(184);var i=function(t){var e=t.onAddContact,n=(0,a.useState)(""),i=(0,r.Z)(n,2),c=i[0],l=i[1],f=(0,a.useState)(""),h=(0,r.Z)(f,2),d=h[0],p=h[1],m=function(t){var e=t.currentTarget,n=e.name,r=e.value;"name"===n&&l(r),"number"===n&&p(r)};return(0,u.jsxs)("form",{className:o,onSubmit:function(t){t.preventDefault(),e({name:c,number:d}),l(""),p("")},children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:m,value:c}),(0,u.jsx)("label",{children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:m,value:d}),(0,u.jsx)("button",{className:s,type:"submit",children:"Add contact"})]})},c=n(6429),l=n.n(c),f="ContactList_list__csErn",h="ContactList_loading__QJfkF",d=n(9434);var p=function(t){var e=t.contacts,n=t.deleteUser,r=(0,d.v9)((function(t){return t.contacts.loading}));return(0,u.jsxs)("ul",{className:f,children:[(0,u.jsx)("p",{children:"Contact"}),r&&(0,u.jsx)("p",{className:h,children:"Loading..."}),e.map((function(t){var e=t.id,r=t.name,a=t.phone,o=t.number;return(0,u.jsxs)("li",{children:[r,": ",o||a,(0,u.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},l().generate())}))]})},m="Filter_filter__vxThR";var x=function(t){var e=t.filter,n=t.onChange;return(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)("label",{children:"Find contact by name"}),(0,u.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},v=n(3884),g=n(9323),b=n(5577),w=function(t){return t.filter},C=function(t){var e=t.contacts,n=t.filter;if(!n)return e.items;var r=n.toLowerCase();return e.items.filter((function(t){return t.name.toLowerCase().includes(r)}))},j=function(){var t=(0,d.v9)(C),e=(0,d.v9)(w),n=(0,d.I0)();(0,a.useEffect)((function(){n(v.yF())}),[n]);return(0,u.jsx)("div",{className:g.Z.wrapp,children:(0,u.jsxs)("div",{className:g.Z.app,children:[(0,u.jsx)("p",{children:"Phonebook"}),(0,u.jsx)(i,{onAddContact:function(e){var r=v.el(e),a=e.name;t.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert("Contact ".concat(a," already exists")):n(r)}}),(0,u.jsx)(x,{filter:e,onChange:function(t){n((0,b.x)(t.target.value))}}),(0,u.jsx)(p,{contacts:t,deleteUser:function(t){n(v.tY(t))}})]})})}},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,a,o,s=n(5408),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){o=!1}function c(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==u&&(r=u,i())}function l(){return o||(o=function(){r||c(u);for(var t,e=r.split(""),n=[],a=s.nextValue();e.length>0;)a=s.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return c(t),r},seed:function(t){s.seed(t),a!==t&&(i(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,e,n){"use strict";var r,a,o=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=o(7),e+=o(t),r>0&&(e+=o(r)),e+=o(n)}},2226:function(t,e,n){"use strict";var r=n(8857),a=n(9139),o=n(2483);t.exports=function(t){for(var e,n=0,s="";!e;)s+=o(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return s}},5274:function(t,e,n){"use strict";var r=n(8857),a=n(7098),o=n(6046),s=n(5347)||0;function u(){return a(s)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return s=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),o="";;)for(var s=t(a),u=a;u--;)if((o+=e[s[u]&r]||"").length===+n)return o}}}]);
//# sourceMappingURL=972.a7fa63c7.chunk.js.map