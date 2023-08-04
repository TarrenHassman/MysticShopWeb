import styles from "../styles/Home.module.css"
import { ConnectWallet, ContractMetadata, MediaRenderer, Web3Button, useActiveClaimCondition, useActiveClaimConditionForWallet, useAddress, useConnectedWallet, useContract, useContractMetadata, useNFTs, useOwnedNFTs, useTotalCirculatingSupply, useTotalCount, useUnclaimedNFTSupply } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from '../consts/addresses';
import { ethers } from "ethers";
import { useEffect } from "react";
export default function ClaimCard() {
  const address = useAddress();
  const {
    contract
  } = useContract(CONTRACT_ADDRESS);
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
                src={contractMetadata?.image}
              ></MediaRenderer>
            </div>
            <div>
              <h1>{contractMetadata?.name}</h1>
              <p>An Alpha Key for Alpha Access of Mystic Market, an upcoming 3d e-commerce and building game.</p>
              {!isActiveClaimPhaseLoading ? (
              <div>
                <p>Price: {ethers.utils.formatUnits(activeClaimPhase?.price!)} {activeClaimPhase?.currencyMetadata.symbol}</p>
                {!isTotalClaimedLoading ? (
                <div>
                  <p>
                    Remaining: {activeClaimPhase?.availableSupply}/ {activeClaimPhase?.maxClaimableSupply}
                  </p>
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