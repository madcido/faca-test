!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(e.i,i,r),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a={};function l(e,t,n){for(var o=0;o<t.length;o++){var i={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};a[e][o]?a[e][o](i):a[e].push(h(i,n))}}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var u=null,m=0;function h(e,t){var n,o,i;if(t.singleton){var r=m++;n=u||(u=c(t)),o=p.bind(null,n,r,!1),i=p.bind(null,n,r,!0)}else n=c(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i()),e=n.base?e+n.base:e,t=t||[],a[e]||(a[e]=[]),l(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){a[e]||(a[e]=[]),l(e,t,n);for(var o=t.length;o<a[e].length;o++)a[e][o]();a[e].length=t.length,0===a[e].length&&delete a[e]}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);"]),t.push([e.i,".row{display:flex;flex-direction:row}.col{display:flex;flex-direction:column}.a-start{align-items:flex-start}.a-center{align-items:center}.a-end{align-items:flex-end}.j-start{justify-content:flex-start}.j-center{justify-content:center}.j-end{justify-content:flex-end}.j-between{justify-content:space-between}.j-around{justify-content:space-around}.j-evenly{justify-content:space-evenly}.f-wrap{flex-wrap:wrap}@keyframes slide{from{right:25px}to{right:40px}}body{font-family:'Open Sans', Arial, sans-serif;color:#666;background-color:#f8f8f8}body>div{background-color:#fff;box-shadow:0 0 10px #e8e8e8;box-sizing:border-box;width:1280px;max-width:90%;margin:30px auto;padding:40px;min-height:500px}body,h1,h2,p{margin:0}h1{color:#999;font-size:24px;font-weight:400;line-height:40px}.button--outlined{background-color:transparent;border:1px solid #007ee5;border-radius:3px;font-size:14px;font-weight:600;color:#007ee5;text-transform:uppercase;padding:7px 15px;min-width:90px;display:flex;align-items:center;justify-content:center;cursor:pointer}.button--filled{background-color:#f0f0f0;border:none;font-size:20px;color:#666;padding:5px 10px;display:flex;align-items:center;cursor:pointer}.button--filled:hover{background-color:#007ee5;color:#fff}.icon-field ion-icon{font-size:18px;fill:transparent;stroke:#999;stroke-width:20px;margin-right:10px}.backdrop{display:block;position:fixed;top:0;left:0;right:0;bottom:0}.fancy-input{margin:10px 0 25px 0;width:250px;position:relative}.fancy-input label{text-transform:uppercase;font-size:16px;color:#999;line-height:40px;position:absolute;top:0;left:0;transition:all 0.2s ease}.fancy-input input{box-sizing:border-box;width:100%;padding:10px 0;border:none;border-bottom:1px solid #ddd;font-size:16px;color:#666;transition:all 0.2s ease}.fancy-input input:focus{outline:none;border-bottom-color:#007ee5}.fancy-input input:focus+label{color:#007ee5}.fancy-input--focused label,.fancy-input--filled label{font-size:12px;line-height:20px;top:-10px}@media (max-width: 980px){body>div{width:100%;max-width:420px;padding:30px}}.header{padding:0;min-height:0}.header__logout-button{align-self:flex-end;margin:25px}.header__coverpic-button{border-color:#ddd;color:#999;text-transform:capitalize;font-weight:400;align-self:center}.header__coverpic-button ion-icon{font-size:24px;fill:#ddd;margin-right:15px}.header__tabs{background-color:#fff;box-shadow:0 0 4px #e8e8e8;padding-left:195px;user-select:none;overflow:auto;-ms-overflow-style:none;scrollbar-width:none}.header__tabs::-webkit-scrollbar{display:none}.header__tab{box-sizing:border-box;cursor:pointer;white-space:nowrap;text-transform:uppercase;height:56px;line-height:56px;margin-left:25px;border-bottom:2px solid transparent;transition:border 0.3s ease}.header__tab:hover,.header__tab--selected{border-bottom:2px solid #007ee5}.profile{height:120px}.profile__avatar{box-shadow:0 0 20px #ccc;width:170px;height:170px;margin:25px;overflow:hidden;position:relative;bottom:-60px}.profile__avatar img{margin-left:-90px}.profile__info{position:relative;flex:1}.profile__info p{margin-bottom:15px;display:flex;align-items:center}.profile__info>div:last-of-type{align-self:flex-start;margin-right:25px}.profile__info--name{font-size:18px;font-weight:600;color:#444}.profile__info--place{font-size:14px}.profile__info--phone{font-size:14px}.profile__info--rating{margin-right:25px}.profile__info--rating ion-icon{font-size:24px;margin-right:5px}.profile__info--reviews{font-size:14px}.profile__info--reviews span{margin-right:15px}.profile__info--followers{position:absolute;right:25px;bottom:-70px;line-height:56px;font-size:14px;color:#999}.profile__info--followers span span{color:#333;margin-right:7px}.profile__info--followers ion-icon{font-size:32px;fill:#999;stroke-width:0}@media (max-width: 980px){.header{background-color:transparent;box-shadow:none}.header__logout-button{border-color:transparent}.header__coverpic-button{display:none}.header__tabs{padding-left:0}.header__tabs::after{content:'';flex:0 0 20px}.profile{height:auto;flex-direction:column;align-items:center}.profile__avatar{width:130px;height:130px;margin:0;bottom:0}.profile__avatar img{margin-left:-110px}.profile__info{flex-direction:column;align-self:stretch;margin:25px}.profile__info>div:last-of-type{flex-direction:column}.profile__info--name{align-self:center;order:1}.profile__info--place{order:3}.profile__info--phone{order:2}.profile__info--rating{margin-left:-2px}.profile__info--rating ion-icon{fill:#007ee5}.profile__info--reviews span{margin-left:4px}.profile__info--followers{position:relative;right:0;bottom:0;line-height:40px;color:#666;margin-bottom:0 !important}}.about p{padding:0 20px 0 5px;background-color:#f8f8f8;display:flex;align-items:center;min-height:40px}.about>div{position:relative;margin:1px 0}.about>div:first-of-type{align-self:stretch;margin:0 0 30px 0}.about>div:first-of-type button{display:none}.about__name{font-weight:600}.about__edit-popup{background-color:#fff;border-radius:3px;box-shadow:0 0 25px #aaa;padding:20px;position:absolute;top:-5px;transform:translateX(100%);animation:slide 0.2s forwards}.about__edit-popup::before{content:'';position:absolute;top:15px;left:-10px;width:20px;height:20px;transform:rotate(45deg);background-color:#fff}.about__save-button{background-color:#007ee5;color:#fff;margin-right:25px}.about__form>div{margin-bottom:10px}.about__form-button{padding:0;margin:0 15px;min-width:0;border-color:transparent}@media (max-width: 980px){.about p{background-color:transparent;padding:0}.about>div:first-of-type{margin-bottom:5px}.about>div:first-of-type button{display:flex}.about>div:not(:first-of-type) button{display:none}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var i=[].concat(e[o]);n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i)}},t}},function(e,t,n){"use strict";n.r(t);n(0);function o(e,t,n){const o=document.createElement("button");return o.className=e,o.innerHTML=t,o.addEventListener("click",n),o}var i={avatar:n.p+"assets/profile_image.jpg",name:"Jessica Parker",place:"Newport Beach, CA",phone:"(949) 325 - 68594",website:"www.seller.com",rating:4,reviews:6,followers:15};function r(e,t,n=!1){const o=document.createElement("p");if(o.className="icon-field "+e,o.innerHTML=`<span>${t}</span>`,n){const e=document.createElement("ion-icon");e.setAttribute("name",n),o.prepend(e)}return o}function a(e=i){const t=document.createElement("div");return t.className="profile row a-end",t.innerHTML=`\n        <div class='profile__avatar'>\n            <img src=${e.avatar} alt='user avatar' />\n        </div>\n        <div class='profile__info row j-between'>\n            <div class='col a-start'>\n                ${r("profile__info--name",e.name).outerHTML}\n                ${r("profile__info--place",e.place,"pin").outerHTML}\n                ${r("profile__info--phone",e.phone,"call").outerHTML}\n            </div>\n            <div class='row'>\n                <p class='profile__info--rating'>\n                    ${function(e){let t="";for(let n=1;n<=5;n++)t+=n<=e?"<ion-icon name='star'></ion-icon>":"<ion-icon name='star-outline'></ion-icon>";return t}(e.rating)}\n                </p>\n                <p class='profile__info--reviews'>\n                    <span>${e.reviews}</span>Reviews\n                </p>\n            </div>\n            ${r("profile__info--followers","<span>"+e.followers+"</span>Followers","add-circle").outerHTML}\n        </div>\n    `,t}const l=[{id:"first-name",label:"First Name"},{id:"last-name",label:"Last Name"},{id:"name",label:"Full Name"},{id:"phone",label:"Phone Number"},{id:"place",label:"City, State & ZIP"}];function c(e,t){const n=document.createElement("input");n.id=e,n.value=t,n.addEventListener("focus",()=>{n.parentNode.classList.add("fancy-input--focused")}),n.addEventListener("blur",()=>{n.parentNode.classList.remove("fancy-input--focused"),n.value?n.parentNode.classList.add("fancy-input--filled"):n.parentNode.classList.remove("fancy-input--filled")});const o=document.createElement("label");o.setAttribute("for",e),o.innerHTML=function(e){const t=l.findIndex(t=>t.id===e);return-1===t?e:l[t].label}(e);const i=document.createElement("div");return i.className="fancy-input",i.classList.add(n.value?"fancy-input--filled":null),i.appendChild(n),i.appendChild(o),i}function d(e){e.remove(),document.querySelector(".backdrop").remove()}function s(e){const t=document.createElement("div");t.className="row",t.appendChild(o("button--outlined about__save-button","Save",()=>{const t=document.getElementById(e),o=document.querySelector(`.profile__info--${e} span`);o&&(o.innerHTML=t.value),document.querySelector(`.about__${e} span`).innerHTML=t.value,t.value,d(n)})),t.appendChild(o("button--outlined","Cancel",()=>d(n)));const n=document.createElement("div");return n.className="about__edit-popup",n.appendChild(c(e,document.querySelector(`.about__${e} span`).innerHTML)),n.appendChild(t),document.body.appendChild(function(e){const t=document.createElement("span");return t.className="backdrop",t.addEventListener("click",()=>d(e)),t.style.zIndex="100",e.style.zIndex="101",t}(n)),n}function p(e,t,n,i){const a=document.createElement("div");return a.className="row",a.appendChild(r(t,n,i)),a.appendChild(o("button--filled",'<ion-icon name="create"></ion-icon>',()=>a.appendChild(s(e)))),a}function f(e=i){const t=document.createElement("div");t.className="row j-between",t.innerHTML="<h1>About</h1>",t.appendChild(o("button--filled",'<ion-icon name="create"></ion-icon>',()=>{n.parentNode.insertBefore(function(e){const t=document.createElement("div");t.className="row",t.appendChild(o("about__form-button button--outlined","Cancel",()=>{r.parentNode.appendChild(f(e)),r.remove()})),t.appendChild(o("about__form-button button--outlined","Save",()=>{const e={avatar:i.avatar,rating:i.rating,reviews:i.reviews,followers:i.followers,name:document.getElementById("first-name").value+" "+document.getElementById("last-name").value,website:document.getElementById("website").value,phone:document.getElementById("phone").value,place:document.getElementById("place").value},t=document.querySelector(".profile");t.parentNode.insertBefore(a(e),t),t.remove(),r.parentNode.insertBefore(f(e),r),r.remove()}));const n=document.createElement("div");n.className="row j-between",n.innerHTML="<h1>About</h1>",n.appendChild(t);const r=document.createElement("div");return r.className="about__form col",r.appendChild(n),r.appendChild(c("first-name",e.name.split(" ")[0])),r.appendChild(c("last-name",e.name.split(" ")[1])),r.appendChild(c("website",e.website)),r.appendChild(c("phone",e.phone)),r.appendChild(c("place",e.place)),r}(e),n),n.remove()}));const n=document.createElement("div");return n.className="about col a-start",n.appendChild(t),n.appendChild(p("name","about__name",e.name)),n.appendChild(p("website","about__website",e.website,"globe")),n.appendChild(p("phone","about__phone",e.phone,"call")),n.appendChild(p("place","about__place",e.place,"home")),n}const u=[{name:"About",content:f()},{name:"Settings",content:function(){const e=document.createElement("div");return e.innerHTML="<h1>Settings</h1>",e}()},{name:"Option1",content:h(1)},{name:"Option2",content:h(2)},{name:"Option3",content:h(3)}];function m(e){document.querySelectorAll(".header__tab").forEach(e=>e.classList.remove("header__tab--selected")),document.querySelector(`.header__tab:nth-child(${e+1})`).classList.add("header__tab--selected");const t=document.querySelector("#display");for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(u[e].content)}function h(e){const t=document.createElement("div");return t.innerHTML=`<h1>Option${e}</h1>`,t}let b,g,x=!1;function _(e){const t=e.currentTarget;x=!0,b=e.pageX-t.offsetLeft,g=t.scrollLeft}function v(){x=!1}function y(e){const t=e.currentTarget;if(!x)return;e.preventDefault();const n=1*(e.pageX-t.offsetLeft-b);t.scrollLeft=g-n}document.body.prepend(function(){const e=document.createElement("div");return e.className="header col",e.appendChild(o("button--outlined header__logout-button","Log out",()=>alert("You clicked to log out."))),e.appendChild(o("button--outlined header__coverpic-button",'<ion-icon name="camera"></ion-icon>Upload Cover Image',()=>alert("You clicked to upload a cover image."))),e.appendChild(a()),e.appendChild(function(){const e=document.createElement("div");return e.className="header__tabs row",e.addEventListener("mousedown",_),e.addEventListener("mouseleave",v),e.addEventListener("mouseup",v),e.addEventListener("mousemove",y),u.forEach((t,n)=>{const o=document.createElement("div");o.className="header__tab",o.innerHTML=t.name,o.addEventListener("click",()=>m(n)),e.appendChild(o)}),e}()),e}()),m(0)}]);