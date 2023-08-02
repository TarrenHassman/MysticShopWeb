import styles from "../styles/Home.module.css"
import { ConnectWallet, ContractMetadata, MediaRenderer, SmartContract, Web3Button, useActiveClaimCondition, useActiveClaimConditionForWallet, useAddress, useContract, useContractMetadata, useTotalCirculatingSupply, useTotalCount } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from '../consts/addresses';
import { ethers } from "ethers";
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
  } = useActiveClaimCondition(contract);
  const {
    data: totalSupply,
    isLoading: isTotalSupplyLoading,
  } = useTotalCount(contract);
  const {
    data: totalClaimed,
    isLoading: isTotalClaimedLoading,
  } = useTotalCirculatingSupply(contract);
  const maxClaimable = parseInt(activeClaimPhase?.maxClaimablePerWallet || "0")

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {!isContractMetadataLoading && (
          <div className={styles.heroSection}>
            <div className={styles.collectionImage}>
              <MediaRenderer
                src={contractMetadata?.image}
              ></MediaRenderer>
            </div>
            <div>
              <h1>{contractMetadata?.name}</h1>
              <p>{contractMetadata?.description}</p>
            </div>
            {!isActiveClaimPhaseLoading && (
              <div>
                {/* <p>Claim Phase: {activeClaimPhase?.metadata?.name}</p> */}
                <p>Price: {ethers.utils.formatUnits(activeClaimPhase?.price!)}</p>
              </div>
            )}
            {!isTotalClaimedLoading && (
                <div>
                  <p>
                    Claimed: {totalClaimed?.toNumber()}
                  </p>
                </div>
              )
            }
            
          </div>
        )}
      </div>
    </div>
  )
}