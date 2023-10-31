import styles from "../styles/Home.module.css"
import { ConnectWallet, useAddress, useConnectedWallet, useSDK, useWallet } from "@thirdweb-dev/react";
import Image from "next/image";
export default function Navbar() {
  const address = useAddress();
  return (
    <div>
      <img
      src="/images/AetherLogo.png"
      width={100}
      height={100}
      className={styles.logo}>
      </img>
    </div>
  );
}