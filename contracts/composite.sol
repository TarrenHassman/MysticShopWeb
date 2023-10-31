    /**
     * @dev Called before executing an operation. Reverts if account is locked. Ensures state is
     * updated prior to execution.
     */
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
// import "erc6551/lib/ERC6551AccountLib.sol";
// import "./abstract/Lockable.sol";
// import "./abstract/Overridable.sol";
// import "./abstract/Permissioned.sol";
// import "./abstract/ERC6551Account.sol";
// import "./abstract/ERC4337Account.sol";
// import "./abstract/execution/TokenboundExecutor.sol";
// import "./lib/OPAddressAliasHelper.sol";
// import "./interfaces/IAccountGuardian.sol";

contract CompositeEntity is
    ERC721Holder,
    ERC1155Holder
    // ,
    // Lockable,
    // Overridable,
    // Permissioned,
    // ERC6551Account,
    // ERC4337Account,
    // TokenboundExecutor
{

  // Avatar
  // Accessories

  // bool public isLocked;
  NFT public base;
  mapping (address => Accessory) public accessories;
  constructor() {
    
  }

  //Token address for the object  (Avatar, Item/Equipment, etc)
  struct NFT {
    uint256 tokenID;
    address contractAddress;
  }

  //Proposed as a dynamic field to allow for larger data sizes if needed
  //The physical properties of objects to be displayed in a virtual world
  struct Matter{
    int posX; //
    int posY; //
    int posZ; // in 2d models can be used for layering behind avatar
    int16 rotX; // defined in degrees 000.00
    int16 rotY; // defined in degrees 000.00
    int16 rotZ; // defined in degrees 000.00
    int16 scale; // defined in percent 000.00%
    int mass; // mass in ug (will include functionality to get mass from NFT metadata)
  }
  
  struct Accessory {
    NFT nft;
    Matter matter;
    uint16 layer;
    bool isInit;
  }

  function setAccessory(Accessory calldata accessory, address _wallet) public{
        accessories[_wallet] = accessory;
    }

  function containsEquipment(address _NFT) public view returns (bool){
        return !(accessories[_NFT].isInit == false);
    }

    function _beforeExecute() internal 
    // override
     {
      // get the token being transferred for now call.value is used to represent that value
      
      // if(containsEquipment(call.value)){
      //   //RemoveEquipment();
      // }
      // if(avatar == call.value){
      //   //emit event for notification about replacing avatar before executing
        //revert AvatarLocked();
      // }
        // if (isLocked()) revert AccountLocked();
      //   _updateState();
    }
}