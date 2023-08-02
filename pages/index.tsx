import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/navbar";
import ClaimCard from "../components/claimCard";

const Home: NextPage = () => {
  return (
    <Parallax pages={10}>
      <ParallaxLayer
      sticky={{
        start:0,
        end: 10
      }}
      >
      <Navbar></Navbar>
      </ParallaxLayer>
      <ParallaxLayer
      factor={10}
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: '100% 100%'
      }}
      >
      </ParallaxLayer>
      <ParallaxLayer
      speed={.5}
      factor={3}
      offset={1}
            style={{
              backgroundImage: "url('/images/Aether1.png')",
              backgroundSize: '100% 100%'
            }}
      >
      </ParallaxLayer>
      <ParallaxLayer
      speed={1}
      factor={.5}
      offset={2}
      >
      <Image className={styles.frontZ}
      style={{
        float:"right",
        transform: "translate(0px, 50vh)"
      }}
      src="/images/EtheralShop.png"
      alt="Placeholder preview of starter"
      width={500}
      height={500}
      />
        <ClaimCard/>
        <p>
          Information about my new game
        </p>
        <p
        style={{
          float:"right",
          transform: "translate(0px, 50vh)"
        }}
        >
          Information about my new game
        </p>
      </ParallaxLayer>
      <ParallaxLayer
      speed={.2}
      factor={5}
      offset={7}
            style={{
              backgroundImage: "url('/images/Aether1.png')",
              backgroundSize: '100% 100%'
            }}
      >
      </ParallaxLayer>
      <ParallaxLayer
      speed={3}
      factor={1}
      offset={2.4}
      >
              <Image className={styles.frontZ}
      style={{
        float:"right",
        transform: "translate(0px, 50vh)"
      }}
      src="/images/Cloud.png"
      alt="Placeholder preview of starter"
      width={800}
      height={600}
      />
      </ParallaxLayer>
    </Parallax>
  );
};

// "Bit Coin" (https://skfb.ly/6QUTG) by Márcio N. is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).


export default Home;
