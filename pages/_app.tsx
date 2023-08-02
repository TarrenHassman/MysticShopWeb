import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider, coinbaseWallet, metamaskWallet, paperWallet, safeWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import { ethers } from "ethers";
import { log } from "console";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli"
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
function MyApp({ Component, pageProps }: AppProps) {
  log(clientId)
  return (
    <ThirdwebProvider
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(),safeWallet()]}
      clientId="d701b43f9b5960e8126324e5e030dbf6"
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
