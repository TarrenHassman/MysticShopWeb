// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.22;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Barter {
    mapping(uint => TradeRequest) tradeRequests;
    uint listingId = 0;

    struct TradeRequest {
        uint id;
        address requester;
        address target; //For use if targeted to a specific address
        NFT[] accepterNFTs;
        NFT[] requesterNFTs;
    }
    struct NFT {
        uint256 tokenID;
        address contractAddress;
    }

    event TradeRequestCreated(NFT[] accepterNFTs);

    event TradeAccepted(
        uint indexed listingId,
        address indexed accepter,
        address indexed requester
    );

    event TradeDenied(uint indexed listingId);

    function postTradeRequest(NFT[] calldata requesterNFTs, NFT[] calldata accepterNFTs, address requester) public {
        //Implement keccak256 for identifier
        tradeRequests[1] = TradeRequest(
            1,
            requester,
            0x0000000000000000000000000000000000000000,
            accepterNFTs,
            requesterNFTs
        );
        emit TradeRequestCreated(accepterNFTs);
    }

    function removeTradeRequest() public {

    }

    function counterOffer(uint listingId, NFT[] calldata requestedGoods) public {

    }

    function acceptTradeRequest(uint listingId) public {
        for (uint i = 0; i < tradeRequests[listingId].accepterNFTs.length; i++) {
            if (
                IERC721(tradeRequests[listingId].accepterNFTs[i].contractAddress)
                    .ownerOf(tradeRequests[listingId].accepterNFTs[i].tokenID) ==
                msg.sender
            ) {
                executeEscrow();
            }
        }
    }

    function executeEscrow() public {
        //transfer of all nfts from lister to escrow wallet
        //transfer of all nfts from accepter to escrow wallet
        //if neither revert
        //transfer all nfts from escrow wallet to associated address
        //if either reverts (not all NFTs transferred) then cancel trade and
        // return NFTs to appropriate parties
    }
}
