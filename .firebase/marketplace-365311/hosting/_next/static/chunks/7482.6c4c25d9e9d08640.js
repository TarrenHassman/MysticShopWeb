"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7482],{57482:function(t,r,e){e.r(r),e.d(r,{Marketplace:function(){return W}});var a,i=e(9279),n=e(2593),s=e(38776),o=e(62),c=e(47454),d=e(8455),p=e(25025),l=e(70332),g=e(19485),h=e(21046),u=e(64146),f=e(61744);let w=((a={})[a.Direct=0]="Direct",a[a.Auction=1]="Auction",a);class m{constructor(t,r){this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){let r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===i.d)throw new c.bx(this.getAddress(),t.toString());if(r.listingType!==w.Direct)throw new c.by(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(n.O$.from(t)),(0,s.Z)(g.isAddress(r),"Address must be a valid address");let e=await this.contractWrapper.read("offers",[t,await (0,c.cL)(r)]);if(e.offeror!==i.d)return await (0,c.dE)(this.contractWrapper.getProvider(),n.O$.from(t),e)}createListing=(0,c.dx)(async t=>{(0,c.dH)(t);let r=await (0,c.cL)(t.assetContractAddress),e=await (0,c.cL)(t.currencyContractAddress);await (0,c.dI)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());let a=await (0,c.ba)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),i=Math.floor(t.startTimestamp.getTime()/1e3),s=await this.contractWrapper.getProvider().getBlock("latest"),o=s.timestamp;return i<o&&(i=o),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,c.b9)(e),listingType:w.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:n.O$.from(i)}],parse:t=>({id:this.contractWrapper.parseLogs("ListingAdded",t?.logs)[0].args.listingId,receipt:t})})});createListingsBatch=(0,c.dx)(async t=>{let r=await Promise.all(t.map(async t=>{let r=await this.createListing.prepare(t);return r.encode()}));return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>{let r=this.contractWrapper.parseLogs("ListingAdded",t?.logs);return r.map(r=>({id:r.args.listingId,receipt:t}))}})});makeOffer=(0,c.dx)(async(t,r,e,a,i)=>{if((0,c.b8)(e))throw Error("You must use the wrapped native token address when making an offer with a native token");let s=await (0,c.ba)(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(r){throw console.error("Failed to get listing, err =",r),Error(`Error getting the listing with id ${t}`)}let o=n.O$.from(r),d=n.O$.from(s).mul(o),p=await this.contractWrapper.getCallOverrides()||{};await (0,c.bd)(this.contractWrapper,d,e,p);let l=h.Bz;return i&&(l=n.O$.from(Math.floor(i.getTime()/1e3))),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,s,l],overrides:p})});acceptOffer=(0,c.dx)(async(t,r)=>{await this.validateListing(n.O$.from(t));let e=await (0,c.cL)(r),a=await this.contractWrapper.read("offers",[t,e]);return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})});buyoutListing=(0,c.dx)(async(t,r,e)=>{let a=await this.validateListing(n.O$.from(t)),{valid:i,error:s}=await this.isStillValidListing(a,r);if(!i)throw Error(`Listing ${t} is no longer valid. ${s}`);let o=e||await this.contractWrapper.getSignerAddress(),d=n.O$.from(r),p=n.O$.from(a.buyoutPrice).mul(d),l=await this.contractWrapper.getCallOverrides()||{};return await (0,c.bd)(this.contractWrapper,p,a.currencyContractAddress,l),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,o,d,a.currencyContractAddress,p],overrides:l})});updateListing=(0,c.dx)(async t=>c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await (0,c.cL)(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]}));cancelListing=(0,c.dx)(async t=>c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]}));async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:n.O$.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await (0,c.bc)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await (0,c.dF)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:w.Direct}}async isStillValidListing(t,r){let e=await (0,c.dG)(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress);if(!e)return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};let a=this.contractWrapper.getProvider(),i=new u.CH(t.assetContractAddress,p,a),n=await i.supportsInterface(c.cU),s=await i.supportsInterface(c.cV);if(n){let r;let e=new u.CH(t.assetContractAddress,l,a);try{r=await e.ownerOf(t.tokenId)}catch(t){}let i=r?.toLowerCase()===t.sellerAddress.toLowerCase();return{valid:i,error:i?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}if(!s)return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."};{let e=new u.CH(t.assetContractAddress,d,a),i=await e.balanceOf(t.sellerAddress,t.tokenId),n=i.gte(r||t.quantity);return{valid:n,error:n?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}}}class y{constructor(t,r){this.contractWrapper=t,this.storage=r,this.encoder=new c.ag(t)}getAddress(){return this.contractWrapper.address}async getListing(t){let r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new c.bx(this.getAddress(),t.toString());if(r.listingType!==w.Auction)throw new c.by(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(n.O$.from(t));let r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==i.d)return await (0,c.dE)(this.contractWrapper.getProvider(),n.O$.from(t),r)}async getWinner(t){let r=await this.validateListing(n.O$.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=n.O$.from(Math.floor(Date.now()/1e3)),s=n.O$.from(r.endTimeInEpochSeconds);if(a.gt(s)&&e.offeror!==i.d)return e.offeror;let o=new c.aR(this.contractWrapper),d=await o.getEvents("AuctionClosed"),p=d.find(r=>r.data.listingId.eq(n.O$.from(t)));if(!p)throw Error(`Could not find auction with listingId ${t} in closed auctions`);return p.data.winningBidder}createListing=(0,c.dx)(async t=>{(0,c.dH)(t);let r=await (0,c.cL)(t.assetContractAddress),e=await (0,c.cL)(t.currencyContractAddress);await (0,c.dI)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());let a=await (0,c.ba)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),i=await (0,c.ba)(this.contractWrapper.getProvider(),t.reservePricePerToken,e),s=Math.floor(t.startTimestamp.getTime()/1e3),o=await this.contractWrapper.getProvider().getBlock("latest"),d=o.timestamp;return s<d&&(s=d),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,c.b9)(e),listingType:w.Auction,quantityToList:t.quantity,reservePricePerToken:i,secondsUntilEndTime:t.listingDurationInSeconds,startTime:n.O$.from(s)}],parse:t=>({id:this.contractWrapper.parseLogs("ListingAdded",t?.logs)[0].args.listingId,receipt:t})})});createListingsBatch=(0,c.dx)(async t=>{let r=await Promise.all(t.map(async t=>{let r=await this.createListing.prepare(t);return r.encode()}));return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>{let r=this.contractWrapper.parseLogs("ListingAdded",t?.logs);return r.map(r=>({id:r.args.listingId,receipt:t}))}})});buyoutListing=(0,c.dx)(async t=>{let r=await this.validateListing(n.O$.from(t)),e=await (0,c.bb)(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,f.formatUnits(r.buyoutPrice,e.decimals))});makeBid=(0,c.dx)(async(t,r)=>{let e=await this.validateListing(n.O$.from(t)),a=await (0,c.ba)(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(n.O$.from(0)))throw Error("Cannot make a bid with 0 value");let i=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){let t=(0,c.dJ)(o.pricePerToken,a,i);(0,s.Z)(t,"Bid price is too low based on the current winning bid and the bid buffer")}else{let t=n.O$.from(e.reservePrice);(0,s.Z)(a.gte(t),"Bid price is too low based on reserve price")}let d=n.O$.from(e.quantity),p=a.mul(d),l=await this.contractWrapper.getCallOverrides()||{};return await (0,c.bd)(this.contractWrapper,p,e.currencyContractAddress,l),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,h.Bz],overrides:l})});cancelListing=(0,c.dx)(async t=>{let r=await this.validateListing(n.O$.from(t)),e=n.O$.from(Math.floor(Date.now()/1e3)),a=n.O$.from(r.startTimeInEpochSeconds),s=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&s.offeror!==i.d)throw new c.bv(t.toString());return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[n.O$.from(t),await this.contractWrapper.getSignerAddress()]})});closeListing=(0,c.dx)(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());let e=await this.validateListing(n.O$.from(t));try{return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[n.O$.from(t),r]})}catch(r){if(r.message.includes("cannot close auction before it has ended"))throw new c.bB(t.toString(),e.endTimeInEpochSeconds.toString());throw r}});executeSale=(0,c.dx)(async t=>{let r=await this.validateListing(n.O$.from(t));try{let e=await this.getWinningBid(t);(0,s.Z)(e,"No winning bid found");let a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),i=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,i]})}catch(e){if(e.message.includes("cannot close auction before it has ended"))throw new c.bB(t.toString(),r.endTimeInEpochSeconds.toString());throw e}});updateListing=(0,c.dx)(async t=>c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]}));async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){let[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),await this.validateListing(n.O$.from(t))]),i=e?e.currencyValue.value:a.reservePrice,s=i.add(i.mul(r).div(1e4));return(0,c.bc)(this.contractWrapper.getProvider(),a.currencyContractAddress,s)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:n.O$.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await (0,c.bc)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await (0,c.dF)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await (0,c.bc)(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:n.O$.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:w.Auction}}}e(13550),e(64063),e(2162),e(77191),e(54098),e(54146);class W{static contractRoles=c.dN;get chainId(){return this._chainId}constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new c.dw(t,r,i,a,e);this._chainId=n,this.abi=c.e.parse(i||[]),this.contractWrapper=s,this.storage=e,this.metadata=new c.ah(this.contractWrapper,c.dO,this.storage),this.app=new c.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new c.ai(this.contractWrapper,W.contractRoles),this.encoder=new c.ag(this.contractWrapper),this.estimator=new c.aQ(this.contractWrapper),this.direct=new m(this.contractWrapper,this.storage),this.auction=new y(this.contractWrapper,this.storage),this.events=new c.aR(this.contractWrapper),this.platformFees=new c.aT(this.contractWrapper),this.interceptor=new c.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){let r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===i.d)throw new c.bx(this.getAddress(),t.toString());switch(r.listingType){case w.Auction:return await this.auction.mapListing(r);case w.Direct:return await this.direct.mapListing(r);default:throw Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){let r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=n.O$.from(Math.floor(Date.now()/1e3));return e.filter(t=>t.type===w.Auction&&n.O$.from(t.endTimeInEpochSeconds).gt(a)&&n.O$.from(t.startTimeInEpochSeconds).lte(a)||t.type===w.Direct&&n.O$.from(t.quantity).gt(0))}async getAllListings(t){let r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}getAll=this.getAllListings;async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){let t=await this.contractWrapper.read("hasRole",[(0,c.bI)("lister"),i.d]);return!t}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){let r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(async r=>await (0,c.dE)(this.contractWrapper.getProvider(),n.O$.from(t),{quantityWanted:r.data.quantityWanted,pricePerToken:r.data.quantityWanted.gt(0)?r.data.totalOfferAmount.div(r.data.quantityWanted):r.data.totalOfferAmount,currency:r.data.currency,offeror:r.data.offeror})))}buyoutListing=(0,c.dx)(async(t,r,e)=>{let a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new c.bx(this.getAddress(),t.toString());switch(a.listingType){case w.Direct:return(0,s.Z)(void 0!==r,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing.prepare(t,r,e);case w.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}});makeOffer=(0,c.dx)(async(t,r,e)=>{let a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new c.bx(this.getAddress(),t.toString());let i=await this.contractWrapper.getChainID();switch(a.listingType){case w.Direct:return(0,s.Z)(e,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer.prepare(t,e,(0,c.b8)(a.currency)?c.cX[i].wrapped.address:a.currency,r);case w.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}});setBidBufferBps=(0,c.dx)(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());let r=await this.getTimeBufferInSeconds();return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,n.O$.from(t)]})});setTimeBufferInSeconds=(0,c.dx)(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());let r=await this.getBidBufferBps();return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[n.O$.from(t),r]})});allowListingFromSpecificAssetOnly=(0,c.dx)(async t=>{let r=[],e=await this.roles.get("asset");return e.includes(i.d)&&r.push(this.encoder.encode("revokeRole",[(0,c.bI)("asset"),i.d])),r.push(this.encoder.encode("grantRole",[(0,c.bI)("asset"),t])),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})});allowListingFromAnyAsset=(0,c.dx)(async()=>{let t=[],r=await this.roles.get("asset");for(let e in r)t.push(this.encoder.encode("revokeRole",[(0,c.bI)("asset"),e]));return t.push(this.encoder.encode("grantRole",[(0,c.bI)("asset"),i.d])),c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})});async getAllListingsNoFilter(t){let r=await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map(async r=>{let e;try{e=await this.getListing(r)}catch(t){if(t instanceof c.bx)return;console.warn(`Failed to get listing ${r}' - skipping. Try 'marketplace.getListing(${r})' to get the underlying error.`);return}if(e.type===w.Auction)return e;if(t){let{valid:t}=await this.direct.isStillValidListing(e);if(!t)return}return e}));return r.filter(t=>void 0!==t)}applyFilter(t,r){let e=[...t],a=n.O$.from(r?.start||0).toNumber(),i=n.O$.from(r?.count||o.D).toNumber();return r&&(r.seller&&(e=e.filter(t=>t.sellerAddress.toString().toLowerCase()===r?.seller?.toString().toLowerCase())),r.tokenContract&&(e=e.filter(t=>t.assetContractAddress.toString().toLowerCase()===r?.tokenContract?.toString().toLowerCase())),void 0!==r.tokenId&&(e=e.filter(t=>t.tokenId.toString()===r?.tokenId?.toString())),e=(e=e.filter((t,r)=>r>=a)).slice(0,i)),e}async prepare(t,r,e){return c.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);