import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider, coinbaseWallet, metamaskWallet, paperWallet, safeWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(),safeWallet()]}
      clientId="918a9e24e68b77a9a8f902d1cfacc1e8"
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
