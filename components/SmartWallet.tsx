import { ethers } from "ethers";
import {
  TW_API_KEY,
  FactoryAddress,
  activeChain,
  ImplementAddress,
} from "../consts/addresses";
import { SmartContract, NFT } from "@thirdweb-dev/sdk";
import { WalletOptions, SmartWallet } from "@thirdweb-dev/wallets";
import type { SmartWalletConfig } from "@thirdweb-dev/wallets";
import type { BaseContract } from "ethers";

export default function newSmartWallet(token: any) {
  //Smart Wallet config object
  const config: WalletOptions<SmartWalletConfig> = {
    chain: activeChain, // the chain where your smart wallet will be or is deployed
    factoryAddress: FactoryAddress, // your own deployed account factory address
    clientId: TW_API_KEY, // obtained from the thirdweb dashboard
    gasless: true, // enable or disable gasless transactions
    factoryInfo: {
      createAccount: async (
        factory: SmartContract<BaseContract>,
        owner: string
      ) => {
        const account = factory.prepare("createAccount", [
          ImplementAddress,
          activeChain.chainId,
          token.contract.address,
          token.tokenId,
          0,
          ethers.utils.toUtf8Bytes("")
        ]);
        return account;
      }, // the factory method to call to create a new account
      getAccountAddress: async (
        factory: SmartContract<BaseContract>,
        owner: string
      ) => {
        return factory.call("account", [
          ImplementAddress,
          activeChain.chainId,
          token.contract.address,
          token.tokenId,
          0
        ]);
      }, // the factory method to call to get the account address
    },
  };
  console.log("config:" + config);
  const walletSmart = new SmartWallet(config);
  console.log(walletSmart);
  return walletSmart;
}