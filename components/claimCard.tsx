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
  } = useActiveClaimConditionForWallet(contract, address);
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
          </div>
        )}
      </div>
    </div>
  )
}