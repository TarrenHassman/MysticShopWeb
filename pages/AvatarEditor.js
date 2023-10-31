import {ConnectWallet, SmartWallet, ThirdwebNftMedia, ThirdwebSDKProvider, smartWallet, useAddress, useConnectedWallet, useContract, useWallet } from '@thirdweb-dev/react'
import styles from '../styles/AvatarEditor.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { ImplementAddress, TW_API_KEY} from '../consts/addresses'
import { Alchemy, Network } from "alchemy-sdk";
import newSmartWallet from '../components/SmartWallet';
import { Signer } from 'ethers';
const config = {
  apiKey: "ar0qC8n3uduayrdvqSEjQY43ob9cP_Y3",
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);

async function getNftsForWallet(userAddress) {
  const nftsForOwner = await alchemy.nft.getNftsForOwner(userAddress);
  return nftsForOwner.ownedNfts
}

async function batchTransfer(contract, tokenId, amount, args) {
  const encoded = [];
  // const args = [];
  for (const arg of args) {
    encoded.push(
      contract.encoder.encodeFunctionData(
        "transfer",
        [arg.toAddress, tokenId, amount],
      ),
    );
  }
  return { receipt: await this.contractWrapper.multiCall(encoded) };
}

function transfer(contract, tokenId, amount, args) {
  const encoded = [];
  // const args = [];
  for (const arg of args) {
    encoded.push(
      contract.encoder.encodeFunctionData(
        "transfer",
        [arg.toAddress, tokenId, amount],
      ),
    );
  }
  return { receipt: contract.multiCall(encoded) };
}

function transferBatch(contract, tokenId, amount, args) {
  const encoded = [];
  // const args = [];
  for (const arg of args) {
    encoded.push(
      contract.encoder.encodeFunctionData(
        "transfer",
        [arg.toAddress, tokenId, amount],
      ),
    );
  }
  return { receipt: contract.multiCall(encoded) };
}

function bindAvatarToken() {
  console.log("bindAvatarToken")
}
function bindWorldToken() {
  console.log("bindWorldToken")
}


function AvatarEditor() {

  const userAddress = useAddress();

  const wallet = useWallet();

  const connectedWallet = useConnectedWallet();

  const { contract } = useContract(ImplementAddress);

  const [userNfts, setUserNfts] = useState(undefined);
  const [hasMore, setHasMore] = useState(true);

  const [selectedToken, setSelectedToken] = useState(undefined);

  const [smartWalletAddress, setSmartWalletAddress] = useState(undefined);
  const [signer, setSigner] = useState();

  const [dataSource1, setDataSource1] = useState(undefined);
  const [hasMore1, setHasMore1] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function createWallet () {
      if(selectedToken && smartWalletAddress == undefined && userAddress && wallet) {
        const smartWallet = newSmartWallet(selectedToken);

        const result = await smartWallet.connect({
          personalWallet: wallet.connector.personalWallet
        })
        
        const signer = await smartWallet.getSigner();

        setSigner(signer);

        const address = await signer.getAddress();

        setSmartWalletAddress(address);

        return smartWallet;
      }else{
        console.log("Smart Wallet not created")
      }
  };

  if (connectedWallet != undefined
    && userNfts == undefined && userAddress != undefined
  ) {
    if (connectedWallet.erc4337provider != undefined) {
      getNftsForWallet(connectedWallet.erc4337provider.config.localSigner._address).then((result) => {
        setUserNfts(result);
      })
    }
  }

  if(signer != undefined && dataSource1 == undefined) {
    getNftsForWallet(signer.address).then((result) => {
      setDataSource1(result);
    })
  }

  const fetchMore = async () => {
    //If pagination key returns result, add to data source
    // If no more result, set hasMore to false

  }
  const fetchMore1 = () => {
    setTimeout(() => {
      setDataSource1(dataSource1.concat(Array.from({ length: 20 })));
    }, 500)
  }
  let a = modalIsOpen ? styles.open : styles.close;
  return (

    <div>

      <div className={styles.avatarEditor}>
        {/* Token Binder */}
        <div className={styles.tokenBoundAccount}>
          <div className={styles.token}>
            <button className={styles.tokenButton} onClick={() => {
              setModalIsOpen(!modalIsOpen);
              // Create Modal of Main wallet tokens
            }}>
              <img
                src='Rune.png'
              >
              </img>
            </button>
            <div className={styles.depth1} />
            <div className={styles.depth2} />
            <div className={styles.depth4}>
              <div className={styles.tokenWrapper}>
                <ThirdwebNftMedia metadata={selectedToken?.rawMetadata ?? {}}
                  height='130%'
                  width='130%'
                />
              </div>
            </div>

          </div>
          <button className={styles.createAccount}
            onClick={() => {
              console.log("create account")
              createWallet();
            }}
            >
            <img src="avatar.svg" ></img>
          </button>
          <button className={styles.createWorld}>
            <img src="world.svg" ></img>
          </button>
          {/* Wallet of the Token Bound Account */}
          <ThirdwebSDKProvider signer={signer} apiKey={TW_API_KEY}>
            <ConnectWallet></ConnectWallet>
          <div className={styles.secondaryWallet}>
            <InfiniteScroll dataLength={dataSource1?.length ?? 0} next={fetchMore1} hasMore={hasMore1} height={"100%"} >
              <div
                className={styles.infiniteScroll}> {
                  dataSource1 != undefined ?
                  dataSource1.map((item, index) => {
                  <div className={styles.nftCard}>Index : {index}</div>
                }):<div></div>}</div>
            </InfiniteScroll>
          </div>
          </ThirdwebSDKProvider>
        </div>


        {/* Main Wallet */}
        {/* TODO: Sort into collection tabs */}

        <div
          className={styles.tokenSelector + " " + a}
        >
          <div className={styles.mainWallet}>
            <InfiniteScroll dataLength={userNfts == undefined ? 0 : userNfts.length} next={fetchMore} hasMore={hasMore} height={"50vh"}>
              <div className={styles.infiniteScroll}> {
                //Sort by collection
                userNfts != undefined ?
                  userNfts.map((item, index) => {
                    return <button key={index} className={styles.nftCard} onClick={() => {
                      setSelectedToken(item)
                      console.log(item);
                      setModalIsOpen(!modalIsOpen)
                    }}>
                      <ThirdwebNftMedia metadata={item.rawMetadata ?? {}}
                        height='100%'
                        width='100%'
                      />
                    </button>
                  }) : <p>Loading... </p>
              }</div>
            </InfiniteScroll>
          </div>
        </div>


        {/* Avatar Renderer */}
        {/* <div className={styles.avatar}>
        </div> */}

        {/* Avatar Creation Layer */}
        {/* <div className={styles.avatarLayer}>
          <InfiniteScroll width={"75vw"} height={"14vh"} dataLength={dataSource2.length} >
            <div className={styles.avatarRow}> {dataSource2.map((item, index) => {
              return <div key={index} className={styles.nftCard}>Index : {index}</div>
            })}</div>
          </InfiniteScroll>
        </div> */}


      </div>
    </div>
  );
}
export default AvatarEditor;