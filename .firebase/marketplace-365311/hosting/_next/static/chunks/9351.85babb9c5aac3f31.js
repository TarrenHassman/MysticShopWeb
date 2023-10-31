"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9351],{31415:function(t,e,r){r.d(e,{S:function(){return StandardErc721}});var a=r(47454);let StandardErc721=class StandardErc721{get chainId(){return this._chainId}constructor(t,e,r){this.contractWrapper=t,this.storage=e,this.erc721=new a.aD(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,e){return this.erc721.isApproved(t,e)}transfer=(0,a.dx)(async(t,e)=>this.erc721.transfer.prepare(t,e));setApprovalForAll=(0,a.dx)(async(t,e)=>this.erc721.setApprovalForAll.prepare(t,e));setApprovalForToken=(0,a.dx)(async(t,e)=>a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.cL)(t),e]}))}},69351:function(t,e,r){r.r(e),r.d(e,{SignatureDrop:function(){return SignatureDrop}});var a=r(2593),n=r(9279),c=r(62),i=r(47454),s=r(31415),o=r(54693);r(13550),r(64063),r(2162),r(62822),r(54098),r(71770);let SignatureDrop=class SignatureDrop extends s.S{static contractRoles=i.dK;constructor(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.dw(t,e,n,a,r);super(s,r,c),this.abi=i.e.parse(n||[]),this.metadata=new i.ah(this.contractWrapper,i.dD,this.storage),this.app=new i.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ai(this.contractWrapper,SignatureDrop.contractRoles),this.royalties=new i.aj(this.contractWrapper,this.metadata),this.sales=new i.ak(this.contractWrapper),this.encoder=new i.ag(this.contractWrapper),this.estimator=new i.aQ(this.contractWrapper),this.events=new i.aR(this.contractWrapper),this.platformFees=new i.aT(this.contractWrapper),this.interceptor=new i.aS(this.contractWrapper),this.claimConditions=new i.am(this.contractWrapper,this.metadata,this.storage),this.signature=new i.aE(this.contractWrapper,this.storage),this.revealer=new i.al(this.contractWrapper,this.storage,i.dW.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new i.aE(this.contractWrapper,this.storage),this.owner=new i.aV(this.contractWrapper),this.checkout=new o.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){let[t,e]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(e)}async getAllClaimed(t){let e=a.O$.from(t?.start||0).toNumber(),r=a.O$.from(t?.count||c.D).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),e+r);return await Promise.all(Array.from(Array(n).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let e=a.O$.from(t?.start||0).toNumber(),r=a.O$.from(t?.count||c.D).toNumber(),n=a.O$.from(Math.max((await this.totalClaimedSupply()).toNumber(),e)),i=a.O$.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+r));return await Promise.all(Array.from(Array(i.sub(n).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(n.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,i.bI)("transfer"),n.d]);return!t}createBatch=(0,i.dx)(async(t,e)=>this.erc721.lazyMint.prepare(t,e));async getClaimTransaction(t,e,r){return this.erc721.getClaimTransaction(t,e,r)}claimTo=(0,i.dx)(async(t,e,r)=>this.erc721.claimTo.prepare(t,e,r));claim=(0,i.dx)(async(t,e)=>this.erc721.claim.prepare(t,e));burn=(0,i.dx)(async t=>this.erc721.burn.prepare(t));async prepare(t,e,r){return i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}}},54693:function(t,e,r){r.d(e,{a:function(){return PaperCheckout}});var a=r(47454),n=r(38776);let c="https://paper.xyz/api/2022-08-12/platform/thirdweb",i={[a.cR.Mainnet]:"Ethereum",[a.cR.Goerli]:"Goerli",[a.cR.Polygon]:"Polygon",[a.cR.Mumbai]:"Mumbai",[a.cR.Avalanche]:"Avalanche"};async function fetchRegisteredCheckoutId(t,e){let r=((0,n.Z)(e in i,`chainId not supported by paper: ${e}`),i[e]),a=await fetch(`${c}/register-contract?contractAddress=${t}&chain=${r}`),s=await a.json();return(0,n.Z)(s.result.id,"Contract is not registered with paper"),s.result.id}let s={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function createCheckoutLinkIntent(t,e){let r=await fetch(`${c}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...s,...e,metadata:{...e.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!e.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await r.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}let PaperCheckout=class PaperCheckout{constructor(t){this.contractWrapper=t}async getCheckoutId(){return fetchRegisteredCheckoutId(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await createCheckoutLinkIntent(await this.getCheckoutId(),t)}}}}]);