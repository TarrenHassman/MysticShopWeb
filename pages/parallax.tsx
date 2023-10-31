import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import MainClaim from "../components/mainClaim";
import ShopArt from "../components/shopArt";
import Link from "next/link";
import { Permanent_Marker, Dancing_Script } from 'next/font/google'
import { ConnectWallet } from "@thirdweb-dev/react";
const boldLogo = Dancing_Script({
  weight: "700",
  subsets: ['latin']
})
const logo = Dancing_Script({
  weight: "400",
  subsets: ['latin']
})
const marker = Permanent_Marker(
  {
    weight: "400",
    subsets: ['latin']
  }
)
export default function ParallaxInfo(
) {
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
            maxWidth:60
          }}
          sticky={{
            start: 0,
            end: 4
          }}
        >
          <Navbar></Navbar>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            maxHeight: 60,
            maxWidth:100,
            float:"right",
          }}
          sticky={{
            start: 0,
            end: 4
          }}
          
        >
                <div className={styles.walletConnect}>
            <ConnectWallet
              theme="dark"
              btnTitle="Connect Wallet"/>
      </div>
      <div>
      <Link className={styles.purple} href="/">
          main page
        </Link>{" "}
      </div>
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
                  fontSize: 142,
                  color: "transparent",
                }
              }
              className={[boldLogo.className, styles.gradientText4].join(" ")}
            >
              My
            </h1>
            <h1
              style={
                {
                  color: "transparent",
                  translate: "0em 1.45em",
                  fontSize: 72
                }
              }
              className={[logo.className, styles.gradientText4].join(" ")}
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
                  translate: "0em -1.8em",
                  fontSize: 142,
                  color: "transparent",
                }
              }
              className={[boldLogo.className, styles.gradientText4].join(" ")}
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
            className={[marker.className, styles.gradientText4].join(" ")}
            style={
              {
                padding: "1em",
                color: "transparent",
                float: "right",
                fontSize: 32
              }
            }
          >
            Built By: Tȟaŋháŋši Tȟáŋkamatȟó
            <br />
          </h1>
          <h1>
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
          speed={6}
          factor={.1}
          offset={3.1}
        >
          <div
          >
            <object
              style={
                {
                  height: "20em",
                  width: "20em",
                  transformOrigin: "top left",
                }
              }
              data="/images/stripe.svg" type="image/svg+xml"></object>
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