"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2806],{72806:function(t,r,e){e.r(r),e.d(r,{MarketplaceV3:function(){return s}});var a=e(47454);e(13550),e(64063),e(2162),e(77191),e(54098),e(54146);class s{static contractRoles=a.dN;get directListings(){return(0,a.cc)(this.detectDirectListings(),a.dP)}get englishAuctions(){return(0,a.cc)(this.detectEnglishAuctions(),a.dQ)}get offers(){return(0,a.cc)(this.detectOffers(),a.dR)}get chainId(){return this._chainId}constructor(t,r,e){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.dw(t,r,i,c,e);this._chainId=n,this.abi=a.e.parse(i||[]),this.contractWrapper=h,this.storage=e,this.metadata=new a.ah(this.contractWrapper,a.dO,this.storage),this.app=new a.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new a.ai(this.contractWrapper,s.contractRoles),this.encoder=new a.ag(this.contractWrapper),this.estimator=new a.aQ(this.contractWrapper),this.events=new a.aR(this.contractWrapper),this.platformFees=new a.aT(this.contractWrapper),this.interceptor=new a.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if((0,a.cd)(this.contractWrapper,"DirectListings"))return new a.aN(this.contractWrapper,this.storage)}detectEnglishAuctions(){if((0,a.cd)(this.contractWrapper,"EnglishAuctions"))return new a.aO(this.contractWrapper,this.storage)}detectOffers(){if((0,a.cd)(this.contractWrapper,"Offers"))return new a.aP(this.contractWrapper,this.storage)}}}}]);