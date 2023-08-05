"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[704],{90704:function(t,e,r){r.r(e),r.d(e,{EditionDrop:function(){return p}});var a=r(62300),n=r(2593);class s{constructor(t){this.events=t}async getAllClaimerAddresses(t){let e=(await this.events.getEvents("TokensClaimed")).filter(e=>!!(e.data&&n.O$.isBigNumber(e.data.tokenId))&&e.data.tokenId.eq(t));return Array.from(new Set(e.filter(t=>"string"==typeof t.data?.claimer).map(t=>t.data.claimer)))}}var c=r(59500),i=r(35038),o=r(9279);r(13550),r(2162),r(64063),r(62822),r(71770),r(54098);class p extends c.S{static contractRoles=a.dn;constructor(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.d4(t,e,c,n,r);super(h,r,o),this.abi=a.e.parse(c),this.metadata=new a.ag(this.contractWrapper,a.dp,this.storage),this.app=new a.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new a.ah(this.contractWrapper,p.contractRoles),this.royalties=new a.ai(this.contractWrapper,this.metadata),this.sales=new a.aj(this.contractWrapper),this.claimConditions=new a.am(this.contractWrapper,this.metadata,this.storage),this.events=new a.aQ(this.contractWrapper),this.history=new s(this.events),this.encoder=new a.af(this.contractWrapper),this.estimator=new a.aP(this.contractWrapper),this.platformFees=new a.aS(this.contractWrapper),this.interceptor=new a.aR(this.contractWrapper),this.checkout=new i.a(this.contractWrapper),this.owner=new a.aU(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,a.bH)("transfer"),o.d);return!t}createBatch=(0,a.db)(async(t,e)=>this.erc1155.lazyMint.prepare(t,e));async getClaimTransaction(t,e,r){let a=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return this.erc1155.getClaimTransaction(t,e,r,{checkERC20Allowance:a})}claimTo=(0,a.db)((()=>{var t=this;return async function(e,r,a){let n=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return t.erc1155.claimTo.prepare(e,r,a,{checkERC20Allowance:n})}})());claim=(0,a.db)((()=>{var t=this;return async function(e,r){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(n,e,r,a)}})());burnTokens=(0,a.db)(async(t,e)=>this.erc1155.burn.prepare(t,e));async prepare(t,e,r){return a.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}}},59500:function(t,e,r){r.d(e,{S:function(){return n}});var a=r(62300);class n{get chainId(){return this._chainId}constructor(t,e,r){this.contractWrapper=t,this.storage=e,this.erc1155=new a.aK(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,e){return this.erc1155.balanceOf(t,e)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,e){return this.erc1155.isApproved(t,e)}transfer=(0,a.db)((()=>{var t=this;return async function(e,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(e,r,a,n)}})());setApprovalForAll=(0,a.db)(async(t,e)=>this.erc1155.setApprovalForAll.prepare(t,e));airdrop=(0,a.db)((()=>{var t=this;return async function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0];return t.erc1155.airdrop.prepare(e,r,a)}})())}},35038:function(t,e,r){r.d(e,{a:function(){return h}});var a=r(62300),n=r(38776);let s="https://paper.xyz/api/2022-08-12/platform/thirdweb",c={[a.cy.Mainnet]:"Ethereum",[a.cy.Goerli]:"Goerli",[a.cy.Polygon]:"Polygon",[a.cy.Mumbai]:"Mumbai",[a.cy.Avalanche]:"Avalanche"};async function i(t,e){let r=((0,n.Z)(e in c,`chainId not supported by paper: ${e}`),c[e]),a=await fetch(`${s}/register-contract?contractAddress=${t}&chain=${r}`),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}let o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function p(t,e){let r=await fetch(`${s}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...e,metadata:{...e.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!e.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await r.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class h{constructor(t){this.contractWrapper=t}async getCheckoutId(){return i(this.contractWrapper.readContract.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await p(await this.getCheckoutId(),t)}}}}]);