import Link from "next/link";
import styles from "../styles/Home.module.css"
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <Image 
      src="/images/AetherLogo.png"
      alt="Placeholder preview of starter"
      width={100}
      height={100}
      className={styles.logo}>

      </Image>
      <div className={styles.walletConnect}>
            <ConnectWallet
              theme="dark"
              btnTitle="Connect Wallet"/>
      </div>
    </div>
  );
}