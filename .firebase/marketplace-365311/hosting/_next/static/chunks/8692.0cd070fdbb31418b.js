"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8692],{4646:function(e,t,i){i.d(t,{n:function(){return r}});function r(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},38692:function(e,t,i){i.d(t,{PaperWalletConnector:function(){return u}});var r=i(16074),n=i(42009),s=i(27021),a=i(67885),o=i(19485),l=i(25137),c=i(4646);i(65007);var d=new WeakMap,h=new WeakMap;class u extends s.C{constructor(e){super(),(0,n._)(this,"id",l.w.paper),(0,n._)(this,"name","Paper Wallet"),(0,n._)(this,"ready",!0),(0,n._)(this,"user",null),(0,r._)(this,d,{writable:!0,value:void 0}),(0,r._)(this,h,{writable:!0,value:void 0}),(0,n._)(this,"onAccountsChanged",async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:o.getAddress(e[0])})}),(0,n._)(this,"onChainChanged",e=>{let t=(0,c.n)(e),i=-1===this.options.chains.findIndex(e=>e.chainId===t);this.emit("change",{chain:{id:t,unsupported:i}})}),(0,n._)(this,"onDisconnect",async()=>{this.emit("disconnect")}),this.options=e}getPaperSDK(){return(0,r.b)(this,d)||(0,r.a)(this,d,new Promise(async(e,t)=>{try{let{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(i.bind(i,67885));e(new t({advancedOptions:{recoveryShareManagement:this.options.advancedOptions?.recoveryShareManagement},clientId:this.options.clientId,chain:"Ethereum",styles:this.options.styles}))}catch(e){t(e)}})),(0,r.b)(this,d)}async connect(e){let t=await this.getPaperSDK();if(!t)throw Error("Paper SDK not initialized");let i=await t.getUser();switch(i.status){case a.J0.LOGGED_OUT:{let i;i=e?.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal(),this.user=i.user;break}case a.J0.LOGGED_IN_WALLET_INITIALIZED:this.user=i}if(!this.user)throw Error("Error connecting User");return e?.chainId&&this.switchChain(e.chainId),this.setupListeners(),this.getAddress()}async disconnect(){let e=await (0,r.b)(this,d);await e?.auth.logout(),(0,r.a)(this,h,void 0),this.user=null}async getAddress(){let e=await this.getSigner();return e.getAddress()}async isConnected(){try{let e=await this.getAddress();return!!e}catch(e){return!1}}async getProvider(){let e=await this.getSigner();if(!e.provider)throw Error("Provider not found");return e.provider}async getSigner(){if((0,r.b)(this,h))return(0,r.b)(this,h);if(!this.user){let e=await this.getPaperSDK(),t=await e.getUser();t.status===a.J0.LOGGED_IN_WALLET_INITIALIZED&&(this.user=t)}let e=await this.user?.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]});if(!e)throw Error("Signer not found");return(0,r.a)(this,h,e),e}async isAuthorized(){return!1}async switchChain(e){let t=this.options.chains.find(t=>t.chainId===e);if(!t)throw Error("Chain not configured");await this.user?.wallet.setChain({chain:"Ethereum"}),(0,r.a)(this,h,await this.user?.wallet.getEthersJsSigner({rpcEndpoint:t.rpc[0]})),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},67885:function(e,t,i){i.d(t,{PaperEmbeddedWalletSdk:function(){return V},J0:function(){return M}});var r,n,s,a,o={Ethereum:"https://ethereum.rpc.thirdweb.com",Goerli:"https://goerli.rpc.thirdweb.com",Mumbai:"https://mumbai.rpc.thirdweb.com",Polygon:"https://polygon.rpc.thirdweb.com",Avalanche:"https://avalanche.rpc.thirdweb.com",Optimism:"https://optimism.rpc.thirdweb.com",OptimismGoerli:"https://optimism-goerli.rpc.thirdweb.com",BSC:"https://binance.rpc.thirdweb.com",BSCTestnet:"https://binance-testnet.rpc.thirdweb.com",ArbitrumOne:"https://arbitrum.rpc.thirdweb.com",ArbitrumGoerli:"https://arbitrum-goerli.rpc.thirdweb.com",Fantom:"https://fantom.rpc.thirdweb.com",FantomTestnet:"https://fantom-testnet.rpc.thirdweb.com",Sepolia:"https://sepolia.rpc.thirdweb.com",AvalancheFuji:"https://avalanche-fuji.rpc.thirdweb.com"},l=()=>"undefined"!=typeof window&&"true"===window.localStorage.getItem("IS_PAPER_DEV"),c=()=>"undefined"!=typeof window&&window.location.origin.includes("paper.xyz"),d=()=>{var e;return l()?null!=(e=window.localStorage.getItem("PAPER_DEV_URL"))?e:"http://localhost:3000":c()?window.location.origin:"https://withpaper.com"},h=i(27349),u=i(48088),p=i(6881),g=Object.defineProperty,m=Object.defineProperties,I=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,f=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,E=(e,t)=>{for(var i in t||(t={}))v.call(t,i)&&f(e,i,t[i]);if(y)for(var i of y(t))w.call(t,i)&&f(e,i,t[i]);return e},L=(e,t)=>m(e,I(t)),A=(e,t,i)=>new Promise((r,n)=>{var s=e=>{try{o(i.next(e))}catch(e){n(e)}},a=e=>{try{o(i.throw(e))}catch(e){n(e)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);o((i=i.apply(e,t)).next())}),S="/sdk/2022-08-12/embedded-wallet",_=e=>`paperEwsWalletUserId-${e}`,O=e=>`walletToken-${e}`,C=(e,t)=>`a-${e}-${t}`,D=((r=D||{}).USER_MANAGED="USER_MANAGED",r.AWS_MANAGED="AWS_MANAGED",r),P=((n=P||{}).PAPER_EMAIL_OTP="PaperEmailOTP",n.GOOGLE="Google",n.TWITTER="Twitter",n.COGNITO="Cognito",n.AUTH0="Auth0",n.CUSTOM_JWT="CustomJWT",n),M=((s=M||{}).LOGGED_OUT="Logged Out",s.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",s),N=((a=N||{}).LOGGED_OUT="Logged Out",a.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",a.LOGGED_IN_NEW_DEVICE="Logged In, New Device",a.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",a),W=new Map,b=class{constructor({clientId:e}){this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=e}getItem(e){return A(this,null,function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=W.get(e))?t:null})}setItem(e,t){return A(this,null,function*(){if(this.isSupported)return window.localStorage.setItem(e,t);W.set(e,t)})}removeItem(e){return A(this,null,function*(){let t=yield this.getItem(e);return!!this.isSupported&&!!t&&(window.localStorage.removeItem(e),!0)})}saveAuthCookie(e){return A(this,null,function*(){yield this.setItem(O(this.clientId),e)})}getAuthCookie(){return A(this,null,function*(){return this.getItem(O(this.clientId))})}removeAuthCookie(){return A(this,null,function*(){return this.removeItem(O(this.clientId))})}saveDeviceShare(e,t){return A(this,null,function*(){yield this.saveWalletUserId(t),yield this.setItem(C(this.clientId,t),e)})}getDeviceShare(){return A(this,null,function*(){let e=yield this.getWalletUserId();return e?this.getItem(C(this.clientId,e)):null})}removeDeviceShare(){return A(this,null,function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(C(this.clientId,e))})}getWalletUserId(){return A(this,null,function*(){return this.getItem(_(this.clientId))})}saveWalletUserId(e){return A(this,null,function*(){yield this.setItem(_(this.clientId),e)})}removeWalletUserId(){return A(this,null,function*(){return this.removeItem(_(this.clientId))})}};function T(e){return new Promise(t=>{setTimeout(t,1e3*e)})}var U={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},G=new Map,R=class{constructor({link:e,iframeId:t,container:i=document.body,iframeStyles:r,onIframeInitialize:n}){this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let s=document.getElementById(t),a=new URL(e),o="1.1.3";if(!o)throw Error("Missing SDK_VERSION env var");if(a.searchParams.set("sdkVersion",o),!s||s.src!=a.href){if(!s){s=document.createElement("iframe");let e=E(E({},U),r);Object.assign(s.style,e),s.setAttribute("id",t),s.setAttribute("fetchpriority","high"),i.appendChild(s)}s.src=a.href,s.setAttribute("data-version",o),s.onload=this.onIframeLoadHandler(s,this.POST_LOAD_BUFFER_SECONDS,n)}this.iframe=s}onIframeLoadedInitVariables(){return A(this,null,function*(){return{}})}onIframeLoadHandler(e,t,i){return()=>A(this,null,function*(){yield new Promise((r,n)=>A(this,null,function*(){var s;let a=new MessageChannel;a.port1.onmessage=t=>{let{data:s}=t;return a.port1.close(),s.success?(G.set(e.src,!0),i&&i(),r(!0)):n(Error(s.error))},yield T(t),null==(s=null==e?void 0:e.contentWindow)||s.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},`${d()}${S}`,[a.port2])}))})}call(e){return A(this,arguments,function*({procedureName:e,params:t,showIframe:i=!1,injectRecoveryCode:r={isInjectRecoveryCode:!1}}){for(;!G.get(this.iframe.src);)yield T(this.POLLING_INTERVAL_SECONDS);return i&&(this.iframe.style.display="block",yield T(.005)),new Promise((n,s)=>{var a;if(r.isInjectRecoveryCode){let e=t=>A(this,null,function*(){var i,n;if(t.origin!==d()||"paper_getRecoveryCode"!==t.data.type||"string"!=typeof t.data.userWalletId)return;let s=yield null==(i=r.getRecoveryCode)?void 0:i.call(r,t.data.userWalletId);null==(n=this.iframe.contentWindow)||n.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:s},d()),window.removeEventListener("message",e)});window.addEventListener("message",e)}let o=new MessageChannel;o.port1.onmessage=e=>A(this,null,function*(){let{data:t}=e;o.port1.close(),i&&(yield T(.1),this.iframe.style.display="none"),t.success?n(t.data):s(Error(t.error))}),null==(a=this.iframe.contentWindow)||a.postMessage({eventType:e,data:t},`${d()}${S}`,[o.port2])})})}destroy(){G.delete(this.iframe.src)}},k=class extends R{constructor({clientId:e,customizationOptions:t}){super({iframeId:j,link:function({clientId:e,path:t,queryParams:i}){var r;let n=new URL(t,d());if(i)for(let e of Object.keys(i))n.searchParams.set(e,(null==(r=i[e])?void 0:r.toString())||"");return n.searchParams.set("clientId",e),n}({clientId:e,path:S,queryParams:t}).href,container:document.body}),this.clientId=e}onIframeLoadedInitVariables(){return A(this,null,function*(){let e=new b({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}})}},j="paper-embedded-wallet-iframe",q=class{constructor({querier:e,preLogin:t,postLogin:i}){this.LoginQuerier=e,this.preLogin=t,this.postLogin=i}sendPaperEmailLoginOtp(e){return A(this,arguments,function*({email:e,recoveryShareManagement:t}){yield this.preLogin();let{isNewUser:i,isNewDevice:r}=yield this.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:e,recoveryShareManagement:t}});return{isNewUser:i,isNewDevice:r}})}},Q=class extends q{loginWithPaperModal(){return A(this,null,function*(){yield this.preLogin();let e=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(e)})}loginWithPaperEmailOtp(e){return A(this,arguments,function*({email:e}){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(t)})}verifyPaperEmailLoginOtp(e){return A(this,arguments,function*({email:e,otp:t}){let i=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)})}},z=class extends q{loginWithPaperModal(e){return A(this,null,function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)})}loginWithPaperEmailOtp(e){return A(this,arguments,function*({email:e,recoveryCode:t}){yield this.preLogin();let i=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryCode:t},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)})}verifyPaperEmailLoginOtp(e){return A(this,arguments,function*({email:e,otp:t,recoveryCode:i}){let r=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryCode:i},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(r)})}},x=class{constructor({clientId:e,advancedOptions:t,querier:i,onAuthSuccess:r}){var n;this.clientId=e,this.advancedOptions={recoveryShareManagement:null!=(n=null==t?void 0:t.recoveryShareManagement)?n:"AWS_MANAGED"},this.AuthQuerier=i,this.localStorage=new b({clientId:e}),this.onAuthSuccess=r,this.userManagedLogin=new z({postLogin:e=>A(this,null,function*(){return this.postLogin(e)}),preLogin:()=>A(this,null,function*(){yield this.preLogin()}),querier:i}),this.awsManagedLogin=new Q({postLogin:e=>A(this,null,function*(){return this.postLogin(e)}),preLogin:()=>A(this,null,function*(){yield this.preLogin()}),querier:i})}preLogin(){return A(this,null,function*(){yield this.logout()})}postLogin(e){return A(this,arguments,function*({storedToken:e,walletDetails:t}){return e.shouldStoreCookieString&&(yield this.localStorage.saveAuthCookie(e.cookieString)),yield this.onAuthSuccess({storedToken:e,walletDetails:t})})}loginWithJwtAuth(e){return A(this,arguments,function*({token:e,authProvider:t,recoveryCode:i}){yield this.preLogin();let r=yield this.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:e,authProvider:t,recoveryCode:i}});return this.postLogin(r)})}loginWithPaperModal(e){return A(this,null,function*(){return yield this.preLogin(),"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)})}loginWithPaperEmailOtp(e){return A(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)})}sendPaperEmailLoginOtp(e){return A(this,arguments,function*({email:e}){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.sendPaperEmailLoginOtp({email:e,recoveryShareManagement:"AWS_MANAGED"}):this.userManagedLogin.sendPaperEmailLoginOtp({email:e})})}verifyPaperEmailLoginOtp(e){return A(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)})}logout(){return A(this,null,function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),i=yield this.localStorage.removeWalletUserId();return{success:e||t||i}})}},F=class{constructor({chain:e,clientId:t,querier:i}){this.chain=e,this.clientId=t,this.gaslessTransactionQuerier=i}callContract(e){return A(this,arguments,function*({contractAddress:e,methodArgs:t,methodInterface:i}){return yield this.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:this.chain,contractAddress:e,method:{args:t,stub:i}}})})}},H=class extends u.Signer{constructor({provider:e,clientId:t,querier:i}){var r;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=t,this.querier=i,this.endpoint=null==(r=e.connection)?void 0:r.url,(0,p.defineReadOnly)(this,"provider",e)}getAddress(){return A(this,null,function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e})}signMessage(e){return A(this,null,function*(){var t,i,r,n;let s=yield null==(t=this.provider)?void 0:t.getNetwork();s&&s._defaultProvider;let{signedMessage:a}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(n=null==(r=yield null==(i=this.provider)?void 0:i.getNetwork())?void 0:r.chainId)?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a})}signTransaction(e){return A(this,null,function*(){var t,i,r;let{signedTransaction:n}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(r=null==(i=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:i.chainId)?r:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return n})}_signTypedData(e,t,i){return A(this,null,function*(){var r,n,s;let{signedTypedData:a}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:i,chainId:null!=(s=null==(n=yield null==(r=this.provider)?void 0:r.getNetwork())?void 0:n.chainId)?s:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a})}connect(e){return new H({clientId:this.clientId,provider:e,querier:this.querier})}},J=class{constructor({clientId:e,chain:t,querier:i}){this.clientId=e,this.chain=t,this.walletManagerQuerier=i,this.gasless=new F({chain:t,clientId:e,querier:i}),this.localStorage=new b({clientId:e})}postWalletSetUp(e){return A(this,arguments,function*({deviceShareStored:e,walletAddress:t,isIframeStorageEnabled:i,walletUserId:r}){return i||(yield this.localStorage.saveDeviceShare(e,r)),{walletAddress:t}})}getUserWalletStatus(){return A(this,null,function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:L(E({},e.user),{wallet:this})}:e})}setChain(e){return A(this,arguments,function*({chain:e}){this.chain=e,this.gasless=new F({chain:e,clientId:this.clientId,querier:this.walletManagerQuerier})})}getEthersJsSigner(e){return A(this,null,function*(){var t;return new H({clientId:this.clientId,provider:(0,h.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:o[this.chain]),querier:this.walletManagerQuerier})})}},V=class{constructor({clientId:e,chain:t,styles:i,advancedOptions:r}){this.clientId=e,this.querier=new k({clientId:e,customizationOptions:i}),this.wallet=new J({clientId:e,chain:t,querier:this.querier}),this.auth=new x({clientId:e,advancedOptions:E({recoveryShareManagement:"USER_MANAGED"},null!=r?r:{}),querier:this.querier,onAuthSuccess:e=>A(this,null,function*(){return yield this.wallet.postWalletSetUp(L(E({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}})})}getUser(){return A(this,null,function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return E({status:"Logged In, Wallet Initialized"},e.user)}})}}}}]);