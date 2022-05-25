var Ne=Object.defineProperty;var oe=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var le=(r,e,t)=>e in r?Ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,V=(r,e)=>{for(var t in e||(e={}))Me.call(e,t)&&le(r,t,e[t]);if(oe)for(var t of oe(e))De.call(e,t)&&le(r,t,e[t]);return r};import{S as Q,i as W,s as L,F as X,C as J,e as k,c as P,a as H,d,G as ue,g as _,H as ce,I as fe,J as Y,K as Z,L as x,z as Le,M as ke,q as p,o as $,N as Pe,O as de,P as He,r as q,v as Be,Q as Re,R as Ge,T as Ue,U as Ve,V as qe,W as je,l as me,n as Ke,E as ze,p as Je,w as h,k as I,x as g,m as y,b as ve,y as v,X as Qe,B as E,t as S,h as A}from"../chunks/index-fdd58923.js";import{_ as Ee,a as pe,M as We,c as $e,u as Xe,f as Ye,d as _e,b as N,D as ee,H as Ze,e as xe,I as te}from"../chunks/IconButton-eb8f010c.js";import{L as et,I as j,T as ne}from"../chunks/index-5f5d0431.js";/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var K="mdc-dom-focus-sentinel",tt=function(){function r(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return r.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},r.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+K)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},r.prototype.wrapTabFocus=function(e){var t=this,s=this.createSentinel(),a=this.createSentinel();s.addEventListener("focus",function(){var n=t.getFocusableElements(e);n.length>0&&n[n.length-1].focus()}),a.addEventListener("focus",function(){var n=t.getFocusableElements(e);n.length>0&&n[0].focus()}),e.insertBefore(s,e.children[0]),e.appendChild(a)},r.prototype.focusInitialElement=function(e,t){var s=0;t&&(s=Math.max(e.indexOf(t),0)),e[s].focus()},r.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(s){var a=s.getAttribute("aria-disabled")==="true"||s.getAttribute("disabled")!=null||s.getAttribute("hidden")!=null||s.getAttribute("aria-hidden")==="true",n=s.tabIndex>=0&&s.getBoundingClientRect().width>0&&!s.classList.contains(K)&&!a,i=!1;if(n){var o=getComputedStyle(s);i=o.display==="none"||o.visibility==="hidden"}return n&&!i})},r.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(K),e},r}(),nt=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:tt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},st={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ce=function(r){Ee(e,r);function e(t){var s=r.call(this,pe(pe({},e.defaultAdapter),t))||this;return s.animationFrame=0,s.animationTimer=0,s}return Object.defineProperty(e,"strings",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(b.OPEN),this.adapter.addClass(b.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(b.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(b.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(b.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(b.OPENING)||this.adapter.hasClass(b.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(b.CLOSING)},e.prototype.handleKeydown=function(t){var s=t.keyCode,a=t.key,n=a==="Escape"||s===27;n&&this.close()},e.prototype.handleTransitionEnd=function(t){var s=b.OPENING,a=b.CLOSING,n=b.OPEN,i=b.ANIMATE,o=b.ROOT,l=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);!l||(this.isClosing()?(this.adapter.removeClass(n),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(i),this.adapter.removeClass(s),this.adapter.removeClass(a))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var s=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){s.animationFrame=0,clearTimeout(s.animationTimer),s.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(We);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at=function(r){Ee(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Ce);function rt(r){let e,t,s,a,n,i;const o=r[15].default,l=X(o,r,r[14],null);let C=[{class:t=$e(V({[r[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":r[2]==="dismissible","mdc-drawer--modal":r[2]==="modal","smui-drawer__absolute":r[2]==="modal"&&!r[3]},r[6]))},r[8]],w={};for(let u=0;u<C.length;u+=1)w=J(w,C[u]);return{c(){e=k("aside"),l&&l.c(),this.h()},l(u){e=P(u,"ASIDE",{class:!0});var m=H(e);l&&l.l(m),m.forEach(d),this.h()},h(){ue(e,w)},m(u,m){_(u,e,m),l&&l.m(e,null),r[16](e),a=!0,n||(i=[ce(s=Xe.call(null,e,r[0])),ce(r[7].call(null,e)),fe(e,"keydown",r[17]),fe(e,"transitionend",r[18])],n=!0)},p(u,[m]){l&&l.p&&(!a||m&16384)&&Y(l,o,u,u[14],a?x(o,u[14],m,null):Z(u[14]),null),ue(e,w=Le(C,[(!a||m&78&&t!==(t=$e(V({[u[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":u[2]==="dismissible","mdc-drawer--modal":u[2]==="modal","smui-drawer__absolute":u[2]==="modal"&&!u[3]},u[6]))))&&{class:t},m&256&&u[8]])),s&&ke(s.update)&&m&1&&s.update.call(null,u[0])},i(u){a||(p(l,u),a=!0)},o(u){$(l,u),a=!1},d(u){u&&d(e),l&&l.d(u),r[16](null),n=!1,Pe(i)}}}function it(r,e,t){const s=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let a=de(e,s),{$$slots:n={},$$scope:i}=e;const{FocusTrap:o}=nt,l=Ye(He());let{use:C=[]}=e,{class:w=""}=e,{variant:u=void 0}=e,{open:m=!1}=e,{fixed:se=!0}=e,O,f,F={},M=null,B,T=!1;q("SMUI:list:nav",!0),q("SMUI:list:item:nav",!0),q("SMUI:list:wrapFocus",!0);let R=u;Be(()=>{B=new o(O,{skipInitialFocus:!0}),t(4,f=ae()),f&&f.init()}),Re(()=>{f&&f.destroy(),T&&T.removeEventListener("SMUIDrawerScrim:click",G)});function ae(){var c,U;T&&T.removeEventListener("SMUIDrawerScrim:click",G),u==="modal"&&(T=(U=(c=O.parentNode)===null||c===void 0?void 0:c.querySelector(".mdc-drawer-scrim"))!==null&&U!==void 0?U:!1,T&&T.addEventListener("SMUIDrawerScrim:click",G));const ie=u==="dismissible"?Ce:u==="modal"?at:void 0;return ie?new ie({addClass:we,removeClass:Fe,hasClass:be,elementHasClass:(D,Ae)=>D.classList.contains(Ae),saveFocus:()=>M=document.activeElement,restoreFocus:()=>{M&&"focus"in M&&O.contains(document.activeElement)&&M.focus()},focusActiveNavigationItem:()=>{const D=O.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");D&&D.focus()},notifyClose:()=>{t(9,m=!1),_e(O,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,m=!0),_e(O,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>B.trapFocus(),releaseFocus:()=>B.releaseFocus()}):void 0}function be(c){return c in F?F[c]:re().classList.contains(c)}function we(c){F[c]||t(6,F[c]=!0,F)}function Fe(c){(!(c in F)||F[c])&&t(6,F[c]=!1,F)}function G(){f&&"handleScrimClick"in f&&f.handleScrimClick()}function Oe(c){t(9,m=c)}function Te(){return m}function re(){return O}function Ie(c){Ue[c?"unshift":"push"](()=>{O=c,t(5,O)})}const ye=c=>f&&f.handleKeydown(c),Se=c=>f&&f.handleTransitionEnd(c);return r.$$set=c=>{e=J(J({},e),Ge(c)),t(8,a=de(e,s)),"use"in c&&t(0,C=c.use),"class"in c&&t(1,w=c.class),"variant"in c&&t(2,u=c.variant),"open"in c&&t(9,m=c.open),"fixed"in c&&t(3,se=c.fixed),"$$scope"in c&&t(14,i=c.$$scope)},r.$$.update=()=>{r.$$.dirty&8212&&R!==u&&(t(13,R=u),f&&f.destroy(),t(6,F={}),t(4,f=ae()),f&&f.init()),r.$$.dirty&528&&f&&f.isOpen()!==m&&(m?f.open():f.close())},[C,w,u,se,f,O,F,l,a,m,Oe,Te,re,R,i,n,Ie,ye,Se]}class ot extends Q{constructor(e){super(),W(this,e,it,rt,L,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var lt=N({class:"mdc-drawer-app-content",component:ee}),ut=N({class:"mdc-drawer__content",component:ee}),ct=N({class:"mdc-drawer__header",component:ee}),ft=N({class:"mdc-drawer__title",component:Ze});N({class:"mdc-drawer__subtitle",component:xe});function dt(r){const e=r-1;return e*e*e+1}function he(r,{delay:e=0,duration:t=400,easing:s=dt,x:a=0,y:n=0,opacity:i=0}={}){const o=getComputedStyle(r),l=+o.opacity,C=o.transform==="none"?"":o.transform,w=l*(1-i);return{delay:e,duration:t,easing:s,css:(u,m)=>`
			transform: ${C} translate(${(1-u)*a}px, ${(1-u)*n}px);
			opacity: ${l-w*m}`}}function ge(r){let e,t,s,a;const n=r[2].default,i=X(n,r,r[1],null);return{c(){e=k("div"),i&&i.c()},l(o){e=P(o,"DIV",{});var l=H(e);i&&i.l(l),l.forEach(d)},m(o,l){_(o,e,l),i&&i.m(e,null),a=!0},p(o,l){r=o,i&&i.p&&(!a||l&2)&&Y(i,n,r,r[1],a?x(n,r[1],l,null):Z(r[1]),null)},i(o){a||(p(i,o),Ve(()=>{s&&s.end(1),t=qe(e,he,{x:-5,duration:z,delay:z}),t.start()}),a=!0)},o(o){$(i,o),t&&t.invalidate(),s=je(e,he,{x:5,duration:z}),a=!1},d(o){o&&d(e),i&&i.d(o),o&&s&&s.end()}}}function mt(r){let e=r[0],t,s,a=ge(r);return{c(){a.c(),t=me()},l(n){a.l(n),t=me()},m(n,i){a.m(n,i),_(n,t,i),s=!0},p(n,[i]){i&1&&L(e,e=n[0])?(Ke(),$(a,1,1,ze),Je(),a=ge(n),a.c(),p(a,1),a.m(t.parentNode,t)):a.p(n,i)},i(n){s||(p(a),s=!0)},o(n){$(a),s=!1},d(n){n&&d(t),a.d(n)}}}const z=500;function pt(r,e,t){let{$$slots:s={},$$scope:a}=e,{url:n=""}=e;return r.$$set=i=>{"url"in i&&t(0,n=i.url),"$$scope"in i&&t(1,a=i.$$scope)},[n,a,s]}class $t extends Q{constructor(e){super(),W(this,e,pt,mt,L,{url:0})}}function _t(r){let e;return{c(){e=S("Test App")},l(t){e=A(t,"Test App")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function ht(r){let e,t;return e=new ft({props:{$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,a){v(e,s,a),t=!0},p(s,a){const n={};a&2&&(n.$$scope={dirty:a,ctx:s}),e.$set(n)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function gt(r){let e;return{c(){e=S("home")},l(t){e=A(t,"home")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function vt(r){let e;return{c(){e=S("Home")},l(t){e=A(t,"Home")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function Et(r){let e,t,s,a;return e=new te({props:{class:"material-icons",$$slots:{default:[gt]},$$scope:{ctx:r}}}),s=new ne({props:{$$slots:{default:[vt]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),t=I(),h(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=y(n),g(s.$$.fragment,n)},m(n,i){v(e,n,i),_(n,t,i),v(s,n,i),a=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),e.$set(o);const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){a||(p(e.$$.fragment,n),p(s.$$.fragment,n),a=!0)},o(n){$(e.$$.fragment,n),$(s.$$.fragment,n),a=!1},d(n){E(e,n),n&&d(t),E(s,n)}}}function Ct(r){let e;return{c(){e=S("note_add")},l(t){e=A(t,"note_add")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function bt(r){let e;return{c(){e=S("Create")},l(t){e=A(t,"Create")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function wt(r){let e,t,s,a;return e=new te({props:{class:"material-icons",$$slots:{default:[Ct]},$$scope:{ctx:r}}}),s=new ne({props:{$$slots:{default:[bt]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),t=I(),h(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=y(n),g(s.$$.fragment,n)},m(n,i){v(e,n,i),_(n,t,i),v(s,n,i),a=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),e.$set(o);const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){a||(p(e.$$.fragment,n),p(s.$$.fragment,n),a=!0)},o(n){$(e.$$.fragment,n),$(s.$$.fragment,n),a=!1},d(n){E(e,n),n&&d(t),E(s,n)}}}function Ft(r){let e;return{c(){e=S("note")},l(t){e=A(t,"note")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function Ot(r){let e;return{c(){e=S("View")},l(t){e=A(t,"View")},m(t,s){_(t,e,s)},d(t){t&&d(e)}}}function Tt(r){let e,t,s,a;return e=new te({props:{class:"material-icons",$$slots:{default:[Ft]},$$scope:{ctx:r}}}),s=new ne({props:{$$slots:{default:[Ot]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),t=I(),h(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=y(n),g(s.$$.fragment,n)},m(n,i){v(e,n,i),_(n,t,i),v(s,n,i),a=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),e.$set(o);const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){a||(p(e.$$.fragment,n),p(s.$$.fragment,n),a=!0)},o(n){$(e.$$.fragment,n),$(s.$$.fragment,n),a=!1},d(n){E(e,n),n&&d(t),E(s,n)}}}function It(r){let e,t,s,a,n,i;return e=new j({props:{href:"/",$$slots:{default:[Et]},$$scope:{ctx:r}}}),s=new j({props:{href:"/create",$$slots:{default:[wt]},$$scope:{ctx:r}}}),n=new j({props:{href:"/view",$$slots:{default:[Tt]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),t=I(),h(s.$$.fragment),a=I(),h(n.$$.fragment)},l(o){g(e.$$.fragment,o),t=y(o),g(s.$$.fragment,o),a=y(o),g(n.$$.fragment,o)},m(o,l){v(e,o,l),_(o,t,l),v(s,o,l),_(o,a,l),v(n,o,l),i=!0},p(o,l){const C={};l&2&&(C.$$scope={dirty:l,ctx:o}),e.$set(C);const w={};l&2&&(w.$$scope={dirty:l,ctx:o}),s.$set(w);const u={};l&2&&(u.$$scope={dirty:l,ctx:o}),n.$set(u)},i(o){i||(p(e.$$.fragment,o),p(s.$$.fragment,o),p(n.$$.fragment,o),i=!0)},o(o){$(e.$$.fragment,o),$(s.$$.fragment,o),$(n.$$.fragment,o),i=!1},d(o){E(e,o),o&&d(t),E(s,o),o&&d(a),E(n,o)}}}function yt(r){let e,t;return e=new et({props:{$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,a){v(e,s,a),t=!0},p(s,a){const n={};a&2&&(n.$$scope={dirty:a,ctx:s}),e.$set(n)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function St(r){let e,t,s,a;return e=new ct({props:{$$slots:{default:[ht]},$$scope:{ctx:r}}}),s=new ut({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),t=I(),h(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=y(n),g(s.$$.fragment,n)},m(n,i){v(e,n,i),_(n,t,i),v(s,n,i),a=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),e.$set(o);const l={};i&2&&(l.$$scope={dirty:i,ctx:n}),s.$set(l)},i(n){a||(p(e.$$.fragment,n),p(s.$$.fragment,n),a=!0)},o(n){$(e.$$.fragment,n),$(s.$$.fragment,n),a=!1},d(n){E(e,n),n&&d(t),E(s,n)}}}function At(r){let e;const t=r[0].default,s=X(t,r,r[1],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,n){s&&s.m(a,n),e=!0},p(a,n){s&&s.p&&(!e||n&2)&&Y(s,t,a,a[1],e?x(t,a[1],n,null):Z(a[1]),null)},i(a){e||(p(s,a),e=!0)},o(a){$(s,a),e=!1},d(a){s&&s.d(a)}}}function Nt(r){let e,t,s;return t=new $t({props:{url:Dt,$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){e=k("main"),h(t.$$.fragment),this.h()},l(a){e=P(a,"MAIN",{class:!0});var n=H(e);g(t.$$.fragment,n),n.forEach(d),this.h()},h(){ve(e,"class","main-content svelte-soyy77")},m(a,n){_(a,e,n),v(t,e,null),s=!0},p(a,n){const i={};n&2&&(i.$$scope={dirty:n,ctx:a}),t.$set(i)},i(a){s||(p(t.$$.fragment,a),s=!0)},o(a){$(t.$$.fragment,a),s=!1},d(a){a&&d(e),E(t)}}}function Mt(r){let e,t,s,a,n;return t=new ot({props:{$$slots:{default:[St]},$$scope:{ctx:r}}}),a=new lt({props:{class:"app-content",$$slots:{default:[Nt]},$$scope:{ctx:r}}}),{c(){e=k("div"),h(t.$$.fragment),s=I(),h(a.$$.fragment),this.h()},l(i){e=P(i,"DIV",{class:!0});var o=H(e);g(t.$$.fragment,o),s=y(o),g(a.$$.fragment,o),o.forEach(d),this.h()},h(){ve(e,"class","app-wrapper svelte-soyy77")},m(i,o){_(i,e,o),v(t,e,null),Qe(e,s),v(a,e,null),n=!0},p(i,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:i}),t.$set(l);const C={};o&2&&(C.$$scope={dirty:o,ctx:i}),a.$set(C)},i(i){n||(p(t.$$.fragment,i),p(a.$$.fragment,i),n=!0)},o(i){$(t.$$.fragment,i),$(a.$$.fragment,i),n=!1},d(i){i&&d(e),E(t),E(a)}}}let Dt;const Rt=async({url:r})=>({props:{url:r}});function Lt(r,e,t){let{$$slots:s={},$$scope:a}=e;return r.$$set=n=>{"$$scope"in n&&t(1,a=n.$$scope)},[s,a]}class Gt extends Q{constructor(e){super(),W(this,e,Lt,Mt,L,{})}}export{Gt as default,Rt as load,Dt as url};
