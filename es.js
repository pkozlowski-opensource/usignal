/*! (c) Andrea Giammarchi */
const{is:t}=Object;let s;const e=t=>{const e=s;s=new Set;try{t();for(const t of s)e?e.add(t):t(!1)}finally{s=e}};class n{constructor(t){this._=t}toString(){return this.value}valueOf(){return this.value}}const o=({o:{$:t}})=>{for(const s of t)s.$=!0,o(s)};let i;const c=({c:t})=>{if(t.size){const e=i;i=e||new Set;for(const s of t){const e=s.deref();e?(e.$=!0,e instanceof f?(i.add(e),o(e)):c(e.s)):t.delete(s)}try{if(!e)for(const t of i)s?s.add((()=>{t.value})):t.value}finally{i=e}}};let r;class l extends n{constructor(t){super(t),this.$=!1,this.s=void 0}get value(){if(!this.s){const t=r;r=new Set;try{this.s=new d(this._());const s=new WeakRef(this);for(const t of r)t.c.add(s)}finally{r=t}}if(this.$)try{this.s.value=this._()}finally{this.$=!1}return this.s.value}}const a=t=>new l(t);let u;class f extends l{constructor(t){super(t).o={i:0,$:[]}}get value(){const t=u;u=this.o,u.i=0,super.value,u=t}}const h=t=>{if(u){const{i:s,$:e}=u,n=e[s]||(e[s]=new f(t));u.i++,n.value}else new f(t).value};class d extends n{constructor(t){super(t).c=new Set}peek(){return this._}get value(){return r&&r.add(this),this._}set value(s){t(s,this._)||(this._=s,c(this))}}const v=t=>new d(t);export{n as Signal,e as batch,a as computed,h as effect,v as signal};
