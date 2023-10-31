import styles from "../styles/Home.module.css"
import { ConnectWallet, ContractMetadata, MediaRenderer, Web3Button, useActiveClaimCondition, useActiveClaimConditionForWallet, useAddress, useConnectedWallet, useContract, useContractMetadata, useNFTs, useOwnedNFTs, useTotalCirculatingSupply, useTotalCount, useUnclaimedNFTSupply } from "@thirdweb-dev/react";
import {contractAddress  } from '../../mysticmarket/const/yourDetails';
import { ethers } from "ethers";
import { useEffect } from "react";
export default function FutureClaimCard() {
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
              <img src="/images/AetherLogo.png" alt="" height={50} width={50}/>
            </div>
            <div>
              <h1>?????</h1>
              <p>An Alpha Key for Alpha Access of Mystic Market, an upcoming 3d e-commerce and building game.</p>
              {!isActiveClaimPhaseLoading ? (
              <div>
                <p>?????</p>
                {!isTotalClaimedLoading ? (
                <div>
                  <p>
                  ?????
                  </p>
                  <Web3Button
              contractAddress={contractAddress}
              action={(contract)=>{
                console.log("clicked")
                contract.erc1155.claim(0,1)
              }}
            >
              ?????
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