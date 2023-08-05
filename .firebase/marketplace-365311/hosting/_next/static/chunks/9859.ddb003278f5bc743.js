"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9859],{51233:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(62300);class n{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new a.aC(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,a.cq)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,a.cq)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,a.db)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,a.db)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,a.db)(async(t,r)=>a.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.cq)(t),r]}))}},47293:function(t,r,e){e.d(r,{h:function(){return s}});var a=e(62300),n=e(49242);async function s(t,r,e){let s=t.getProvider(),o=new a.d4(s,r,n,{},t.storage),c=await t.getSignerAddress(),i=t.readContract.address,d=await o.readContract.allowance(c,i);return d.gte(e)}},79859:function(t,r,e){e.r(r),e.d(r,{Multiwrap:function(){return c}});var a=e(62300),n=e(51233),s=e(61744),o=e(47293);e(13550),e(2162),e(64063),e(62822),e(71770),e(54098);class c extends n.S{static contractRoles=a.dw;constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.d4(t,r,s,n,e);super(i,e,o),this.abi=a.e.parse(s||[]),this.metadata=new a.ag(this.contractWrapper,a.dx,this.storage),this.app=new a.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new a.ah(this.contractWrapper,c.contractRoles),this.encoder=new a.af(this.contractWrapper),this.estimator=new a.aP(this.contractWrapper),this.events=new a.aQ(this.contractWrapper),this.royalties=new a.ai(this.contractWrapper,this.metadata),this.owner=new a.aU(this.contractWrapper)}async getWrappedContents(t){let r=await this.contractWrapper.readContract.getWrappedContents(t),e=[],n=[],o=[];for(let t of r)switch(t.tokenType){case 0:{let r=await (0,a.ba)(this.contractWrapper.getProvider(),t.assetContract);e.push({contractAddress:t.assetContract,quantity:s.formatUnits(t.totalAmount,r.decimals)});break}case 1:n.push({contractAddress:t.assetContract,tokenId:t.tokenId});break;case 2:o.push({contractAddress:t.assetContract,tokenId:t.tokenId,quantity:t.totalAmount.toString()})}return{erc20Tokens:e,erc721Tokens:n,erc1155Tokens:o}}wrap=(0,a.db)(async(t,r,e)=>{let n=await (0,a.dy)(r,this.storage),s=await (0,a.cq)(e||await this.contractWrapper.getSignerAddress()),o=await this.toTokenStructList(t);return a.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[o,n,s],parse:t=>{let r=this.contractWrapper.parseLogs("TokensWrapped",t?.logs);if(0===r.length)throw Error("TokensWrapped event not found");let e=r[0].args.tokenIdOfWrappedToken;return{id:e,receipt:t,data:()=>this.get(e)}}})});unwrap=(0,a.db)(async(t,r)=>{let e=await (0,a.cq)(r||await this.contractWrapper.getSignerAddress());return a.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[t,e]})});async toTokenStructList(t){let r=[],e=this.contractWrapper.getProvider(),n=await this.contractWrapper.getSignerAddress();if(t.erc20Tokens)for(let n of t.erc20Tokens){let t=await (0,a.b9)(e,n.quantity,n.contractAddress),s=await (0,o.h)(this.contractWrapper,n.contractAddress,t);if(!s)throw Error(`ERC20 token with contract address "${n.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${n.contractAddress}").setAllowance("${this.getAddress()}", ${n.quantity});

`);r.push({assetContract:n.contractAddress,totalAmount:t,tokenId:0,tokenType:0})}if(t.erc721Tokens)for(let e of t.erc721Tokens){let t=await (0,a.dj)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,n);if(!t)throw Error(`ERC721 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${e.contractAddress}").setApprovalForToken("${this.getAddress()}", ${e.tokenId});

`);r.push({assetContract:e.contractAddress,totalAmount:0,tokenId:e.tokenId,tokenType:1})}if(t.erc1155Tokens)for(let e of t.erc1155Tokens){let t=await (0,a.dj)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,n);if(!t)throw Error(`ERC1155 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${e.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push({assetContract:e.contractAddress,totalAmount:e.quantity,tokenId:e.tokenId,tokenType:2})}return r}async prepare(t,r,e){return a.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);