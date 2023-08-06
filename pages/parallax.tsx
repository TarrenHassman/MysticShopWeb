import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import ClaimCard from "../components/claimCard";
import { useParallax } from "react-scroll-parallax";
import ShopArt from "../components/shopArt";
export default function ParallaxInfo(
) {
  //Scale based on quadratic function between screen sizes
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
        style={{
          maxHeight:60,
        }}
        sticky={{
start:0,
end:4
        }}
        >
          <Navbar></Navbar>
        </ParallaxLayer>
        <ParallaxLayer
          factor={4}
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
          factor={.25}
        >
          <Image
          src={"/images/M.png"}
          style={{
        }}
        height={500}
        width={200}
        alt=""
          />
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
        <ParallaxLayer
        offset={3}
        >
                  <ClaimCard />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}