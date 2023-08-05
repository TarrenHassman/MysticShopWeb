import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import ClaimCard from "../components/claimCard";
import { useParallax } from "react-scroll-parallax";
import ShopArt from "../components/shopArt";
export default function ParallaxInfo(
) {
  return (
    <div>
      <Parallax pages={10}>
        <ParallaxLayer
          sticky={{
            start: 0,
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
<ShopArt/>
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
        speed={1}
        factor={.5}
        offset={3}
        >
        <ClaimCard />
        </ParallaxLayer>
        <ParallaxLayer
          speed={3}
          factor={1}
          offset={2.4}
        >
          <Image
            style={{
              float: "right",
              transform: "translate(0px, 50vh)"
            }}
            src="/images/Cloud.png"
            alt="Placeholder preview of starter"
            width={800}
            height={600}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}