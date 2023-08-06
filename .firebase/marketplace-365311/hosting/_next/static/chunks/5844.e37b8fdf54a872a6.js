"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5844],{83287:function(t,e,n){n.d(e,{W:function(){return r}});var s=n(6475),i=n(65007);class r extends i.Z{constructor(t){let{chains:e=s.gL9,options:n}=t;super(),this.chains=e,this.options=n}getBlockExplorerUrls(t){let e=t.explorers?.map(t=>t.url)??[];return e.length>0?e:void 0}isChainUnsupported(t){return!this.chains.some(e=>e.chainId===t)}updateChains(t){this.chains=t}}},56856:function(t,e,n){n.d(e,{A:function(){return o},C:function(){return a},R:function(){return h},S:function(){return u},U:function(){return d},a:function(){return c}});var s=n(42009);class i extends Error{constructor(t,e){let{cause:n,code:s,data:i}=e;if(!Number.isInteger(s))throw Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw Error('"message" must be a nonempty string.');super(`${t}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=s,this.data=i}}class r extends i{constructor(t,e){let{cause:n,code:s,data:i}=e;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:n,code:s,data:i})}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class a extends Error{constructor(t){let{chainId:e,connectorId:n}=t;super(`Chain "${e}" not configured for connector "${n}".`),(0,s._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class u extends r{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class d extends r{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},4646:function(t,e,n){n.d(e,{n:function(){return s}});function s(t){return"string"==typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"==typeof t?Number(t):t}},35844:function(t,e,n){n.d(e,{BloctoConnector:function(){return v}});var s=n(71958),i=n(16074),r=n(42009),o=n(40562),a=n(19485),c=n(241),h=n(16441),u=n(25137),d=n(83287),l=n(56856),w=n(4646);n(65007);var g=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap,b=new WeakSet,C=new WeakSet;class v extends d.W{constructor(t){let{chains:e,options:n={}}=t;super({chains:e,options:n}),(0,s._)(this,C),(0,s._)(this,b),(0,r._)(this,"id",u.w.blocto),(0,r._)(this,"name","Blocto"),(0,r._)(this,"ready",!0),(0,i._)(this,g,{writable:!0,value:void 0}),(0,i._)(this,p,{writable:!0,value:void 0}),(0,i._)(this,f,{writable:!0,value:void 0}),(0,i._)(this,m,{writable:!0,value:void 0}),(0,i.a)(this,p,this.onAccountsChanged.bind(this)),(0,i.a)(this,f,this.onChainChanged.bind(this)),(0,i.a)(this,m,this.onDisconnect.bind(this))}async connect(t){try{let e=await this.getProvider(t);this.setupListeners(),this.emit("message",{type:"connecting"});let n=await e.request({method:"eth_requestAccounts"}),s=a.getAddress(n[0]),i=await this.getChainId(),r=this.isChainUnsupported(i);return{account:s,chain:{id:i,unsupported:r},provider:e}}catch(t){if((0,s.a)(this,C,E).call(this),(0,s.a)(this,b,_).call(this,t))throw new l.U(t);throw t}}async disconnect(){let t=await this.getProvider();await t.request({method:"wallet_disconnect"}),this.removeListeners(),(0,s.a)(this,C,E).call(this)}async getAccount(){let t=await this.getProvider(),e=await t.request({method:"eth_accounts"}),[n]=e||[];if(!n)throw Error("No accounts found");return n}async getChainId(){let t=await this.getProvider(),e=await t.request({method:"eth_chainId"});return(0,w.n)(e)}getProvider(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!(0,i.b)(this,g)){let e=t??this.options.chainId??this.chains[0].chainId,n=this.chains.find(t=>t.chainId===e)?.rpc[0];(0,i.a)(this,g,new o.Z({ethereum:{chainId:e,rpc:n},appId:this.options.appId})?.ethereum)}if(!(0,i.b)(this,g))throw new l.a;return Promise.resolve((0,i.b)(this,g))}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[e,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new c.Q(e,t).getSigner(n)}async isAuthorized(){return!!i.b(this,g)?._blocto?.sessionKey??!1}async switchChain(t){let e=await this.getProvider(),n=h.hexValue(t),i=this.chains.find(e=>e.chainId===t);if(!i)throw new l.S(Error("chain not found on connector."));let r=e._blocto.supportNetworkList[`${t}`];if(!r)throw new l.S(Error(`Blocto unsupported chain: ${n}`));try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,rpcUrls:[i?.rpc[0]??""]}]}),await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),i}catch(t){if((0,s.a)(this,b,_).call(this,t))throw new l.U(t);throw new l.S(t)}}onAccountsChanged(){}async onChainChanged(t){let e=(0,w.n)(t),n=this.isChainUnsupported(e),s=await this.getAccount();this.emit("change",{chain:{id:e,unsupported:n},account:s})}onDisconnect(){this.emit("disconnect")}async setupListeners(){let t=await this.getProvider();t.on("accountsChanged",(0,i.b)(this,p)),t.on("chainChanged",(0,i.b)(this,f)),t.on("disconnect",(0,i.b)(this,m))}async removeListeners(){let t=await this.getProvider();t.off("accountsChanged",(0,i.b)(this,p)),t.off("chainChanged",(0,i.b)(this,f)),t.off("disconnect",(0,i.b)(this,m))}}function _(t){return/(user rejected)/i.test(t.message)}function E(){(0,i.a)(this,g,void 0)}}}]);