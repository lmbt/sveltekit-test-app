function g(){}const J=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function W(){return Object.create(null)}function b(t){t.forEach(K)}function T(t){return typeof t=="function"}function Mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Rt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let c=0;c<o;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,u){if(r){const o=Q(e,n,i,u);t.p(o,r)}}function qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ft(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ht(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function It(t){const e={};for(const n in t)e[n]=!0;return e}function Wt(t,e,n){return t.set(n),e}function Gt(t){return t&&T(t.destroy)?t.destroy:g}const U=typeof window!="undefined";let V=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):g;const $=new Set;function X(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&F(X)}function Y(t){let e;return $.size===0&&F(X),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let M=!1;function dt(){M=!0}function ht(){M=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:mt(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],o=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);c>=s;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);u.reverse(),o.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<o.length;s++){for(;l<u.length&&o[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(o[s],f)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=tt("style");return $t(Z(t),e),e.sheet}function $t(t,e){yt(t.head||t,e)}function bt(t,e){if(M){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){M&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Qt(){return H(" ")}function Ut(){return H("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Yt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:et(t,i,e[i])}function te(t,e){for(const n in e)et(t,n,e[n])}function vt(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){kt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||u.push(c.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function ee(t,e,n){return it(t,e,n,tt)}function ne(t,e,n){return it(t,e,n,wt)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function ie(t){return Et(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function oe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const D=new Map;let O=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:gt(e),rules:{}};return D.set(t,n),n}function rt(t,e,n,i,r,u,o,c=0){const s=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=s){const j=e+(n-e)*u(m);l+=m*100+`%{${o(j,1-j)}}
`}const f=l+`100% {${o(n,1-n)}}
}`,a=`__svelte_${jt(f)}_${c}`,_=Z(t),{stylesheet:d,rules:h}=D.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||Ct())}function Ct(){F(()=>{O||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let k;function v(t){k=t}function N(){if(!k)throw new Error("Function called outside component initialization");return k}function ce(t){N().$$.on_mount.push(t)}function le(t){N().$$.after_update.push(t)}function ue(t){N().$$.on_destroy.push(t)}function ae(t,e){return N().$$.context.set(t,e),e}function fe(t){return N().$$.context.get(t)}function _e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],G=[],C=[],L=[],st=Promise.resolve();let q=!1;function ot(){q||(q=!0,st.then(ct))}function de(){return ot(),st}function E(t){C.push(t)}function he(t){L.push(t)}const z=new Set;let A=0;function ct(){const t=k;do{for(;A<w.length;){const e=w[A];A++,v(e),St(e.$$)}for(v(null),w.length=0,A=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];z.has(n)||(z.add(n),n())}C.length=0}while(w.length);for(;L.length;)L.pop()();q=!1,z.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let x;function lt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function P(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function me(){y={r:0,c:[],p:y}}function pe(){y.r||b(y.c),y=y.p}function Dt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ut={duration:0};function ge(t,e,n){let i=e(t,n),r=!1,u,o,c=0;function s(){u&&B(t,u)}function l(){const{delay:a=0,duration:_=300,easing:d=J,tick:h=g,css:p}=i||ut;p&&(u=rt(t,0,1,_,a,d,p,c++)),h(0,1);const m=V()+a,j=m+_;o&&o.abort(),r=!0,E(()=>P(t,!0,"start")),o=Y(R=>{if(r){if(R>=j)return h(1,0),P(t,!0,"end"),s(),r=!1;if(R>=m){const I=d((R-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,B(t),T(i)?(i=i(),lt().then(l)):l())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function $e(t,e,n){let i=e(t,n),r=!0,u;const o=y;o.r+=1;function c(){const{delay:s=0,duration:l=300,easing:f=J,tick:a=g,css:_}=i||ut;_&&(u=rt(t,1,0,l,s,f,_));const d=V()+s,h=d+l;E(()=>P(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),P(t,!1,"end"),--o.r||b(o.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return T(i)?lt().then(()=>{i=i(),c()}):c(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&B(t,u),r=!1)}}}const be=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function xe(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],c=e[u];if(c){for(const s in o)s in c||(i[s]=1);for(const s in c)r[s]||(n[s]=c[s],r[s]=1);t[u]=c}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function we(t){return typeof t=="object"&&t!==null?t:{}}function ve(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ke(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:c}=t.$$;r&&r.m(e,n),i||E(()=>{const s=u.map(K).filter(T);o?o.push(...s):b(s),t.$$.on_mount=[]}),c.forEach(E)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,r,u,o,c=[-1]){const s=k;v(t);const l=t.$$={fragment:null,ctx:null,props:u,update:g,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:W(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Tt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){dt();const a=vt(e.target);l.fragment&&l.fragment.l(a),a.forEach(xt)}else l.fragment&&l.fragment.c();e.intro&&Dt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),ht(),ct()}v(s)}class je{$destroy(){Pt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Yt as $,we as A,Pt as B,at as C,de as D,g as E,zt as F,Zt as G,Gt as H,Vt as I,Lt as J,qt as K,Bt as L,T as M,b as N,Ht as O,N as P,ue as Q,Ft as R,je as S,G as T,E as U,ge as V,$e as W,bt as X,fe as Y,_e as Z,Xt as _,vt as a,Rt as a0,Wt as a1,se as a2,It as a3,ve as a4,he as a5,be as a6,wt as a7,ne as a8,te as a9,Kt as aa,et as b,ee as c,xt as d,tt as e,oe as f,Jt as g,Et as h,Ne as i,re as j,Qt as k,Ut as l,ie as m,me as n,ye as o,pe as p,Dt as q,ae as r,Mt as s,H as t,le as u,ce as v,ke as w,Ee as x,Ot as y,xe as z};
