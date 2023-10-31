import styles from "../styles/Home.module.css"
import { ConnectWallet, ContractMetadata, MediaRenderer, Web3Button, useActiveClaimCondition, useActiveClaimConditionForWallet, useAddress, useConnectedWallet, useContract, useContractMetadata, useNFTs, useOwnedNFTs, useTotalCirculatingSupply, useTotalCount, useUnclaimedNFTSupply } from "@thirdweb-dev/react";
import { contractAddress } from '../../mysticmarket/const/yourDetails';
import { ethers } from "ethers";
import { useEffect } from "react";
export default function MainClaim() {
  const address = useAddress();
  const {
    contract
  } = useContract(contractAddress);
  const {
    data: contractMetadata,
    isLoading: isContractMetadataLoading,
  } = useContractMetadata(contract);
  const {
    data: activeClaimPhase,
    isLoading: isActiveClaimPhaseLoading,
  } = useActiveClaimConditionForWallet(contract, address, 0);
  const {
    data: totalClaimed,
    isLoading: isTotalClaimedLoading,
  } = useTotalCirculatingSupply(contract, 0);
  const maxClaimable = parseInt(activeClaimPhase?.maxClaimablePerWallet || "0")

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {!isContractMetadataLoading && (
          <div className={styles.heroSection}>
            <div className={styles.collectionImage}
            >
              <MediaRenderer
              style={{
                maxWidth:"30vw"
              }}
                src={contractMetadata?.image}
              ></MediaRenderer>
            </div>
            <div
            style={{
              padding:"3em"
            }}
            >
              <h1>{contractMetadata?.name}</h1>
              <p>An Alpha Key for Alpha Access of Mystic Market, an upcoming 3d e-commerce and building game.</p>
              {!isActiveClaimPhaseLoading ? (
              <div>
                <p>Price: {ethers.utils.formatUnits(activeClaimPhase?.price!)} {activeClaimPhase?.currencyMetadata.symbol}</p>
                {!isTotalClaimedLoading ? (
                <div>
                  <p>
                    Remaining: {parseInt(activeClaimPhase?.availableSupply || "0")-7}/ 100
                  </p>
                  <Web3Button
              contractAddress={contractAddress}
              action={(contract)=>{
                console.log("clicked")
                contract.erc1155.claim(0,1)
              }}
            >
              Claim Key
            </Web3Button>
                </div>
              ):(
                <div>
                  <p>Loading...</p>
                </div>
              )
            }
              </div>
            ):(
              <div>
                <p>Loading...</p>
              </div>
            )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}