import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <Parallax pages={10}>
      <ParallaxLayer
      sticky={{
        start:0,
        end: 10
      }}
      >
      <Image className={styles.frontZ}
      style={{
        float:"right",
        transform:"translate(-3vw, 85vh)"
      }}
      src="/images/Key.png"
      alt="Placeholder preview of starter"
      width={100}
      height={100}
      />
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
      factor={.3}
      offset={2}
            style={{
              backgroundImage: "url('/images/Aether1.png')",
              backgroundSize: '50% 100%'
            }}
      >
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
    </Parallax>
  );
};


export default Home;
