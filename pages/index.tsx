import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  return (
    <Parallax pages={4}>
      <ParallaxLayer
      factor={3}
      style={{
        backgroundImage: "url('/images/ConceptArtq.jpg')",
        backgroundSize: '100% 100%'
      }}
      >
      </ParallaxLayer>
      <ParallaxLayer
      speed={.5}
      offset={1}
            style={{
              backgroundImage: "url('/images/Aether1.png')",
              backgroundSize: '100% 100%'
            }}
      >
        
      </ParallaxLayer>
    </Parallax>
  );
};
      {/* <Image className={styles.frontZ}
      src="/images/Key.png"
      alt="Placeholder preview of starter"
      width={100}
      height={100}
      /> */}

      {/* <Image className={styles.backZ}
        src="/images/ConceptArtq.jpg"
        alt="Placeholder preview of starter"
        fill
        quality={100}
      /> */}

export default Home;
