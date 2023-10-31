import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, magicLink, metamaskWallet, paperWallet, safeWallet, smartWallet, walletConnect } from "@thirdweb-dev/react";
import '../styles/globals.css';
import './design/neumorphic/undented.module.css'
import '../styles/GlassProfile.module.css'
import { DynamicAccountFactory } from "../consts/addresses";

const activeChain = "mumbai";
const walletConnectInstance = walletConnect();
const metamaskWalletInstance = metamaskWallet();
const coinbaseWalletInstance = coinbaseWallet();
const paperWalletInstance = paperWallet();
const magicWalletInstance = magicLink(
  {
    apiKey: "",
    oauthOptions: {
      providers: [
        "google",
        "facebook",
        "twitter",
        "apple",
      ],
    },
  }
);
export const walletConnectConfig = smartWallet(walletConnectInstance, {
  factoryAddress: DynamicAccountFactory,
  gasless: true,
});
export const metamaskWalletConfig = smartWallet(metamaskWalletInstance, {
  factoryAddress: DynamicAccountFactory,
  gasless: true,
});
export const coinbaseWalletConfig = smartWallet(coinbaseWalletInstance, {
  factoryAddress: DynamicAccountFactory,
  gasless: true,
});
// export const paperWalletConfig = smartWallet(paperWalletInstance, {
//   factoryAddress: DynamicAccountFactory,
//   gasless: true,
// });
export const magicWalletConfig = smartWallet(magicWalletInstance, {
  factoryAddress: DynamicAccountFactory,
  gasless: true,
});




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        walletConnectConfig,
        metamaskWalletConfig,
        coinbaseWalletConfig,
        // paperWalletConfig,
        magicWalletConfig
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
