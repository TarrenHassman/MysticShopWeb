Avatar System
  Smart Wallet Implementation which
    Generates a burnable soulbound nft called Registry, which is a list of NFTs & their locations in relation to the origin point of the base model (First in Registry) used in the avatar
    OnTransfer -> Checks NFT against Registry, if in Registry, generate new Registry without NFT, burn old Registry
    List of NFTs & their positions to form the avatar (These meshes should be merged on load)


Functions as a relational tree.

Avoids placing restrictions on the NFTs stored or linked
  Though a potential standard is discussed below

  Allows Devs to implement their system as they see fit. 

  2d vs 3d Implementations

  Example of Mesh Merging for performance
  Blender Extension


  ERC-6337 & ERC-4337 - Token Bound Account & Smart Wallet
    Allows creation of a wallet controlled by the owner of the connected NFT
    Used for Player Accounts

  *Research Needed: ERC-5606  Multiverse Token
    Need to understand its potential use in minting to multiple chains
    Example: Soulbound tokens for different chains in the token bound account of the overarching model

  *Ownership cycles:
    Ownership cycles are prevented on the UI level. You can not move an NFT from the Token bound slot into it's inventory
    if a user wishes to go around these by editing the code, then they will not be prevented as is.


  Alternative Smart Wallet Implementations -  ERC-7504: Dynamic Contracts
  https://thirdweb.com/thirdweb.eth/DynamicAccountFactory
    Used for opt-in upgrades to the Smart Wallet (ie: Automated option for vault staking when NFT recieved)

  *Will likely use a Dynamic Account Factory in the production version to allow for adding additional features to the wallet over time

  https://thirdweb.com/thirdweb.eth/ManagedAccountFactory
    Used for forced upgrades to the Smart Wallet (ie: Limit to specific NFT ecosystem)



  ERC-5484 - Consensual Soulbound Token
    Can be used for non-transferable items / skills / experience
