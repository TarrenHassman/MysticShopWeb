"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9695],{31415:function(t,r,e){e.d(r,{S:function(){return StandardErc721}});var a=e(47454);let StandardErc721=class StandardErc721{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new a.aD(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,a.dx)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,a.dx)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,a.dx)(async(t,r)=>a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.cL)(t),r]}))}},29695:function(t,r,e){e.r(r),e.d(r,{NFTDrop:function(){return NFTDrop}});var a=e(2593),n=e(9279),c=e(62),s=e(47454),i=e(31415),o=e(54693);e(13550),e(64063),e(2162),e(62822),e(54098),e(71770);let NFTDrop=class NFTDrop extends i.S{static contractRoles=s.dK;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.dw(t,r,n,a,e);super(i,e,c),this.abi=s.e.parse(n||[]),this.metadata=new s.ah(this.contractWrapper,s.dD,this.storage),this.app=new s.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new s.ai(this.contractWrapper,NFTDrop.contractRoles),this.royalties=new s.aj(this.contractWrapper,this.metadata),this.sales=new s.ak(this.contractWrapper),this.claimConditions=new s.am(this.contractWrapper,this.metadata,this.storage),this.encoder=new s.ag(this.contractWrapper),this.estimator=new s.aQ(this.contractWrapper),this.events=new s.aR(this.contractWrapper),this.platformFees=new s.aT(this.contractWrapper),this.revealer=new s.al(this.contractWrapper,this.storage,s.dW.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new s.aS(this.contractWrapper),this.owner=new s.aV(this.contractWrapper),this.checkout=new o.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){let[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){let r=a.O$.from(t?.start||0).toNumber(),e=a.O$.from(t?.count||c.D).toNumber(),n=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let r=a.O$.from(t?.start||0).toNumber(),e=a.O$.from(t?.count||c.D).toNumber(),n=a.O$.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),s=a.O$.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(n.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,s.bI)("transfer"),n.d]);return!t}createBatch=(0,s.dx)(async(t,r)=>this.erc721.lazyMint.prepare(t,r));async getClaimTransaction(t,r){let e=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}claimTo=(0,s.dx)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return t.erc721.claimTo.prepare(r,e,{checkERC20Allowance:a})}})());claim=(0,s.dx)((()=>{var t=this;return async function(r){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})());burn=(0,s.dx)(async t=>this.erc721.burn.prepare(t));async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,s.dx)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,s.dx)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,s.dx)(async(t,r)=>s.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]}));async prepare(t,r,e){return s.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}},54693:function(t,r,e){e.d(r,{a:function(){return PaperCheckout}});var a=e(47454),n=e(38776);let c="https://paper.xyz/api/2022-08-12/platform/thirdweb",s={[a.cR.Mainnet]:"Ethereum",[a.cR.Goerli]:"Goerli",[a.cR.Polygon]:"Polygon",[a.cR.Mumbai]:"Mumbai",[a.cR.Avalanche]:"Avalanche"};async function fetchRegisteredCheckoutId(t,r){let e=((0,n.Z)(r in s,`chainId not supported by paper: ${r}`),s[r]),a=await fetch(`${c}/register-contract?contractAddress=${t}&chain=${e}`),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}let i={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function createCheckoutLinkIntent(t,r){let e=await fetch(`${c}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...i,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}let PaperCheckout=class PaperCheckout{constructor(t){this.contractWrapper=t}async getCheckoutId(){return fetchRegisteredCheckoutId(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await createCheckoutLinkIntent(await this.getCheckoutId(),t)}}}}]);