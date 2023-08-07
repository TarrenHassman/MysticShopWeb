import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import MainClaim from "../components/mainClaim";
import { useParallax } from "react-scroll-parallax";
import ShopArt from "../components/shopArt";
import FutureClaimCard from "../components/raffleClaim";
import { Permanent_Marker, Dancing_Script } from 'next/font/google'
const boldLogo = Dancing_Script({
  weight:"700",
  subsets:['latin']
})
const logo = Dancing_Script({
  weight:"700",
  subsets:['latin']
})
const marker = Permanent_Marker(
  {
    weight: "400",
    subsets: ['latin']
  }
)
export default function ParallaxInfo(
) {
  //Scale based on quadratic function between screen sizes
  return (
    <div>

      <Parallax pages={5}>
        <ParallaxLayer
          factor={2}
          offset={3}
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: '100% 100%'
          }}
        >

        </ParallaxLayer>
        <ParallaxLayer
          style={{
            maxHeight: 60,
          }}
          sticky={{
            start: 0,
            end: 4
          }}
        >
          <Navbar></Navbar>
        </ParallaxLayer>
        <ParallaxLayer
          factor={5}
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: '100% 100%'
          }}
        >

        </ParallaxLayer>
        <ParallaxLayer
          speed={.5}
          factor={3}
          offset={.8}
          style={{
            backgroundImage: "url('/images/Aether1.png')",
            backgroundSize: '100% 100%'
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={.05}
          factor={.25}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
            style={
              {
                textShadow:"5px 5px 15px purple, 2px 2px 5px #B026FF",
                fontSize:178,
                // translate:".5em",
                color:"#daa520",
              }
            }
            className={boldLogo.className}
            >
              My
              </h1>
              <h1
               style={
                {
                  textShadow:"5px 5px 10px purple, 2px 2px 5px #B026FF",
                  color:"#daa520",
                  translate:"0.02em 2.15em",
                  fontSize:72
                }
              }
              className={logo.className}
              >stic</h1>
          </div>
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
          >
          <h1
            style={
              {
                textShadow:"5px 5px 10px purple, 2px 2px 5px #B026FF",
                translate:"0em -1.8em",
                fontSize:178,
                color:"#daa520",
              }
            }
            className={boldLogo.className}
            >
              Market
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={4}
          factor={.1}
          offset={3}
        >
          <h1
className={marker.className}
            style={{
              float: "right",
            }}
          >
            Built By: Tȟaŋháŋši Tȟáŋkamatȟó
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={2}
          factor={.1}
          offset={3}
        >
          <h1>
            Powered By:
          </h1>
          <div
          >
            <img
              style={{
                transformOrigin: "top left",
                scale: "10%"
              }}
              src={"/images/thirdweblogo.png"}
            ></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={.5}
          offset={1}
        >
          <ShopArt />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={.5}
          offset={2}
        >
        </ParallaxLayer>
        <ParallaxLayer
          speed={3}
          factor={1}
          offset={1.4}
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
          offset={2}
        >
          <MainClaim />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}